import type { CardsByType } from "../../../types";

// Vague 5 : Les Parias.
export const cards: CardsByType = {
  gems: [
    {
      id: "LP-FIN-058",
      name: "Pyrite Instable",
      nameEn: "Unstable Pyrite",
      cost: 2,
      description:
        "Gagnez 1 Ether.\nVous pouvez détruire cette carte pour gagner 2 Ether supplémentaire.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-059",
      name: "Péridot en Fusion",
      nameEn: "Molten Peridot",
      cost: 3,
      description:
        "Gagnez 2 Ether.\nS'il s'agit du second Péridot en Fusion que vous jouez ce tour, vous pouvez détruire cette carte pour acquérir une carte d'un pile de la réserve coûtant 4 Ether ou moins.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-060",
      name: "Spirale d'Ambre",
      nameEn: "Helix of Amber",
      cost: 3,
      description:
        "Gagnez 2 Ether.\nVous pouvez subir 1 dégâts pour détruire une carte de votre main coûtant 0 Ether.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-061",
      name: "Phénixium Fossilisé",
      nameEn: "Petrified Phoenixium",
      cost: 4,
      description:
        "Gagnez 2 Ether.\nLa prochaine fois que vous acquérez une carte ce tour, vous pouvez lancer le sort préparé d'un joueur.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-062",
      name: "Saphir Galvanisé",
			nameEn: "Galvanized Sapphire",
			requiresXaxos: true,
      cost: 4,
      description: "Gagnez 2 Ether.\nXaxos : Paria gagne 1 charge.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-063",
      name: "Cyclite Oblongue",
      nameEn: "Elonagated Looq",
      cost: 4,
      description:
        "Gagnez 2 Ether.\nLa prochaine fois que vous ouvrez ou stabilisez une brèche ce tour, gagnez 1 charge.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-064",
      name: "Héliolite Intense",
      nameEn: "Vigorous Sunstone",
      cost: 5,
      description:
        "Lorsque vous acquérez cette carte, s'il s'agit de la seconde carte que vous acquérez ce tour, prenez-la en main.\nGagnez 3 Ether.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-065",
      name: "Sazite de Duplication",
      nameEn: "Duplicating Sazite",
      cost: 6,
      description:
        "Gagnez 3 Ether.\nLa prochaine fois que vous acquérez une carte ce tour, vous pouvez défausser une sort préparé coûtant 1 Ether ou plus pour qu'un allié acquière une carte de la réserve coûtant aussi cher ou moins cher que la carte que vous avez acquise.",
      expansion: "Les Parias",
    },
    {
      id: "LVS-80",
      name: "Quilite de Célérité",
      nameEn: "Quickening Qitite",
      cost: 3,
      description:
        "Gagnez 2 Ether.\nVous pouvez défausser une carte de votre main pour stabiliser la brèche II d'un joueur.",
      expansion: "Le Village du Sud",
    },
    {
      id: "LVS-81",
      name: "Urupe Enrichi",
      nameEn: "Jeweled Urup",
      cost: 5,
      description:
        "Gagnez 3 Ether.\nS'il s'agit du second Urupe Enrichi que vous jouez ce tour, vous pouvez détruire cette carte pour acquérir une carte d'une pile de la réserve coûtant 7 Ether ou moins.",
      expansion: "Le Village du Sud",
    },
  ],
  relics: [
    {
      id: "LP-FIN-066",
			name: "Orbe des Profondeurs",
			nameEn:"Orb of the Deep",
      cost: 2,
      description:
        "Stabilisez votre brèche fermées ayant le coût de stabilisation le plus faible.(ou)Détruisez cette carte. Gagnez 1 charge.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-067",
			name: "Racive Carnivore",
			nameEn:"Carnivorous Roox",
      cost: 3,
      description:
        "Gagnez 1 Ether. Vous pouvez détruire une carte de votre main pour gagner d'autant d'Ether que son coût.(ou)Détruisez cette carte pour stabiliser deux fois votre brèche fermée ayant le coût de stabilisation le plus faible.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-068",
			name: "Dague de Faille",
			nameEn:"Rift Dagger",
      cost: 3,
      description:
        "Acquérez une carte d'une autre pile de la réserve dont les cartes coûtent 3 Ether ou moins. Vous pouvez détruire cette relique pour acquérir une carte coûtant jusqu'à 4 Ether à la place.\nVous pouvez dépenser 1 Ether pour prendre la carte acquise en main.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-069",
			name: "Circuit de Reconstitution",
			nameEn: "Reconstituting Circuit",
			requiresXaxos: true,
			cost: 3,
      description:
        "Xaxos : Paria gagne 1 charge.\nVous pouvez détruire 1 carte de votre main.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-070",
			name: "Altérateur de Destin",
			nameEn:"Destiny Forger",
      cost: 4,
      description:
        "Un allié peut détruire une carte de sa main. Ce joueur peut acquérir une carte coûtant jusqu'à 2 Ether de plus que la carte détruite et la prendre en main.(ou)Détruiez cette carte pour gagner 2 charges.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-071",
			name: "Chaîne de Restitution",
			nameEn:"Chain of Retrieval",
      cost: 4,
      description:
        "Stabilisez la brèche d'un allié.(ou)Reprenez en main une carte de votre défausse coûtant 6 Ether ou moins.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-072",
			name: "Soleil en Bouteille",
			nameEn: "Bottled Sun",
			requiresXaxos: true,
      cost: 6,
      description: "Xaxos : Paria gagne 3 charges.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-073",
			name: "Réflecteur de Transmutation",
			nameEn:"Transmutter's Lens",
      cost: 5,
      description:
        "Détruisez cette carte.\nVous pouvez détruire une carte de votre main ou de votre défausse.\nAcquerez une carte d'une pile de la réservé coûtant jusqu'à 6 Ether.",
      expansion: "Les Parias",
    },
    {
      id: "LP-1a-074",
			name: "Vortex Déséquilibré",
			nameEn:"Unhinged Vortex",
      cost: 7,
      description:
        "Un allié pioche trois carte. Puis, il défausse une carte de sa main.(ou)Vous pouvez stabiliser la brèche d'un allié. Un allié peut reprendre en main une carte de sa défausse.",
      expansion: "Les Parias",
    },
    {
      id: "RG-88",
      name: "Oracle de Verre",
      nameEn: "Glass-Eyed Oracle",
      cost: 1,
      description:
        "Gagnez 1 Ether.(ou)Détruisez cette carte et le nombre d'exemplaires de cette carte de votre choix que vous avez en main. Vous pouvez acquérir une carte coûtant jusqu'à trois fois le nombre d'exemplaires détruits.",
      expansion: "Retour à Gravehold",
    },
    {
      id: "LVS-82",
      name: "Œil de Chat",
      nameEn: "Cat's Eye",
      cost: 1,
      description:
        "[small]Vous ne pouvez pas acquérir cette carte si vous avez acquis une autre carte ce tour. Vous ne pouvez pas acquérir d'autres cartes si vous avez acquis cette carte ce tour.[/small]\nGagnez 1 charge.Vous pouvez détruire cette carte pour gagner 1 Ether.",
      expansion: "Le Village du Sud",
    },
    {
      id: "LVS-83",
      name: "Réplicateur Voltaïque",
      nameEn: "Volt Replicator",
      cost: 4,
      description:
        "Un allié acquiert une carte coûtant 5 Ether ou moins. S'il y a deux Réplicateurs Voltaïques ou moins dans la réserve, vous pouvez détruire cette carte. Si vous le faites, cet allié prend en main la carte acquise.",
      expansion: "Le Village du Sud",
    },
    {
      id: "LVS-84",
      name: "Conduit d'Énergie",
      nameEn: "Energized Conduit",
      cost: 7,
      description:
        "Connectez cette relique à la brèche d'un joueur.\nLorsqu'un sort est lancé depuis cette brèche, le joueur qui lance ce sort gagne 1 charge.",
      expansion: "Le Village du Sud",
    },
  ],
  spells: [
    {
      id: "LP-FIN-075",
      name: "Givre Renforcé",
      cost: 2,
      description:
        "Lancer : Infligez 2 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, infligez 1 dégât supplémentaire.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-076",
      name: "Orage Jumelé",
      cost: 3,
      description:
        "LIEN (Deux sorts ayant Lien peuvent être préparés sur la même brèche.) Lancer : Infligez 2 dégâts. S'il s'agit du second Orage jumelé que vous lancez ce tour, infligez 2 dégâts supplémentaires.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-077",
      name: "Croc Tordu",
      cost: 4,
      description:
        "Lancer : Infligez 3 dégâts. Si la pile de la réserve de cette carte est vide, infligez 1 dégât supplémentaire",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-078",
      name: "Éclair Destructeur",
      cost: 4,
      description:
        "Lancer : Infligez 2 dégâts. Vous pouvez détruire une carte de votre main. OU Lancer : Défaussez une gemme de votre main. Si vous le faites, infligez 4 dégâts.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-079",
			name: "Combustion Enrichie",
			requiresXaxos: true,
      cost: 4,
      description:
        "Lancer : Infligez 3 dégâts. Si Xaxos : Paria a 4 charges ou moins, il gagne 1 charge.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-080",
      name: "Flèche Éclair",
      cost: 5,
      description:
        "Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, Gravehold gagne 1 point de vie.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-081",
      name: "Confluence de Radiance",
      cost: 5,
      description:
        "Lancer : Infligez 3 dégâts. Un allié peut piocher une carte, puis défausser une carte de sa main.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-082",
      name: "Faille Instable",
      cost: 5,
      description:
        "Lorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât et gagnez 1 Ether. Lancer : Infligez 4 dégâts.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-083",
      name: "Afflux de Volonté",
      cost: 5,
      description:
        "Lancer : Infligez 2 dégâts. Vous pouvez acquérir un sort d'une pile de la réserve coûtant 4 Ether ou moins et le placer sur votre pioche.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-084",
      name: "Tornade de Lucidité",
      cost: 6,
      description:
        "Lancer : Infligez 5 dégâts. Si vous ne possédez aucune brèche fermée, gagnez 1 charge.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-085",
      name: "Vivacité d'Esprit",
      cost: 6,
      description:
        "Lorsque préparé, si vous acquérez une carte, vous pouvez la placer sur votre pioche. Lancer : Infligez 4 dégâts.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-086",
      name: "Effusion de Flammes",
      cost: 6,
      description:
        "Lancer : Infligez 5 dégâts. Vous pouvez lancer le sort préparé d'un joueur coûtant 5 Ether ou moins.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-087",
      name: "Relais Arcanique",
      cost: 8,
      description:
        "Lancer : Un allié pioche une carte, puis révèle sa main. Infligez 4 dégâts. Infligez 1 dégâts supplémentaire par carte de sa main coûtant 1 Ether ou plus.",
      expansion: "Les Parias",
    },
    {
      id: "LP-FIN-088",
      name: "Explosion Étourdissante",
      cost: 8,
      description:
        "Lancer : Infligez 6 dégâts. Révélez puis replacez les cartes du paquet d'ordre du tour dans l'ordre de votre choix.",
      expansion: "Les Parias",
    },
  ],
};
