import Image from "next/image";
import { useRouter } from "next/router";

import imgSignUpComplete from "@/entities/auth/assets/img-signup-complete.png";

import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

export const ApplyStep3 = () => {
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
                <h1 className="text-2xl font-bold">결제가 완료되었습니다.</h1>
                <p className="text-lg text-[#909090]">
                    마이페이지에서 수험표를 발급 받아야 신청이 완료됩니다.
                </p>

                <article className="flex justify-between my-10 p-6 border border-[#EBEBEB] rounded-md font-semibold ">
                    <h2 className="text-lg">수험번호</h2>
                    <h2 className="text-2xl">123456678</h2>
                </article>

                <article>
                    <Label className="mb-2">응시 정보 확인</Label>
                    <table className="border-collapse w-full text-left">
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
                </article>

                <Button
                    variant="default"
                    className="w-full h-[60px] my-10"
                    onClick={() => router.push("/")}
                >
                    메인화면으로 이동
                </Button>
            </div>
        </section>
    );
};
