import { Fragment } from "react";

import { AboutHeader } from "@/features/about/ui/AboutHeader";
import { AboutSection, AboutSectionDivider } from "@/features/about/ui/AboutSection";

export default function AboutPage() {
    return (
        <div>
            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={
                    <Fragment>
                        <span>시험지 준비 및</span> <br />
                        <span>배부 절차</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        <span>
                            모수 프로그램에서는 시험지가 사전에 배부되지 않으며, 응시자가 원하는
                            시험지를 직접 인쇄하여 지참하는 독특한 방식을 취하고 있습니다. 수험생은
                            프로그램 참여 전 각자 풀고자 하는 수능 시험지(예: 지난년도 수능 기출문제
                            등)를 미리 인쇄하여 시험 당일 가지고 와야 합니다.
                        </span>
                        <br /> <br />
                        <span>
                            시험 당일 시험실에 입실한 후, 감독관은 모든 응시자가 가져온 시험지를
                            시험 시작 전에 일괄 회수하여 보관합니다. 각 교시 시험이 시작될 때
                            감독관이 해당 교시의 시험지를 실제 수능과 동일한 방식으로 배부합니다.
                            시험 종료 후에는 실제 수능과 마찬가지로 감독관이 답안지와 시험지를
                            회수합니다.
                        </span>
                        <br /> <br />
                        <span>
                            이러한 절차를 통해 수험생은 마치 실제 수능에서 교육과정평가원이 배부한
                            시험지로 응시하는 것과 같은 경험을 하게 됩니다.
                        </span>
                    </Fragment>
                }
            />

            <AboutSectionDivider />

            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={<span>마무리 및 강조</span>}
                description={
                    <Fragment>
                        <span>
                            以上과 같이 모수 프로그램의 모든 운영 과정은 실제 수능과 동일한 방식으로
                            이루어집니다.
                        </span>
                        <br /> <br />
                        <span>
                            시험지 준비부터 배부, 입실 절차, 수험번호에 따른 좌석 배치, 감독관의
                            시험 진행, 영어 듣기 평가, 교시별 시간표, 휴식 및 종료 시각, 시험장
                            환경에 이르기까지 세세한 부분까지 실제 수능을 충실히 재현하였습니다.
                            이를 통해 참가 학생들은 실전과 같은 긴장감 속에서 자신의 실력을 점검할
                            수 있고, 학부모님들은 자녀가 수능 당일 어떤 과정을 겪게 되는지 미리
                            체험해볼 수 있습니다.
                        </span>
                        <br /> <br />
                        <span>
                            모수 프로그램은 수능 전 최고의 리허설 기회가 될 것이며, 수험생 여러분께
                            실질적인 도움과 경험을 제공할 것입니다. 시험에 참가하시는 학생과
                            학부모님들께서는 위 안내 사항을 충분히 숙지하시어 준비에 차질 없으시길
                            바랍니다. 모수 프로그램을 통해 실제 수능과 똑같은 경험을 쌓고, 좋은
                            결과를 이루시기를 응원합니다. 
                        </span>
                    </Fragment>
                }
            />
        </div>
    );
}

AboutPage.layout = (page: React.ReactNode) => {
    return (
        <Fragment>
            <AboutHeader />
            <div className="w-full max-w-[1200px] mx-auto px-4">{page}</div>;
        </Fragment>
    );
};
