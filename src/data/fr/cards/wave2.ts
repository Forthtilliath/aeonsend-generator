import type { CardsByType } from "../../../types";

// Vague 2 : Guerre Éternelle.
export const cards: CardsByType = {
  gems: [
    {
      id: "GE01",
      name: "Pierre de Sang",
      nameEn: "Bloodstone Jewel",
      cost: 6,
      description:
        "Lorsque vous acquérez une Pierre de Sang pour la première fois de votre tour, gagnez 3 Ether.\nGagnez 3 Ether.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE02",
      name: "Minerai de la Brèche",
      nameEn: "Breach Ore",
      cost: 4,
      description:
        "Gagnez 2 Ether.(ou)Stabilisez votre brèche fermée ayant le coût de stabilisation le plus faible.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE03",
      name: "Diamant Inquiétant",
      nameEn: "Dread Diamand",
      cost: 3,
      description:
        "Gagnez 2 Ether.\nVous pouvez défausser un sort préparé. Si vous le faites, gagnez 1 Ether supplémentaire.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE04",
      name: "Lingot Erratique",
      nameEn: "Erratic Ingot",
      cost: 5,
      description:
        "Gagnez 2 Ether.\nGagnez 2 Ether supplémentaires s'il y a au moins carte Ordre du tour de la némésis dans la défausse des cartes Ordre du tour.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE05",
      name: "Magnétite Congelée",
      nameEn: "Frozen Magnite",
      cost: 3,
      description:
        "Gagnez 2 Ether.\nVous pouvez placer la prochaine carte que vous acquérez lors de ce tour au sommet de votre pioche.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE06",
      name: "Bouquet de Scories",
      nameEn: "Scoria Slag",
      cost: 4,
      description:
        "Gagnez 2 Ether.\nSi le palier de la némésis est supérieur ou égal à 2, gagnez 1 Ether supplémentaire.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE07",
      name: "Verre Pyroclastique",
      nameEn: "Volcanic Glass",
      cost: 3,
      description:
        "Lorsque vous acquérez cette carte lors de votre tour, vous pouvez dépenser 2 Ether. Si vous le faites, un allié acquiert lui aussi un Verre Pyroclastique et le place au sommet de sa pioche.\nGagnez 2 Ether.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "LV39",
      name: "Scarabée Fossilisé",
      nameEn: "Fossilized Scarab",
      cost: 3,
      description: "Gagnez 2 Ether.(ou)Détruisez une carte de votre main.",
      expansion: "Le Vide",
    },
    {
      id: "TA28",
      name: "Élément Extraterrestre",
      nameEn: "Alien Element",
      cost: 4,
      description:
        "Gagnez 1 Ether.\nGagnez 1 Ether supplémentaire pour chacune de vos brèches ayant un sort préparé.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA29",
      name: "Berylite Hantée",
      nameEn: "Haunted Berylite",
      cost: 3,
      description:
        "Gagnez 2 Ether.(ou)Défaussez une carte de votre main. Si vous le faites, gagnez 2 charges.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA30",
      name: "Pierre de Douleur",
      nameEn: "Pain Stone",
      cost: 6,
      description: "Gagnez 3 Ether.(ou)Gagnez 2 Ether et infligez 1 dégât.",
      expansion: "Ténèbres d'Ailleurs",
    },
  ],
  relics: [
    {
      id: "GE08",
      name: "Boussole de cairn",
      nameEn: "Cairn Compass",
      cost: 4,
      description:
        "Un allié peut préparer un sort de sa défausse en le plaçant sur l'une de ses brèches ouvertes ou fermées.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE09",
      name: "Parchemin du conclave",
      nameEn: "Conclave Scroll",
      cost: 3,
      description:
        "Gagnez 1 charge.\nSi la pile de cette carte est vide dans la réserve, vous pouvez détruire la première carte de la défausse d'un allié.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE10",
      name: "Attrapeur de démons",
      nameEn: "Fiend Catcher",
      cost: 3,
      description:
        "Vous pouvez détruire une carte de votre main ou de votre défausse. Révélez la première carte du paquet d'ordre de tour. Si vous révélez une carte Ordre du tour de la némésis, vous pouvez cette en dessous du paquet d'ordre de tour.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE11",
      name: "Totem de mage",
      nameEn: "Mage's Totem",
      cost: 2,
      description:
        "Détruisez une gemme ou une relique que vous avez jouée lors de ce tour.(ou)Détruisez cette carte. Gravehold gagne 1 point de vie.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE12",
      name: "Fétiche primordial",
      nameEn: "Primordial Fetish",
      cost: 4,
      description:
        "Stabilisez une brècge de n'importe quel joueur.(ou)Détruisez cette carte.\nGagnez 3 points de vie.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE13",
      name: "Gantelet de vorticité",
      nameEn: "Vortex Gauntlet",
      cost: 6,
      description:
        "Lancez un sort préparé de n'importe quel joueur.\nRenvoyez ce sort dans la main de ce joueur.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "LV40",
      name: "Clé Dimentionnelle",
      nameEn: "Dimensional Key",
      cost: 8,
      description:
        "Un allié pioche deux cartes.(ou)Détruisez cette carte. Subissez 1 dégât. Place une carte Némésis actuellement en jeu sur le paquet Némésis.",
      expansion: "Le Vide",
    },
    {
      id: "LV41",
      name: "Cachet de l'Éternité",
      nameEn: "Eternity Charm",
      cost: 3,
      description:
        "Stabilisez votre brèche fermée ayant le coût de stabilisation le plus faible. Révélez les trois premières cartes de votre pioche. Vous pouvez préparer un des sorts révélés.",
      expansion: "Le Vide",
    },
    {
      id: "TA31",
      name: "Cube Astral",
      nameEn: "Astral Cube",
      cost: 5,
      description:
        "Reprenez en main une gemme que vous avez jouée ce tour-ci. Révélez la première carte du paquet d'ordre de tour. S'il s'agit d'un joueur, ce dernier gagne 1 point de vie.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA32",
      name: "Sphère des Secrets",
      nameEn: "Riddlesphere",
      cost: 3,
      description:
        "Gagnez 1 charge.(ou)Vous pouvez perdre 2 charges. Si vous le faites, gagnez 5 Ether.",
      expansion: "Ténèbres d'Ailleurs",
    },
  ],
  spells: [
    {
      id: "GE14",
      name: "Aurore",
      nameEn: "Aurora",
      cost: 5,
      description:
        "Lorsque préparé, une fois par tour, pendant votre phase principale, vous pouvez gagner 1 charge. Lancer : Infligez 3 dégâts.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE15",
      name: "Carbonisation",
      nameEn: "Carbonize",
      cost: 4,
      description:
        "Lancer : Infligez 3 dégâts. Révélez la première carte du paquet d'ordre de tour. Vous pouvez placer cette carte en dessous du paquet d'ordre du tour.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE16",
      name: "Conjuration des oubliés",
      nameEn: "Conjure the Lost",
      cost: 6,
      description:
        "Lancer : Infligez 5 dégâts. Vous pouvez détruire cette carte. Si vous le faites, Gravehold gagne 4 points de vie.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE17",
      name: "Flèche céleste",
      nameEn: "Celestial Spire",
      cost: 5,
      description:
        "Lancer : Infligez 3 dégâts. Si la pile de cette carte est vide dans la réserve, un allié pioche une carte.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE18",
      name: "Champ de convection",
      nameEn: "Convection Field",
      cost: 5,
      description:
        "Lancer : Infligez 4 dégâts.(ou)Lancer : Infligez 2 dégâts. Un allié peut détruire une carte de sa main.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE19",
      name: "Cristallisation",
      nameEn: "Crystallize",
      cost: 8,
      description:
        "(duo)Lancer : Un allié révèle sa main. Infligez 2 dégâts pour chaque gemme ainsi révélée.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE20",
      name: "Équilibre",
      nameEn: "Equilibrium",
      cost: 7,
      description:
        "Lorsque préparé, réduisez de 1 les dégâts que vous subissez, jusqu'à un minimum de 1. Lancer : Infligez 4 dégâts.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE21",
      name: "Torrent ardent",
      nameEn: "Fiery Torrent",
      cost: 5,
      description:
        "Lancer : Infligez 2 dégâts. Infligez 2 dégâts supplémentaires pour chaque autre Torrent Ardent préparé par n'importe quel joueur.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE22",
      name: "Éclair déchirant",
      nameEn: "Jagged Lightning",
      cost: 4,
      description:
        "Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, un joueurs stabilise sa brèche fermée ayant le coût de stabilisation le plus faible.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE23",
      name: "Mèche",
      nameEn: "Kindle",
      cost: 4,
      description:
        "Lorsque préparé, pendant votre phase principale, vous pouvez aussi préparer une Étincelle sur la brèche où ce sort est préparé. (Vous ne pouvez pas utiliser cet effet si une Étincelle est préparée sur cette brèche). Lancer : Infligez 3 dégâts.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE24",
      name: "Forge Nova",
      nameEn: "Nova Forge",
      cost: 6,
      description:
        "Lorsque préparé, une fois par tour pendant votre phase principale, vous pouvez gagner 2 Ether qui ne peuvent être utilisés que pour acquérir un sort. Lancer : Infligez 4 dégâts.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE25",
      name: "Afflux pyrotechnique",
      nameEn: "Pyrotechnic Surge",
      cost: 4,
      description:
        "(duo)Lancer : Infligez 4 dégâts. Vous pouvez détruire une carte de votre défausse.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE26",
      name: "Retour à la poussière",
      nameEn: "Reduce to Ash",
      cost: 7,
      description:
        "Lorsque préparé, au début de votre phase d'incantation, révélez la carte du sommet de votre pioche. Vous pouvez détruire la carte révélée. Lancer : Infligez 4 dégâts.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "GE27",
      name: "Familier imaginaire",
      nameEn: "Thoughtform Familiar",
      cost: 3,
      description:
        "Lancer : Infligez 2 dégâts. Infligez 1 dégât supplémentaire pour chacun de vos autres sorts préparés.",
      expansion: "Guerre Éternelle",
    },
    {
      id: "LV42",
      name: "Résonance",
      nameEn: "Resonate",
      cost: 6,
      description:
        "Lancer : Infligez 4 dégâts. S'il y a six cartes ou plus dans votre défausse, infligez 3 dégâts supplémentaires.",
      expansion: "Le Vide",
    },
    {
      id: "LV43",
      name: "Embrasement",
      nameEn: "Conflagration",
      cost: 3,
      description: "(lien)Lancer : Infligez 2 dégâts. Gagnez 1 Ether.",
      expansion: "Aeon's End",
    },
    {
      id: "LV44",
      name: "Fulminer",
      nameEn: "Fulminate",
      cost: 5,
      description:
        "Lorsque préparé, les autres sorts que vous lancez infligent 1 dégât supplémentaire.(lien)Lancer : Infligez 3 dégâts.",
      expansion: "Aeon's End",
    },
    {
      id: "LV45",
      name: "Feu intérieur",
      nameEn: "Inner Fire",
      cost: 2,
      description:
        "(lien) Lancer : Infligez 1 dégât. Si le palier de la Némésis est 2 ou plus, infligez 1 dégât supplémentaire.",
      expansion: "Aeon's End",
    },
    {
      id: "LV46",
      name: "Fléchette thermique",
      nameEn: "Thermal Dart",
      cost: 4,
      description:
        "(lien)Lancer : Infligez 3 dégâts. Si ce n'est pas la première Fléchette thermique que vous lancez ce tour-ci, gagnez 1 charge.",
      expansion: "Aeon's End",
    },
    {
      id: "TA33",
      name: "Carboniser",
      nameEn: "Char",
      cost: 8,
      description:
        "Lancer : Infligez 6 dégâts. Si ces dégâts permettent de défausser un serviteur, un joueur gagne 2 points de vie.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA34",
      name: "Catalyseur",
      nameEn: "Catalyst",
      cost: 6,
      description:
        "Lancer : Infligez 2 dégâts. Si vous avez 2 points de vie ou moins, infligez 5 dégâts supplémentaires.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA35",
      name: "Aura de réaction",
      nameEn: "Feedback Aura",
      cost: 5,
      description:
        "Lancer : Infligez 3 dégâts. Si vous possédez 4 charges ou plus, vous infligez 3 dégâts supplémentaires.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA36",
      name: "Conduit du néant",
      nameEn: "Nether Conduit",
      cost: 7,
      description:
        "Lancer : Révélez une carte de votre main coûtant 2 Ether ou plus. Si vous le faites, infligez autant de dégâts que le nombre de cartes manquantes dans la pile de cette carte dans la réserve. Puis un allié gagne une carte de cette pile.",
      expansion: "Aeon's End",
    },
    {
      id: "TA37",
      name: "Pyromancie",
      nameEn: "Pyromancy",
      cost: 7,
      description:
        "Lancer : Infligez 1 dégât. Les alliés peuvent collectivement défausser jusqu'à deux cartes. Pour chaque carte ainsi défaussée, infligez 3 dégâts supplémentaires.",
      expansion: "Ténèbres d'Ailleurs",
    },
    {
      id: "TA38",
      name: "Calciner",
      nameEn: "Scorch",
      cost: 5,
      description:
        "Lancer : Infligez 4 dégâts. Si ces dégâts permettent de défausser un serviteur du paquet Némésis, un allié gagne 2 charges.",
      expansion: "Ténèbres d'Ailleurs",
    },
  ],
};
