import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

import imgTest from "@/features/home/assets/img-test.png";

export const Section2 = () => {
    const textRef1 = useRef<HTMLSpanElement>(null);
    const textRef2 = useRef<HTMLSpanElement>(null);
    const textRef3 = useRef<HTMLSpanElement>(null);
    const textRef4 = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: textRef1.current,
                start: "top center",
                end: "bottom center",
                markers: true,
            },
        });

        gsap.set([textRef1.current, textRef2.current, textRef3.current, textRef4.current], {
            opacity: 0,
        });

        tl.to(textRef1.current, {
            opacity: 1,
            duration: 1,
        })
            .to(textRef2.current, {
                opacity: 1,
                duration: 1,
            })
            .to(textRef3.current, {
                opacity: 1,
                duration: 1,
            })
            .to(textRef4.current, {
                opacity: 1,
                duration: 1,
            });
    }, []);

    return (
        <section className="bg-black w-full h-[900px] flex justify-between">
            <div className="h-full p-40 ml-auto text-white flex flex-col gap-5">
                <h1 className="flex flex-col gap-6 text-5xl font-bold text-wrap">
                    <span ref={textRef1}>이감, 킬캠, 상상…</span>
                    <span ref={textRef2}>고퀄리티 모의고사를 아직도</span>
                    <span ref={textRef3}>독서실, 집에서 낭비하고 있으신가요</span>
                </h1>
                <p className="text-2xl opacity-0 my-6" ref={textRef4}>
                    실전 환경 없이 푼 문제지는 수능 당일, 당신을 도와주지 않습니다.
                </p>
            </div>

            <div className="h-full w-[50%] relative">
                <div
                    className="absolute inset-0 w-full h-full z-10"
                    style={{
                        background:
                            "linear-gradient(270deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%)",
                    }}
                />
                <Image
                    alt=""
                    src={imgTest}
                    className="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    );
};
