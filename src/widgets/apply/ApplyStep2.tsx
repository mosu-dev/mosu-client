import { BirthFieldSet } from "@/entities/form/ui/BirthFieldSet";
import { ProfileImageFileUpload } from "@/entities/form/ui/ProfileImageFileUpload";
import { SubjectFieldSet } from "@/entities/form/ui/SubjectFieldSet";

import { useApplyContext } from "@/features/apply/contexts/ApplyContext";

import { ButtonGroupFieldSet } from "@/shared/components/ButtonGroup";
import { InputFieldSet, InputWithButtonFieldSet } from "@/shared/components/Input";
import { ScrollableCard } from "@/shared/components/ScrollableCard";
import { Button } from "@/shared/ui/button";
import { Checkbox } from "@/shared/ui/checkbox";
import { Label } from "@/shared/ui/label";

export const ApplyStep2 = () => {
    const { dispatch } = useApplyContext();

    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">모의수능 신청</h1>
            </header>

            <div className="flex justify-between gap-4">
                <ProfileImageFileUpload />
                <div className="flex-1 flex flex-col justify-between">
                    <InputFieldSet
                        id="name"
                        label="이름"
                        placeholder="이름을 입력해주세요."
                        required={true}
                    />
                    <ButtonGroupFieldSet
                        id="gender"
                        label="성별"
                        required={true}
                        defaultValue="남성"
                        options={[
                            { label: "남성", value: "남성" },
                            { label: "여성", value: "여성" },
                        ]}
                    />
                </div>
            </div>

            <div className="flex flex-col gap-10 my-10">
                <BirthFieldSet
                    required={true}
                    onChange={function (year: number, month: number, day: number): void {
                        console.log(year, month, day);
                    }}
                />
                <InputWithButtonFieldSet
                    id="phone"
                    type="tel"
                    label="전화번호"
                    placeholder="전화번호를 입력해주세요."
                    required={true}
                    buttonLabel="본인인증"
                    buttonOnClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <ButtonGroupFieldSet
                    id="student_type"
                    label="학력"
                    required={true}
                    defaultValue="재학생"
                    options={[
                        { label: "재학생", value: "재학생" },
                        { label: "재수생", value: "재수생" },
                    ]}
                />
                <div className="flex gap-4 w-full justify-between">
                    <InputFieldSet
                        id="school_name"
                        type="number"
                        fieldsetClassName="flex-1/3"
                        min={1}
                        max={3}
                        label="학년"
                        placeholder="현재 학년을 입력해주세요."
                    />
                    <InputFieldSet
                        id="school_name"
                        type="text"
                        fieldsetClassName="flex-2/3"
                        label="학교명"
                        placeholder="재학 중인 학교명을 입력해주세요."
                    />
                </div>

                <div>
                    <SubjectFieldSet
                        required={true}
                        onChange={(exploration1: string, exploration2: string) => {
                            console.log(exploration1, exploration2);
                        }}
                    />
                </div>

                <div className="flex justify-between border border-[#EBEBEB] rounded-md p-2 px-4">
                    <Label htmlFor="lunch_option" className="text-[#909090] text-lg font-normal">
                        도시락을 신청하겠습니다.
                    </Label>
                    <div className="flex items-center">
                        <Checkbox id="lunch_option" className="w-6 h-6" />
                    </div>
                </div>

                <div>
                    <fieldset className="flex justify-between mb-2">
                        <Label htmlFor="terms_of_warning" required={true}>
                            유의사항 및 동의
                        </Label>
                        <Checkbox id="terms_of_warning" className="w-6 h-6" />
                    </fieldset>
                    <ScrollableCard
                        id={""}
                        className="max-h-[160px]"
                        content={`1. 수험자는 수험표에 명시된 시험 일시 및 장소에 따라 시험에 응시해야 하며, 시험 시작 10분 이후에는 고사실에 입실할 수 없음\n2. 수험표 및 접수정보(성명, 수험번호 등)는 본인이 직접 확인 후 정확히 기입해야 하며, 착오로 인한 불이익은 응시자 본인의 책임임\n3. 시험 당일 고사장 내에서는 휴대전화, 스마트기기 등 전자기기 사용이 금지되며, 적발 시 퇴실 조치 및 성적 무효 처리될 수 있음\n4. 시험 진행 중 부정행위가 적발될 경우, 시험이 무효 처리되며 향후 모의시험 응시가 제한될 수 있음\n5. 시험 후 문제지, 답안지, 채점 기준 등의 자료는 외부로 반출할 수 없으며, 관련 정보는 비공개됨`}
                    />
                </div>

                <div>
                    <fieldset className="flex justify-between mb-2">
                        <Label htmlFor="terms_of_refund" required={true}>
                            환불 규정 확인 및 동의
                        </Label>
                        <Checkbox id="terms_of_refund" className="w-6 h-6" />
                    </fieldset>
                    <ScrollableCard
                        id={""}
                        className="max-h-[160px]"
                        content={`1. 접수 마감 전까지는 100% 환불이 가능하며, 접수 마감 이후부터 시험 3일 전까지는 50% 환불 가능\n2. 시험 3일 전 이후에는 일체 환불이 불가하며, 이는 개인 사정 및 질병, 교통 등 모든 사유에 동일하게 적용됨\n3. 환불은 신청일 기준 영업일 5일 이내 처리되며, 결제 수단에 따라 환불 일정에 차이가 있을 수 있음`}
                    />
                </div>

                <div>
                    <Label className="mb-2">결제 정보 확인</Label>
                    <table className="border-collapse w-full">
                        <tbody className="w-full flex flex-col gap-2">
                            <tr className="flex gap-2 [&_td]:border-b [&_td]:border-b-[#EBEBEB] [&_td]:py-2 [&_td]:px-1">
                                <td className="flex-1 block">대치</td>
                                <td className="flex-1 block">2025.11.03</td>
                                <td className="flex-1 block">대치중학교</td>
                            </tr>
                            <tr className="flex gap-2 [&_td]:border-b [&_td]:border-b-[#EBEBEB] [&_td]:py-2  [&_td]:px-1">
                                <td className="flex-1 block">대치</td>
                                <td className="flex-1 block">2025.11.03</td>
                                <td className="flex-1 block">대치중학교</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <footer className="my-2 flex justify-between items-center border-t border-[#EBEBEB] h-20 mt-8">
                    <p>총 금액</p>
                    <h1 className="text-2xl text-[#0080FF] font-bold">
                        {Number(3000000).toLocaleString()}원
                    </h1>
                </footer>
                <Button
                    className="w-full h-[60px] my-5"
                    onClick={() => dispatch({ type: "NEXT_STEP" })}
                >
                    결제하기
                </Button>
            </div>
        </div>
    );
};
