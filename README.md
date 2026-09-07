# RF Impact - Site web & PWA

Site vitrine **moderne, responsive et trilingue (FR / NL / EN)** pour **RF Impact**,
atelier de débosselage sans peinture (DSP) à Wavre (Bierges). Installable comme
application mobile (PWA), fonctionne hors-ligne, sans framework ni build.

## 🚀 Lancer en local

```bash
cd "RF Impact"
python3 -m http.server 8000
# puis ouvrir http://127.0.0.1:8000
```

Un simple double-clic sur `index.html` fonctionne aussi, mais le mode **PWA /
hors-ligne** (service worker) nécessite d'être servi en `http(s)://`.

## 📁 Structure

| Fichier | Rôle |
|---|---|
| `index.html` | Page unique (hero, services, process, galerie, avantages, histoire & valeurs, équipe, avis, contact, FAQ, footer) |
| `styles.css` | Design system complet, responsive, thèmes clair **et** sombre automatiques |
| `app.js` | Traductions FR/NL/EN, menu mobile, galerie avant/après, formulaire, animations, PWA |
| `manifest.webmanifest` | Métadonnées de l'app installable |
| `sw.js` | Service worker (cache hors-ligne du « app shell ») |
| `assets/` | Logo, icône PWA et visuels de la galerie (SVG) |

## ✅ Fonctionnalités

- **Trilingue** FR / NL / EN (bouton en-tête, préférence mémorisée)
- **PWA installable** + fonctionnement hors-ligne
- **Responsive** mobile / tablette / desktop + barre d'action mobile (Appeler / Devis / Itinéraire)
- **Thème clair & sombre** automatique (selon l'appareil)
- **Galerie avant/après** avec curseur interactif
- **Section équipe** (à compléter avec noms et photos réels)
- **Formulaire de devis** (ouvre l'e-mail pré-rempli) avec pièces jointes photos
- **Navigation GPS** vers l'atelier en 1 clic (Google Maps, Waze, Apple Plans) + carte intégrée
- **Carte Google** de l'atelier + FAQ dépliable + avis Google
- **SEO local** : balises meta, Open Graph et données structurées (AutoBodyShop, note 4,9/5)

## 🔧 À personnaliser avant mise en ligne

1. **Photos réelles** - remplacer les visuels de démonstration dans `assets/gallery/`
   (fichiers `.svg`) par vos vraies photos avant/après (`.jpg`/`.webp`), puis mettre
   à jour les attributs `data-before` / `data-after` dans `index.html` (section galerie)
   et la liste dans `sw.js`.
2. **E-mail de réception** - le formulaire envoie vers `RF@hotmail.be`
   (relevé sur le panneau de l'atelier ; ajustable dans `app.js`, fonction `initForm`).
   Pour recevoir les demandes **avec photos automatiquement**, brancher un service de
   formulaire (Formspree, Web3Forms…) à la place du `mailto`.
3. **Coordonnées & horaires** - téléphone `0477 47 87 14`, adresse `Rue de Genval 30,
   1301 Wavre`, TVA `BE 0474.863.795`. **Horaires = fiche Google : Lun-Ven 09:00-18:30,
   Sam-Dim fermé** - modifiables via l'objet `SCHEDULE` dans `app.js`. Le statut se
   calcule en temps réel : Ouvert / Ferme bientôt / Fermé / Ouvre bientôt (seuils
   `CLOSING_SOON` et `OPENING_SOON` dans `app.js`).
7. **Photo de Ronald** - déposez le portrait sous `assets/team/ronald.jpg` (format
   carré idéalement). Tant que le fichier est absent, un monogramme « RF » s'affiche à
   la place. (Idem pour une image de partage sociale : `assets/og.svg` existe ; pour un
   rendu optimal sur Facebook/LinkedIn, exportez une version **PNG 1200×630** en
   `assets/og.png` et remettez les balises `og:image` / `twitter:image` sur `og.png`.)
8. **SEO** - déjà en place : données structurées JSON-LD (AutoBodyShop + avis + services
   + zone desservie), balises Open Graph / Twitter, geo-tags, `robots.txt`, `sitemap.xml`.
   Pensez à remplacer `rfimpact.be` par le domaine final si différent.
4. **Avis** - 6 vrais avis Google (noms + dates réels, via l'annuaire Bolid) sont
   affichés ; les textes sont aussi traduits en NL/EN pour la lisibilité (vous pouvez
   choisir de garder les citations en français d'origine).
6. **Équipe & Histoire** - la section « Notre histoire & nos valeurs » s'appuie sur des
   faits confirmés ; les 2 membres d'équipe « génériques » (photo + nom) sont à compléter.
5. **Icône** - `assets/icon.svg` sert d'icône PWA. Pour une compatibilité maximale
   (anciens Android), générer aussi des PNG 192 et 512 px et les ajouter au manifest.

## 🌐 Déploiement

Site 100 % statique → hébergeable gratuitement sur **Netlify**, **Vercel**,
**Cloudflare Pages** ou **GitHub Pages**. Glisser-déposer le dossier suffit sur
Netlify. Prévoir un certificat **HTTPS** (inclus chez ces hébergeurs) pour la PWA.

## ℹ️ Sources des informations

Données rassemblées depuis le web : fiche Google Business / annuaire Bolid
(note 4,9/5, 93 avis), Facebook, données d'entreprise (Pappers/BCE), et pages
publiques de RF Impact. Certaines valeurs (ex. e-mail) sont des hypothèses à confirmer.

---
*Site de démonstration créé pour RF Impact - contenus et visuels à valider par l'entreprise.*
