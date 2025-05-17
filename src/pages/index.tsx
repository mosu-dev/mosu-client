import { HeroSection } from "@/widgets/home/HeroSection";
import { Section1 } from "@/widgets/home/Section1";
import { Section2 } from "@/widgets/home/Section2";
import { Section3 } from "@/widgets/home/Section3";
import { Section4 } from "@/widgets/home/Section4";

export default function Home() {
    return (
        <div>
            <HeroSection />

            {/* 우리는 단 한 명도, 수능을 처음 겪는 상태로 시험장에 보내지 않습니다. */}
            <Section1 />

            {/* 이감, 킬캠, 상상… 고퀄리티 모의고사를 아직도 독서실, 집에서 낭비하고 있으신가요 */}
            <Section2 />

            {/* 실전 환경 없이 푼 문제지는 수능 당일, 당신을 도와주지 않습니다. */}
            <Section3 />

            {/* 수험 번호 확인부터 마지막 방송 멘트까지, 수능의 모든 디테일이 ‘모수’에 있습니다. */}
            <Section4 />
        </div>
    );
}
