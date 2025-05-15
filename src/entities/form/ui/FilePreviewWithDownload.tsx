import { CircleArrowDown, Paperclip } from "lucide-react";

interface FilePreviewWithDownloadProps {
    fileName: string;
    onOpen: () => void;
    onRemove: () => void;
}

export const FilePreviewWithDownload = ({
    fileName,
    onOpen,
    onRemove,
}: FilePreviewWithDownloadProps) => {
    return (
        <div className="bg-[#F5F5F5] w-full h-[60px] rounded-md flex items-center px-4 justify-between">
            <button className="hover:underline flex gap-2 hover:cursor-pointer" onClick={onOpen}>
                <Paperclip color="#0080FF" />
                {fileName}
            </button>
            <button onClick={onRemove} className="hover:cursor-pointer">
                <CircleArrowDown />
            </button>
        </div>
    );
};
