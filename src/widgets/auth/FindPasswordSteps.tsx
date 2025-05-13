import { useRouter } from "next/router";

import { InputFieldSet, InputWithButtonFieldSet } from "@/shared/components/Input";
import { Button } from "@/shared/ui/button";

export const FindPasswordSection = () => {
    const router = useRouter();

    return (
        <div>
            <header className="my-20">
                <h1 className="text-[2.5rem] font-bold text-center my-">비밀번호 찾기</h1>
            </header>

            <div className="flex flex-col gap-4">
                <InputFieldSet
                    id="name"
                    label="이름"
                    type="text"
                    placeholder="이름을 입력해주세요."
                    required={true}
                />
                <InputFieldSet
                    id="email"
                    label="아이디"
                    type="text"
                    placeholder="아이디를 입력해주세요."
                    required={true}
                />
                <InputWithButtonFieldSet
                    id="tel"
                    label="전화번호"
                    type="tel"
                    placeholder="전화번호를 입력해주세요."
                    required={true}
                    buttonLabel="본인인증"
                    buttonOnClick={() => undefined}
                />
                <InputWithButtonFieldSet
                    id="certification_number"
                    label="인증번호"
                    type="tel"
                    placeholder="인증번호를 입력해주세요."
                    required={true}
                    buttonLabel="확인하기"
                    buttonOnClick={() => undefined}
                />

                <Button
                    className="h-[60px] w-full my-16"
                    onClick={() => router.push("/auth/find-pw?step=change")}
                >
                    다음으로
                </Button>
            </div>
        </div>
    );
};

export const ChangePasswordSection = () => {
    return (
        <div>
            <header className="my-20">
                <h1 className="text-[2.5rem] font-bold text-center my-">비밀번호 변경</h1>
            </header>

            <div className="flex flex-col gap-4">
                <InputFieldSet
                    id="name"
                    label="신규 비밀번호"
                    type="password"
                    placeholder="변경할 새 비밀번호를 입력해주세요."
                    required={true}
                />
                <InputFieldSet
                    id="email"
                    label="신규 비밀번호 확인"
                    type="password"
                    placeholder="위에서 입력했던 비밀번호를 다시 입력해주세요."
                    required={true}
                />

                <Button className="h-[60px] w-full my-16">변경하기</Button>
            </div>
        </div>
    );
};
