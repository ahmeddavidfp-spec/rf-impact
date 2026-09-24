/**
 * Interrupteur de maintenance, RF Impact.
 *
 * Lit la cle « rfimpact » de l'espace KV commun du parc avant de laisser
 * passer la requete. "off" sert la page de coupure Scribeo, "tech" la page
 * hors-ligne du site, tout le reste laisse le site repondre normalement.
 *
 * L'etat s'ecrit depuis le tableau de bord ou la conversation privee ; ici on
 * ne fait que le lire, ce qui coute une milliseconde.
 */

const MAINT_PROJET = "rfimpact";
const MAINT_OPS = "https://scribeo-ops.mertens-david-1972.workers.dev/maintenance";

// Ce qui continue de passer pendant une coupure : le service worker, sinon les
// visiteurs qui ont installe l'app gardent une version cassee en cache et la
// coupure leur survit ; robots.txt, pour ne pas faire croire aux moteurs que
// le site a disparu.
const MAINT_PASSE = ["/sw.js", "/robots.txt"];

// Repli si le poste de commande ne repond pas : une coupure doit s'afficher
// meme quand ce qui la sert est injoignable.
const MAINT_REPLI = '<!doctype html><meta charset="utf-8"><title>Site temporairement hors ligne</title>'
  + '<div style="font:16px/1.6 system-ui;max-width:32rem;margin:18vh auto;padding:0 20px;text-align:center">'
  + '<h1 style="font-size:1.6rem">Ce site est momentanement suspendu.</h1>'
  + '<p>Prenez contact avec David Mertens au <a href="https://wa.me/32493507475">0493 50 74 75</a>, WhatsApp ou Telegram.</p></div>';

export async function onRequest(context) {
  const { request, env, next } = context;

  if (!env || !env.MAINT) return next();
  let etat = null;
  try { etat = await env.MAINT.get(MAINT_PROJET); } catch (e) { return next(); }
  if (etat !== "off" && etat !== "tech") return next();

  const chemin = new URL(request.url).pathname;
  if (MAINT_PASSE.includes(chemin)) return next();

  let html = null;
  if (etat === "tech" && env.ASSETS) {
    try {
      const page = await env.ASSETS.fetch(new URL("/hors-ligne.html", request.url));
      if (page.ok) html = await page.text();
    } catch (e) {}
  }
  if (html === null) {
    try {
      const r = await fetch(MAINT_OPS, { cf: { cacheTtl: 300 } });
      html = r.ok ? await r.text() : MAINT_REPLI;
    } catch (e) { html = MAINT_REPLI; }
  }

  // 503 et jamais 200 : un 200 ferait indexer la page de coupure a la place du site.
  return new Response(html, {
    status: 503,
    headers: {
      "content-type": "text/html; charset=utf-8",
      "retry-after": "3600",
      "cache-control": "no-store",
      "x-robots-tag": "noindex",
    },
  });
}
