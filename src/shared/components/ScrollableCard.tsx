import { cn } from "../lib/utils";

interface ScrollableCardProps {
    id: string;
    className?: string;
    content: string;
}

export const ScrollableCard = ({ id, className, content }: ScrollableCardProps) => {
    return (
        <article
            id={id}
            className={cn(
                "w-full p-4",
                "whitespace-pre-wrap overflow-y-scroll",
                "rounded-md border border-[#EBEDEF]",
                className,
            )}
        >
            {content}
        </article>
    );
};
