import Image from "next/image";

import imgInfinite from "@/features/home/assets/img-infinite.png";

import { cn } from "@/shared/lib/utils";

export const Section3 = () => {
    return (
        <section className="bg-black w-full">
            <div className="h-full p-40 ml-auto text-white flex flex-col gap-6 pb-0">
                <h1 className="flex flex-col gap-2 text-5xl font-bold ">
                    <span>실전 환경 없이 푼 문제지는</span>
                    <span>수능 당일, 당신을 도와주지 않습니다. </span>
                </h1>
                <p className="text-2xl flex flex-col">
                    <span>모수는 학교/학원에서 보는 전과목 풀 모의고사가 아닙니다.</span>
                    <span>
                        모수는 수험생이 과목별로 직접 구매한 고퀄리티 사설 모의고사를 가져와
                        응시합니다.
                    </span>
                </p>

                <p className="text-2xl text-[#EAEAEA99]">
                    예) 국어 – 이감 / 수학 –킬캠/ 영어 –조정식/ 탐구 – 메가, 이투스 등
                </p>
            </div>

            <div className="w-full h-[900px] flex">
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
                        src={imgInfinite}
                        className="absolute inset-0 h-full w-full object-contain translate-x-[-100px]"
                    />
                </div>

                <div className="flex flex-col text-white gap-10 justify-center h-full pr-20">
                    <div
                        className={cn(
                            "flex items-center",
                            "[&>p]:text-xl",
                            "[&>h2]:text-4xl [&>h2]:basis-[240px] [&>h2]:shrink-0",
                            "[&>h2>span:last-child]:text-[#999999]",
                        )}
                    >
                        <h2>
                            <span>M</span>
                            <span>omentum</span>
                        </h2>
                        <p>
                            수능 직전, 내 실력을 폭발시킬 마지막 가속을
                            <br /> 오직 모수에서만 경험하실 수 있습니다.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "flex items-center",
                            "[&>p]:text-xl",
                            "[&>h2]:text-4xl [&>h2]:basis-[240px] [&>h2]:shrink-0",
                            "[&>h2>span:last-child]:text-[#999999]",
                        )}
                    >
                        <h2>
                            <span>O</span>
                            <span>ne & Only</span>
                        </h2>
                        <p>
                            한 사람 한 사람의 실력과 전략에 맞춘 진짜 맞춤형 실전 훈련이 가능합니다.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "flex items-center",
                            "[&>p]:text-xl",
                            "[&>h2]:text-4xl [&>h2]:basis-[240px] [&>h2]:shrink-0",
                            "[&>h2>span:last-child]:text-[#999999]",
                        )}
                    >
                        <h2>
                            <span>S</span>
                            <span>trategic</span>
                        </h2>
                        <p>
                            모수의 시험 경험을 통해 한 사람 한 사람의 실력과 전략에 맞춘 <br />
                            진짜 맞춤형 실전 훈련이 가능합니다.
                        </p>
                    </div>

                    <div
                        className={cn(
                            "flex items-center",
                            "[&>p]:text-xl",
                            "[&>h2]:text-4xl [&>h2]:basis-[240px] [&>h2]:shrink-0",
                            "[&>h2>span:last-child]:text-[#999999]",
                        )}
                    >
                        <h2>
                            <span>U</span>
                            <span>ltimate</span>
                        </h2>
                        <p>
                            모수에서의 시험 경험은 단순히 “시험을 보는 연습”이 아닌,
                            <br />
                            수능에서 진짜 실력을 끌어올리는 궁극적인 마지막 교정 훈련이 될 것입니다.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
