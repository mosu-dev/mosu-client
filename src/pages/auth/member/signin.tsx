import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { MosuLogo } from "@/apps/ui/MosuLogo";

import logoKakao from "@/entities/auth/assets/logo-kakao.png";

import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

export default function MemberSignInPage() {
    const router = useRouter();

    return (
        <div>
            <header className="my-20">
                <MosuLogo />
            </header>

            <div>
                <div className="flex flex-col gap-4">
                    <div>
                        <Label htmlFor="email">아이디</Label>
                        <input
                            id="email"
                            type="email"
                            placeholder="이메일 주소를 입력해주세요"
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

                <ul className="flex justify-center mt-8 h-[20px] text-[#909090]">
                    <li className="flex-1 text-center">
                        <Link href="/auth/signup">회원가입</Link>
                    </li>
                    <li className="h-full border-r-[1px] border-[#909090]" />
                    <li className="flex-1 text-center">
                        <Link href="/auth/signup">아이디 찾기</Link>
                    </li>
                    <li className="h-full border-r-[1px] border-[#909090]" />
                    <li className="flex-1 text-center">
                        <Link href="/auth/signup">비밀번호 찾기</Link>
                    </li>
                </ul>

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
