import { useRouter } from "next/router";

import { RegisteredExamDetailCard } from "@/entities/exam/ui/RegisteredExamDetailCard";
import { PaymentInfoCard } from "@/entities/payment/ui/PaymentInfoCard";

import { Button } from "@/shared/ui/button";

import { MyPageLayout } from "..";

export default function MyPageExamDetailPage() {
    const router = useRouter();

    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">마이페이지</h1>
            </header>

            <section className="flex flex-col gap-5 mb-14">
                <RegisteredExamDetailCard
                    id={Number(router.query.id)}
                    examDate="2025-08-26"
                    examSchool="서울고등학교"
                    examLocation="서울특별시 서초구 효령로 197"
                    examSubjects={["국어", "수학", "영어", "생활과 윤리", "윤리와 사상", "한국사"]}
                />

                <PaymentInfoCard
                    price={119000}
                    discount={0}
                    totalPrice={119000}
                    paymentMethod={"계좌 간편결제 (카카오뱅크)"}
                />
            </section>

            <Button className="w-full h-[60px] mb-10" onClick={() => router.push(`/mypage`)}>
                목록으로
            </Button>
        </div>
    );
}

MyPageExamDetailPage.layout = MyPageLayout;
