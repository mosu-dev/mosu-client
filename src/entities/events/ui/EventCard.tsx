import Image from "next/image";

import placeholderImage from "@/shared/assets/placeholder.jpg";

export const EventCard = () => {
    return (
        <article className="rounded-lg max-w-[340px] border border-[#E2E2E2] overflow-hidden">
            <div className="w-full max-w-[340px] h-[216px] object-cover overflow-hidden rounded-t-lg">
                <Image src={placeholderImage} alt="" width={340} height={400} />
            </div>
            <footer className="p-6">
                <h1 className="text-lg font-semibold">
                    내 통신사 혜택 확인하고 모의수능 할인 받자!
                </h1>
                <p className="text-[#909090] text-base">2025-08-26</p>
            </footer>
        </article>
    );
};
