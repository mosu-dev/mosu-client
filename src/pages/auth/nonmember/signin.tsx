import { MosuLogo } from "@/apps/ui/MosuLogo";

import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

export default function NonMemberSignInPage() {
    return (
        <div>
            <header className="my-20">
                <MosuLogo />
            </header>

            <div>
                <div className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="student_id">수험번호</Label>
                        <input
                            id="student_id"
                            type="text"
                            placeholder="수험번호를 입력해주세요."
                            className="w-full border-b-[#ebebeb] border-b-[1px] h-[52px] focus:outline-none"
                        />
                    </div>
                    <div>
                        <Label htmlFor="password">비밀번호</Label>
                        <input
                            id="password"
                            type="password"
                            placeholder="비밀번호를 입력해주세요. (영문, 숫자, 특수문자 조합 8-20자)"
                            className="w-full border-b-[#ebebeb] border-b-[1px] h-[52px] focus:outline-none"
                        />
                    </div>
                </div>

                <Button className="w-full h-[60px] mt-8">로그인</Button>
            </div>
        </div>
    );
}

NonMemberSignInPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
