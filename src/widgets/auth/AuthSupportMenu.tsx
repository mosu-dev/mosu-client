import Link from "next/link";

export const AuthSupportMenu = () => {
    return (
        <ul className="flex justify-center mt-8 h-[20px] text-[#909090]">
            <li className="flex-1 text-center">
                <Link href="/auth/signup">회원가입</Link>
            </li>
            <li className="h-full border-r-[1px] border-[#909090]" />
            <li className="flex-1 text-center">
                <Link href="/auth/find-id">아이디 찾기</Link>
            </li>
            <li className="h-full border-r-[1px] border-[#909090]" />
            <li className="flex-1 text-center">
                <Link href="/auth/find-pw">비밀번호 찾기</Link>
            </li>
        </ul>
    );
};
