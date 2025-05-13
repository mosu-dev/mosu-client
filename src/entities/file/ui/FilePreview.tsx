import { Paperclip, X } from "lucide-react";

interface FilePreviewProps {
    fileName: string;
    onOpen: () => void;
    onRemove: () => void;
}

export const FilePreview = ({ fileName, onOpen, onRemove }: FilePreviewProps) => {
    return (
        <div className="bg-[#F5F5F5] w-full h-[60px] rounded-md flex items-center px-4 justify-between">
            <button className="hover:underline flex gap-2 hover:cursor-pointer" onClick={onOpen}>
                <Paperclip color="#0080FF" />
                {fileName}
            </button>
            <button onClick={onRemove} className="hover:cursor-pointer">
                <X />
            </button>
        </div>
    );
};
