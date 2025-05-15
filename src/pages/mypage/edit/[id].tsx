import { SubjectFieldSet } from "@/entities/form/ui/SubjectFieldSet";

import { Button } from "@/shared/ui/button";

import { MyPageLayout } from "..";

export default function MyPageEditPage() {
    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">신청과목 변경</h1>
            </header>

            <div>
                <SubjectFieldSet
                    onChange={(exploration1: string, exploration2: string) => {
                        console.log(exploration1, exploration2);
                    }}
                />

                <Button className="w-full h-[60px] my-16">저장하기</Button>
            </div>
        </div>
    );
}

MyPageEditPage.layout = MyPageLayout;
