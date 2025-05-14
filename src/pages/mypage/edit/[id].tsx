import { SelectField } from "@/shared/components/Select";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

import { MyPageLayout } from "..";

export default function MyPageEditPage() {
    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">신청과목 변경</h1>
            </header>

            <div>
                <Label required={false} className="mb-2">
                    응시과목
                </Label>
                <fieldset className="grid grid-cols-3 grid-rows-2 gap-4">
                    <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">국어</div>
                    <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">수학</div>
                    <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">영어</div>
                    <div>
                        <SelectField
                            id="exploration_1"
                            placeholder="탐구1"
                            triggerClassName="w-full"
                        />
                    </div>
                    <div>
                        <SelectField
                            id="exploration_2"
                            placeholder="탐구2"
                            triggerClassName="w-full"
                        />
                    </div>
                    <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">
                        한국사
                    </div>
                </fieldset>

                <Button className="w-full h-[60px] my-16">저장하기</Button>
            </div>
        </div>
    );
}

MyPageEditPage.layout = MyPageLayout;
