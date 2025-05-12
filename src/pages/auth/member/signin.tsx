import Image from "next/image";
import { useRouter } from "next/router";

import { MosuLogo } from "@/apps/ui/MosuLogo";

import logoKakao from "@/entities/auth/assets/logo-kakao.png";

import { AuthSupportMenu } from "@/widgets/auth/AuthSupportMenu";

import { InputFieldSet } from "@/shared/components/Input";
import { Button } from "@/shared/ui/button";

export default function MemberSignInPage() {
    const router = useRouter();

    return (
        <div>
            <header className="my-20">
                <MosuLogo />
            </header>

            <div>
                <div className="flex flex-col gap-4">
                    <InputFieldSet
                        id="email"
                        label="아이디"
                        placeholder="이메일 주소를 입력해주세요"
                    />
                    <InputFieldSet
                        id="password"
                        label="비밀번호"
                        type="password"
                        placeholder="비밀번호를 입력해주세요. (영문, 숫자, 특수문자 조합 8-20자)"
                    />
                </div>

                <Button className="w-full h-[60px] mt-8">로그인</Button>

                <AuthSupportMenu />

                <div className="flex flex-col gap-2.5 my-14 text-lg">
                    <Button className="w-full h-[60px] bg-[#FEE500] hover:bg-[#FEE500] hover:cursor-pointer  font-semibold text-black text-base">
                        <Image
                            src={logoKakao}
                            alt="카카오 로그인"
                            width={24}
                            height={24}
                            className="mr-1 "
                        />
                        카카오 로그인
                    </Button>
                    <Button
                        variant="outline"
                        className="border-black w-full h-[60px] font-semibold text-black text-base"
                        onClick={() => router.push("/auth/nonmember/signin")}
                    >
                        수험번호로 비회원 로그인
                    </Button>
                </div>
            </div>
        </div>
    );
}

MemberSignInPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
