import { Fragment } from "react";

import { AboutHeader } from "@/features/about/ui/AboutHeader";
import { AboutSection, AboutSectionDivider } from "@/features/about/ui/AboutSection";
import { TimeTable } from "@/features/warning/ui/TimeTable";

export default function WarningPage() {
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
                title={
                    <Fragment>
                        <span>시험 당일 입실 및 </span> <br />
                        <span>수험번호·좌석 운영</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        <span>시험 당일 입장 방식은 실제 수능과 동일하게 진행됩니다.</span>
                        <br /> <br />
                        <span>
                            모든 응시자는 오전 8시 10분까지 본인에게 지정된 시험실(고사장)에 입실
                            완료해야 합니다. 입실 시 수험표(프로그램 참가 신청 시 부여된 수험번호가
                            기재된 표)와 신분증을 지참해야 하며, 휴대전화 등 반입이 금지된 물품은
                            실제 수능과 동일한 규정이 적용됩니다 (예: 모든 전자기기 반입 금지 등). 
                        </span>
                        <br /> <br />
                        <span>
                            시험실 입실 후 좌석 배치는 부여된 수험번호에 따라 미리 지정되어
                            있습니다. 즉, 수험번호 는 실제 수능처럼 교실 내 자리 번호와 연계되어
                            있어, 수험생은 본인의 수험번호 자리에 앉 게 됩니다. 예를 들어 실제
                            수능에서 수험번호에 따라 건물, 시험실, 좌석이 정해지듯이, 모수
                            프로그램에서도 사전에 동일한 방식으로 좌석을 지정합니다. 좌석에는
                            수험번호표가 부착되어 있어 수험생과 학부모님들은 실제 수능장에서의 자리
                            배치 방식과 동일함을 확인할 수 있 습니다. 
                        </span>
                    </Fragment>
                }
            />

            <AboutSectionDivider />

            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={
                    <Fragment>
                        <span>감독관 운영 및</span> <br />
                        <span>시험 진행</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        <span>
                            모수 프로그램의 감독관 운영 또한 실제 수능과 동일하게 이루어집니다.
                        </span>
                        <br /> <br />
                        <span>
                            시험실마다 배치된 감독관은 실제 수능 감독 선생님들처럼 시험 진행을
                            총괄합니다. 감독관은 시험 시작 전에 수험생 본인 확인을 위해 신분증과
                            수험표를 대조하고, 응시자 유의사항을 안내합니다. 각 교시 시작 시간에
                            맞춰 감독관의 지시에 따라 시험지를 배부 및 개봉하며, 종료 시에는 답안을
                            작성한 OMR 카드와 시험지를 회수합니다. 시험 진행 중 감독관은 부정행위
                            방지를 위해 시험실을 순시하고 감시하는 등 감독 업무를 실제 수능과
                            동일하게 수행합니다. 시험 중 질의 응답이나 긴급 상황 대응 절차 (예:
                            화장실 이용 요청 등) 역시 실제 수능의 규정을 따릅니다.
                        </span>
                        <br /> <br />
                        <span>
                            이러한 철저한 감독관 운영을 통해 시험장의 긴장감과 규율이 실제 수능과
                            같도록 유지됩니다.
                        </span>
                    </Fragment>
                }
            />

            <AboutSectionDivider />

            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={
                    <Fragment>
                        <span>영어 듣기 평가</span> <br />
                        <span>진행 방식</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        <span>영어 영역 듣기 평가는 실제 수능과 동일한 방식으로 진행됩니다.</span>
                        <br /> <br />
                        <span>
                            영어 시험 시간에 맞춰 한국교육과정평가원에서 제공하는 실제 수능 영어
                            듣기 평가 음원이 학교 방송 시스템(스피커)을 통해 그대로 재생됩니다.
                            수험생들은 각자 가져온 시험지에 포함된 영어 듣기 문항을 보며, 방송으로
                            흘러나오는 음원을 들으면서 답안을 표시하게 됩니다. 음원 재생 시각 역시
                            실제 수능 시간표에 맞춰 이루어지며, 듣기 평가는 약 25분간 진행됩니다.
                        </span>
                        <br /> <br />
                        <span>
                            듣기가 진행되는 동안 시험실 환경은 비행기 운항까지 멈출 정도로 조용한
                            실제 수능의 분위기를 최대한 재현합니다. 모든 참석자는 감독관의 안내에
                            따라 잡음을 최소화하고, 듣기 평가 도중에는 일체의 이동이나 잡담이
                            금지되어 실제 수능과 같은 긴장감을 유지합니다. 듣기 평가 종료 후에는
                            감독관 지시에 따라 남은 영어 영역 문항 풀이를 계속 진행합니다.
                        </span>
                    </Fragment>
                }
            />

            <AboutSectionDivider />

            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={
                    <Fragment>
                        <span>시험 시간표 및 일정</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        <span>
                            모수 프로그램의 시험 시간표는 실제 수능과 완전히 동일하게 운영됩니다. 각
                            교시의 시작 시간, 종료 시간, 쉬는 시간과 점심시간까지 실제 일정과
                            똑같습니다.
                        </span>
                        <br /> <br />
                        <span>
                            아래의 시간표는 실제 수능의 진행 일정과 정확히 일치합니다. 모든 과목의
                            시험 시간 길이와 순서, 휴식 시간까지 동일하므로, 수험생은 하루 동안 진짜
                            수능 하루 일정을 그대로 체험하게 됩니다.
                        </span>
                        <br /> <br />
                        <span>
                            예를 들어, 시험은 아침 8시 40분에 시작하여 마지막 교시가 오후 5시 45분경
                            종료되며 , 수능과 동일한 휴식 시간 간격과 점심 시간을 갖게 됩니다.
                        </span>
                    </Fragment>
                }
            />

            <TimeTable />

            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={
                    <Fragment>
                        <span>시험 장소 및 환경</span>
                    </Fragment>
                }
                description={
                    <Fragment>
                        <span>
                            모수 프로그램은 실제 학교 교실을 시험장으로 사용하여, 수능과 같은 환경을
                            제공합니다. 실제 운영에서는 주로 중학교 교실을 대관하여 시험장을
                            마련하며, 교실 내 환경 (책상/의자 배치, 조명, 칠판, 시계 등) 역시
                            일반적인 수능 시험장과 유사하게 구성됩니다.
                        </span>
                        <br /> <br />
                        <span>
                            수험생들은 현직 학교 교실에서 시험을 보게 되므로 익숙하면서도 실제 수능
                            당일의 분위기를 느낄 수 있습니다. 특히 책상에는 시험지와 답안지를 놓을
                            충분한 공간이 확보되고, 감독관 책상 위치나 응시자 간 간격도 실제 수능
                            시행 표준에 맞춰 조정됩니다. 학교 방송 시설을 통해 벨 소리, 안내 방송,
                            듣기 평가 음원 등이 송출되기 때문에 현장감이 더해집니다.
                        </span>
                        <br /> <br />
                        <span>
                            단, 특정 학교 이름은 공개하지 않으며, 시험장 주소 등 상세 정보는
                            참가자들에게 별도로 안내됩니다. 이는 외부 방해 요소를 최소화하고 공정한
                            시험 환경을 조성하기 위한 조치입니다.
                        </span>
                    </Fragment>
                }
            />

            <AboutSection
                titleClassName="text-black"
                descriptionClassName="text-black"
                title={
                    <Fragment>
                        <span>마무리 및 강조</span>
                    </Fragment>
                }
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

WarningPage.layout = (page: React.ReactNode) => {
    return (
        <Fragment>
            <AboutHeader />
            <div className="w-full max-w-[1200px] mx-auto px-4">{page}</div>;
        </Fragment>
    );
};
