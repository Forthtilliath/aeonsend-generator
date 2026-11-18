import type { CardsByType } from "../../../types";

// Vague 4 : Une Ère Nouvelle, Rêves Brisés, De Vieux Souvenirs.
export const cards: CardsByType = {
	gems: [
		{
			id: "EN-FIN-035",
			name: "Perle résonnante",
			nameEn: "Resonant Pearl",
			cost: 3,
			description:
				"Gagnez 2 Ether.\nUn allié peut défauser une Perle résonnante de sa main pour pioche une carte. S'il le fait, gagnez 1 Ether supplémentaire.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-036",
			name: "Exogranite",
			nameEn: "Exogranite",
			cost: 3,
			description: "Gagnez 2 Ether.(ou)Détruisez cette carte. Gagnez 3 Ether.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-037",
			name: "Sionite de l'ombre",
			nameEn: "Lurking Sionite",
			cost: 3,
			description:
				"Gagnez 2 Ether.\nSi une Sionite de l'ombre se trouve dans la défausse d'un allié, gagnez 1 Ether supplémentaire.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-038",
			name: "Jaspe périodiquee",
			nameEn: "Recurring Jasper",
			cost: 4,
			description:
				"Gagnez 2 Ether.\nSi la première carte de vote défausse est un sort, vous pouvez placer cette gemme sur votre pioche.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-039",
			name: "Rubidium énergisé",
			nameEn: "Energized Rubidium",
			cost: 5,
			description:
				"Gagnez 3 Ether.\nUn allié peut défausse une carte de sa main. S'il le fait, ce joueur gagne 1 charge.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "P39",
			name: "Quartz Fracturé",
			nameEn: "Fractured Quartz",
			cost: 6,
			description:
				"Gagnez 2 Ether.\nVous pouvez détruire deux cartes de cette pile de cartes. Si vous le faites, gagnez 1 Ether supplémentaire.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-040",
			name: "Explosite brute",
			nameEn: "Unrefined Blaststone",
			cost: 6,
			description:
				"Gagnez 3 Ether.(ou)Détruisez une carte présente dans la pile de la réserve de cette carte. Si vous le faites, infigez 3 dégâts.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "RB-057",
			name: "Olivinite",
			nameEn: "Olivinite",
			cost: 3,
			description: "Gagnez 2 Ether.(ou)Infligez 1 dégât à un serviteur.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-058",
			name: "Verre à facettes",
			nameEn: "Cache Glass",
			cost: 4,
			description:
				"Gagnez 2 Ether.\nSi un Verre à facettes se trouve dans votre défausse, vous pouvez détruire une carte de votre défausse.",
			expansion: "Rêves Brisés",
		},
		{
			id: "DVS-050",
			name: "Fluorite lumineuse",
			nameEn: "Shining Fluorite",
			cost: 7,
			description:
				"Gagnez 3 Ether.\nPlacez le prochain sort que vous acquérez ce tour dans votre main.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "AES-93",
			name: "Encéphaze",
			nameEn: "Jeweled Brain",
			cost: 3,
			description:
				"Gagnez 2 Ether.(ou)Gagnez 1 Ether. Reprenez en main une carte de votre défausse coûtant 0 Ether.",
			expansion: "À l'État Sauvage",
		},
	],
	relics: [
		{
			id: "EN-FIN-041",
			name: "Galaxie de poche",
			nameEn: "Marble Galaxy",
			cost: 2,
			description:
				"Un allié peut défausser une Galaxie de poche de sa main pour pioche une carte. Gagnez 1 charge ou stabilisez votre brèche fermée qui présente le coût de stabilisation le plus faible. Si un allié a défaussé une Galaxie de poche. résolvez ces deux effets.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-042",
			name: "Babiole galvanisée",
			nameEn: "Galvanized Bauble",
			cost: 3,
			description:
				"Stabilisez la brèche d'un allié.(ou)Lancez le sort préparé d'un joueur. Vous pouvez détruire ce sort.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-043",
			name: "Feu en cage",
			nameEn: "Caged Fire",
			cost: 3,
			description:
				"Détruisez la prmeière carte de la défausse d'un joueur.(ou)Détruisez cette carte. Gagnez 2 points de vie.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-44",
			name: "Conduit de douleur",
			nameEn: "Pain Conduit",
			cost: 3,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, il inflige 2 dégâts supplémentaires. Cette relique est ensuite défaussée.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-45",
			name: "Conduit d'éther",
			nameEn: "Aether Conduit",
			cost: 4,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, le joueur qui lance ce sort gagne 1 Ether.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-46",
			name: "Conduit de lien",
			nameEn: "Link Conduit",
			cost: 6,
			description:
				"Connectez cette relique à la brèche d'un joueur. Deux sorts peuvent être préparés sur cette brèche.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-47",
			name: "Puits d'énergie",
			nameEn: "Well of Energy",
			cost: 7,
			description:
				"Gravehold gagne 2 points de vie.(ou)Un joueur gagne 2 points de vie.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "P085",
			name: "Bouclier de combustion",
			nameEn: "Abacus of Ignition",
			cost: 4,
			description:
				"Vous pouvez lancer le sort préparé d'un allié. Un allié pioche une carte.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "P087",
			name: "Lance-pierres précieuses",
			nameEn: "Rock Launcher",
			cost: 3,
			description:
				"Défaussez ou détruisez une carte de votre main. Si vous le faites, infligez un nombre de dégâts égal à son coût.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "RB-059",
			name: "Conduit de réflexion",
			nameEn: "Reflective Conduit",
			cost: 3,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorssqu'un sort est lancé depuis cette brèche, le joueur qui a lancé ce sort peut reprendre celui-ci en main au lieu de le défausser.\nS'il le fait, défaussez cette carte.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-060",
			name: "Tisse-volonté",
			nameEn: "Will Weaver",
			cost: 7,
			description:
				"Gagnez 2 charges.\nAprès la prochaine fois que vous avez appliqué votre capacité ce tour, infligez 3 dégâts.",
			expansion: "Rêves Brisés",
		},
		{
			id: "DVS-051",
			name: "Turbine polyphasée",
			nameEn: "Polyphase Turbine",
			cost: 3,
			description:
				"S'il s'agit de la première Turbine polyphasée que vous jouez ce tour, gagnez 2 Ether.\nSinon, gagnez 1 charge et 1 Ether.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "DVS-052",
			name: "Extracteur de brèches",
			nameEn: "Breach Extractor",
			cost: 5,
			description:
				"Un joueur détruit jusqu'à deux cartes de sa main.(ou)Détruisez cette carte pour gagner 3 points de vie à Gravehold.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "DVS-053",
			name: "Conduit de stabilisation",
			nameEn: "Focusing Conduit",
			cost: 5,
			description:
				"Connectez cette relique à la brèche d'un joueur. À la fin de la phase d'incantation de ce joueur, stabilisez cette brèche. Lorsque cette brèche est ouverte, détruisez cette carte.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "AES-94",
			name: "Squère Instable",
			nameEn: "Blast Sphere",
			cost: 8,
			description:
				"Lancez le sort préparé d'un joueur trois fois sans le défausser, puis détruisez-le.",
			expansion: "À l'État Sauvage",
		},
	],
	spells: [
		{
			id: "P23",
			name: "Esprit voleur",
			nameEn: "Thieving Spirit",
			cost: 5,
			description: "Lancer : Infligez 4 dégâts. Gagnez 1 Ether.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-048",
			name: "Épines en chaîne",
			nameEn: "Tethered Darts",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, vous pouvez le placer dans la main d'un allié.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-049",
			name: "Choc répercuté",
			nameEn: "Reverberating Shock",
			cost: 4,
			description:
				"(echo)Lancer : Infligez 1 dégât. Gagnez 1 Ether qui ne peut être utilisé que pour acquérir des cartes.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-050",
			name: "Décuple-force",
			nameEn: "Force Amplifier",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, infligez 1 dégât supplémentaire.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-051",
			name: "Symbiose léthale",
			nameEn: "Fatal Harmony",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Un allié peut défausser une Symbiose léthale de sa main pour pioche une carte. S'il le fait, infligez 3 dégâts. (Les effets modifiants les dégâts concernent les deux sources de dégâts.)",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-052",
			name: "Rebonds explosifs",
			nameEn: "Bouncing Boom",
			cost: 6,
			description: "(echo)Lancer : Infligez 2 dégâts.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-053",
			name: "Déluge de puissance",
			nameEn: "Deluge of Power",
			cost: 6,
			description:
				"Lancer : Infligez 4 dégâts. Un allié peut défausser jusqu'à deux cartes de sa main et pioche ensuite une carte pour chaque carte ainsi défaussée.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-054",
			name: "Frappe calculée",
			nameEn: "Patterned Strike",
			cost: 7,
			description:
				"Lancer : Infligez 4 dégâts. Vous pouvez reprendre en main jusqu'à deux cartes de votre défausse coûtant 0 Ether.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-055",
			name: "Impact concetré",
			nameEn: "Imbued Smash",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, infligez 2 dégâts à la némésis. (Les effets modifiant les dégâts concernent les deux sources de dégâts.)",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "EN-FIN-056",
			name: "Ascension spirituelle",
			nameEn: "Spirit Lift",
			cost: 8,
			description:
				"Lorsque préparé, une fois par tour, si vous gagnez une charge lors de votre tour, un allié gagne 2 charges. Lancer : Infligez 5 dégâts.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "P086",
			name: "Flamme éclairante",
			nameEn: "Illuminating Flame",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, vous pouvez le détruire. Si vous le faites, gagnez 3 charges.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "P088",
			name: "Arc temporel",
			nameEn: "Chronal Arc",
			cost: 7,
			description:
				"(duo)Lancer : Infligez 4 dégâts. Vous pouvez placer cette carte dans votre main.",
			expansion: "Une Ère Nouvelle",
		},
		{
			id: "RB-061",
			name: "Cherche-brèche",
			nameEn: "Breach Seeker",
			cost: 5,
			description:
				"(echo)Lancer : Infligez 1 dégât. Stabilisez la brèche d'un allié.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-062",
			name: "Mantra de force",
			nameEn: "Mantra of Strength",
			cost: 3,
			description:
				"Lancer : Un joueur stabilise sa brèche fermée ayant le coût le plus élevé. Infligez 1 dégât. Vous pouvez détruire cette carte. Si vous le faites, infligez 2 dégâts supplémentaires.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-063",
			name: "Flamme incarnée",
			nameEn: "Embody Flame",
			cost: 7,
			description:
				"Lancer : Infligez 5 dégâts. Vous pouvez détruire une carte de la pile de la réserve de cette carte. Si vous le faites, infligez 3 dégâts supplémentaires.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-064",
			name: "Rayon crescendo",
			nameEn: "Crescendo Ray",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Gagnez 1 Ether par autre sort que vous avez préparé.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-065",
			name: "Rituel éclair",
			nameEn: "Snap Ritual",
			cost: 6,
			description:
				"Lorsque préparé, une fois par tour durant votrre phase principale, vous pouvez défausser une carte de votre main pour infligez 2 dégâts. Lancer : Infligez 3 dégâts.",
			expansion: "Rêves Brisés",
		},
		{
			id: "RB-066",
			name: "Vapeur d'orage",
			nameEn: "Storm Vapors",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si une autre Vapeur d'orage se trouve dans la défausse d'un joueur, stabilisez la brèche d'un joueur.",
			expansion: "Rêves Brisés",
		},
		{
			id: "DVS-054",
			name: "Double détonation",
			nameEn: "Dual Flash",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. S'il s'agit de la première Double détonation que vous lancez ce tour lors de votre phase d'incantation, vous pouvez lancer la Double détonation préparée d'un joueur sans la défausser.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "DVS-055",
			name: "Invoque-débris",
			nameEn: "Dust Caller",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Un allié reprend en main une carte de sa défausse coûtant 0 Ether.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "DVS-056",
			name: "Synapse symbiotique",
			nameEn: "Symbiotic Synapse",
			cost: 7,
			description:
				"Si une autre Synapse symbiotique se trouve dans la défausse d'un joueur, ce sort gagne Écho. Lancer : Infligez 4 dégâts.",
			expansion: "De Vieux Souvenirs",
		},
		{
			id: "AES-95",
			name: "Cicatriseur",
			nameEn: "Wound Mender",
			cost: 8,
			description:
				"(echo)Lancer : Infligez 2 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, gagnez 1 point de vie.",
			expansion: "À l'État Sauvage",
		},
	],
};
