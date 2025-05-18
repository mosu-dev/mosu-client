import { cn } from "@/shared/lib/utils";

interface AboutSectionProps {
    title: React.ReactNode;
    titleClassName?: string;
    description: React.ReactNode;
    descriptionClassName?: string;
}

export const AboutSection = ({
    title,
    description,
    titleClassName,
    descriptionClassName,
}: AboutSectionProps) => {
    return (
        <div className="z-10 w-full h-full max-w-[1200px] mx-auto py-40">
            <div className="flex justify-between">
                <h1 className={cn("text-4xl font-bold text-white", titleClassName)}>{title}</h1>
                <p className={cn("w-full max-w-[650px] text-white text-xl", descriptionClassName)}>
                    {description}
                </p>
            </div>
        </div>
    );
};

export const AboutSectionDivider = () => {
    return <hr className="my-2" />;
};
