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
				"Gagnez 1 éther.<br>Vous pouvez détruire cette carte pour gagner 2 éthers supplémentaires.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-059",
			name: "Péridot en Fusion",
			nameEn: "Molten Peridot",
			cost: 3,
			description:
				"Gagnez 2 éthers.<br>S'il s'agit du second Péridot en Fusion que vous jouez ce tour, vous pouvez détruire cette carte pour acquérir une carte d'une pile de la réserve coûtant 4 éthers ou moins.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-060",
			name: "Spirale d'Ambre",
			nameEn: "Helix of Amber",
			cost: 3,
			description:
				"Gagnez 2 éthers.<br>Vous pouvez subir 1 dégât pour détruire une carte de votre main coûtant 0 éther.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-061",
			name: "Phénixium Fossilisé",
			nameEn: "Petrified Phoenixium",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>La prochaine fois que vous acquérez une carte ce tour, vous pouvez lancer le sort préparé d'un joueur.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-062",
			name: "Saphir Galvanisé",
			nameEn: "Galvanized Sapphire",
			requiresXaxos: true,
			cost: 4,
			description: "Gagnez 2 éthers.<br>Xaxos : Paria gagne 1 charge.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-063",
			name: "Cyclite Oblongue",
			nameEn: "Elongated Looq",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>La prochaine fois que vous ouvrez ou stabilisez une brèche ce tour, gagnez 1 charge.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-064",
			name: "Héliolite Intense",
			nameEn: "Vigorous Sunstone",
			cost: 5,
			description:
				"Lorsque vous acquérez cette carte, s'il s'agit de la seconde carte que vous acquérez ce tour, prenez-la en main.<br>Gagnez 3 éthers.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-065",
			name: "Sazite de Duplication",
			nameEn: "Duplicating Sazite",
			cost: 6,
			description:
				"Gagnez 3 éthers.<br>La prochaine fois que vous acquérez une carte ce tour, vous pouvez défausser un sort préparé coûtant 1 éther ou plus pour qu'un allié acquière une carte de la réserve coûtant aussi cher ou moins cher que la carte que vous avez acquise.",
			expansion: "Les Parias",
		},
		{
			id: "P090",
			name: "Sapal scintillant",
			nameEn: "Coruscating Sapal",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Vous pouvez perdre 1 charge. Si vous le faites, gagnez 2 éthers supplémentaires.",
			expansion: "Les Parias",
		},
		{
			id: "LVS-80",
			name: "Quilite de Célérité",
			nameEn: "Quickening Qitite",
			cost: 3,
			description:
				"Gagnez 2 éthers.<br>Vous pouvez défausser une carte de votre main pour stabiliser la brèche II d'un joueur.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-81",
			name: "Urup Serti",
			nameEn: "Jeweled Urup",
			cost: 5,
			description:
				"Gagnez 3 éthers.(ou)S'il s'agit du second Urup Serti que vous jouez ce tour, vous pouvez détruire cette carte pour acquérir une carte d'une pile de la réserve coûtant 7 éthers ou moins.",
			expansion: "Le Village du Sud",
		},
	],
	relics: [
		{
			id: "LP-FIN-066",
			name: "Orbe des Profondeurs",
			nameEn: "Orb of the Deep",
			cost: 2,
			description:
				"Stabilisez votre brèche fermée ayant le coût de stabilisation le plus faible.(ou)Détruisez cette carte. Gagnez 1 charge.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-067",
			name: "Racive Carnivore",
			nameEn: "Carnivorous Roox",
			cost: 3,
			description:
				"Gagnez 1 éther. Vous pouvez détruire une carte de votre main pour gagner autant d'éther que son coût.(ou)Détruisez cette carte pour stabiliser deux fois votre brèche fermée ayant le coût de stabilisation le plus faible.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-068",
			name: "Dague de Faille",
			nameEn: "Rift Dagger",
			cost: 3,
			description:
				"Acquérez une carte d'une autre pile de la réserve dont les cartes coûtent 3 éthers ou moins. Vous pouvez détruire cette relique pour acquérir une carte coûtant jusqu'à 4 éthers à la place.<br>Vous pouvez dépenser 1 éther pour prendre la carte acquise en main.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-069",
			name: "Circuit de Reconstitution",
			nameEn: "Reconstituting Circuit",
			requiresXaxos: true,
			cost: 3,
			description:
				"Xaxos : Paria gagne 1 charge.<br>Vous pouvez détruire 1 carte de votre main.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-070",
			name: "Altérateur de Destin",
			nameEn: "Destiny Forger",
			cost: 4,
			description:
				"Un allié peut détruire une carte de sa main. Ce joueur peut acquérir une carte coûtant jusqu'à 2 éthers de plus que la carte détruite et la prendre en main.(ou)Détruisez cette carte pour gagner 2 charges.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-071",
			name: "Chaîne de Restitution",
			nameEn: "Chain of Retrieval",
			cost: 4,
			description:
				"Stabilisez la brèche d'un allié.(ou)Reprenez en main une carte de votre défausse coûtant 6 éthers ou moins.",
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
			nameEn: "Transmuter's Lens",
			cost: 5,
			description:
				"Détruisez cette carte.<br>Vous pouvez détruire une carte de votre main ou de votre défausse.<br>Acquérez une carte d'une pile de la réserve coûtant jusqu'à 6 éthers.",
			expansion: "Les Parias",
		},
		{
			id: "LP-1a-074",
			name: "Vortex Déséquilibré",
			nameEn: "Unhinged Vortex",
			cost: 7,
			description:
				"Un allié pioche trois cartes. Puis, il défausse une carte de sa main.(ou)Vous pouvez stabiliser la brèche d'un allié. Un allié peut reprendre en main une carte de sa défausse.",
			expansion: "Les Parias",
		},
		{
			id: "P102",
			name: "Coquille bourdonnante",
			nameEn: "Humming Shell",
			cost: 7,
			description:
				"Détruisez jusqu'à deux cartes de votre main ou de votre défausse.(ou)Gagnez 2 charges.",
			expansion: "Les Parias",
		},
		{
			id: "RG-88",
			name: "Oracle de Verre",
			nameEn: "Glass-Eyed Oracle",
			cost: 1,
			description:
				"Gagnez 1 éther.(ou)Détruisez cette carte et le nombre d'exemplaires de cette carte de votre choix que vous avez en main. Vous pouvez acquérir une carte coûtant jusqu'à trois fois le nombre d'exemplaires détruits.",
			expansion: "Retour à Gravehold",
		},
		{
			id: "LVS-82",
			name: "Œil de Chat",
			nameEn: "Cat's Eye",
			cost: 1,
			description:
				"<small>Vous ne pouvez pas acquérir cette carte si vous avez acquis une autre carte ce tour. Vous ne pouvez pas acquérir d'autres cartes si vous avez acquis cette carte ce tour.</small><br>Gagnez 1 charge. Vous pouvez détruire cette carte pour gagner 1 éther.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-83",
			name: "Réplicateur Voltaïque",
			nameEn: "Volt Replicator",
			cost: 4,
			description:
				"Un allié acquiert une carte coûtant 5 éthers ou moins. S'il y a deux Réplicateurs Voltaïques ou moins dans la réserve, vous pouvez détruire cette carte. Si vous le faites, cet allié prend en main la carte acquise.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-84",
			name: "Conduit d'Énergie",
			nameEn: "Energized Conduit",
			cost: 7,
			description:
				"Connectez cette relique à la brèche d'un joueur.<br>Lorsqu'un sort est lancé depuis cette brèche, le joueur qui lance ce sort gagne 1 charge.",
			expansion: "Le Village du Sud",
		},
	],
	spells: [
		{
			id: "LP-FIN-075",
			name: "Givre Renforcé",
			nameEn: "Fortified Frost",
			cost: 2,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, infligez 1 dégât supplémentaire.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-076",
			name: "Orage Jumelé",
			nameEn: "Paired Storm",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. S'il s'agit du second Orage Jumelé que vous lancez ce tour, infligez 2 dégâts supplémentaires.",
			keyword: "link",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-077",
			name: "Morsure Ingénieuse",
			nameEn: "Twisted Fang",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si la pile de la réserve de cette carte est vide, infligez 1 dégât supplémentaire.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-078",
			name: "Éclair Destructeur",
			nameEn: "Shattering Bolt",
			cost: 4,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez détruire une carte de votre main.(ou)Lancer : Défaussez une gemme de votre main. Si vous le faites, infligez 4 dégâts.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-079",
			name: "Combustion Enrichie",
			nameEn: "Infused Ignition",
			requiresXaxos: true,
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si Xaxos : Paria a 4 charges ou moins, il gagne 1 charge.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-080",
			name: "Flèche Éclair",
			nameEn: "Lightning Arrow",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, Gravehold gagne 1 point de vie.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-081",
			name: "Confluence de Radiance",
			nameEn: "Radiant Conflux",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Un allié peut piocher une carte, puis défausser une carte de sa main.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-082",
			name: "Faille Instable",
			nameEn: "Unstable Rift",
			cost: 5,
			description:
				"Lorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât et gagnez 1 éther.<br>Lancer : Infligez 4 dégâts.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-083",
			name: "Afflux de Volonté",
			nameEn: "Gathered Will",
			cost: 5,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez acquérir un sort d'une pile de la réserve coûtant 4 éthers ou moins et le placer sur votre pioche.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-084",
			name: "Tornade de Lucidité",
			nameEn: "Tornado of Insight",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Si vous ne possédez aucune brèche fermée, gagnez 1 charge.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-085",
			name: "Vivacité d'Esprit",
			nameEn: "Hasted Intellect",
			cost: 6,
			description:
				"Lorsque préparé, si vous acquérez une carte, vous pouvez la placer sur votre pioche.<br>Lancer : Infligez 4 dégâts.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-086",
			name: "Effusion de Flammes",
			nameEn: "Swarm of Flame",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Vous pouvez lancer le sort préparé d'un joueur coûtant 5 éthers ou moins.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-087",
			name: "Relais Arcanique",
			nameEn: "Arcane Relay",
			cost: 8,
			description:
				"Lancer : Un allié pioche une carte, puis révèle sa main. Infligez 4 dégâts. Infligez 1 dégât supplémentaire par carte de sa main coûtant 1 éther ou plus.",
			expansion: "Les Parias",
		},
		{
			id: "LP-FIN-088",
			name: "Explosion Étourdissante",
			nameEn: "Dizzying Burst",
			cost: 8,
			description:
				"Lancer : Infligez 6 dégâts. Révélez puis replacez les cartes du paquet d'ordre du tour dans l'ordre de votre choix.",
			expansion: "Les Parias",
		},
		{
			id: "P097",
			name: "Catalyseur de force",
			nameEn: "Force Catalyst",
			cost: 4,
			description:
				"Lorsque préparé, durant votre phase principale, vous pouvez dépenser 3 éthers pour lancer le sort préparé de n'importe quel joueur.<br>Lancer\u00a0: Infligez 3 dégâts.",
			expansion: "Les Parias",
		},
		{
			id: "RG-89",
			name: "Purge",
			nameEn: "Cleanse",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si vous avez 3 points de vie ou moins, gagnez 1 point de vie.",
			expansion: "Retour à Gravehold",
		},
		{
			id: "RG-90",
			name: "Brise-Mémoire",
			nameEn: "Memory Break",
			cost: 6,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez détruire une carte de votre main. Si vous le faites, infligez autant de dégâts supplémentaires que le coût de la carte détruite.",
			expansion: "Retour à Gravehold",
		},
		{
			id: "LVS-85",
			name: "Poing Enflammé",
			nameEn: "Flame Jab",
			cost: 1,
			description:
				"Lancer : Infligez 2 dégâts à un serviteur. Vous pouvez détruire cette carte pour gagner 1 éther.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-86",
			name: "Vents Rassembleurs",
			nameEn: "Gathering Winds",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Si vous avez six autres cartes ou plus dans votre défausse, stabilisez la brèche d'un joueur.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-87",
			name: "Pluie de Braises",
			nameEn: "Cinder Shower",
			cost: 5,
			description:
				"Lorsque préparé, si vous acquérez une carte, infligez 1 dégât.<br>Lancer : Infligez 3 dégâts.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-88",
			name: "Effacement de l'Esprit",
			nameEn: "Erasure of Mind",
			cost: 7,
			description:
				"Lancer : Détruisez une carte de votre main coûtant 3 éthers ou plus. Si vous le faites, infligez 10 dégâts.(ou)Lancer : Infligez 5 dégâts. Révélez les deux premières cartes de votre pioche. Vous pouvez en placer une ou placer les deux cartes dans votre défausse.",
			expansion: "Le Village du Sud",
		},
		{
			id: "LVS-89",
			name: "Feu Faucheur",
			nameEn: "Reaper's Flame",
			cost: 7,
			description:
				"Lorsque préparé, une fois par tour, si vous lancez un autre sort, vous pouvez acquérir une carte d'une pile de la réserve coûtant 5 éthers ou moins.<br>Lancer : Infligez 5 dégâts.",
			expansion: "Le Village du Sud",
		},
	],
};
