import { BookOpen } from "lucide-react";

interface StoryBlockProps {
	title: string;
	text: string;
}

/** Passage narratif affiché entre deux affrontements. */
export const StoryBlock = ({ title, text }: StoryBlockProps) => (
	<section className="relative rounded-lg px-4 py-3 border-l-4 border-amber-600/70 bg-amber-950/30">
		<h3 className="text-xs uppercase tracking-wider text-amber-300/80 mb-1 flex items-center gap-1">
			<BookOpen className="w-3.5 h-3.5" />
			{title}
		</h3>
		<p className="text-sm leading-relaxed italic text-amber-50/90">{text}</p>
	</section>
);
