import type { CardsByType } from "../../../types";

// Vague 3 : Secrets Enfouis.
export const cards: CardsByType = {
  gems: [
    {
      id: "SE133",
      name: "Voltécorce",
      nameEn: "Jolting Crust",
      cost: 3,
      description:
        "Gagnez 2 Ether. Gagnez 1 jeton Pulsation.(ou)Gagnez 2 Ether. Perdez 1 jeton Pulsation. Si vous le faites, gagnez 1 charge.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE136",
      name: "Fragment de mentite",
      nameEn: "Mentite Chunk",
      cost: 5,
      description:
        "Gagnez 3 Ether.\nSi sept cartes ou plus se trouve dans votre défausse, gagnez 1 Ether supplémentaire.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE137",
      name: "Lacosite muette",
      nameEn: "Muted Lacosite",
      cost: 5,
      description:
        "Lorsque vous acquérez cette carte, réduisez un serviteur au silence.\nGagnez 3 Ether.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE139",
      name: "Résine d'oubli",
      nameEn: "Oblivium Resin",
      cost: 5,
      description:
        "Gagnez 2 Ether.\nSi vous avez trois cartes ou plus coûtant 0 Ether en main, gagnez 2 Ether supplémentaire.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE143",
      name: "Tétrite lumineuse",
      nameEn: "Shining Tetrite",
      cost: 6,
      description:
        "Gagnez 4 Ether qui ne peuvent être utilisés que pour acquérir des cartes.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE146",
      name: "Invoquine",
      nameEn: "Summonite",
      cost: 3,
      description:
        "Gagnez 2 Ether.(ou)Acquérez une Invoquine de la réserve et placez-la sur la défausse d'un allié.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE147",
      name: "Noyaux de triplite",
      nameEn: "Triplite Core",
      cost: 4,
      description:
        "Gagnez 3 Ether qui ne peuvent être utilisés que pour acquérir des cartes.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE148",
      name: "Pointe de vide",
      nameEn: "Voidium Spike",
      cost: 3,
      description:
        "Gagnez 2 Ether.\nChaque allié peut défausser une carte de samain pour gagner 1 charge.",
      expansion: "Secrets Enfouis",
    },
  ],
  relics: [
    {
      id: "SE128",
      name: "Étoile miniature",
      nameEn: "Bottled Star",
      cost: 7,
      description: "Gagnez 3 charges",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE134",
      name: "Gantelet vivant",
      nameEn: "Living Gauntlet",
      cost: 4,
      description:
        "Révélez la première carte de votre pioche. Vous pouvez la détruire ou la défausser. Chaque allié peut piocher une carte. Dans ce cas, il défausse ensuite une carte de sa main.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE135",
      name: "Cube sans fond",
      nameEn: "Manifold Container",
      cost: 4,
      description:
        "Gagnez 1 Ether.\nCe tour, lors de votre prochaine acquisition de carte, vous pouvez acquérir gratuitement une seconde carte qui coûte moins cher que la première carte acquise.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE142",
      name: "Œuvre de l'érudit",
      nameEn: "Scholar's Opus",
      cost: 3,
      description:
        "Gagnez 1 charge.\nSi sept cartes ou plus se trouvent dans votre défausse, gagnez 1 charge supplémentaire.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE144",
      name: "Filaments d'âme",
      nameEn: "Soul Cords",
      cost: 5,
      description:
        "Un joueur gagne un jeton Pulsation. Chaque joueur qui possède au moins 2 jetons Pulsations gagne 1 charge.",
      expansion: "Secrets Enfouis",
    },
  ],
  spells: [
    {
      id: "SE127",
      name: "Lame de sagesse",
      nameEn: "Blade of Wisdom",
      cost: 6,
      description:
        "Lorsque vous acquerez cette carte, si sept autres cartes ou plus se trouvent dans votre défausse, gagnez 2 points de vie. Lancer : Infligez 5 dégâts.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE129",
      name: "Courant flamboyant",
      nameEn: "Burning Current",
      cost: 3,
      description:
        "Lorsque préparé, lors de votre phase d'incantation, vous pouvez perdre 2 jetons Pulsation. Si vous le faites, les sorts que vous lancez ce tour infligent 1 dégât supplémentaire. Lancer : Infligez 1 dégâts. Gagnez 1 jeton Pulsation.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE130",
      name: "Coup double",
      nameEn: "Double Tap",
      cost: 3,
      description:
        "Lancer : Infligez 1 dégât. Infligez 1 dégât. (Les effets modifiant les dégâts concernent les deux sources de dégâts.)",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE131",
      name: "Toucher vampirique",
      nameEn: "Draining Touch",
      cost: 2,
      description: "Lancer : Infligez 1 dégât. Gagnez 1 charge.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE132",
      name: "Éclair de génie",
      nameEn: "Flash of Intellect",
      cost: 4,
      description:
        "(lien)Lancer : Infligez 3 dégâts. Si six autres cartes ou plus se trouvent dans votre défausse, vous pouvez acquérir un Éclair de génie de la réserve et le placer sur votre pioche.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE138",
      name: "Frappe audacieuse",
      nameEn: "Nerve Jab",
      cost: 2,
      description:
        "Lancer : Infligez 1 dégât. Réduisez un serviteur au silence.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE140",
      name: "Tir de précision",
      nameEn: "Precision Shot",
      cost: 3,
      description:
        "(lien)Lancer : Infligez 2 dégâts. Si six autres cartes ou plus se trouvent dans votre défausse, infligez 2 dégâts supplémentaires.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE141",
      name: "Éruption psychique",
      nameEn: "Psychic Eruption",
      cost: 8,
      description:
        "Lancer : Infligez autant de dégâts que le nombre de cartes présentes dans la défausse d'un joueur.",
      expansion: "Secrets Enfouis",
    },
    {
      id: "SE145",
      name: "Force colossale",
      nameEn: "Stunning Force",
      cost: 5,
      description:
        "Lancer : Infligez 4 dégâts à la némésis. Réduisez une serviteur au silence.",
      expansion: "Secrets Enfouis",
    },
  ],
};
