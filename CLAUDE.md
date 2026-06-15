CLAUDE.md — Garbi-Protect (refonte SEO sur Astro)
Fichier d'instructions du projet. Tu le lis au début de chaque session et tu construis en respectant ces règles. En cas de doute, tu demandes plutôt que de supposer.


Contexte
Garbi-Protect est une entreprise de dératisation et désinsectisation en Île-de-France, basée à Plaisir (78). L'ancien site a été fait avec Lovable : c'est une single-page app React en rendu côté client, donc Google reçoit une page vide et n'indexe rien. Résultat : site quasi invisible sur Google.

On reconstruit le site sur Astro en statique (multi-pages, HTML lisible direct par Google), en réutilisant le contenu qui existe déjà dans l'ancien codebase (textes, données villes, images). Le but unique du projet : que le site soit indexé et qu'il ranke sur les recherches locales ("punaises de lit Paris", "dératisation 93", etc.).

L'ancien codebase Lovable sert de source de contenu. On garde le contenu, on jette le code.


Stack (à respecter)
Astro dernière version (Astro 6 à ce jour), sortie statique (output: 'static', pas d'adapter SSR).
HTML + CSS/SCSS. JavaScript vanilla uniquement pour l'interactif et les animations.
Le contenu reste en HTML, jamais rendu via JS. C'est le cœur du projet : si le contenu est en JS, Google le voit pas, et on a tout raté.
Pas de React, pas de framework UI lourd.
Content Collections via la Content Layer API (src/content.config.ts, loaders glob() pour le Markdown et file() pour les données JSON/YAML).
Git/GitHub + déploiement Netlify (gratuit).
Formulaire : Netlify Forms (zéro backend).
CMS (plus tard) : Decap ou Keystatic, branché sur les collections.


Règles non négociables
Code
Propre, lisible, pas de commentaires sauf si explicitement demandé.
Composants réutilisables, zéro duplication.
HTML sémantique correct (un seul <h1> par page, hiérarchie logique des titres).
Design
Identité bleu du logo officiel partout : principale #003C95, accent cyan #14D0F8, et un bleu foncé #002A66 pour la profondeur (footer, survol). Neutres chauds et texte presque noir conservés. Design intentionnel, qualité agence.
INTERDIT : le bleu/indigo/violet par défaut de Tailwind. Aucun dégradé violet/aurora/magenta, aucun dégradé multicolore en fond de section. Le dégradé cyan vers bleu est réservé au logo et à de rares micro-accents. Pas de glassmorphism, pas de glow générique, pas d'aspect "template généré par IA".
Repère de ce qu'on ne veut PAS : l'ancien site avait des dégradés bleu vers violet vers vert. On part du bleu du logo (#003C95), proprement, pas du bleu générique Tailwind.
Textes du site (anti-IA, strict)
Français naturel, direct, concret, comme un vrai pro l'écrirait. Jamais de marketing creux.
Tournures bannies : "passionné par", "plongez dans", "n'hésitez pas à", "dans le monde de", "que vous soyez particulier ou professionnel" (et toutes ses variantes), "solutions sur-mesure" employé dans le vide, "votre allié", "tranquillité d'esprit", etc.
Pas de tirets cadratins (—) dans les textes du site.
Le contenu porté de l'ancien site a été écrit par IA et contient ces tournures. On le nettoie et on le réécrit avant de le mettre.
SEO (le but du projet)
Chaque page sort son propre <title>, sa meta description et son canonical, en dur dans le HTML.
JSON-LD par type de page : LocalBusiness (global + pages géo), Service (pages nuisibles), BreadcrumbList.
Sitemap auto (@astrojs/sitemap), robots.txt, images OG par page.
NAP cohérent partout (même nom, même adresse, même téléphone), toujours tiré du fichier reglages.
Maillage interne : nuisible ↔ département ↔ ville.


Architecture
Collections (la source de vérité du contenu)
reglages (un seul fichier de données) : nom, adresse, téléphone, email, certifs, délai d'intervention, réseaux, et les textes communs. Tout ce qui se répète vient d'ici.
nuisibles : une entrée par nuisible. Génère les pages nuisibles.
villes : une entrée par ville/arrondissement (nom, slug, code postal, département, quartiers, image, contenu spécifique). Génère les pages géo.
blog : articles en Markdown.
Types de page
Pages fixes : accueil, contact, devis, mentions légales, CGV, offre entreprise. Pages .astro soignées.
Pages nuisibles : 1 modèle + collection nuisibles → getStaticPaths.
Pages géo (villes + départements) : 1 modèle + collection villes → getStaticPaths.
Blog : 1 modèle + collection blog.
Principe clé "modèle + données"
On ne duplique jamais le contenu commun. Le texte partagé vit dans reglages (ou dans le modèle), pas recopié dans 260 fichiers. Une page ville = le modèle + les variables propres à la ville. C'est ce qui permet, plus tard via le CMS, qu'Astrid change un texte commun une seule fois et que les 260 pages se mettent à jour.


Pages à construire
Accueil : hero bleu, sélection des nuisibles en "ronds" (façon Oxipest mais en mieux et en bleu), bloc confiance, "comment ça se passe", tarifs, à propos, appel à l'action contact.
Nuisibles : punaises de lit, dératisation/rats, souris, désinsectisation/cafards, fourmis, frelons/guêpes, dépigeonnage (nouveau), anthrènes.
Départements : 75, 77, 78, 91, 92, 93, 94, 95.
Villes/arrondissements : système géo, démarré sur les punaises de lit, structuré pour pouvoir étendre aux autres nuisibles plus tard sans tout casser.
Contact, devis, mentions légales, CGV, offre entreprise, blog.
Stratégie pages villes
Présentation légère et scannable (l'essentiel, gros bouton d'appel, lisible en 20 secondes), MAIS chaque page garde un vrai bout de contenu spécifique à la ville (quartiers réels, contexte local), sinon Google les traite en doorway pages et les ignore. Contenu un peu plus riche sur les ~20 grosses villes (gros volume de recherche), version minimale pour les petits villages.


Infos business (source de vérité, à mettre dans reglages)
Nom : Garbi-Protect
Adresse : 135 Rue des Pêchers, 78370 Plaisir
Téléphone : 01 85 40 01 80
Email : astridhibon@garbi-protect.com (l'ancien contact@garbi-protect.com est mort, ne jamais l'utiliser)
Certifications : Certibiocide, agréé ministère de la Transition écologique (numéro d'agrément à venir)
Intervention : sous 2h en urgence / dans la journée, 24h/7j (à confirmer)
Paiement : Mollie (à confirmer). Ne pas afficher Klarna.
Réseaux : Facebook (réel), LinkedIn (réel). Pas d'Instagram. Pas de chat Crisp.
Bouton WhatsApp : numéro à venir.


À réutiliser de l'ancien codebase
Textes (à nettoyer anti-IA), données villes (yvelinesCities, parisArrondissements), ~280 images de villes, images de traitements, structure géo, base du sitemap/robots.
À jeter
Le code React, le design (bleu/violet/aurora), Supabase + Resend, le chat Crisp, le balisage author: Lovable, les liens morts (Instagram), l'email contact@ mort.


Formulaire devis
Formulaire HTML simple avec Netlify Forms (zéro backend), les demandes partent par mail chez astridhibon@garbi-protect.com. Champs repris de l'ancien : prénom, nom, téléphone, email, adresse, type de nuisible, surface, niveau d'infestation.


Workflow
On construit en local, l'ancien site reste en ligne pendant ce temps.
Bascule en repointant le domaine vers Netlify quand le site est prêt (réversible).
Tout doit finir sous les comptes de l'entreprise (GitHub, Netlify, domaine, Search Console, CMS) pour qu'Astrid soit autonome après le stage.

