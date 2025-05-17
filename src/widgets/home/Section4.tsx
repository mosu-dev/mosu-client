import { Hash } from "lucide-react";

import { cn } from "@/shared/lib/utils";

const FeatureCard = () => {
    return (
        <div
            className={cn(
                "w-[320px] h-[316px] flex flex-col justify-between p-8",
                "rounded-xl border border-white",
                "[&:nth-child(2n)]:translate-y-8",
            )}
            style={{
                background:
                    "linear-gradient(222.69deg, rgba(255, 255, 255, 0.1) 2.22%, rgba(153, 153, 153, 0.1) 98.51%)",
            }}
        >
            <div className="rounded-full bg-[#FFFFFF1A] w-fit h-fit p-4">
                <Hash color="#fff" strokeWidth={2} size={40} />
            </div>

            <div>
                <h1 className="text-3xl font-bold my-4">수험번호</h1>
                <p className="text-base">
                    <span>실제 수능 수험번호와 동일한 형식의</span>
                    <span>수험표를 사전에 배부합니다.</span>
                </p>
            </div>
        </div>
    );
};

export const Section4 = () => {
    return (
        <section className="bg-black w-full h-[800px]">
            <div className="h-full p-40 ml-auto text-white flex flex-col gap-6 pb-0">
                <h1 className="flex flex-col gap-2 text-5xl font-bold ">
                    <span>수험 번호 확인부터 마지막 방송 멘트까지,</span>
                    <span>수능의 모든 디테일이 ‘모수’에 있습니다.</span>
                </h1>
                <div className="flex gap-4 ml-auto my-20">
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                    <FeatureCard />
                </div>
            </div>
        </section>
    );
};
