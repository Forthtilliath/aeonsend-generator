import type { Card } from "../../types";
import {
	CARD_KEYWORDS,
	type CardKeyword,
	parseCardText,
	type TextToken,
} from "../../utils/cardText";
import { AetherSvg } from "../ui/Icons";

const Token = ({ token }: { token: TextToken }) => {
	// Espace insécable : « Rappel » et ses deux-points restent sur la même ligne.
	if (token.kind === "bold") {
		return <strong>{token.value.replace(" :", " :")}</strong>;
	}
	if (token.kind === "note") {
		return <span className="card-text__reminder">{token.value}</span>;
	}
	if (token.kind === "small") {
		return <span className="card-text__small">{token.value}</span>;
	}
	if (token.kind === "aether") {
		return (
			<span className="card-text__aether">
				{token.amount}
				<AetherSvg className="inline w-[1.1em] h-[1.1em]" />
			</span>
		);
	}
	return token.value;
};

const Keyword = ({ label, reminder }: CardKeyword) => (
	<span>
		{label && <span className="card-text__keyword">{label}</span>}
		{reminder && <span className="card-text__reminder">({reminder})</span>}
	</span>
);

type CardTextProps = {
	card: Pick<Card, "description" | "keyword">;
};

/** Texte de règle d'une carte, mis en forme comme sur la carte imprimée. */
export const CardText = ({ card }: CardTextProps) => (
	<span className="card-text">
		{card.keyword && <Keyword {...CARD_KEYWORDS[card.keyword]} />}
		{parseCardText(card.description).map((block, idx) => {
			// biome-ignore-start lint/suspicious/noArrayIndexKey: blocs fixes d'un texte qui ne change pas
			if (block.kind === "rule") {
				return <span key={idx} className="card-text__rule" />;
			}
			if (block.kind === "or") {
				return (
					<span key={idx} className="card-text__or">
						OU
					</span>
				);
			}
			return (
				<span key={idx}>
					{block.tokens.map((token, i) => (
						<Token key={i} token={token} />
					))}
				</span>
			);
			// biome-ignore-end lint/suspicious/noArrayIndexKey: fin
		})}
	</span>
);
