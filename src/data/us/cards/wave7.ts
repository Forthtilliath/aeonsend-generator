import type { CardsByType } from "../../../types";

// Vague 7 (Past and Future, Origins, Evolution) : traduction maison d'après
// https://aeonsend.wiki.gg/. Les cartes obtenues par échange (Illuminite,
// Diamin…) ne sont pas des piles du marché : seul leur nom apparaît ici.
export const cards: CardsByType = {
	gems: [
		{
			id: "FUT-1a-02",
			name: "Grenat éclaté",
			nameEn: "Splintered Garnet",
			cost: 5,
			developCost: 4,
			description:
				"Lorsque vous développez cette carte, détruisez une gemme que vous avez jouée ce tour.(hr)Gagnez 3 éthers.",
			expansion: "Past and Future",
		},
		{
			id: "FUT-2b-02",
			name: "Calcite amplificatrice",
			nameEn: "Amplifying Calcite",
			cost: 3,
			description:
				"Gagnez 2 éthers.(ou)Gagnez 3 éthers utilisables uniquement pour développer des cartes.",
			expansion: "Past and Future",
		},
		{
			id: "FUT-3b-02",
			name: "Éclat de mica",
			nameEn: "Mica Shard",
			cost: 4,
			description:
				"Lorsque vous acquérez cette carte, vous pouvez Conjurer sur l'une de vos brèches ouvertes ou fermées. Gagnez 2 éthers.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-2b-02",
			name: "Pierre luisante",
			nameEn: "Glowstone",
			cost: 3,
			description:
				"Gagnez 2 éthers.<br>Échangez cette carte contre Illuminite.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-3b-02",
			name: "Or des fous",
			nameEn: "Fool's Gold",
			cost: 5,
			description:
				"Gagnez 3 éthers.<br>Vous pouvez échanger cette carte contre Frapper.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-2b-16",
			name: "Fossile encapsulé",
			nameEn: "Encased Fossil",
			cost: 4,
			description:
				"Gagnez 2 éthers.<br>Vous pouvez dépenser 6 éthers pour échanger cette carte contre Diamin.",
			expansion: "Past and Future",
		},
		{
			id: "P157",
			name: "Éclat de citrine",
			nameEn: "Citrine Shrapnel",
			cost: 3,
			description:
				"Gagnez 1 éther par exemplaire de cette carte dans la zone de développement.(ou)Développez un Éclat de citrine.",
			expansion: "Past and Future",
		},
		{
			id: "ORI-11",
			name: "Rhodonix",
			nameEn: "Rhodonix",
			cost: 6,
			description:
				"Gagnez 3 éthers.<br>S’il s’agit de la première Rhodonix que vous jouez ce tour, piochez une carte supplémentaire à la fin du tour.",
			expansion: "Origins",
		},
		{
			id: "EVO-02",
			name: "Lichen nourricier",
			nameEn: "Feeding Lichen",
			cost: 5,
			developCost: 3,
			description:
				"Gagnez 2 éthers. Si la némésis est au palier 2 ou plus, piochez une carte supplémentaire à la fin de ce tour.",
			expansion: "Evolution",
		},
	],
	relics: [
		{
			id: "FUT-1b-02",
			name: "Branche de Taluna",
			nameEn: "Taluna Branch",
			cost: 6,
			developCost: 4,
			description:
				"Lorsque vous Développez cette carte, un allié gagne 1 jeton éther.(hr)Stabilisez n'importe quelle brèche d'un joueur. Un joueur peut détruire une carte en main ou dans sa défausse.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-1a-02",
			name: "Tome des Anciens",
			nameEn: "Tome of the Ancients",
			cost: 2,
			description:
				"Si toutes vos brèches sont ouvertes, détruisez cette carte, puis détruisez jusqu'à deux cartes de votre main ou de votre défausse. Sinon, stabilisez votre brèche fermée ayant le coût de stabilisation le plus faible.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-1b-02",
			name: "Artefact inscrutable",
			nameEn: "Inscrutable Artifact",
			cost: 6,
			description:
				"Lancez le sort préparé d'un joueur coûtant 5 éthers ou moins sans le défausser. Si vous avez 3 points de vie ou moins, échangez cette carte contre Rune d’Éther.",
			expansion: "Past and Future",
		},
		{
			id: "FUT-2b-09",
			name: "Montre de gousset imprégnée",
			nameEn: "Imbued Pocketwatch",
			cost: 2,
			developCost: 3,
			description:
				"Un joueur gagne 1 charge. S'il y a au moins deux Montres de gousset imprégnées dans la zone de développement, un joueur gagne 1 point de vie.",
			expansion: "Past and Future",
		},
		{
			id: "P164",
			name: "Graine de cataclysme",
			nameEn: "Cataclysm Seed",
			cost: 7,
			description:
				"Gagnez 1 charge.(ou)Détruisez cette carte. Chaque joueur peut détruire autant de cartes de sa main qu'il le souhaite.",
			expansion: "Past and Future",
		},
		{
			id: "EVO-09",
			name: "Lanterne d'automne",
			nameEn: "Fall Lantern",
			cost: 5,
			developCost: 4,
			description:
				"Lorsque vous développez cette carte, infligez 2 dégâts.(hr)Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, un allié peut préparer un sort sur l'une de ses brèches ouvertes ou fermées.",
			expansion: "Evolution",
		},
		{
			id: "EVO-14",
			name: "Grève croissante",
			nameEn: "Crescent Greave",
			cost: 8,
			developCost: 5,
			description:
				"Lorsque vous développez cette carte, piochez une carte supplémentaire à la fin de ce tour.(hr)Gagnez 2 charges. Piochez une carte supplémentaire à la fin de ce tour.",
			expansion: "Evolution",
		},
	],
	spells: [
		{
			id: "FUT-1b-07",
			name: "Tempête grandissante",
			nameEn: "Building Storm",
			cost: 4,
			developCost: 2,
			description:
				"Lancer\u00a0: Infligez 2 dégâts.<br>Infligez 1 dégât supplémentaire par exemplaire de cette carte dans la zone de développement.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-1a-07",
			name: "Dévorer la magie",
			nameEn: "Consume Magic",
			cost: 4,
			description:
				"Lancer\u00a0: Infligez 3 dégâts.<br>Si ces dégâts permettent de défausser un serviteur du paquet Némésis, échangez cette carte contre Détonation (Detonate).",
			expansion: "Past and Future",
		},
		{
			id: "FUT-1a-09",
			name: "Courroux du voyant",
			nameEn: "Seer's Wrath",
			cost: 5,
			developCost: 3,
			description:
				"Lorsque vous développez cette carte, regardez la première carte du paquet d'ordre du tour. Vous pouvez la replacer au-dessus ou en dessous de ce paquet.(hr)Lancer\u00a0: Infligez 3 dégâts.",
			expansion: "Past and Future",
		},
		{
			id: "FUT-3b-09",
			name: "Lance de chardon",
			nameEn: "Thistle Spear",
			cost: 8,
			developCost: 5,
			description:
				"Lancer\u00a0: Infligez 5 dégâts.<br>Un allié peut acquérir une carte de la zone de développement et la prendre en main.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-1b-12",
			name: "Gueule caverneuse",
			nameEn: "Cavernous Maw",
			cost: 3,
			description:
				"Lancer\u00a0: Infligez 2 dégâts.<br>Vous pouvez détruire une carte de votre défausse coûtant 4 éthers ou plus. Si vous le faites, échangez cette carte contre Flamme de dragon (Dragonflare) et placez-la sur le dessus de votre pioche.",
			expansion: "Past and Future",
		},
		{
			id: "FUT-1a-14",
			name: "Frappe liée",
			nameEn: "Tethered Smite",
			cost: 7,
			developCost: 4,
			description:
				"Lancer : Infligez 5 dégâts, répartis comme vous le souhaitez entre la némésis et un nombre quelconque de serviteurs.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-3b-16",
			name: "Descente du héraut",
			nameEn: "Harbinger Descent",
			cost: 8,
			description:
				"Lancer\u00a0: Infligez 6 dégâts.<br>Vous pouvez défausser trois de vos autres sorts préparés pour échanger cette carte contre Apocalypse.",
			expansion: "Past and Future",
		},
		{
			id: "PAS-1a-17",
			name: "Fulgurance prismatique",
			nameEn: "Prismatic Flare",
			cost: 5,
			description:
				"Lorsque vous préparez cette carte, stabilisez votre brèche III.<br>Lancer : Infligez 3 dégâts.",
			expansion: "Past and Future",
		},
		{
			id: "ORI-18",
			name: "Tendon cinglant",
			nameEn: "Lashing Sinew",
			cost: 5,
			description:
				"Lorsque vous préparez cette carte, piochez une carte supplémentaire à la fin de ce tour.<br>Lancer : Infligez 2 dégâts.",
			expansion: "Origins",
		},
		{
			id: "ORI-23",
			name: "Propulsion",
			nameEn: "Propel",
			cost: 5,
			description:
				"Lancer\u00a0: Infligez 4 dégâts.<br>Si vous avez placé cette carte dans votre défausse, échangez-la contre Rassembler les forces (Gather Force).",
			expansion: "Origins",
		},
		{
			id: "ORI-33",
			name: "Pluie d'étoiles",
			nameEn: "Starfall",
			cost: 6,
			description:
				"Lancer\u00a0: Infligez 3 dégâts.<br>Révélez les trois premières cartes de votre pioche. Vous pouvez préparer l'un des sorts révélés, autre qu'une Pluie d'étoiles.",
			expansion: "Origins",
		},
		{
			id: "EVO-19",
			name: "Courant réfléchissant",
			nameEn: "Reflecting Current",
			cost: 6,
			description:
				"Lorsque préparé, quand vous préparez un autre sort, gagnez 1 éther.<br>Lancer : Infligez 4 dégâts.",
			expansion: "Evolution",
		},
	],
};
