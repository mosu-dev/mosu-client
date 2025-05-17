import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import imgSchool from "@/features/home/assets/img-school.png";

import { cn } from "@/shared/lib/utils";

export const Section1 = () => {
    const imgRef = useRef<HTMLImageElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useGSAP(() => {
        gsap.from(imgRef.current, {
            opacity: 0,

            scrollTrigger: {
                trigger: imgRef.current,
                start: "top center",
                end: "center center",

                scrub: 1,
            },
        });

        gsap.fromTo(
            backdropRef.current,
            {
                opacity: 1,
            },
            {
                opacity: 0.8,
                scrollTrigger: {
                    trigger: backdropRef.current,
                    start: "top center",
                    end: "center center",

                    scrub: 1,
                },
            },
        );

        gsap.fromTo(
            textRef.current,
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top center",
                    end: "center center",
                    markers: true,
                    scrub: 1,
                },
            },
        );
    }, {});

    return (
        <section>
            <div className="w-full h-screen relative">
                <div ref={backdropRef} className="bg-black absolute z-10 w-full h-full"></div>
                <Image
                    ref={imgRef}
                    src={imgSchool}
                    alt=""
                    className="w-full h-screen object-cover absolute -z-0"
                />
                <h1
                    ref={textRef}
                    className={cn(
                        "flex flex-col justify-center gap-3",
                        "w-full h-full p-4 absolute z-10",
                        "text-center text-5xl font-bold text-white",
                    )}
                >
                    <span>우리는 단 한 명도,</span>
                    <span>수능을 처음 겪는 상태로 시험장에 보내지 않습니다.</span>
                </h1>
            </div>
        </section>
    );
};
