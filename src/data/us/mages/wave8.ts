import type { Mage } from "../../../types";

// Mages des extensions de la vague 8 (The Caverns, The Abyss, Tales of Old
// Gravehold) : traduction maison d'après https://aeonsend.wiki.gg/.
export const mages: Mage[] = [
	{
		id: "TC01",
		name: "Alcheia",
		nameEn: "Alcheia",
		title: "Tailleuse de pierre",
		breachs: ["open", "bottom", "bottom", "bottom"],
		complexity: 7,
		abilityPhase: "allyPlayerCasting",
		abilityTitle: "Restabiliser",
		abilityDescription:
			"Détruisez jusqu'à trois cartes de votre main et piochez une carte par carte détruite. OU Ce tour, chaque sort lancé inflige 1 dégât supplémentaire par carte coûtant 1 Ether ou plus dans votre main. Cette capacité peut aussi être activée durant la phase d'incantation d'un allié.",
		abilityCharge: 4,
		expansion: "The Caverns",
	},
	{
		id: "TC02",
		name: "Quilius (The Caverns)",
		nameEn: "Quilius (The Caverns)",
		title: "Novice",
		breachs: ["open", "open", "right", "bottom"],
		complexity: 3,
		abilityPhase: "currentPlayerMain",
		abilityTitle: "Acquérir une cible",
		abilityDescription:
			"Placez la première carte du paquet Adversaire sur le dessus du paquet Némésis. Puis appliquez les effets ajoutés à votre capacité par les serviteurs de votre zone de capacité.",
		abilityCharge: 6,
		expansion: "The Caverns",
	},
	{
		id: "AB01",
		name: "Xaxos (The Abyss)",
		nameEn: "Xaxos (The Abyss)",
		title: "Oisillon",
		breachs: ["open", "left", "bottom", "bottom"],
		complexity: 9,
		abilityPhase: "currentPlayerMain",
		abilityTitle: "Siphon de puissance",
		abilityDescription:
			"Gagnez 3 Ether. Vous pouvez prendre en main les cartes que vous acquérez ce tour. Vous pouvez placer une carte Ordre du tour de la némésis de la défausse d'ordre du tour sous le paquet d'ordre du tour. Si vous le faites, gagnez 7 Ether supplémentaires.",
		abilityCharge: 4,
		expansion: "The Abyss",
	},
	{
		id: "TOG01",
		name: "Kain",
		nameEn: "Kain",
		title: "Virtuose de la danse",
		breachs: ["open", "open", "bottom", "bottom"],
		complexity: 2,
		abilityPhase: "currentPlayerMain",
		abilityTitle: "Valse du Vide",
		abilityDescription:
			"Si Gravehold a 15 points de vie ou plus, Gravehold subit 2 dégâts et un joueur gagne 6 jetons Éther. Sinon, Gravehold gagne 5 points de vie.",
		abilityCharge: 4,
		expansion: "Tales of Old Gravehold",
	},
];
