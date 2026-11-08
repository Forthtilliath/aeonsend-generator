interface StoryBlockProps {
	title: string;
	text: string;
}

/** Passage narratif affiché entre deux affrontements, façon chronique. */
export const StoryBlock = ({ title, text }: StoryBlockProps) => (
	<section className="chronicle px-4 py-3 md:px-6">
		<h3 className="font-display text-xs uppercase tracking-[0.3em] text-aether-300/80 mb-2">
			{title}
		</h3>
		<p className="font-lore text-base md:text-lg leading-relaxed italic text-bone-100">
			{text}
		</p>
	</section>
);
