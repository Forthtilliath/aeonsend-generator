import type { CardsByType } from "../../../types";

// Vague 8 : Le Commencement, The Caverns, The Abyss, Tales of Old Gravehold.
export const cards: CardsByType = {
  gems: [
    {
      id: "LC-FIN-02",
      name: "Brûlite",
      nameEn: "Flamium",
      cost: 3,
      description: "Gagnez 2 Ether.\nPlacez un jeton Feu sur un adversaire.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-03",
      name: "Galvite Enrichie",
      nameEn: "Infused Galvite",
      cost: 3,
      description:
        "Gagnez 2 Ether.(ou)Gagnez 1 Ether. Placez un jeton Électricité sur un adversaire.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-04",
      name: "Purifite",
      nameEn: "Washium",
      cost: 4,
      description:
        "Gagnez 2 Ether.\nVous pouvez stabiliser votre brèche fermée ayant le coût de stabilisation le plus faible.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-05",
      name: "Flomine Acide",
      nameEn: "Acidic Flomite",
      cost: 5,
      description:
        "Gagnez 3 Ether.\nVous pouvez perdre 1 charge. Si vous le faites, placez un jeton Feu sur un adversaire.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-06",
      name: "Avite Avare",
      nameEn: "Hungry Avite",
      cost: 6,
      developCost: 4,
      conditionalCost: true,
      description:
        "Si vous avez 2 charges ou plus, vous pouvez acquérir ou développer cette carte pour 1 Ether de moins.(hr)Lorsque vous développez cette carte, stabilisez une brèche.(hr)Gagnez 3 Ether.",
      expansion: "Le Commencement",
    },
  ],
  relics: [
    {
      id: "LC-FIN-07",
      name: "Miroir Scintillant",
      nameEn: "Coruscating Mirror",
      cost: 3,
      description:
        "Lorsqu'un serviteur est révélé depuis la pioche Némésis, vous pouvez révéler cette carte pour placer un jeton Électricité sur ce serviteur.(hr)Un allié pioche une carte et gagne un jeton Ether.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-08",
      name: "Redistributeur",
      nameEn: "Redistributor",
      cost: 4,
      description:
        "Gagnez 1 charge.\nUn allié gagne un jeton Ether. Si vous avez 3 charges ou plus, cet allié gagne 1 jeton Ether supplémentaire.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-09",
      name: "Assembleur Ajusté",
      nameEn: "Tuned Reconstructor",
      cost: 4,
      description:
        "Un allié révèle la première carte de sa pioche. S'il s'agit d'un sort, vous pouvez le lancer. S'il ne s'agit pas d'un sort, cet allié peut la détruire, acquérir une carte coûtant jusqu'à 3 Ether de plus que la carte détruite et la placer sur sa pioche.",
      expansion: "Le Commencement",
    },
    {
      id: "LC-FIN-10",
      name: "Casque de Protection",
      nameEn: "Defensive Dome",
      cost: 7,
      developCost: 4,
      description:
        "Lorsqu'une attaque est révélée depuis la pioche Némésis, vous pouvez révéler cette carte et la détruire pour défausser cette attaque sans la résoudre.(hr)Un joueur gagne 2 points de vie.",
      expansion: "Le Commencement",
    },
  ],
  spells: [],
};
