import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import imgHero from "@/features/home/assets/img-hero.png";

export const HeroSection = () => {
    const imgRef = useRef<HTMLImageElement>(null);

    useGSAP(() => {
        gsap.fromTo(imgRef.current, { opacity: 0.7 }, { opacity: 1, duration: 1 });
    }, []);

    return (
        <section className="relative text-white" style={{ height: "calc(100dvh - 100px)" }}>
            <Image
                ref={imgRef}
                src={imgHero}
                alt=""
                className="absolute -z-0 w-full h-full object-cover"
            />
            <div className="z-0 absolute text-center mx-auto w-full h-full flex flex-col justify-evenly p-4">
                <h1 className="text-6xl font-bold mx-auto block mt-10 overflow-hidden">
                    <span>당신의 수능을 바꿀 단 한 번의 경험, 모수</span>
                </h1>
                <div className="flex flex-col mx-auto w-full gap-4">
                    <p className="flex flex-col mx-auto w-full text-lg">
                        <span>실제 수능 고사장과 동일한 환경, 동일한 긴장감.</span>
                        <span>수능을 마지막까지 완벽히 준비하는 방법, 모수에서 시작하세요.</span>
                    </p>
                    <button className="rounded-full p-3 bg-white my-2 w-fit mx-auto flex items-center gap-3 px-4 hover:cursor-pointer">
                        <span className="text-black">지금 바로 신청하기</span>
                        <span className="h-fit aspect-square rounded-full bg-black p-1">
                            <ChevronRight strokeWidth={1} />
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};
