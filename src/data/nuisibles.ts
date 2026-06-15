export interface Nuisible {
  slug: string;
  name: string;
  tagline: string;
  // Nom du fichier dans src/assets/nuisibles/. C'est le seul endroit a changer
  // pour remplacer la photo d'une carte. Sans image, la carte garde son icone.
  image?: string;
}

export const nuisibles: Nuisible[] = [
  {
    slug: "punaises-de-lit",
    name: "Punaises de lit",
    tagline: "Traitement complet, literie et mobilier.",
    image: "punaises-de-lit.png",
  },
  {
    slug: "rats",
    name: "Rats",
    tagline: "Dératisation et comblement des accès.",
    image: "rats.png",
  },
  {
    slug: "souris",
    name: "Souris",
    tagline: "Piégeage et protection durable.",
    image: "souris.png",
  },
  {
    slug: "cafards",
    name: "Cafards",
    tagline: "Gel et pulvérisation ciblés.",
    image: "cafards.png",
  },
  {
    slug: "fourmis",
    name: "Fourmis",
    tagline: "Traitement des nids et des passages.",
    image: "fourmis.png",
  },
  {
    slug: "guepes-frelons",
    name: "Guêpes et frelons",
    tagline: "Destruction de nids, même en hauteur.",
    image: "frelon.png",
  },
  {
    slug: "moustiques",
    name: "Moustiques",
    tagline: "Traitement des zones de repos et des eaux stagnantes.",
    image: "moustiques.png",
  },
  {
    slug: "pigeons",
    name: "Pigeons",
    tagline: "Pose de pics et filets, nettoyage.",
    image: "pigeon.jpeg",
  },
  {
    slug: "anthrenes",
    name: "Anthrènes",
    tagline: "Traitement des textiles et tapis.",
    image: "anthrene.jpeg",
  },
  {
    slug: "autres",
    name: "Autres nuisibles",
    tagline: "Un doute sur l'espèce ? On identifie et on traite.",
    image: "autres.png",
  },
];
