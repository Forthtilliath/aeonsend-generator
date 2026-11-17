import { parseCardText, type TextToken } from "../../utils/cardText";
import { AetherSvg } from "../ui/Icons";

const Token = ({ token }: { token: TextToken }) => {
	// Espace insécable : « Rappel » et ses deux-points restent sur la même ligne.
	if (token.kind === "bold") {
		return <strong>{token.value.replace(" :", " :")}</strong>;
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

/** Texte de règle d'une carte, mis en forme comme sur la carte imprimée. */
export const CardText = ({ description }: { description: string }) => (
	<span className="card-text">
		{parseCardText(description).map((block, idx) => {
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
			if (block.kind === "keyword") {
				return (
					<span key={idx}>
						{block.label && (
							<span className="card-text__keyword">{block.label}</span>
						)}
						{block.reminder && (
							<span className="card-text__reminder">({block.reminder})</span>
						)}
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
