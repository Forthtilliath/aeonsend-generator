import type { Card } from "../types";

export const cards: Record<string, Card[]> = {
	gems: [
		{
			id: "P089",
			name: "Quartz fracturé",
			cost: 4,
			description:
				"Gagnez 2 Ether. Vous pouvez détruire deux cartes de cette piles de cartes. Si vous le faites, gagnez 1 Ether supplémentaire",
			image: "",
		},
		{
			id: "R39",
			name: "Scarabée fossilisé",
			cost: 3,
			description: "Gagnez 2 Ether OU Détruisez une carte de votre main.",
			image: "",
		},
		{
			id: "DVS-050",
			name: "Fluorite lumineuse",
			cost: 7,
			description:
				"Gagnez 3 Ether. Placez le prochain sort que vous acquérez ce tour dans votre main.",
			image: "",
		},
		{
			id: "EN-FIN-035",
			name: "Perle résonnante",
			cost: 3,
			description:
				"Gagnez 2 Ether. Un allié peut défauser une Perle résonnante de sa main pour pioche une carte. S'il le fait, gagnez 1 Ether supplémentaire.",
			image: "",
		},
		{
			id: "EN-FIN-036",
			name: "Exogranite",
			cost: 3,
			description: "Gagnez 2 Ether. OU Détruisez cette carte. Gagnez 3 Ether.",
			image: "",
		},
		{
			id: "EN-FIN-037",
			name: "Sionite de l'ombre",
			cost: 3,
			description:
				"Gagnez 2 Ether. Si une Sionite de l'ombre se trouve dans la défausse d'un allié, gagnez 1 Ether supplémentaire.",
			image: "",
		},
		{
			id: "EN-FIN-038",
			name: "Jaspe périodiquee",
			cost: 4,
			description:
				"Gagnez 2 Ether. Si la première carte de vote défausse est un sort, vous pouvez placer cette gemme sur votre pioche.",
			image: "",
		},
		{
			id: "EN-FIN-039",
			name: "Rubidium énergisé",
			cost: 5,
			description:
				"Gagnez 3 Ether. Un allié peut défausse une carte de sa main. S'il le fait, ce joueur gagne 1 charge.",
			image: "",
		},
		{
			id: "EN-FIN-040",
			name: "Explosite brute",
			cost: 6,
			description:
				"Gagnez 3 Ether. OU Détruisez une carte présente dans la pile de la réserve de cette carte. Si vous le faites, infigez 3 dégâts.",
			image: "",
		},
		{
			id: "LP-FIN-064",
			name: "Héliolite Intense",
			cost: 5,
			description:
				"Lorsque vous acquérez cette carte, s'il s'agit de la seconde carte que vous acquérez ce tour, prenez-la en main. Gagnez 3 Ether.",
			image: "",
		},
		{
			id: "SE143",
			name: "Tétrite lumineuse",
			cost: 6,
			description:
				"Gagnez 4 Ether qui ne peuvent être utilisés que pour acquérir des cartes.",
			image: "",
		},
		{
			id: "R04",
			name: "Jade",
			cost: 2,
			description: "Gagnez 2 Ether.",
			image: "",
		},
		{
			id: "R36",
			name: "Agate sangsue",
			cost: 3,
			description:
				"Lorsque vous gagnez cette carte, gagnez 1 charge. Gagnez 2 Ether.",
			image: "",
		},
		{
			id: "R06",
			name: "Perle filtrante",
			cost: 3,
			description:
				"Gagnez 2 Ether. Chaque joueur révèle la première carte de sa pioche et peut soit la défausser soit la remettre sur le dessus de sa pioche.",
			image: "",
		},
		{
			id: "R30",
			name: "Pierre de douleur",
			cost: 6,
			description: "Gangez 3 Ether. OU Gagnez 2 Ether et infligez 1 dégât.",
			image: "",
		},
		{
			id: "R02",
			name: "Saphir nuageux",
			cost: 6,
			description:
				"Gagnez 3 Ether. S'il s'agit du premier Saphir nuageux que vous jouez ce tour, un allié gagne 1 charge.",
			image: "",
		},
		{
			id: "LP-FIN-059",
			name: "Péridot en Fusion",
			cost: 3,
			description:
				"Gagnez 2 Ether. S'il s'agit du second Péridot en Fusion que vous jouez ce tour, vous pouvez détruire cette carte pour acquérir une carte d'un pile de la réserve coûtant 4 Ether ou moins.",
			image: "",
		},
		{
			id: "LP-FIN-065",
			name: "Sazite de Duplication",
			cost: 6,
			description:
				"Gagnez 3 Ether. La prochaine fois que vous acquérez une carte ce tour, vous pouvez défausser une sort préparé coûtant 1 Ether ou plus pour qu'un allié acquière une carte de la réserve coûtant aussi cher ou moins cher que la carte que vous avez acquise.",
			image: "",
		},
		{
			id: "LP-FIN-058",
			name: "Pyrite Instable",
			cost: 2,
			description:
				"Gagnez 1 ETher. Vous pouvez détruire cette carte pour gagner 2 Ether supplémentaire.",
			image: "",
		},
		{
			id: "R07",
			name: "Ambre de V'risbois",
			cost: 3,
			description:
				"Lorsque vous acquérez cette carte, vous pouvez la placer au-dessus de votre pioche. Gagnez 2 Ether.",
			image: "",
		},
		{
			id: "R03",
			name: "Agréagat de diamants",
			cost: 4,
			description:
				"Gagnez 2 Ether. Si c'est le second Agrégat de diamants que vous jouez ce tour, gagnez 2 Ether de plus.",
			image: "",
		},
		{
			id: "GE01",
			name: "Pierre de sang",
			cost: 6,
			description:
				"Lorsque vous acquérez une Pierre de Sang pour la première fois de votre tour, gagnez 3 Ether. Gagnez 3 Ether.",
			image: "",
		},
		{
			id: "GE02",
			name: "Minerai de la brèche",
			cost: 4,
			description:
				"Gagnez 2 Ether. OU Stabilisez votre brèche fermée ayant le coût de stabilisation le plus faible.",
			image: "",
		},
		{
			id: "R01",
			name: "Opale brûlante",
			cost: 5,
			description:
				"Gagnez 3 Ether. Vous pouvez défausser une carte de votre main pour qu'un allié pioche une carte.",
			image: "",
		},
		{
			id: "R05",
			name: "Rubis fulgurant",
			cost: 4,
			description:
				"Gagnez 2 Ether. Gagnez 1 Ether supplémentaire qui ne peut être utilisé que pour acquérir un sort.",
			image: "",
		},
		{
			id: "R29",
			name: "Berylite hantée",
			cost: 3,
			description:
				"Gagnez 2 Ether. OU Défaussez une carte de votre main. Si vous le faites, gagnez 2 charges.",
			image: "",
		},
		{
			id: "R28",
			name: "Élément extraterrestre",
			cost: 4,
			description:
				"Gagnez 1 Ether. Gagnez 1 Ether supplémentaire pour chacune de vos brèches ayant un sort préparé.",
			image: "",
		},
		{
			id: "GE04",
			name: "Lingot erratique",
			cost: 5,
			description:
				"Gagnez 2 Ether. Gagnez 2 Ether supplémentaire s'il y a au moins une carte Ordre du tour de la némésis dans la défausse des cartes Ordre du tour.",
			image: "",
		},
		{
			id: "GE03",
			name: "Diamant inquiétant",
			cost: 3,
			description:
				"Gagnez 2 Ether. Vous pouvez défausser une sort préparé. Si vous le faites, gagnez 1 Ether supplémentaire.",
			image: "",
		},
		{
			id: "GE05",
			name: "Magnétite congelée",
			cost: 3,
			description:
				"Gagnez 2 Ether. Vous pouvez placer la prochainre carte que vous acquérez lors de ce tour au somment de votre pioche.",
			image: "",
		},
		{
			id: "GE06",
			name: "Bouquet de scories",
			cost: 4,
			description:
				"Gagnez 2 Ether. Si le plaier de la némésis est supérieur ou égal à 2, gagnez 1 Ether supplémentaire.",
			image: "",
		},
		{
			id: "GE07",
			name: "Verre pyroclastique",
			cost: 3,
			description:
				"Lorsque vous acquérez cette carte lors de votre tour, vous pouvez dépenser 2 Ether. Si vous le faites, un allié acquiert lui aussi un Verre pyroclastique et le place au somment de sa pioche. Gagnez 2 Ether.",
			image: "",
		},
		{
			id: "SE139",
			name: "Résine d'oubli",
			cost: 5,
			description:
				"Gagnez 2 Ether. Si vous avez trois cartes ou plus coûtant 0 Ether en main, gagnez 2 Ether supplémentaire.",
			image: "",
		},
		{
			id: "SE146",
			name: "Invoquine",
			cost: 3,
			description:
				"Gagnez 2 Ether. OU Acquérez une Invoquine de la réserve et placez-la sur la défausse d'un allié.",
			image: "",
		},
		{
			id: "SE137",
			name: "Lacosite muette",
			cost: 5,
			description:
				"Lorsque vous acquérez cette carte, réduisez un serviteur au silence. Gagnez 3 Ether.",
			image: "",
		},
		{
			id: "LP-FIN-063",
			name: "Cyclite Oblongue",
			cost: 4,
			description:
				"Gagnez 2 Ether. La prochaine fois que vous ouvrez ou stabilisez une brèche ce tour, gagnez 1 charge.",
			image: "",
		},
		{
			id: "LP-FIN-061",
			name: "Phénixium Fossilisé",
			cost: 4,
			description:
				"Gagnez 2 Ether. La prochaine fois que vous acquérez une carte ce tour, vous pouvez lancer le sort préparé d'un joueur.",
			image: "",
		},
		{
			id: "LP-FIN-062",
			name: "Saphir Galvanisé",
			cost: 4,
			description: "Gagnez 2 Ether. Xaxos : Paria gagne 1 charge.",
			image: "",
		},
		{
			id: "LP-FIN-060",
			name: "Spirale d'Ambre",
			cost: 3,
			description:
				"Gagnez 2 Ether. Vous pouvez subir 1 dégâts pour détruire une carte de votre main coûtant 0 Ether.",
			image: "",
		},
		{
			id: "SE148",
			name: "Pointe de vide",
			cost: 3,
			description:
				"Gagnez 2 Ether. Chaque allié peut défausser une carte de samain pour gagner 1 charge.",
			image: "",
		},
		{
			id: "SE147",
			name: "Noyaux de triplite",
			cost: 4,
			description:
				"Gagnez 3 Ether qui ne peuvent être utilisés que pour acquérir des cartes.",
			image: "",
		},
		{
			id: "SE133",
			name: "Voltécorce",
			cost: 3,
			description:
				"Gagnez 2 Ether. Gagnez 1 jeton Pulsation. OU Gagnez 2 Ether. Perdez 1 jeton Pulsation. Si vous le faites, gagnez 1 charge.",
			image: "",
		},
		{
			id: "SE136",
			name: "Fragment de mentite",
			cost: 5,
			description:
				"Gagnez 3 Ether. Si sept cartes ou plus se trouve dans votre défausse, gagnez 1 Ether supplémentaire.",
			image: "",
		},
	],
	relics: [
		{
			id: "GE08",
			name: "Boussole de cairn",
			cost: 4,
			description:
				"Un allié peut préparer un sort de sa défausse en le plaçant sur l'une de ses brèches ouvertes ou fermées.",
			image: "",
		},
		{
			id: "GE09",
			name: "Parchemin du conclave",
			cost: 3,
			description:
				"Gagnez 1 charge. Si la pile de cette carte est vide dans la réserve, vous pouvez détruire la première carte de la défausse d'un allié.",
			image: "",
		},
		{
			id: "GE10",
			name: "Attrapeur de démons",
			cost: 3,
			description:
				"Vous pouvez détruire une carte de votre main ou de votre défausse. Révélez la première carte du paquet d'ordre de tour. Si vous révélez une carte Ordre du tour de la némésis, vous pouvez cette en dessous du paquet d'ordre de tour.",
			image: "",
		},
		{
			id: "GE11",
			name: "Totem de mage",
			cost: 2,
			description:
				"Détruisez une gemme ou une relique que vous avez jouée lors de ce tour. OU Détruisez cette carte. Gravehold gagne 1 point de vie.",
			image: "",
		},
		{
			id: "GE12",
			name: "Fétiche primordial",
			cost: 4,
			description:
				"Stabilisez une brècge de n'importe quel joueur. OU Détruisez cette carte. Gagnez 3 points de vie.",
			image: "",
		},
		{
			id: "GE13",
			name: "Gantelet de vorticité",
			cost: 6,
			description:
				"Lancez un sort préparé de n'importe quel joueur. Renvoyez ce sort dans la main de ce joueur.",
			image: "",
		},
		{
			id: "EN-FIN-041",
			name: "Galaxie de poche",
			cost: 3,
			description:
				"Un allié peut défausser une Galaxie de poche de sa main pour pioche une carte. Gagnez 1 charge ou stabilisez votre brèche fermée qui présente le coût de stabilisation le plus faible. Si un allié a défaussé une Galaxie de poche. résolvez ces deux effets.",
			image: "",
		},
		{
			id: "EN-FIN-042",
			name: "Babiole galvanisée",
			cost: 3,
			description:
				"Stabilisez la brèche d'un allié. OU Lancez le sort préparé d'un joueur. Vous pouvez détruire ce sort.",
			image: "",
		},
		{
			id: "EN-FIN-043",
			name: "Feu en cage",
			cost: 3,
			description:
				"Détruisez la prmeière carte de la défausse d'un joueur. OU Détruisez cette carte. Gagnez 2 points de vie.",
			image: "",
		},
		{
			id: "EN-FIN-44",
			name: "Conduit de douleur",
			cost: 3,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, il inflige 2 dégâts supplémentaires. Cette relique est ensuite défaussée.",
			image: "",
		},
		{
			id: "EN-FIN-45",
			name: "Conduit d'éther",
			cost: 4,
			description:
				"Connectez cette relique à la brèche d'un joueur. Lorsqu'un sort est lancé depuis cette brèche, le joueur qui lance ce soir gagne 1 Ether.",
			image: "",
		},
		{
			id: "EN-FIN-46",
			name: "Conduit de lien",
			cost: 6,
			description:
				"Connectez cette relique à la brèche d'un joueur. Deux sorts peuvent être préparés sur cette brèche.",
			image: "",
		},
		{
			id: "EN-FIN-47",
			name: "Puits d'énergie",
			cost: 7,
			description:
				"Gravehold gagne 2 points de vie. OU Une joueur gagne 2 points de vie.",
			image: "",
		},
		{
			id: "SE144",
			name: "Filaments d'âme",
			cost: 5,
			description:
				"Un joueur gagne un jeton Pulsation. Chaque joueur qui possède au moins 2 jetons Pulsations gagne 1 charge.",
			image: "",
		},
		{
			id: "R37",
			name: "Manteau en fusion",
			cost: 5,
			description:
				"Gagnez 1 charge. Vous pouvez détruire une carte de votre main ou du dessus de la défausse de n'importe quel joueur.",
			image: "",
		},
		{
			id: "R09",
			name: "Vortex en bouteille",
			cost: 3,
			description:
				"Détruisez cette carte. Détruisez jusqu'à deux cartes de votre main ou de votre défausse. Pioche une carte.",
			image: "",
		},
		{
			id: "R08",
			name: "Bâton d'explosion",
			cost: 4,
			description:
				"Vous pouvez lancer un sort que vous avez préparé ce tour-ci et infliger 2 dégâts supplémentaires avec ce sort.",
			image: "",
		},
		{
			id: "R32",
			name: "Sphère des secrets",
			cost: 3,
			description:
				"Gagnez 1 charge. OU Vous pouvez perdre 2 charges. Si vous le faites, gagnez 5 Ether.",
			image: "",
		},
		{
			id: "LP-FIN-069",
			name: "Circuit de Reconstitution",
			cost: 3,
			description:
				"Xaxos : Paria gagne 1 charge. Vous pouvez détruire 1 carte de votre main.",
			image: "",
		},
		{
			id: "LP-FIN-071",
			name: "Chaîne de Restitution",
			cost: 4,
			description:
				"Stabilisez la brèche d'un allié. OU Reprenez en main une carte de votre défausse coûtant 6 Ether ou moins.",
			image: "",
		},
		{
			id: "LP-FIN-073",
			name: "Réflecteur de Transmutation",
			cost: 5,
			description:
				"Détruisez cette carte. Vous pouvez détruire une carte de votre main ou de votre défausse. Acquez une carte d'une pile de la réservé coûtant jusqu'à 6 Ether.",
			image: "",
		},
		{
			id: "R13",
			name: "Prisma instable",
			cost: 3,
			description:
				"Appliquez deux fois l'effet d'une gemme de votre main, puis détruisez-là. OU Gagnez 2 Ether.",
			image: "",
		},
		{
			id: "SE128",
			name: "Étoile miniature",
			cost: 7,
			description: "Gagnez 3 charges",
			image: "",
		},
		{
			id: "LP-FIN-072",
			name: "Soleil en Bouteille",
			cost: 6,
			description: "Xaxos : Paria gagne 3 charges.",
			image: "",
		},
		{
			id: "R12",
			name: "Talisman de mage",
			cost: 5,
			description: "Gagnez 1 charge. Un allié gagne 1 charge.",
			image: "",
		},
		{
			id: "LP-1a-074",
			name: "Vortex Déséquilibré",
			cost: 7,
			description:
				"Un allié pioche trois carte. Puis, il défausse une carte de sa main. OU Vous pouvez stabiliser la brèche d'un allié. Un allié peut reprendre en main une carte de sa défausse.",
			image: "",
		},
		{
			id: "SE142",
			name: "Œuvre de l'érudit",
			cost: 3,
			description:
				"Gagnez 1 charge. Si sept cartes ou plus se trouvent dans votre défausse, gagnez 1 charge supplémentaire.",
			image: "",
		},
		{
			id: "LP-FIN-070",
			name: "Altérateur de Destin",
			cost: 4,
			description:
				"Un allié peut détruire une carte de sa main. Ce joueur peut acquérir une carte coûtant jusqu'à 2 Ether de plus que la carte détruite et la prendre en main. OU Détruiez cette carte pour gagner 2 charges.",
			image: "",
		},
		{
			id: "R10",
			name: "Dague fléchissante",
			cost: 2,
			description:
				"La prochaine brèche que vous stabilisez ou que vous ouvrez lors de ce tour vous coûte 3 Ether de moins. OU Détruisez cette carte. Infligez 1 dégât.",
			image: "",
		},
		{
			id: "R38",
			name: "Spirale temporelle",
			cost: 7,
			description:
				"Lancez un sort préparé de n'importe quel joueur sans le défausser.",
			image: "",
		},
		{
			id: "LP-FIN-067",
			name: "Racive Carnivore",
			cost: 3,
			description:
				"Gagnez 1 Ether. Vous pouvez détruire une carte de votre main pour gagner d'autant d'Ether que son coût. OU Détruisez cette carte pour stabiliser deux fois votre brèche fermée ayant le coût de stabilisation le plus faible.",
			image: "",
		},
		{
			id: "R31",
			name: "Cube astral",
			cost: 5,
			description:
				"Reprenez en main une gemme que vous avez jouée ce tour-ci. Révélez la première carte du paquet d'ordre du tour. S'il s'agit d'un joueur, ce dernier gagne 1 point de vie.",
			image: "",
		},
		{
			id: "LP-FIN-066",
			name: "Orbe des Profondeurs",
			cost: 2,
			description:
				"Stabilisez votre brèche fermées ayant le coût de stabilisation le plus faible. OU Détruisez cette carte. Gagnez 1 charge.",
			image: "",
		},
		{
			id: "LP-FIN-068",
			name: "Dague de Faille",
			cost: 3,
			description:
				"Acquérez une carte d'une autre pile de la réserve dont les cartes coûtent 3 Ether ou moins. Vous pouvez détruire cette relique pour acquérir une carte coûtant jusqu'à 4 Ether à la place. Vous pouvez dépenser 1 Ether pour prendre la carte acquise en main.",
			image: "",
		},
		{
			id: "SE134",
			name: "Gantelet vivant",
			cost: 4,
			description:
				"Révélez la première carte de votre pioche. Vous pouvez la détruire ou la défausser. Chaque allié peut piocher une carte. Dans ce cas, il défausse ensuite une carte de sa main.",
			image: "",
		},
		{
			id: "R11",
			name: "Orbe de stabilisation",
			cost: 4,
			description:
				"Stabilisez la brèche d'un joueur. OU Détruisez cette carte pour faire gagner 3 points de vie à Gravehold.",
			image: "",
		},
		{
			id: "SE135",
			name: "Cube sans fond",
			cost: 4,
			description:
				"Gagnez 1 Ether. Ce tour, lors de votre prochaine acquisition de carte, vous pouvez acquérir gratuitement une seconde carte qui coûte moins cher que la première carte acquise.",
			image: "",
		},
		{
			id: "P085",
			name: "Bouclier de combustion",
			cost: 4,
			description:
				"Vous pouvez lancer le sort préparé d'un allié. Un allié pioche une carte.",
			image: "",
		},
		{
			id: "P087",
			name: "Lance-pierres précieuses",
			cost: 3,
			description:
				"Défaussez ou détruisez une carte de votre main. Si vous le faites, infligez un nombre de dégâts égal à son coût.",
			image: "",
		},
	],
	spells: [
		{
			id: "GE27",
			name: "Familier imaginaire",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Infligez 1 dégât supplémentaire pour chacun de vos autres sorts préparés.",
			image: "",
		},
		{
			id: "GE26",
			name: "Retour à la poussière",
			cost: 7,
			description:
				"Lorsque préparé, au début de votre phase d'incantation, révélez la carte du sommet de votre pioche. Vous pouvez détruire la carte révélée. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "GE25",
			name: "Afflux pyrotechnique",
			cost: 4,
			description:
				"Ce sort doit être préparé sur deux brèches adjacentes (la carte doit toucher les deux brèches). Les deux brèches sont occupées. Lancer : Infligez 4 dégâts. Vous pouvez détruire une carte de votre défausse.",
			image: "",
		},
		{
			id: "GE24",
			name: "Foge Nova",
			cost: 6,
			description:
				"Lorsque préparé, une fois par tour pendant votre phase principale, vous pouvez gagner 2 Ether qui ne peuvent être utilisés que pour acquérir un sort. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "GE23",
			name: "Mèche",
			cost: 4,
			description:
				"Lorsque préparé, pendant votre phase principale, vous pouvez aussi préparer une Étincelle sur la brèche où ce sort est préparé. (Vous ne pouvez pas utiliser cet effet si une Étincelle est préparée sur cette brèche). Lancer : Infligez 3 dégâts.",
			image: "",
		},
		{
			id: "GE22",
			name: "Éclair déchirant",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, un joueurs stabilise sa brèche fermée ayant le coût de stabilisation le plus faible.",
			image: "",
		},
		{
			id: "GE21",
			name: "Torrent ardent",
			cost: 5,
			description:
				"Lancer : Infligez 2 dégâts. Infligez 2 dégâts supplémentaires pour chaque autre Torrent Ardent préparé par n'importe quel joueur.",
			image: "",
		},
		{
			id: "GE20",
			name: "Équilibre",
			cost: 7,
			description:
				"Lorsque préparé, réduisez de 1 les dégâts que vous subbissez, jusqu'à un minimum de 1. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "GE19",
			name: "Cristallisation",
			cost: 8,
			description:
				"Ce sort doit être préparé sur deux brèches adjacentes (la carte doit toucher les deux brèches). Les deux brèches sont occupées. Lancer : Un allié révèle sa main. Infligez 2 dégâts pour chaque gemme ainsi révélée.",
			image: "",
		},
		{
			id: "GE18",
			name: "Champ de convection",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. OU Lancer : Infligez 2 dégâts. Un allié peut détruire une carte de sa main.",
			image: "",
		},
		{
			id: "GE17",
			name: "Flèche céleste",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Si la pile de cette carte est vide dans la réserve, un allié pioche une carte.",
			image: "",
		},
		{
			id: "GE16",
			name: "Conjuration des oubliés",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Vous pouvez détruire cette carte. Si vous le faites, Gravehold gagne 4 points de vie.",
			image: "",
		},
		{
			id: "GE15",
			name: "Carbonisation",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Révélez la première carte du paquet d'ordre de tour. Vous pouvez placer cette carte en dessous du paquet d'ordre du tour.",
			image: "",
		},
		{
			id: "GE14",
			name: "Aurore",
			cost: 5,
			description:
				"Lorsque préparé, une fois par tour, pendant votre phase principale, vous pouvez gagner 1 charge. Lancer : Infligez 3 dégâts.",
			image: "",
		},
		{
			id: "R19",
			name: "Vol d'essence",
			cost: 3,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, un joueur gagne 1 point de vie.",
			image: "",
		},
		{
			id: "LP-FIN-080",
			name: "Flèche Éclair",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, Gravehold gagne 1 point de vie.",
			image: "",
		},
		{
			id: "LP-FIN-085",
			name: "Vivacité d'Esprit",
			cost: 6,
			description:
				"Lorsque préparé, si vous acquérez une carte, vous pouvez la placer sur votre pioche. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "LP-FIN-087",
			name: "Relais Arcanique",
			cost: 8,
			description:
				"Lancer : Un allié pioche une carte, puis révèle sa main. Infligez 4 dégâts. Infligez 1 dégâts supplémentaire par carte de sa main coûtant 1 Ether ou plus.",
			image: "",
		},
		{
			id: "SE127",
			name: "Lame de sagesse",
			cost: 6,
			description:
				"Lorsque vous acquerez cette carte, si sept autres cartes ou plus se trouvent dans votre défausse, gagnez 2 points de vie. Lancer : Infligez 5 dégâts.",
			image: "",
		},
		{
			id: "SE130",
			name: "Coup double",
			cost: 3,
			description:
				"Lancer : Infligez 1 dégât. Infligez 1 dégât. (Les effets modifiant les dégâts concernent les deux sources de dégâts.)",
			image: "",
		},
		{
			id: "SE129",
			name: "Courant flamboyant",
			cost: 3,
			description:
				"Lorsque préparé, lors de votre phase d'incantation, vous pouvez perdre 2 jetons Pulsation. Si vous le faites, les sorts que vous lancez ce tour infligent 1 dégât supplémentaire. Lancer : Infligez 1 dégâts. Gagnez 1 jeton Pulsation.",
			image: "",
		},
		{
			id: "SE145",
			name: "Force colossale",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts à la némésis. Réduisez une serviteur au silence.",
			image: "",
		},
		{
			id: "R27",
			name: "Fouet ardent",
			cost: 6,
			description:
				"Lorsque préparé, vous pouvez dépenser 2 Ether durant votre phase principale, pour lancer un sort préparé chez n'importe quel joueur. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "SE140",
			name: "Tir de précision",
			cost: 3,
			description:
				"Lien (Deux sorts ayant Lien peuvent être préparés sur la même brèche.) Lancer : Infligez 2 dégâts. Si six autres cartes ou plus se trouvent dans votre défausse, infligez 2 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "SE138",
			name: "Frappe audacieuse",
			cost: 2,
			description:
				"Lancer : Infligez 1 dégât. Réduisez un serviteur au silence.",
			image: "",
		},
		{
			id: "R14",
			name: "Vision amplifiée",
			cost: 4,
			description:
				"Lancer : Stabilisez votre brèche ayant le coût le plus faible. Infligez 2 dégâts. Si toutes vos brèches sont ouvertes, infligez 1 dégât de plus.",
			image: "",
		},
		{
			id: "R41",
			name: "La marque du sage",
			cost: 7,
			description:
				"Ce sort doit être préparé sur deux brèches adjacentes, de manière à ce qu'il touche les deux brèches. Les deux brèches sont occupées par ce sort. Lorsque préparé, piochez une carte de plus lors de votre phase de pioche. Lancer : Infligez 6 dégâts.",
			image: "",
		},
		{
			id: "EN-FIN-056",
			name: "Ascension spirituelle",
			cost: 8,
			description:
				"Lorsque préparé, une fois par tour, si vous gagnez une charge lors de votre tour, un allié gagne 2 charges. Lancer : Infligez 5 dégâts.",
			image: "",
		},
		{
			id: "LP-FIN-082",
			name: "Faille Instable",
			cost: 5,
			description:
				"Lorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât et gagnez 1 Ether. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "R23",
			name: "Vague d'oubli",
			cost: 5,
			description:
				"Lorsque préparé, une fois par tour, durant votre phase principale, gagnez 1 Ether. Lancer : Infligez 2 dégâts. Vous pouvez défausser une gemme pour infliger autant de dégâts supplémentaire que son coût.",
			image: "",
		},
		{
			id: "R22",
			name: "Tentacule de lave",
			cost: 4,
			description:
				"Lorsque préparé, à la fin de votre phase d'incantation, infligez 1 dégât. Lancer : Infligez 3 dégâts.",
			image: "",
		},
		{
			id: "LP-FIN-083",
			name: "Afflux de Volonté",
			cost: 5,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez acquérir un sort d'une pile de la réserve coûtant 4 Ether ou moins et le placer sur votre pioche.",
			image: "",
		},
		{
			id: "LP-FIN-076",
			name: "Orage Jumelé",
			cost: 3,
			description:
				"LIEN (Deux sorts ayant Lien peuvent être préparés sur la même brèche.) Lancer : Infligez 2 dégâts. S'il s'agit du second Orage jumelé que vous lancez ce tour, infligez 2 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "LP-FIN-088",
			name: "Explosion Étourdissante",
			cost: 8,
			description:
				"Lancer : Infligez 6 dégâts. Révélez puis replacez les cartes du paquet d'ordre du tour dans l'ordre de votre choix.",
			image: "",
		},
		{
			id: "SE131",
			name: "Toucher vampirique",
			cost: 2,
			description: "Lancer : Infligez 1 dégât. Gagnez 1 charge.",
			image: "",
		},
		{
			id: "R40",
			name: "Radiance",
			cost: 8,
			description: "Lancer : Infligez 5 dégâts. Chaque allié pioche une carte.",
			image: "",
		},
		{
			id: "R37",
			name: "Pyromancie",
			cost: 7,
			description:
				"Lancer : Infligez 1 dégât. Les alliés peuvent collectivement défausser jusqu'à deux cartes. Pour chaque carte ainsi défaussée, infligez 3 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "R25",
			name: "Aperçu planaire",
			cost: 6,
			description:
				"Lancer : Infligez 2 dégâts. Infligez 1 dégât supplémentaire pour chacune de vos brèches ouvertes.",
			image: "",
		},
		{
			id: "R16",
			name: "Arc chaotique",
			cost: 6,
			description:
				"Lancer : Infligez 3 dégâts. Infligez 2 dégâts supplémentaires par sort préparé sur une brèche adjacente.",
			image: "",
		},
		{
			id: "R24",
			name: "Flamme du phénix",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez perdre 1 charge pour infliger 2 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "LP-FIN-086",
			name: "Effusion de Flammes",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Vous pouvez lancer le sort préparé d'un joueur coûtant 5 Ether ou moins.",
			image: "",
		},
		{
			id: "SE141",
			name: "Éruption psychique",
			cost: 8,
			description:
				"Lancer : Infligez autant de dégâts que le nombre de cartes présentes dans la défausse d'un joueur.",
			image: "",
		},
		{
			id: "R26",
			name: "Écho spectral",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez détruire une carte de votre main.",
			image: "",
		},
		{
			id: "R21",
			name: "Mise à feu",
			cost: 4,
			description: "Lancer : Infligez 2 dégâts. Un allié gagne 1 charge.",
			image: "",
		},
		{
			id: "EN-FIN-052",
			name: "Rebonds explosifs",
			cost: 6,
			description: "Écho. Lancer : Infligez 2 dégâts.",
			image: "",
		},
		{
			id: "P23",
			name: "Esprit voleur",
			cost: 5,
			description: "Lancer : Infligez 4 dégâts. Gagnez 1 Ether.",
			image: "",
		},
		{
			id: "SE132",
			name: "Éclair de génie",
			cost: 4,
			description:
				"LIEN (Deux sorts ayant Lien peuvent être préparés sur la même brèche.) Lancer : Infligez 3 dégâts. Si six autres cartes ou plus se trouvent dans votre défausse, vous pouvez acquérir un Éclair de génie de la réserve et le placer sur votre pioche.",
			image: "",
		},
		{
			id: "R15",
			name: "Nexus des arcanes",
			cost: 7,
			description:
				"Lorsque préparé, une fois par tour durant votre phase principale, vous pouvez reprendre une gemme jouée ce tour-ci en main. Lancer : Infligez 4 dégâts.",
			image: "",
		},
		{
			id: "P086",
			name: "Flamme éclairante",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, vous pouvez le détruire. Si vous le faites, gagnez 3 charges.",
			image: "",
		},
		{
			id: "P088",
			name: "Arc temporel",
			cost: 7,
			description:
				"Ce sort doit être préparé sur deux brèches adjacentes (la carte doit toucher les deux brèches). Les deux brèches sont occupées. Lancer : Infligez 4 dégâts. Vous pouvez placer cette carte dans votre main.",
			image: "",
		},
		{
			id: "LP-FIN-078",
			name: "Éclair Destructeur",
			cost: 4,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez détruire une carte de votre main. OU Lancer : Défaussez une gemme de votre main. Si vous le faites, infligez 4 dégâts.",
			image: "",
		},
		{
			id: "R39",
			name: "Flamber",
			cost: 4,
			description:
				"Lorsque vous gagnez cette carte, vous pouvez la placer sur la défausse de n'importe quel joueur. Lancer : Infligez 2 dégâts. Infligez 1 dégât supplémentaire par Flamber que vous avez lancé ce tour et par autre Flamber préparé sur vos brèches.",
			image: "",
		},
		{
			id: "R36",
			name: "Conduit du néant",
			cost: 7,
			description:
				"Lancer : Révélez une carte de votre main coûtant 2 Ether ou plus. Si vous le faites, infligez autant de dégâts que le nombre de cartes manquantes dans la pile de cette carte dans la réserve. Puis un allié gagne une carte de cette pile. (Au départ, les piles de gemmes contiennent 7 cartes, et les piles de sorts et de reliques 5 cartes.)",
			image: "",
		},
		{
			id: "EN-FIN-055",
			name: "Impact concetré",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, infligez 2 dégâts à la némésis. (Les effets modifiant les dégâts concernent les deux sources de dégâts.)",
			image: "",
		},
		{
			id: "EN-FIN-053",
			name: "Déluge de puissance",
			cost: 6,
			description:
				"Lancer : Infligez 4 dégâts. Un allié peut défausser jusqu'à deux cartes de sa main et pioche ensuite une carte pour chaque carte ainsi défaussée.",
			image: "",
		},
		{
			id: "EN-FIN-051",
			name: "Symbiose léthale",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Un allié peut défausser une Symbiose léthale de sa main pour pioche une carte. S'il le fait, infligez 3 dégâts. (Les effets modifiants les dégâts concernent les deux sources de dégâts.)",
			image: "",
		},
		{
			id: "R42",
			name: "Éclair de prophétie",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Vous pouvez perdre 1 charge. Si vous le faites, révélez les deux premières cartes de la pioche de la némésis et replacez-les dans l'ordre de votre choix.",
			image: "",
		},
		{
			id: "LP-FIN-075",
			name: "Givre Renforcé",
			cost: 2,
			description:
				"Lancer : Infligez 2 dégâts. Vous pouvez défausser une carte de votre main. Si vous le faites, infligez 1 dégât supplémentaire.",
			image: "",
		},
		{
			id: "LP-FIN-077",
			name: "Lancer : Infligez 3 dégâts. Si la pile de la réserve de cette carte est vide, infligez 1 dégât supplémentaire.",
			cost: 4,
			description: "",
			image: "",
		},
		{
			id: "LP-FIN-084",
			name: "Tornade de Lucidité",
			cost: 6,
			description:
				"Lancer : Infligez 5 dégâts. Si vous ne possédez aucune brèche fermée, gagnez 1 charge.",
			image: "",
		},
		{
			id: "LP-FIN-081",
			name: "Confluence de Radiance",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Un allié peut piocher une carte, puis défausser une carte de sa main.",
			image: "",
		},
		{
			id: "LP-FIN-079",
			name: "Combustion Enrichie",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si Xaxos : Paria a 4 charges ou moins, il gagne 1 charge.",
			image: "",
		},
		{
			id: "EN-FIN-049",
			name: "Choc répercuté",
			cost: 4,
			description:
				"Écho. Lancer : Infligez 1 dégât. Gagnez 1 Ether qui ne peut être utilisé que pour acquérir des cartes.",
			image: "",
		},
		{
			id: "R35",
			name: "Aura de réaction",
			cost: 5,
			description:
				"Lancer : Infligez 3 dégâts. Si vous possédez 4 charges ou plus, vous infligez 3 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "R34",
			name: "Catalyseur",
			cost: 6,
			description:
				"Lancer : Infligez 2 dégâts. Si vous avez 2 points de vie ou moins, infligez 5 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "R20",
			name: "Éclair enragé",
			cost: 5,
			description:
				"Ce sort peut être préparé sur une brèche fermée sans qu'elle doive être stabilisée. Lancer : Infligez 3 dégâts.",
			image: "",
		},
		{
			id: "R38",
			name: "Calciner",
			cost: 5,
			description:
				"Lancer : Infligez 4 dégâts. Si ces dégâts permettent de défausser un serviteur du paquet Némésis, un allié gagne 2 charges.",
			image: "",
		},
		{
			id: "R17",
			name: "Vide dévorant",
			cost: 7,
			description:
				"Lancer : Détruisez jusqu'à deux cartes de votre main. Infligez 3 dégâts par carte détruite de cette manière.",
			image: "",
		},
		{
			id: "EN-FIN-054",
			name: "Frappe calculée",
			cost: 7,
			description:
				"Lancer : Infligez 4 dégâts. Vous pouvez reprendre en main jusqu'à deux cartes de votre défausse coûtant 0 Ether.",
			image: "",
		},
		{
			id: "EN-FIN-050",
			name: "Décuple-force",
			cost: 4,
			description:
				"Lancer : Infligez 3 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, infligez 1 dégât supplémentaire.",
			image: "",
		},
		{
			id: "EN-FIN-048",
			name: "Épines en chaîne",
			cost: 3,
			description:
				"Lancer : Infligez 2 dégâts. Si ce sort a été lancé depuis une brèche III ou IV ouverte, vous pouvez le placer dans la main d'un allié.",
			image: "",
		},
		{
			id: "R42",
			name: "Résonance",
			cost: 6,
			description:
				"Lancer : Infligez 4 dégâts. S'il y a six cartes ou plus dans votre défausse, infligez 3 dégâts supplémentaires.",
			image: "",
		},
		{
			id: "R18",
			name: "Feu obscur",
			cost: 5,
			description:
				"Lancer : Défaussez jusqu'à deux cartes de votre main. Infligez 3 dégâts par carte que vous avez dfaussée de cette manière.",
			image: "",
		},
		{
			id: "R33",
			name: "Carboniser",
			cost: 8,
			description:
				"Lancer : Infligez 6 dégâts. Si ces dégâts permettent de défausser un serviteur, un joueur gagne 2 points de vie.",
			image: "",
		},
	],
};
