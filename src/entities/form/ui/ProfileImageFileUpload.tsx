import Image from "next/image";

import { Label } from "@/shared/ui/label";

import iconCamera from "../assets/icon-camera.png";

export const ProfileImageFileUpload = () => {
    return (
        <fieldset>
            <Label htmlFor="img-profile" className="mb-2">
                수험표 사진
            </Label>
            <button
                id="img-profile"
                className="bg-[#EBEBEB] rounded-md w-[150px] h-[170px] flex items-center justify-center hover:cursor-pointer"
            >
                <div className="rounded-full shadow-md bg-white w-12 h-12 flex items-center justify-center">
                    <Image src={iconCamera} alt="" width={20} height={20} />
                </div>
            </button>
        </fieldset>
    );
};
