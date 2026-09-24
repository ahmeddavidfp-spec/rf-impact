/* ============================================================
   RF Impact - App logic : i18n, nav, gallery, form, PWA
   ============================================================ */
(function () {
  'use strict';

  /* ---------------- Translations ---------------- */
  const I18N = {
    fr: {
      'a11y.skip': 'Aller au contenu',
      'nav.services': 'Services', 'nav.gallery': 'Galerie', 'nav.story': 'Histoire', 'nav.team': 'Équipe',
      'nav.reviews': 'Avis', 'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.cta': 'Devis gratuit',
      'hero.eyebrow': 'Wavre · Bierges · Brabant wallon',
      'hero.title': 'Votre carrosserie retrouve sa forme, sans repeindre.',
      'hero.lead': "Le seul atelier de la région de Wavre entièrement dédié au débosselage sans peinture. Bosses, grêle, coups de portière : nous effaçons les impacts en préservant votre peinture d'origine.",
      'hero.cta1': 'Demander un devis gratuit', 'hero.cta2': '📞 0477 47 87 14',
      'hero.reviews': '93 avis Google', 'hero.usp1': '✔ Garantie à vie',
      'hero.usp2': '✔ Jusqu’à ~50 % moins cher', 'hero.usp3': '✔ +30 ans d’expérience',
      'hero.cardLabel': 'Débosselage sans peinture',
      'stats.years': 'ans d’expertise', 'stats.reviews': 'avis 4,9/5',
      'stats.since': 'atelier DSP à Bierges', 'stats.guarantee': 'garantie à vie',
      'services.eyebrow': 'Nos services', 'services.title': 'Une seule spécialité, maîtrisée à la perfection',
      'services.intro': "Le débosselage sans peinture (DSP) rend au métal sa forme d'origine sans masticage ni peinture. Économique, écologique et sans altérer la valeur de votre véhicule.",
      'services.s1.title': 'Débosselage sans peinture', 'services.s1.text': 'Coups de portière, chocs de caddie, bosses du quotidien : effacés par massage du métal, sans toucher à la peinture.',
      'services.s2.title': 'Réparation grêle', 'services.s2.text': "Toit, capot et ailes constellés par la grêle remis à neuf, pour une fraction du coût d'une carrosserie classique.",
      'services.s3.title': 'Polissage & lustrage', 'services.s3.text': 'Correction des griffes et micro-rayures : votre carrosserie retrouve brillance et profondeur.',
      'services.s4.title': 'Smart Repair & retour leasing', 'services.s4.text': "Remise en état rapide et économique avant restitution d'un leasing ou revente de votre véhicule.",
      'services.s5.title': 'Formations DSP', 'services.s5.text': 'Formations au débosselage sans peinture pour professionnels et particuliers, transmises par un expert.',
      'services.s6.title': 'Réparation avant peinture', 'services.s6.text': "Redressage DSP en amont d'une peinture pour réduire les coûts de remplacement de pièces.",
      'process.eyebrow': 'Comment ça marche', 'process.title': 'Simple, rapide, transparent',
      'process.p1.title': 'Envoyez vos photos', 'process.p1.text': 'Prenez le dégât en photo et envoyez-le via notre formulaire pour une première estimation.',
      'process.p2.title': 'Devis gratuit', 'process.p2.text': 'Nous vous recontactons rapidement avec un prix clair, sans surprise.',
      'process.p3.title': "Réparation à l'atelier", 'process.p3.text': 'Le métal est massé et redressé avec précision, souvent en une journée.',
      'process.p4.title': 'Garantie à vie', 'process.p4.text': 'Vous repartez avec un véhicule comme neuf et une garantie à vie sur la réparation.',
      'gallery.eyebrow': 'Galerie', 'gallery.title': 'Avant / Après',
      'gallery.intro': 'Glissez le curseur pour révéler le résultat. Exemples représentatifs de nos réparations.',
      'gallery.g1': 'Coup de portière', 'gallery.g2': 'Dégâts de grêle', 'gallery.g3': "Choc sur l'aile",
      'gallery.note': '📸 Visuels de démonstration, à remplacer par vos vraies photos de réparations.',
      'adv.eyebrow': 'Pourquoi RF Impact', 'adv.title': 'La méthode qui préserve votre voiture et votre budget',
      'adv.intro': "Contrairement à une carrosserie traditionnelle, le DSP ne nécessite ni mastic, ni peinture, ni remplacement de pièce. Le résultat est invisible et la valeur de votre véhicule intacte.",
      'adv.cta': 'Estimer ma réparation',
      'adv.a1.title': "Jusqu'à ~50 % d'économie", 'adv.a1.text': 'Pour un résultat identique à une réparation classique.',
      'adv.a2.title': "Peinture d'origine préservée", 'adv.a2.text': 'Aucune retouche : la teinte constructeur reste intacte.',
      'adv.a3.title': 'Écologique', 'adv.a3.text': 'Pas de solvants ni de produits de peinture rejetés.',
      'adv.a4.title': 'Rapide', 'adv.a4.text': 'Beaucoup d’interventions réalisées en une seule journée.',
      'adv.a5.title': 'Garantie à vie', 'adv.a5.text': 'Toutes nos réparations sont garanties à vie.',
      'adv.a6.title': 'Expertise reconnue', 'adv.a6.text': '+30 ans de métier, une technique rare et exceptionnelle en Belgique.',
      'form.eyebrow': 'Formations DSP', 'form.title': 'Apprenez le débosselage sans peinture',
      'form.intro': 'RF Impact transmet son savoir-faire à travers des formations pour professionnels de la carrosserie comme pour particuliers passionnés.',
      'form.f1.title': 'Initiation particuliers', 'form.f1.text': 'Découvrez les bases du DSP et repartez capable de traiter de petites bosses.', 'form.f1.tag': 'Sur mesure',
      'form.f2.title': 'Perfectionnement pro', 'form.f2.text': 'Techniques avancées pour carrossiers souhaitant intégrer le DSP à leur activité.', 'form.f2.tag': 'Professionnels',
      'form.f3.title': 'Accompagnement', 'form.f3.text': "Un suivi personnalisé et des conseils sur l'outillage pour bien démarrer.", 'form.f3.tag': 'Personnalisé',
      'form.cta': 'Demander le programme & les tarifs',
      'rev.eyebrow': 'Ils nous font confiance', 'rev.title': '4,9/5 sur Google, 93 avis', 'rev.sub': '92 % de 5 étoiles',
      'rev.r1': "« L'atelier allie un accueil chaleureux, un rendu impeccable et des prix plus qu'abordables. Super expérience, je recommande ! »",
      'rev.r2': '« De vrais professionnels passionnés par leur métier. Les résultats étaient bluffants ! »',
      'rev.r3': "« Résultat absolument parfait, et pourtant le blanc nacré de la Kia n'était pas évident ! Un tout grand merci à l'équipe. À recommander sans réserve. »",
      'rev.r4': "« Travail ultra professionnel et accueil super chaleureux, le résultat est exceptionnel 👍 N'hésitez pas à les contacter ! »",
      'rev.r5': '« Je recommande à 100 % ! Équipe sympathique et efficace, travail parfait et effectué rapidement ! »',
      'rev.r6': '« Superbe travail pour les coups localisés que nous avions. Top prix et très sympa. Que demander de plus ! »',
      'rev.cta': 'Lire tous les avis Google',
      'story.eyebrow': 'Notre histoire', 'story.title': 'Une passion du détail, depuis plus de 30 ans',
      'story.intro': "Derrière RF Impact, il y a un homme, Ronald Frappart, et une conviction : redonner à chaque véhicule sa forme d'origine, sans le dénaturer. Une exigence devenue, au fil des années, une référence dans le Brabant wallon.",
      'story.t1.title': 'Un savoir-faire forgé sur le terrain',
      'story.t1.text': 'Plus de trente ans passés à réparer, redresser et sublimer des carrosseries. Ronald Frappart affine une technique rare et exigeante : le débosselage sans peinture.',
      'story.t2.title': "Naissance de l'atelier à Bierges",
      'story.t2.text': "RF Impact ouvre ses portes à Wavre : le seul atelier de la région entièrement dédié au DSP, une méthode encore rare et exceptionnelle en Belgique.",
      'story.t3.year': 'Auj.', 'story.t3.title': 'Une référence de confiance',
      'story.t3.text': "Des milliers d'impacts effacés, une note de 4,9/5 sur Google et une garantie à vie sur chaque réparation. La réputation se construit un client à la fois.",
      'story.valuesTitle': 'Nos valeurs',
      'story.v1.title': 'La passion du métier', 'story.v1.text': '« Votre voiture, notre passion. » Chaque réparation est traitée avec le soin que l\'on porterait à la sienne.',
      'story.v2.title': 'Un accueil chaleureux', 'story.v2.text': "La proximité et l'écoute que nos clients citent dans presque tous leurs avis : ici, on prend le temps de vous expliquer.",
      'story.v3.title': 'La qualité sans compromis', 'story.v3.text': "Un rendu impeccable, invisible, ou rien. Aucun compromis n'est fait sur votre satisfaction.",
      'story.v4.title': 'Le respect & la durabilité', 'story.v4.text': "Une méthode écologique qui préserve votre peinture d'origine, à un prix juste et transparent, garantie à vie.",
      'contact.eyebrow': 'Contact & devis', 'contact.title': 'Demandez votre devis gratuit',
      'contact.intro': 'Décrivez votre besoin et joignez des photos : nous revenons vers vous rapidement avec une estimation.',
      'contact.name': 'Nom complet', 'contact.phone': 'Téléphone', 'contact.email': 'E-mail',
      'contact.service': 'Type de demande', 'contact.opt1': 'Débosselage sans peinture', 'contact.opt2': 'Réparation grêle',
      'contact.opt3': 'Polissage', 'contact.opt4': 'Smart Repair / retour leasing', 'contact.opt5': 'Formation DSP', 'contact.opt6': 'Autre',
      'contact.message': 'Décrivez le dégât', 'contact.photos': 'Photos (facultatif)',
      'contact.photosNote': "Astuce : joignez les photos directement dans l'e-mail qui s'ouvrira.",
      'contact.consent': "J'accepte d'être recontacté au sujet de ma demande.",
      'contact.submit': 'Envoyer ma demande', 'contact.coords': 'Coordonnées', 'contact.vat': 'TVA',
      'contact.hours': 'Horaires', 'contact.weekdays': 'Lun-Ven', 'contact.weekend': 'Sam-Dim', 'contact.closed': 'Fermé',
      'day.mon': 'Lundi', 'day.tue': 'Mardi', 'day.wed': 'Mercredi', 'day.thu': 'Jeudi', 'day.fri': 'Vendredi', 'day.sat': 'Samedi', 'day.sun': 'Dimanche',
      'hours.closed': 'Fermé',
      'hours.openUntil': "Ouvert, ferme à {t}", 'hours.closingSoon': 'Ferme bientôt, à {t}',
      'hours.openingSoon': 'Ouvre bientôt, à {t}', 'hours.closedToday': 'Fermé, ouvre à {t}', 'hours.closedDay': 'Fermé, ouvre {d} à {t}',
      'contact.gps': 'Itinéraire GPS', 'contact.gpsIntro': "Lancez la navigation vers l'atelier en un clic :", 'contact.applemaps': 'Plans',
      'team.eyebrow': 'Notre équipe', 'team.title': 'Des passionnés à votre service',
      'team.intro': 'Une petite équipe soudée qui met tout son savoir-faire au service de votre véhicule, avec le sourire et la précision qui font notre réputation.',
      'team.m1.name': 'Ronald Frappart', 'team.m1.role': 'Fondateur & expert en débosselage sans peinture',
      'team.m1.bio': "Plus de 30 ans d'expérience. À l'origine de l'atelier DSP de Bierges, il maîtrise le redressage des impacts les plus délicats.",
      'team.m2.name': 'Technicien DSP', 'team.m2.role': 'Débosselage & réparation grêle',
      'team.m2.bio': "Spécialiste du massage du métal, il redonne à chaque carrosserie sa forme d'origine, impact après impact.",
      'team.m3.name': 'Finitions', 'team.m3.role': 'Polissage & lustrage',
      'team.m3.bio': 'Le souci du détail : correction des griffes, brillance et rendu impeccable avant la restitution.',
      'team.note': "👥 Noms et photos de l'équipe à compléter par RF Impact.",
      'faq.eyebrow': 'FAQ', 'faq.title': 'Questions fréquentes',
      'faq.q1': 'Qu’est-ce que le débosselage sans peinture (DSP) ?',
      'faq.a1': "C'est une technique qui consiste à masser le métal par l'arrière pour lui rendre sa forme d'origine, sans mastic ni peinture. La peinture d'usine reste intacte.",
      'faq.q2': 'Toutes les bosses sont-elles réparables ?',
      'faq.a2': 'La plupart des bosses sans peinture éclatée le sont. Pour la grêle, nous atteignons souvent ~80 % d’efficacité selon l’ampleur. Envoyez-nous une photo pour un avis précis.',
      'faq.q3': 'Combien ça coûte ?',
      'faq.a3': 'Le DSP revient généralement jusqu’à ~50 % moins cher qu’une réparation traditionnelle. Le prix dépend du nombre et de la taille des impacts, le devis est gratuit.',
      'faq.q4': 'Combien de temps faut-il ?',
      'faq.a4': 'De nombreuses réparations sont réalisées en une seule journée. Nous vous communiquons le délai précis lors du devis.',
      'faq.q5': 'Offrez-vous une garantie ?', 'faq.a5': 'Oui : toutes nos réparations sont garanties à vie.',
      'faq.q6': 'Proposez-vous des formations ?', 'faq.a6': 'Oui, pour les professionnels comme pour les particuliers. Contactez-nous pour le programme et les tarifs.',
      'footer.tagline': 'Atelier de débosselage sans peinture & polissage à Wavre.',
      'footer.nav': 'Navigation', 'footer.contact': 'Contact', 'footer.hours': 'Horaires', 'footer.credit': 'Site créé par',
      'mobile.call': 'Appeler', 'mobile.quote': 'Devis', 'mobile.route': 'Itinéraire', 'pwa.install': "Installer l'app",
      'form.sent': '✅ Merci ! Votre client e-mail va s’ouvrir pour finaliser l’envoi.',
      'form.error': '⚠️ Merci de compléter les champs obligatoires.'
    },

    nl: {
      'a11y.skip': 'Ga naar inhoud',
      'nav.services': 'Diensten', 'nav.gallery': 'Galerij', 'nav.story': 'Verhaal', 'nav.team': 'Team',
      'nav.reviews': 'Reviews', 'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.cta': 'Gratis offerte',
      'hero.eyebrow': 'Waver · Bierges · Waals-Brabant',
      'hero.title': 'Uw koetswerk in oude staat, zonder overspuiten.',
      'hero.lead': 'De enige werkplaats in de regio Waver die volledig gespecialiseerd is in uitdeuken zonder spuiten. Deuken, hagelschade, portierdeuken: wij laten de schade verdwijnen met behoud van uw originele lak.',
      'hero.cta1': 'Vraag een gratis offerte', 'hero.cta2': '📞 0477 47 87 14',
      'hero.reviews': '93 Google-reviews', 'hero.usp1': '✔ Levenslange garantie',
      'hero.usp2': '✔ Tot ~50 % goedkoper', 'hero.usp3': '✔ +30 jaar ervaring',
      'hero.cardLabel': 'Uitdeuken zonder spuiten',
      'stats.years': 'jaar expertise', 'stats.reviews': 'reviews 4,9/5',
      'stats.since': 'DSP-werkplaats in Bierges', 'stats.guarantee': 'levenslange garantie',
      'services.eyebrow': 'Onze diensten', 'services.title': 'Eén specialiteit, tot in de perfectie beheerst',
      'services.intro': 'Uitdeuken zonder spuiten (DSP) geeft het metaal zijn oorspronkelijke vorm terug zonder plamuur of lak. Voordelig, ecologisch en zonder waardeverlies van uw wagen.',
      'services.s1.title': 'Uitdeuken zonder spuiten', 'services.s1.text': 'Portierdeuken, winkelkardeuken, dagelijkse deuken: verwijderd door het metaal te masseren, zonder de lak aan te raken.',
      'services.s2.title': 'Hagelschadeherstel', 'services.s2.text': 'Dak, motorkap en spatborden vol hageldeuken weer als nieuw, voor een fractie van de kost van een klassieke carrosserie.',
      'services.s3.title': 'Polijsten & oppoetsen', 'services.s3.text': 'Correctie van krassen en microkrasjes: uw koetswerk krijgt glans en diepte terug.',
      'services.s4.title': 'Smart Repair & leasing-inlevering', 'services.s4.text': 'Snel en voordelig herstel vóór het inleveren van een leasewagen of verkoop van uw voertuig.',
      'services.s5.title': 'DSP-opleidingen', 'services.s5.text': 'Opleidingen uitdeuken zonder spuiten voor professionals en particulieren, gegeven door een expert.',
      'services.s6.title': 'Herstel vóór spuiten', 'services.s6.text': 'DSP-uitdeuken vóór het spuiten om de kosten van onderdelenvervanging te verlagen.',
      'process.eyebrow': 'Hoe het werkt', 'process.title': 'Eenvoudig, snel, transparant',
      'process.p1.title': 'Stuur uw foto’s', 'process.p1.text': 'Fotografeer de schade en stuur ze via ons formulier voor een eerste inschatting.',
      'process.p2.title': 'Gratis offerte', 'process.p2.text': 'Wij nemen snel contact op met een duidelijke prijs, zonder verrassingen.',
      'process.p3.title': 'Herstel in de werkplaats', 'process.p3.text': 'Het metaal wordt nauwkeurig gemasseerd en rechtgezet, vaak op één dag.',
      'process.p4.title': 'Levenslange garantie', 'process.p4.text': 'U rijdt weg met een wagen als nieuw en een levenslange garantie op het herstel.',
      'gallery.eyebrow': 'Galerij', 'gallery.title': 'Voor / Na',
      'gallery.intro': 'Sleep de schuifknop om het resultaat te tonen. Representatieve voorbeelden van onze herstellingen.',
      'gallery.g1': 'Portierdeuk', 'gallery.g2': 'Hagelschade', 'gallery.g3': 'Deuk in spatbord',
      'gallery.note': '📸 Demonstratiebeelden, te vervangen door uw echte herstelfoto’s.',
      'adv.eyebrow': 'Waarom RF Impact', 'adv.title': 'De methode die uw wagen én uw budget spaart',
      'adv.intro': 'In tegenstelling tot een klassieke carrosserie vereist DSP geen plamuur, lak of onderdelenvervanging. Het resultaat is onzichtbaar en de waarde van uw wagen blijft behouden.',
      'adv.cta': 'Herstel inschatten',
      'adv.a1.title': 'Tot ~50 % besparing', 'adv.a1.text': 'Voor een resultaat identiek aan een klassiek herstel.',
      'adv.a2.title': 'Originele lak behouden', 'adv.a2.text': 'Geen bijwerk: de fabriekskleur blijft intact.',
      'adv.a3.title': 'Ecologisch', 'adv.a3.text': 'Geen solventen of lakproducten geloosd.',
      'adv.a4.title': 'Snel', 'adv.a4.text': 'Veel interventies op één dag uitgevoerd.',
      'adv.a5.title': 'Levenslange garantie', 'adv.a5.text': 'Al onze herstellingen zijn levenslang gewaarborgd.',
      'adv.a6.title': 'Erkende expertise', 'adv.a6.text': '+30 jaar vakmanschap, een zeldzame en uitzonderlijke techniek in België.',
      'form.eyebrow': 'DSP-opleidingen', 'form.title': 'Leer uitdeuken zonder spuiten',
      'form.intro': 'RF Impact deelt zijn knowhow via opleidingen voor carrosserieprofessionals en gepassioneerde particulieren.',
      'form.f1.title': 'Initiatie particulieren', 'form.f1.text': 'Ontdek de basis van DSP en herstel zelf kleine deuken.', 'form.f1.tag': 'Op maat',
      'form.f2.title': 'Vervolmaking pro', 'form.f2.text': 'Geavanceerde technieken voor carrossiers die DSP willen integreren.', 'form.f2.tag': 'Professionals',
      'form.f3.title': 'Begeleiding', 'form.f3.text': 'Persoonlijke opvolging en advies over gereedschap om goed te starten.', 'form.f3.tag': 'Persoonlijk',
      'form.cta': 'Vraag het programma & de tarieven',
      'rev.eyebrow': 'Zij vertrouwen ons', 'rev.title': '4,9/5 op Google, 93 reviews', 'rev.sub': '92 % vijf sterren',
      'rev.r1': '„De werkplaats combineert een warm onthaal, een onberispelijk resultaat en meer dan betaalbare prijzen. Toptervaring, aanbevolen!”',
      'rev.r2': '„Echte professionals, gepassioneerd door hun vak. De resultaten waren verbluffend!”',
      'rev.r3': '„Absoluut perfect resultaat, en toch was het parelmoerwit van de Kia niet vanzelfsprekend! Hartelijk dank aan het team. Zonder voorbehoud aanbevolen.”',
      'rev.r4': '„Ultra professioneel werk en een zeer warm onthaal, het resultaat is uitzonderlijk 👍 Aarzel niet om contact op te nemen!”',
      'rev.r5': '„100 % aanbevolen! Sympathiek en efficiënt team, perfect werk en snel uitgevoerd!”',
      'rev.r6': '„Prachtig werk voor de lokale deukjes die we hadden. Topprijs en heel vriendelijk. Wat wil je nog meer!”',
      'rev.cta': 'Lees alle Google-reviews',
      'story.eyebrow': 'Ons verhaal', 'story.title': 'Oog voor detail, al meer dan 30 jaar',
      'story.intro': 'Achter RF Impact staat één man, Ronald Frappart, en één overtuiging: elk voertuig zijn oorspronkelijke vorm teruggeven zonder het te ontsieren. Een veeleisendheid die door de jaren heen een referentie werd in Waals-Brabant.',
      'story.t1.title': 'Vakmanschap gesmeed in de praktijk',
      'story.t1.text': 'Meer dan dertig jaar besteed aan het herstellen, rechtzetten en verfraaien van koetswerk. Ronald Frappart verfijnt een zeldzame en veeleisende techniek: uitdeuken zonder spuiten.',
      'story.t2.title': 'Geboorte van de werkplaats in Bierges',
      'story.t2.text': 'RF Impact opent in Waver: de enige werkplaats in de regio volledig gewijd aan DSP, een methode die in België nog zeldzaam en uitzonderlijk is.',
      'story.t3.year': 'Nu', 'story.t3.title': 'Een betrouwbare referentie',
      'story.t3.text': 'Duizenden weggewerkte deuken, een score van 4,9/5 op Google en een levenslange garantie op elke herstelling. Reputatie bouw je op, klant na klant.',
      'story.valuesTitle': 'Onze waarden',
      'story.v1.title': 'Passie voor het vak', 'story.v1.text': '„Uw auto, onze passie.” Elke herstelling krijgt de zorg die we aan onze eigen wagen zouden geven.',
      'story.v2.title': 'Een warm onthaal', 'story.v2.text': 'De nabijheid en het luisterend oor die onze klanten in bijna elke review vermelden: hier nemen we de tijd om alles uit te leggen.',
      'story.v3.title': 'Kwaliteit zonder compromis', 'story.v3.text': 'Een onberispelijk, onzichtbaar resultaat, of niets. Aan uw tevredenheid wordt niet getornd.',
      'story.v4.title': 'Respect & duurzaamheid', 'story.v4.text': 'Een ecologische methode die uw originele lak behoudt, aan een eerlijke en transparante prijs, levenslang gewaarborgd.',
      'contact.eyebrow': 'Contact & offerte', 'contact.title': 'Vraag uw gratis offerte',
      'contact.intro': 'Beschrijf uw behoefte en voeg foto’s toe: wij komen snel bij u terug met een inschatting.',
      'contact.name': 'Volledige naam', 'contact.phone': 'Telefoon', 'contact.email': 'E-mail',
      'contact.service': 'Type aanvraag', 'contact.opt1': 'Uitdeuken zonder spuiten', 'contact.opt2': 'Hagelschadeherstel',
      'contact.opt3': 'Polijsten', 'contact.opt4': 'Smart Repair / leasing-inlevering', 'contact.opt5': 'DSP-opleiding', 'contact.opt6': 'Andere',
      'contact.message': 'Beschrijf de schade', 'contact.photos': 'Foto’s (optioneel)',
      'contact.photosNote': 'Tip: voeg de foto’s rechtstreeks toe in de e-mail die opent.',
      'contact.consent': 'Ik ga akkoord om gecontacteerd te worden over mijn aanvraag.',
      'contact.submit': 'Verstuur mijn aanvraag', 'contact.coords': 'Gegevens', 'contact.vat': 'BTW',
      'contact.hours': 'Openingsuren', 'contact.weekdays': 'Ma-Vr', 'contact.weekend': 'Za-Zo', 'contact.closed': 'Gesloten',
      'day.mon': 'Maandag', 'day.tue': 'Dinsdag', 'day.wed': 'Woensdag', 'day.thu': 'Donderdag', 'day.fri': 'Vrijdag', 'day.sat': 'Zaterdag', 'day.sun': 'Zondag',
      'hours.closed': 'Gesloten',
      'hours.openUntil': 'Open, sluit om {t}', 'hours.closingSoon': 'Sluit binnenkort, om {t}',
      'hours.openingSoon': 'Opent binnenkort, om {t}', 'hours.closedToday': 'Gesloten, opent om {t}', 'hours.closedDay': 'Gesloten, opent {d} om {t}',
      'contact.gps': 'GPS-route', 'contact.gpsIntro': 'Start de navigatie naar de werkplaats met één klik:', 'contact.applemaps': 'Kaarten',
      'team.eyebrow': 'Ons team', 'team.title': 'Gepassioneerden tot uw dienst',
      'team.intro': 'Een klein hecht team dat al zijn vakkennis inzet voor uw wagen, met de glimlach en de precisie die onze reputatie maken.',
      'team.m1.name': 'Ronald Frappart', 'team.m1.role': 'Oprichter & expert uitdeuken zonder spuiten',
      'team.m1.bio': 'Meer dan 30 jaar ervaring. Grondlegger van de DSP-werkplaats in Bierges, meester in het rechtzetten van de meest delicate deuken.',
      'team.m2.name': 'DSP-technicus', 'team.m2.role': 'Uitdeuken & hagelschadeherstel',
      'team.m2.bio': 'Specialist in het masseren van het metaal, hij geeft elk koetswerk zijn oorspronkelijke vorm terug, deuk na deuk.',
      'team.m3.name': 'Afwerking', 'team.m3.role': 'Polijsten & oppoetsen',
      'team.m3.bio': 'Oog voor detail: krascorrectie, glans en een onberispelijke afwerking vóór de teruggave.',
      'team.note': '👥 Namen en foto’s van het team aan te vullen door RF Impact.',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Veelgestelde vragen',
      'faq.q1': 'Wat is uitdeuken zonder spuiten (DSP)?',
      'faq.a1': 'Een techniek waarbij het metaal langs achter wordt gemasseerd om zijn oorspronkelijke vorm terug te geven, zonder plamuur of lak. De fabriekslak blijft intact.',
      'faq.q2': 'Zijn alle deuken herstelbaar?',
      'faq.a2': 'De meeste deuken zonder beschadigde lak wel. Voor hagel behalen we vaak ~80 % efficiëntie afhankelijk van de omvang. Stuur ons een foto voor een nauwkeurig advies.',
      'faq.q3': 'Hoeveel kost het?',
      'faq.a3': 'DSP is doorgaans tot ~50 % goedkoper dan een klassiek herstel. De prijs hangt af van het aantal en de grootte van de deuken, de offerte is gratis.',
      'faq.q4': 'Hoe lang duurt het?',
      'faq.a4': 'Veel herstellingen gebeuren op één dag. We delen de exacte termijn mee bij de offerte.',
      'faq.q5': 'Bieden jullie garantie?', 'faq.a5': 'Ja: al onze herstellingen zijn levenslang gewaarborgd.',
      'faq.q6': 'Bieden jullie opleidingen aan?', 'faq.a6': 'Ja, voor professionals en particulieren. Contacteer ons voor het programma en de tarieven.',
      'footer.tagline': 'Werkplaats voor uitdeuken zonder spuiten & polijsten in Waver.',
      'footer.nav': 'Navigatie', 'footer.contact': 'Contact', 'footer.hours': 'Openingsuren', 'footer.credit': 'Site gemaakt door',
      'mobile.call': 'Bellen', 'mobile.quote': 'Offerte', 'mobile.route': 'Route', 'pwa.install': 'App installeren',
      'form.sent': '✅ Bedankt! Uw e-mailprogramma opent om de verzending af te ronden.',
      'form.error': '⚠️ Vul de verplichte velden in.'
    },

    en: {
      'a11y.skip': 'Skip to content',
      'nav.services': 'Services', 'nav.gallery': 'Gallery', 'nav.story': 'Story', 'nav.team': 'Team',
      'nav.reviews': 'Reviews', 'nav.faq': 'FAQ', 'nav.contact': 'Contact', 'nav.cta': 'Free quote',
      'hero.eyebrow': 'Wavre · Bierges · Walloon Brabant',
      'hero.title': 'Your bodywork restored, without repainting.',
      'hero.lead': "The only workshop in the Wavre area entirely dedicated to paintless dent removal. Dents, hail, door dings: we erase the damage while preserving your car's original paint.",
      'hero.cta1': 'Request a free quote', 'hero.cta2': '📞 0477 47 87 14',
      'hero.reviews': '93 Google reviews', 'hero.usp1': '✔ Lifetime warranty',
      'hero.usp2': '✔ Up to ~50% cheaper', 'hero.usp3': '✔ +30 years of experience',
      'hero.cardLabel': 'Paintless dent removal',
      'stats.years': 'years of expertise', 'stats.reviews': 'reviews 4.9/5',
      'stats.since': 'DSP workshop in Bierges', 'stats.guarantee': 'lifetime warranty',
      'services.eyebrow': 'Our services', 'services.title': 'One specialty, mastered to perfection',
      'services.intro': "Paintless dent removal (PDR) restores the metal to its original shape without filler or paint. Affordable, eco-friendly and with no loss of your car's value.",
      'services.s1.title': 'Paintless dent removal', 'services.s1.text': 'Door dings, trolley knocks, everyday dents: removed by massaging the metal, without touching the paint.',
      'services.s2.title': 'Hail damage repair', 'services.s2.text': 'Roofs, hoods and wings covered in hail dents brought back to new, for a fraction of a traditional body shop cost.',
      'services.s3.title': 'Polishing & buffing', 'services.s3.text': 'Correcting scratches and micro-marks: your bodywork regains shine and depth.',
      'services.s4.title': 'Smart Repair & lease return', 'services.s4.text': 'Fast, affordable reconditioning before returning a lease or reselling your vehicle.',
      'services.s5.title': 'PDR training', 'services.s5.text': 'Paintless dent removal training for professionals and individuals, taught by an expert.',
      'services.s6.title': 'Repair before painting', 'services.s6.text': 'PDR straightening ahead of paint to cut the cost of replacing parts.',
      'process.eyebrow': 'How it works', 'process.title': 'Simple, fast, transparent',
      'process.p1.title': 'Send your photos', 'process.p1.text': 'Snap the damage and send it through our form for a first estimate.',
      'process.p2.title': 'Free quote', 'process.p2.text': 'We get back to you quickly with a clear price, no surprises.',
      'process.p3.title': 'Repair at the workshop', 'process.p3.text': 'The metal is massaged and straightened with precision, often within a day.',
      'process.p4.title': 'Lifetime warranty', 'process.p4.text': 'You drive off with an as-new vehicle and a lifetime warranty on the repair.',
      'gallery.eyebrow': 'Gallery', 'gallery.title': 'Before / After',
      'gallery.intro': 'Drag the slider to reveal the result. Representative examples of our repairs.',
      'gallery.g1': 'Door ding', 'gallery.g2': 'Hail damage', 'gallery.g3': 'Wing impact',
      'gallery.note': '📸 Demo visuals, to be replaced with your real repair photos.',
      'adv.eyebrow': 'Why RF Impact', 'adv.title': 'The method that protects your car and your budget',
      'adv.intro': 'Unlike a traditional body shop, PDR requires no filler, no paint and no part replacement. The result is invisible and your car keeps its value.',
      'adv.cta': 'Estimate my repair',
      'adv.a1.title': 'Up to ~50% savings', 'adv.a1.text': 'For a result identical to a traditional repair.',
      'adv.a2.title': 'Original paint preserved', 'adv.a2.text': 'No touch-ups: the factory color stays intact.',
      'adv.a3.title': 'Eco-friendly', 'adv.a3.text': 'No solvents or paint products released.',
      'adv.a4.title': 'Fast', 'adv.a4.text': 'Many jobs completed in a single day.',
      'adv.a5.title': 'Lifetime warranty', 'adv.a5.text': 'All our repairs are guaranteed for life.',
      'adv.a6.title': 'Recognized expertise', 'adv.a6.text': '+30 years in the trade, a rare and exceptional technique in Belgium.',
      'form.eyebrow': 'PDR training', 'form.title': 'Learn paintless dent removal',
      'form.intro': 'RF Impact passes on its know-how through training for body shop professionals and passionate individuals alike.',
      'form.f1.title': 'Beginner (individuals)', 'form.f1.text': 'Discover the basics of PDR and leave able to tackle small dents.', 'form.f1.tag': 'Tailored',
      'form.f2.title': 'Advanced (pro)', 'form.f2.text': 'Advanced techniques for body shops wanting to add PDR to their business.', 'form.f2.tag': 'Professionals',
      'form.f3.title': 'Coaching', 'form.f3.text': 'Personalized follow-up and tooling advice to get you started right.', 'form.f3.tag': 'Personalized',
      'form.cta': 'Request the program & pricing',
      'rev.eyebrow': 'They trust us', 'rev.title': '4.9/5 on Google, 93 reviews', 'rev.sub': '92% five stars',
      'rev.r1': '"The workshop combines a warm welcome, an impeccable finish and more than affordable prices. Great experience, highly recommend!"',
      'rev.r2': '"True professionals, passionate about their craft. The results were stunning!"',
      'rev.r3': '"Absolutely perfect result, and yet the pearl-white Kia was no easy job! A huge thank you to the team. Recommend without reservation."',
      'rev.r4': '"Ultra-professional work and a very warm welcome, the result is exceptional 👍 Don\'t hesitate to contact them!"',
      'rev.r5': '"Recommend 100%! Friendly and efficient team, perfect work done quickly!"',
      'rev.r6': '"Superb work on the localized dents we had. Great price and very friendly. What more could you ask for!"',
      'rev.cta': 'Read all Google reviews',
      'story.eyebrow': 'Our story', 'story.title': 'An eye for detail, for over 30 years',
      'story.intro': 'Behind RF Impact there is one man, Ronald Frappart, and one conviction: to restore every vehicle to its original shape without altering it. A standard that, over the years, became a benchmark in Walloon Brabant.',
      'story.t1.title': 'Craftsmanship forged in the field',
      'story.t1.text': 'Over thirty years spent repairing, straightening and refining bodywork. Ronald Frappart hones a rare and demanding technique: paintless dent removal.',
      'story.t2.title': 'The workshop is born in Bierges',
      'story.t2.text': 'RF Impact opens in Wavre: the only workshop in the region entirely dedicated to PDR, a method still rare and exceptional in Belgium.',
      'story.t3.year': 'Now', 'story.t3.title': 'A trusted benchmark',
      'story.t3.text': 'Thousands of dents erased, a 4.9/5 rating on Google and a lifetime warranty on every repair. Reputation is built one client at a time.',
      'story.valuesTitle': 'Our values',
      'story.v1.title': 'Passion for the craft', 'story.v1.text': '"Your car, our passion." Every repair is treated with the care we\'d give our own.',
      'story.v2.title': 'A warm welcome', 'story.v2.text': 'The closeness and attentiveness our clients mention in almost every review: here, we take the time to explain.',
      'story.v3.title': 'Quality without compromise', 'story.v3.text': 'An impeccable, invisible finish, or nothing. No compromise is made on your satisfaction.',
      'story.v4.title': 'Respect & durability', 'story.v4.text': 'An eco-friendly method that preserves your original paint, at a fair and transparent price, guaranteed for life.',
      'contact.eyebrow': 'Contact & quote', 'contact.title': 'Request your free quote',
      'contact.intro': 'Describe your need and attach photos: we\'ll get back to you quickly with an estimate.',
      'contact.name': 'Full name', 'contact.phone': 'Phone', 'contact.email': 'Email',
      'contact.service': 'Request type', 'contact.opt1': 'Paintless dent removal', 'contact.opt2': 'Hail repair',
      'contact.opt3': 'Polishing', 'contact.opt4': 'Smart Repair / lease return', 'contact.opt5': 'PDR training', 'contact.opt6': 'Other',
      'contact.message': 'Describe the damage', 'contact.photos': 'Photos (optional)',
      'contact.photosNote': 'Tip: attach the photos directly in the email that opens.',
      'contact.consent': 'I agree to be contacted regarding my request.',
      'contact.submit': 'Send my request', 'contact.coords': 'Details', 'contact.vat': 'VAT',
      'contact.hours': 'Opening hours', 'contact.weekdays': 'Mon-Fri', 'contact.weekend': 'Sat-Sun', 'contact.closed': 'Closed',
      'day.mon': 'Monday', 'day.tue': 'Tuesday', 'day.wed': 'Wednesday', 'day.thu': 'Thursday', 'day.fri': 'Friday', 'day.sat': 'Saturday', 'day.sun': 'Sunday',
      'hours.closed': 'Closed',
      'hours.openUntil': 'Open, closes at {t}', 'hours.closingSoon': 'Closing soon, at {t}',
      'hours.openingSoon': 'Opening soon, at {t}', 'hours.closedToday': 'Closed, opens at {t}', 'hours.closedDay': 'Closed, opens {d} at {t}',
      'contact.gps': 'GPS directions', 'contact.gpsIntro': 'Start navigation to the workshop in one tap:', 'contact.applemaps': 'Maps',
      'team.eyebrow': 'Our team', 'team.title': 'Passionate people at your service',
      'team.intro': 'A small, close-knit team that puts all its know-how to work on your vehicle, with the smile and the precision that built our reputation.',
      'team.m1.name': 'Ronald Frappart', 'team.m1.role': 'Founder & paintless dent removal expert',
      'team.m1.bio': 'Over 30 years of experience. Founder of the Bierges PDR workshop, he masters straightening even the most delicate dents.',
      'team.m2.name': 'PDR technician', 'team.m2.role': 'Dent removal & hail repair',
      'team.m2.bio': 'A specialist at massaging the metal, he restores every panel to its original shape, dent after dent.',
      'team.m3.name': 'Finishing', 'team.m3.role': 'Polishing & buffing',
      'team.m3.bio': 'An eye for detail: scratch correction, shine and a flawless finish before handover.',
      'team.note': '👥 Team names and photos to be completed by RF Impact.',
      'faq.eyebrow': 'FAQ', 'faq.title': 'Frequently asked questions',
      'faq.q1': 'What is paintless dent removal (PDR)?',
      'faq.a1': 'A technique that massages the metal from behind to restore its original shape, without filler or paint. The factory paint stays intact.',
      'faq.q2': 'Are all dents repairable?',
      'faq.a2': 'Most dents without cracked paint are. For hail we often reach ~80% efficiency depending on severity. Send us a photo for an accurate opinion.',
      'faq.q3': 'How much does it cost?',
      'faq.a3': 'PDR is generally up to ~50% cheaper than a traditional repair. The price depends on the number and size of the dents, the quote is free.',
      'faq.q4': 'How long does it take?',
      'faq.a4': 'Many repairs are done in a single day. We give you the exact timeframe with the quote.',
      'faq.q5': 'Do you offer a warranty?', 'faq.a5': 'Yes: all our repairs come with a lifetime warranty.',
      'faq.q6': 'Do you offer training?', 'faq.a6': 'Yes, for professionals and individuals alike. Contact us for the program and pricing.',
      'footer.tagline': 'Paintless dent removal & polishing workshop in Wavre.',
      'footer.nav': 'Navigation', 'footer.contact': 'Contact', 'footer.hours': 'Hours', 'footer.credit': 'Site created by',
      'mobile.call': 'Call', 'mobile.quote': 'Quote', 'mobile.route': 'Directions', 'pwa.install': 'Install app',
      'form.sent': '✅ Thank you! Your email client will open to finalize sending.',
      'form.error': '⚠️ Please complete the required fields.'
    }
  };

  const SUPPORTED = ['fr', 'nl', 'en'];

  function applyLang(lang) {
    if (!SUPPORTED.includes(lang)) lang = 'fr';
    const dict = I18N[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.lang === lang);
    });
    if (typeof window.rfRenderHours === 'function') window.rfRenderHours();
    try { localStorage.setItem('rf-lang', lang); } catch (e) {}
  }

  function initLang() {
    let saved = null;
    try { saved = localStorage.getItem('rf-lang'); } catch (e) {}
    const nav = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    const lang = saved || (SUPPORTED.includes(nav) ? nav : 'fr');
    applyLang(lang);
    document.querySelectorAll('.lang-switch button').forEach(function (b) {
      b.addEventListener('click', function () { applyLang(b.dataset.lang); });
    });
  }

  /* ---------------- Header + mobile nav ---------------- */
  function initNav() {
    const header = document.getElementById('siteHeader');
    const toggle = document.getElementById('navToggle');
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', function () {
      header.classList.toggle('scrolled', window.scrollY > 12);
    }, { passive: true });
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        const open = nav.classList.toggle('open');
        toggle.setAttribute('aria-expanded', String(open));
      });
      nav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
          nav.classList.remove('open');
          toggle.setAttribute('aria-expanded', 'false');
        });
      });
    }
  }

  /* ---------------- Before/After sliders ---------------- */
  function initGallery() {
    document.querySelectorAll('.ba').forEach(function (fig) {
      const before = fig.getAttribute('data-before');
      const after = fig.getAttribute('data-after');
      const caption = fig.querySelector('figcaption');

      const vp = document.createElement('div');
      vp.className = 'ba-viewport';
      vp.innerHTML =
        '<img class="ba-before" src="' + before + '" alt="" />' +
        '<div class="ba-after-wrap"><img src="' + after + '" alt="" /></div>' +
        '<div class="ba-handle"><span>⇆</span></div>';
      fig.insertBefore(vp, caption);

      const afterWrap = vp.querySelector('.ba-after-wrap');
      const afterImg = afterWrap.querySelector('img');
      const handle = vp.querySelector('.ba-handle');

      function setPos(clientX) {
        const rect = vp.getBoundingClientRect();
        let pct = ((clientX - rect.left) / rect.width) * 100;
        pct = Math.max(0, Math.min(100, pct));
        afterWrap.style.width = pct + '%';
        afterImg.style.width = rect.width + 'px';
        handle.style.left = pct + '%';
      }
      function sync() {
        const rect = vp.getBoundingClientRect();
        afterImg.style.width = rect.width + 'px';
      }
      // init at 50%
      requestAnimationFrame(sync);
      window.addEventListener('resize', sync);

      let dragging = false;
      function down(e) { dragging = true; setPos((e.touches ? e.touches[0] : e).clientX); }
      function move(e) { if (dragging) setPos((e.touches ? e.touches[0] : e).clientX); }
      function up() { dragging = false; }
      vp.addEventListener('mousedown', down);
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
      vp.addEventListener('touchstart', down, { passive: true });
      window.addEventListener('touchmove', move, { passive: true });
      window.addEventListener('touchend', up);
      // hover to preview on desktop
      vp.addEventListener('mousemove', function (e) { if (!dragging) setPos(e.clientX); });
    });
  }

  /* ---------------- Quote form (mailto) ---------------- */
  function initForm() {
    const form = document.getElementById('quoteForm');
    const status = document.getElementById('formStatus');
    if (!form) return;
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const lang = document.documentElement.lang || 'fr';
      const dict = I18N[lang] || I18N.fr;
      if (!form.checkValidity()) {
        status.textContent = dict['form.error'];
        status.className = 'form-status err';
        form.reportValidity();
        return;
      }
      const f = form.elements;
      const subject = 'Demande de devis : ' + (f.name.value || '');
      const body =
        'Nom: ' + f.name.value + '\n' +
        'Téléphone: ' + f.phone.value + '\n' +
        'E-mail: ' + f.email.value + '\n' +
        'Type: ' + f.service.options[f.service.selectedIndex].text + '\n\n' +
        'Message:\n' + f.message.value + '\n';
      window.location.href = 'mailto:RF@hotmail.be?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
      status.textContent = dict['form.sent'];
      status.className = 'form-status ok';
      form.reset();
    });
  }

  /* ---------------- Real-time opening hours ---------------- */
  // Schedule (source: fiche Google). Minutes since midnight, per weekday (0=Sun..6=Sat).
  var SCHEDULE = {
    0: [], 6: [],
    1: [[540, 1110]], 2: [[540, 1110]], 3: [[540, 1110]], 4: [[540, 1110]], 5: [[540, 1110]]
  };
  var DAY_KEYS = ['day.sun', 'day.mon', 'day.tue', 'day.wed', 'day.thu', 'day.fri', 'day.sat'];
  var CLOSING_SOON = 30, OPENING_SOON = 60; // minutes threshold for "bientôt"

  function fmtTime(min) {
    var h = Math.floor(min / 60), m = min % 60;
    return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
  }

  function initHours() {
    var box = document.getElementById('hoursStatus');
    var list = document.getElementById('hoursList');
    if (!box) return;
    var txt = box.querySelector('.hs-text');

    window.rfRenderHours = function () {
      var lang = document.documentElement.lang || 'fr';
      var dict = I18N[lang] || I18N.fr;
      var now = new Date();
      var day = now.getDay();
      var mins = now.getHours() * 60 + now.getMinutes();

      if (list) {
        list.querySelectorAll('li').forEach(function (li) {
          li.classList.toggle('is-today', parseInt(li.getAttribute('data-day'), 10) === day);
        });
      }

      function setState(cls, key, d, t) {
        box.classList.remove('is-open', 'is-closed', 'is-soon');
        box.classList.add(cls);
        txt.textContent = (dict[key] || '').replace('{d}', d || '').replace('{t}', t || '');
      }

      // Open right now?
      var openInterval = null;
      (SCHEDULE[day] || []).forEach(function (iv) {
        if (mins >= iv[0] && mins < iv[1]) openInterval = iv;
      });
      if (openInterval) {
        if (openInterval[1] - mins <= CLOSING_SOON) setState('is-soon', 'hours.closingSoon', '', fmtTime(openInterval[1]));
        else setState('is-open', 'hours.openUntil', '', fmtTime(openInterval[1]));
        return;
      }

      // Closed: find the next opening within the week
      var found = null;
      for (var i = 0; i < 8; i++) {
        var d = (day + i) % 7;
        var ivs = SCHEDULE[d] || [];
        for (var j = 0; j < ivs.length; j++) {
          if (i === 0 && ivs[j][0] <= mins) continue;
          found = { dayOffset: i, dayIdx: d, start: ivs[j][0] };
          break;
        }
        if (found) break;
      }
      if (!found) { setState('is-closed', 'hours.closed', '', ''); return; }

      var minsUntil = found.dayOffset * 1440 + found.start - mins;
      if (minsUntil <= OPENING_SOON) { setState('is-soon', 'hours.openingSoon', '', fmtTime(found.start)); return; }
      if (found.dayOffset === 0) setState('is-closed', 'hours.closedToday', '', fmtTime(found.start));
      else setState('is-closed', 'hours.closedDay', dict[DAY_KEYS[found.dayIdx]] || '', fmtTime(found.start));
    };

    window.rfRenderHours();
    setInterval(window.rfRenderHours, 60000); // refresh every minute
  }

  /* ---------------- Scroll reveal (robust, no IO dependency) ---------------- */
  function initReveal() {
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.prototype.slice.call(
      document.querySelectorAll('.card, .step, .review, .adv-list li, .ba, .section-head')
    );
    els.forEach(function (el) { el.setAttribute('data-reveal', ''); });

    function reveal() {
      const vh = window.innerHeight || document.documentElement.clientHeight;
      els.forEach(function (el) {
        if (el.classList.contains('in')) return;
        if (el.getBoundingClientRect().top < vh - 40) el.classList.add('in');
      });
    }
    reveal();
    window.addEventListener('scroll', reveal, { passive: true });
    window.addEventListener('resize', reveal);
    // Failsafe: never leave content hidden if scroll events don't fire.
    setTimeout(function () { els.forEach(function (el) { el.classList.add('in'); }); }, 2200);
  }

  /* ---------------- Year + PWA ---------------- */
  function initMisc() {
    const y = document.getElementById('year');
    if (y) y.textContent = '2026';

    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('sw.js').catch(function () {});
      });
    }

    // Bouton « Installer l'app » : uniquement sur Android, et seulement apres
    // l'evenement beforeinstallprompt. Jamais sur ordinateur ni sur iPhone.
    const btn = document.getElementById('installBtn');
    const isAndroid = /android/i.test(navigator.userAgent) ||
      !!(navigator.userAgentData && /android/i.test(navigator.userAgentData.platform || ''));
    const standalone = window.navigator.standalone === true ||
      (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches);
    if (btn && (!isAndroid || standalone)) {
      btn.remove();
    } else if (btn) {
      let deferredPrompt = null;
      window.addEventListener('beforeinstallprompt', function (e) {
        e.preventDefault();
        deferredPrompt = e;
        btn.hidden = false;
      });
      btn.addEventListener('click', function () {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        deferredPrompt.userChoice.finally(function () {
          deferredPrompt = null; btn.hidden = true;
        });
      });
      window.addEventListener('appinstalled', function () { btn.hidden = true; });
    }
  }

  /* ---------------- Boot ---------------- */
  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initNav();
    initGallery();
    initForm();
    initHours();
    initReveal();
    initMisc();
  });
})();
