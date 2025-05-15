interface InfoCardProps {
    title: string;
    content: string;
}

export const InfoCard = ({ title, content }: InfoCardProps) => {
    return (
        <div className="bg-[#F5F5F5] w-full h-fit p-5 rounded-lg mb-16">
            <h1 className="text-lg font-bold">{title}</h1>
            <p className="flex flex-col whitespace-pre-wrap">{content}</p>
        </div>
    );
};
