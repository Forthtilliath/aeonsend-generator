import type { CardsByType } from "../../../types";

// Vague 8 : Le Commencement, The Caverns, The Abyss, Tales of Old Gravehold.
export const cards: CardsByType = {
	gems: [
		{
			id: "LC-FIN-02",
			name: "Brûlite",
			nameEn: "Flamium",
			cost: 3,
			description: "Gagnez 2 Ether.(ou)Placez un jeton Feu sur un adversaire.",
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
				"Gagnez 2 Ether.\nVous pouvez dépenser 1 Ether pour stabiliser votre brèche fermée ayant le coût de stabilisation le plus faible.",
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
		{
			id: "P202",
			name: "Joyau du glouton",
			nameEn: "Glutton's Jewel",
			cost: 6,
			description:
				"Gagnez 3 Ether.\nSi votre pioche et votre défausse contiennent ensemble au moins 15 cartes, placez autant de cartes que vous voulez d'une pile de la réserve autre que Joyau du glouton sur le dessus de votre pioche.",
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
		{
			id: "P209",
			name: "Pointe de rebond",
			nameEn: "Rebound Spike",
			cost: 5,
			description:
				"Mettez de côté deux gemmes ou reliques jouées ce tour, autres que cette carte. À la fin de votre tour, après avoir complété votre main, placez les cartes mises de côté dans votre main.",
			expansion: "Le Commencement",
		},
	],
	spells: [
		{
			id: "LC-FIN-11",
			name: "Piqûre Furtive",
			nameEn: "Silent Sting",
			cost: 3,
			developCost: 2,
			description:
				"Lancer : Placez un jeton Poison sur un adversaire et infligez-lui 1 dégât.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-12",
			name: "Absorbe-Héritage",
			nameEn: "Legacy Slayer",
			cost: 4,
			description:
				"Lorsque préparé, si un joueur acquiert une relique, gagnez 1 charge. Lancer : Infligez 3 dégâts.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-13",
			name: "Chorégraphie Perpétuelle",
			nameEn: "Endless Weave",
			cost: 5,
			description:
				"Lorsque préparé, si vous appliquez votre capacité, un allié peut piocher une carte et peut préparer un sort de sa main sur une brèche ouverte ou fermée. Lancer : Infligez 4 dégâts.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-14",
			name: "Geyser de Flammes",
			nameEn: "Flame Geyser",
			cost: 5,
			developCost: 3,
			description:
				"Lorsque vous développez cette carte, placez un jeton Feu sur un adversaire.(hr)Lancer : Placez un jeton Poison sur un adversaire et infligez-lui 2 dégâts.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-15",
			name: "Faille Temporelle",
			nameEn: "Time Rift",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Chaque joueur peut révéler la première carte de sa pioche et peut soit la défausser soit la remettre sur le dessus de sa pioche.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-16",
			name: "Déferlement Illimité",
			nameEn: "Boundless Engulf",
			cost: 6,
			description:
				"Lancer : Infligez 4 dégâts. Si vous avez huit cartes ou plus, y compris cette carte, dans votre défausse, vous pouvez reprendre cette carte en main.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-17",
			name: "Fontaine des Éléments",
			nameEn: "Fountain of Elements",
			cost: 6,
			developCost: 4,
			description:
				"Lorsque préparé, une fois par tour, lorsqu'un joueur développe une carte, il place un jeton Élément sur un adversaire. Lancer : Infligez 4 dégâts.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-18",
			name: "Siphon de Rétablissement",
			nameEn: "Restoration Siphon",
			cost: 7,
			description:
				"Lancer : Infligez 6 dégâts.(ou)Lancer : Infligez 1 dégât. Gravehold gagne 3 points de vie.",
			expansion: "Le Commencement",
		},
		{
			id: "LC-FIN-19",
			name: "Combustion Alchimique",
			nameEn: "Alchemical Ignition",
			cost: 8,
			description:
				"Lorsque préparé, une fois par tour, lorsqu'un joueur place un jeton Élément, il place un jeton Élément supplémentaire du même type sur le même adversaire. Lancer : Placez 2 jetons Poison sur un adversaire et infligez-lui 2 dégâts.",
			expansion: "Le Commencement",
		},
		{
			id: "P214",
			name: "Révéler le potentiel",
			nameEn: "Unveil Potential",
			cost: 7,
			description:
				"Lorsque préparé, vos autres sorts gagnent le texte « OU Lancer\u00a0: Infligez autant de dégâts que le coût de cette carte. » Lancer : Infligez 5 dégâts.",
			expansion: "Le Commencement",
		},
	],
};
