import Image from "next/image";
import { useRouter } from "next/router";

import imgSignUpComplete from "@/entities/auth/assets/img-signup-complete.png";

import { useSignUpContext } from "@/features/auth-signup/contexts/SignUpContext";
import { BirthFieldSet } from "@/features/auth-signup/ui/BirthFieldSet";

import { ButtonGroupFieldSet } from "@/shared/components/ButtonGroup";
import { CheckboxFieldSet, CheckboxWithLinkFieldSet } from "@/shared/components/Checkbox";
import { InputFieldSet, InputWithButtonFieldSet } from "@/shared/components/Input";
import { Button } from "@/shared/ui/button";

export const SignUpStep1 = () => {
    const { dispatch } = useSignUpContext();

    return (
        <section>
            <div className="flex flex-col gap-6 my-12">
                <InputWithButtonFieldSet
                    id="id"
                    label="아이디"
                    placeholder="아이디를 입력해주세요."
                    buttonLabel="중복확인"
                    buttonOnClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <InputFieldSet
                    id="password"
                    label="비밀번호"
                    type="password"
                    placeholder="비밀번호를 입력해주세요. (영문, 숫자, 특수문자 조합 8-20자)"
                />
                <InputFieldSet
                    id="password_confirm"
                    label="비밀번호 확인"
                    type="password"
                    placeholder="비밀번호를 다시 입력해주세요."
                />
            </div>
            <div className="flex flex-col gap-2">
                <CheckboxWithLinkFieldSet
                    id="terms_of_use"
                    label="모수 이용약관 (필수)"
                    linkLabel="상세보기"
                    linkOnClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <CheckboxWithLinkFieldSet
                    id="terms_of_info"
                    label="개인정보 수집 및 이용 동의 (필수)"
                    linkLabel="상세보기"
                    linkOnClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <CheckboxFieldSet id="terms_of_marketing" label="마케팅 정보 수신 (선택)" />
            </div>

            <Button
                variant="default"
                className="w-full h-[60px] my-10"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
                다음으로
            </Button>
        </section>
    );
};

export const SignUpStep2 = () => {
    const { dispatch } = useSignUpContext();

    return (
        <section>
            <div className="flex flex-col gap-6 my-12">
                <InputFieldSet
                    id="name"
                    label="이름"
                    placeholder="이름을 입력해주세요."
                    required={true}
                />
                <BirthFieldSet
                    id="birth"
                    label="생년월일"
                    required={true}
                    onChange={function (year: number, month: number, day: number): void {
                        console.log(year, month, day);
                    }}
                />
                <InputWithButtonFieldSet
                    id="phone_number"
                    label="전화번호"
                    placeholder="전화번호를 입력해주세요."
                    required={true}
                    buttonLabel="본인인증"
                    buttonOnClick={function (): void {
                        throw new Error("Function not implemented.");
                    }}
                />
                <InputWithButtonFieldSet
                    id="email"
                    label="이메일"
                    placeholder="이메일을 입력해주세요."
                    required={false}
                    buttonLabel="메일인증"
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
                <InputFieldSet
                    id="school_name"
                    label="학교명"
                    placeholder="재학 중인 학교명을 입력해주세요."
                />
                <InputFieldSet
                    id="school_grade"
                    label="학번"
                    placeholder="현재 학년을 입력해주세요."
                />
            </div>

            <Button
                variant="default"
                className="w-full h-[60px] my-10"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
                회원가입
            </Button>
        </section>
    );
};

export const SignUpStep3 = () => {
    const router = useRouter();

    return (
        <section>
            <Image
                src={imgSignUpComplete}
                alt="회원가입 완료"
                className="mx-auto my-12"
                width={250}
                height={250}
            />

            <div className="text-center">
                <h1 className="text-2xl font-bold">회원가입이 완료되었습니다.</h1>
                <p className="text-lg text-[#909090]">
                    지금 바로 당신의 성적표를 바꿔줄 첫 모의고사를 신청해보세요!
                </p>
                <Button
                    variant="default"
                    className="w-full h-[60px] my-10"
                    onClick={() => router.push("/")}
                >
                    회원가입 완료
                </Button>
            </div>
        </section>
    );
};
