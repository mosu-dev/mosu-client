import { MosuLogo } from "@/apps/ui/MosuLogo";

import { InputFieldSet } from "@/shared/components/Input";
import { Button } from "@/shared/ui/button";

export default function NonMemberSignInPage() {
    return (
        <div>
            <header className="my-20">
                <MosuLogo />
            </header>

            <div>
                <div className="flex flex-col gap-4">
                    <InputFieldSet
                        id="student_id"
                        label="수험번호"
                        type="text"
                        placeholder="수험번호를 입력해주세요."
                    />
                    <InputFieldSet
                        id="password"
                        label="비밀번호"
                        type="password"
                        placeholder="비밀번호를 입력해주세요. (영문, 숫자, 특수문자 조합 8-20자)"
                    />
                </div>

                <Button className="w-full h-[60px] mt-8">로그인</Button>
            </div>
        </div>
    );
}

NonMemberSignInPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
