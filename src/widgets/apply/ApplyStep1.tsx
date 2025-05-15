import { Plus } from "lucide-react";
import { useState } from "react";

import { useApplyContext } from "@/features/apply/contexts/ApplyContext";

import { InfoCard } from "@/shared/components/InfoCard";
import { SelectField } from "@/shared/components/Select";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

export const ApplyStep1 = () => {
    const [selectFields, setSelectFields] = useState<number>(1);

    const { dispatch } = useApplyContext();

    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">모의수능 신청</h1>
            </header>

            <InfoCard
                title="응시료 안내"
                content={
                    "본 모의수능은 실제 수능과 유사한 환경에서 자신의 학습 수준을 점검할 수 있도록 기획된 서비스입니다. 응시료는 시험지 제작, 채점 및 성적 분석, 성적표 제공 등 전반적인 운영 비용에 사용되며, 신청 완료 후 결제까지 완료되어야 시험 접수가 최종 확정됩니다. 결제 완료 후에는 별도의 응시 안내사항이 문자 및 이메일로 안내되며, 정해진 기간 내 응시하지 않을 경우 환불이 불가하오니 반드시 일정을 확인해주세요."
                }
            />

            <section>
                <header className="flex justify-between mb-2">
                    <Label>응시 장소 및 날짜</Label>
                    <button
                        className="hover:cursor-pointer"
                        onClick={() => {
                            setSelectFields((prev) => prev + 1);
                            dispatch({ type: "APPEND_EXAM" });
                        }}
                    >
                        <Plus strokeWidth={1} />
                    </button>
                </header>

                <div className="flex flex-col gap-2">
                    {Array.from({ length: selectFields }).map((_, index) => {
                        return (
                            <fieldset key={index} className="flex gap-4">
                                <SelectField
                                    id="region"
                                    triggerClassName="w-full"
                                    placeholder="지역을 선택해주세요."
                                    options={[
                                        { value: "서울", label: "서울" },
                                        { value: "경기", label: "경기" },
                                        { value: "인천", label: "인천" },
                                        { value: "부산", label: "부산" },
                                        { value: "대구", label: "대구" },
                                        { value: "광주", label: "광주" },
                                        { value: "대전", label: "대전" },
                                        { value: "울산", label: "울산" },
                                    ]}
                                    onValueChange={(value) =>
                                        dispatch({
                                            type: "EDIT_REGION",
                                            payload: { index, region: value },
                                        })
                                    }
                                />
                                <SelectField
                                    id="date"
                                    triggerClassName="w-full"
                                    placeholder="날짜를 선택해주세요."
                                    options={[
                                        { value: "2023-10-01", label: "2023-10-01" },
                                        { value: "2023-10-02", label: "2023-10-02" },
                                        { value: "2023-10-03", label: "2023-10-03" },
                                        { value: "2023-10-04", label: "2023-10-04" },
                                        { value: "2023-10-05", label: "2023-10-05" },
                                    ]}
                                    onValueChange={(value) =>
                                        dispatch({
                                            type: "EDIT_DATE",
                                            payload: { index, date: value },
                                        })
                                    }
                                />
                                <SelectField
                                    id="school_name"
                                    triggerClassName="w-full"
                                    placeholder="고사장을 선택해주세요."
                                    options={[
                                        { value: "학교1", label: "학교1" },
                                        { value: "학교2", label: "학교2" },
                                        { value: "학교3", label: "학교3" },
                                        { value: "학교4", label: "학교4" },
                                        { value: "학교5", label: "학교5" },
                                    ]}
                                    onValueChange={(value) => {
                                        dispatch({
                                            type: "EDIT_SCHOOL_NAME",
                                            payload: { index, schoolName: value },
                                        });
                                    }}
                                />
                            </fieldset>
                        );
                    })}
                </div>

                <footer className="my-2 flex justify-between items-center border-t border-[#EBEBEB] h-20 mt-14">
                    <p>총 금액</p>
                    <h1 className="text-2xl text-[#0080FF] font-bold">
                        {Number(3000000).toLocaleString()}원
                    </h1>
                </footer>
                <Button
                    className="w-full h-[60px] my-5"
                    onClick={() => dispatch({ type: "NEXT_STEP" })}
                >
                    다음으로
                </Button>
            </section>
        </div>
    );
};
