import Image from "next/image";
import { Fragment } from "react";

import imgAbout from "@/features/about/assets/img-about.jpg";

import { AboutSection } from "./AboutSection";

export const AboutHeader = () => {
    return (
        <header className="w-full h-[540px] relative">
            <div className="w-full h-full absolute inset-0 bg-black/70 z-[-1]" />
            <Image
                alt=""
                src={imgAbout}
                className="w-full h-full absolute inset-0 object-cover z-[-2]"
            />
            <AboutSection
                title={
                    <Fragment>
                        <span>모수 프로그램</span> <br />
                        <span>운영 안내</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        모수 프로그램은 고등학교 1·2·3학년 및 재수생을 대상으로 실제
                        대학수학능력시험
                        <br />
                        (수능)과 거의 동일한 환경에서 시험을 치를 수 있도록 마련된 특별
                        프로그램입니다.
                        <br />
                        <br />
                        모든 진행 과정 이 실제 수능과 동일하게 이루어지므로,
                        <br />
                        수험생들은 실제 시험의 분위기와 절차를 그대로 경험할 수 있습니다.
                        <br />
                        <br />
                        아래에서는 모수 프로그램의 구체적인 운영 방식에 대해 안내해 드리겠습니다.
                    </Fragment>
                }
            />
        </header>
    );
};
