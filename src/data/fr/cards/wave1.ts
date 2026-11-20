import type { CardsByType } from "../../../types";

// Vague 1 : Aeon's End, Les Profondeurs, Les Sans-Noms.
export const cards: CardsByType = {
	gems: [
		{
			id: "AE01",
			name: "Opale brûlante",
			nameEn: "Burning Opal",
			cost: 5,
			description:
				"Gagnez 3 éthers.<br>Vous pouvez défausser une carte de votre main pour qu'un allié pioche une carte.",
			expansion: "Aeon's End",
		},
		{
			id: "AE02",
			name: "Saphir nuageux",
			nameEn: "Clouded Sapphire",
			cost: 6,
			description:
				"Gagnez 3 éthers.<br>S'il s'agit du premier Saphir nuageux que vous jouez ce tour, un allié gagne 1 charge.",
			expansion: "Aeon's End",
		},
		{
			id: "AE03",
			name: "Agrégat de diamants",
			nameEn: "Diamond Cluster",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Si c'est le second Agrégat de diamants que vous jouez ce tour, gagnez 2 éthers de plus.",
			expansion: "Aeon's End",
		},
		{
			id: "AE04",
			name: "Jade",
			nameEn: "Jade",
			cost: 2,
			description: "Gagnez 2 éthers.",
			expansion: "Aeon's End",
		},
		{
			id: "AE05",
			name: "Rubis fulgurant",
			nameEn: "Searing Ruby",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Gagnez 1 éther supplémentaire qui ne peut être utilisé que pour acquérir un sort.",
			expansion: "Aeon's End",
		},
		{
			id: "AE06",
			name: "Perle filtrante",
			nameEn: "Sifter's Pearl",
			cost: 3,
			description:
				"Gagnez 2 éthers.<br>Chaque joueur révèle la première carte de sa pioche et peut soit la défausser soit la remettre sur le dessus de sa pioche.",
			expansion: "Aeon's End",
		},
		{
			id: "AE07",
			name: "Ambre de V'risbois",
			nameEn: "V'riswood Amber",
			cost: 3,
			description:
				"Lorsque vous acquérez cette carte, vous pouvez la placer au-dessus de votre pioche.<br>Gagnez 2 éthers.",
			expansion: "Aeon's End",
		},
		{
			id: "LP28",
			name: "Topaze de Bannissement",
			nameEn: "Banishing Topaz",
			cost: 5,
			description:
				"Gagnez 2 éthers.<br>Vous pouvez placer une carte de votre main sur le dessus de votre pioche. Si vous le faites, gagnez 2 éthers supplémentaires.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LSN36",
			name: "Agate Sangsue",
			nameEn: "Leeching Agate",
			cost: 3,
			description:
				"Lorsque vous gagnez cette carte, gagnez une charge.<br>Gagnez 2 éthers.",
			expansion: "Les Sans-Noms",
		},
	],
	relics: [
		{
			id: "AE08",
			name: "Bâton d'explosion",
			nameEn: "Blasting Staff",
			cost: 4,
			description:
				"Vous pouvez lancer un sort que vous avez préparé ce tour-ci et infliger 2 dégâts supplémentaires avec ce sort.",
			expansion: "Aeon's End",
		},
		{
			id: "AE09",
			name: "Vortex en bouteille",
			nameEn: "Bottled Vortex",
			cost: 3,
			description:
				"Détruisez cette carte.<br>Détruisez jusqu'à deux cartes de votre main ou de votre défausse.<br>Pioche une carte.",
			expansion: "Aeon's End",
		},
		{
			id: "AE10",
			name: "Dague fléchissante",
			nameEn: "Flexing Dagger",
			cost: 2,
			description:
				"La prochaine brèche que vous stabilisez ou que vous ouvrez lors de ce tour vous coûte 3 éthers de moins.(ou)Détruisez cette carte. Infligez 1 dégât.",
			expansion: "Aeon's End",
		},
		{
			id: "AE11",
			name: "Orbe de stabilisation",
			nameEn: "Focusing Orb",
			cost: 4,
			description:
				"Stabilisez la brèche d'un joueur.(ou)Détruisez cette carte pour faire gagner 3 points de vie à Gravehold.",
			expansion: "Aeon's End",
		},
		{
			id: "AE12",
			name: "Talisman de mage",
			nameEn: "Mage's Talisman",
			cost: 5,
			description: "Gagnez 1 charge.<br>Un allié gagne 1 charge.",
			expansion: "Aeon's End",
		},
		{
			id: "AE13",
			name: "Prisma instable",
			nameEn: "Unstable Prism",
			cost: 3,
			description:
				"Appliquez deux fois l'effet d'une gemme de votre main, puis détruisez-là.(ou)Gagnez 2 éthers.",
			expansion: "Aeon's End",
		},
		{
			id: "LP29",
			name: "Transmogrifieur",
			nameEn: "Transmogrifier",
			cost: 4,
			description:
				"Détruisez une carte de votre main. Vous pouvez acquérir une carte de la réserve coûtant jusqu’à 3 éthers de plus que la carte détruite.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LP30",
			name: "Dynamo de Vigueur",
			nameEn: "Vim Dynamo",
			cost: 4,
			description:
				"Subissez 1 dégât. Un joueur pioche deux cartes.(ou)Détruisez cette carte. Un joueur gagne 2 points de vie et 1 charge.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LSN37",
			name: "Marteau en fusion",
			nameEn: "Molten Hammer",
			cost: 5,
			description:
				"Gagnez 1 charge.<br>Vous pouvez détruire une carte de votre main ou du dessus de la défausse de n'importe quel joueur.",
			expansion: "Les Sans-Noms",
		},
		{
			id: "LSN38",
			name: "Spirale temporelle",
			nameEn: "Temporal Helix",
			cost: 7,
			description:
				"Lancez un sort préparé de n'importe quel joueur sans le défausser.",
			expansion: "Les Sans-Noms",
		},
	],
	spells: [
		{
			id: "AE14",
			name: "Vision amplifiée",
			nameEn: "Amplify Vision",
			cost: 4,
			description:
				"Lancer : Stabilisez votre brèche ayant le coût le plus faible. Infligez 2 dégâts. Si toutes vos brèches sont ouvertes, infligez 1 dégât de plus.",
			expansion: "Aeon's End",
		},
		{
			id: "AE15",
			name: "Nexus des arcanes",
			nameEn: "Arcane Nexus",
			cost: 7,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez reprendre une gemme jouée ce tour-ci en main.<br>Lancer : Infligez 4 dégâts.",
			expansion: "Aeon's End",
		},
		{
			id: "AE16",
			name: "Arc chaotique",
			nameEn: "Chaos Arc",
			cost: 6,
			description:
				"Lancer : Infligez 3 dégâts. Infligez 2 dégâts supplémentaires par sort préparé sur une brèche adjacente.",
			expansion: "Aeon's End",
		},
		{
			id: "AE17",
			name: "Vide dévorant",
			nameEn: "Consuming Void",
			cost: 7,
			description:
				"Lancer : Détruisez jusqu'à deux cartes de votre main. Infligez 3 dégâts par carte détruite de cette manière.",
			expansion: "Aeon's End",
		},
		{
			id: "AE18",
			name: "Feu obscur",
			nameEn: "Dark Fire",
			cost: 5,
			description:
				"Lancer : Défaussez jusqu'à deux cartes de votre main. Infligez 3 dégâts par carte que vous avez dfaussée de cette manière.",
			expansion: "Aeon's End",
		},
		{
			id: "AE19",
			name: "Vol d'essence",
			nameEn: "Essence Theft",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, un joueur gagne 1 point de vie.",
			expansion: "Aeon's End",
		},
		{
			id: "AE20",
			name: "Éclair enragé",
			nameEn: "Feral Lightning",
			cost: 5,
			description:
				"Ce sort peut être préparé sur une brèche fermée sans qu'elle doive être stabilisée.<br>Lancer : Infligez 3 dégâts.",
			expansion: "Aeon's End",
		},
		{
			id: "AE21",
			name: "Mise à feu",
			nameEn: "Ignite",
			cost: 4,
			description: "Lancer : Infligez 2 dégâts. Un allié gagne 1 charge.",
			expansion: "Aeon's End",
		},
		{
			id: "AE22",
			name: "Tentacule de lave",
			nameEn: "Lava Tendril",
			cost: 4,
			description:
				"Lorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât.<br>Lancer : Infligez 3 dégâts.",
			expansion: "Aeon's End",
		},
		{
			id: "AE23",
			name: "Vague d'oubli",
			nameEn: "Oblivion Swell",
			cost: 5,
			description:
				"Lorsque préparé, une fois par tour, durant votre phase principale, gagnez 1 éther.<br>Lancer : Infligez 2 dégâts. Vous pouvez défausser une gemme pour infliger autant de dégâts supplémentaire que son coût.",
			expansion: "Aeon's End",
		},
		{
			id: "AE24",
			name: "Flamme du phénix",
			nameEn: "Phoenix Flame",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez perdre 1 charge pour infliger 2 dégâts supplémentaires.",
			expansion: "Aeon's End",
		},
		{
			id: "AE25",
			name: "Aperçu planaire",
			nameEn: "Planar Insight",
			cost: 6,
			description:
				"Lancer : Infligez 2 dégâts. Infligez 1 dégât supplémentaire pour chacune de vos brèches ouvertes.",
			expansion: "Aeon's End",
		},
		{
			id: "AE26",
			name: "Écho spectral",
			nameEn: "Spectral Echo",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez détruire une carte de votre main.",
			expansion: "Aeon's End",
		},
		{
			id: "AE27",
			name: "Fouet ardent",
			nameEn: "Wildfire Whip",
			cost: 6,
			description:
				"Lorsque préparé, vous pouvez dépenser 2 éthers durant votre phase principale, pour lancer un sort préparé chez n'importe quel joueur.<br>Lancer : Infligez 4 dégâts.",
			expansion: "Aeon's End",
		},
		{
			id: "LP31",
			name: "Combustion",
			nameEn: "Combustion",
			cost: 5,
			description:
				"Lancer\u00a0: Infligez 2 dégâts à un serviteur.<br>Infligez 2 dégâts à un autre serviteur ou à la némésis.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LP32",
			name: "Ombre Dévorante",
			nameEn: "Devouring Shadow",
			cost: 6,
			description:
				"Lorsque préparé, une fois par tour, durant votre phase principale, vous pouvez détruire une carte de votre main.<br>Lancer : Infligez 3 dégâts.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LP33",
			name: "Faux de Désintégration",
			nameEn: "Disintegrating Scythe",
			cost: 7,
			description:
				"Lancer : Infligez 8 dégâts. Subissez 1 dégât. Plutôt que de défausser cette carte, détruisez-la, ou place-là sur la défausse d'un joueur.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LP34",
			name: "Brasier Monstrueux",
			nameEn: "Monstrous Inferno",
			cost: 8,
			description:
				"Lancer : Infligez 7 dégâts répartis librement entre la némésis et autant de serviteurs que souhaité.",
			keyword: "duo",
			expansion: "Les Profondeurs",
		},
		{
			id: "LP35",
			name: "Lien du Vide",
			nameEn: "Void Bond",
			cost: 4,
			description:
				"Lancer\u00a0: Infligez 3 dégâts.<br>Vous pouvez lancer le sort préparé d’un joueur.",
			expansion: "Les Profondeurs",
		},
		{
			id: "LSN39",
			name: "Flamber",
			nameEn: "Blaze",
			cost: 4,
			description:
				"Lorsque vous gagnez cette carte, vous pouvez la placer sur la défausse de n'importe quel joueur.<br>Lancer : Infligez 2 dégâts. Infligez 1 dégât supplémentaire par Flamber que vous avez lancé ce tour et par autre Flamber préparé sur vos brèches.",
			expansion: "Les Sans-Noms",
		},
		{
			id: "LSN40",
			name: "Radiance",
			nameEn: "Radiance",
			cost: 8,
			description: "Lancer : Infligez 5 dégâts. Chaque allié pioche une carte.",
			expansion: "Les Sans-Noms",
		},
		{
			id: "LSN41",
			name: "La marque du sage",
			nameEn: "Sage's Brand",
			cost: 7,
			description:
				"Lorsque préparé, piochez une carte de plus lors de votre phase de pioche.<br>Lancer : Infligez 6 dégâts.",
			keyword: "duo",
			expansion: "Les Sans-Noms",
		},
		{
			id: "LSN42",
			name: "Éclair de prophétie",
			nameEn: "Scrying Bolt",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Vous pouvez perdre 1 charge. Si vous le faites, révélez les deux premières cartes de la pioche de la némésis et replacez-les dans l'ordre de votre choix.",
			expansion: "Les Sans-Noms",
		},
	],
};
