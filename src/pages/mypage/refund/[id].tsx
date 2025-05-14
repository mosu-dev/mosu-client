import { useRouter } from "next/router";

import { RegisteredExamInfoCard } from "@/entities/exam/ui/RegisteredExamInfoCard";
import { RefundInfoCard } from "@/entities/payment/ui/RefundInfoCard";

import { Button } from "@/shared/ui/button";

import { MyPageLayout } from "..";

export default function MyPageRefundPage() {
    const router = useRouter();

    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">모의수능 신청</h1>
            </header>

            <div className="bg-[#F5F5F5] w-full h-fit p-5 rounded-lg mb-16">
                <h1 className="text-lg font-bold">환불규정 안내</h1>
                <p className="flex flex-col">
                    <span>
                        1. 접수 마감 전까지는 100% 환불이 가능하며, 접수 마감 이후부터 시험 3일
                        전까지는 50% 환불 가능
                    </span>
                    <span>
                        2. 시험 3일 전 이후에는 일체 환불이 불가하며, 이는 개인 사정 및 질병, 교통
                        등 모든 사유에 동일하게 적용됨
                    </span>
                    <span>
                        3. 환불은 신청일 기준 영업일 5일 이내 처리되며, 결제 수단에 따라 환불 일정에
                        차이가 있을 수 있음
                    </span>
                </p>
            </div>

            <section className="flex flex-col gap-5 mb-14">
                <RegisteredExamInfoCard
                    examDate="2025-08-26"
                    examSchool="서울고등학교"
                    examLocation="서울특별시 서초구 효령로 197"
                    examSubjects={["국어", "수학", "영어", "생활과 윤리", "윤리와 사상", "한국사"]}
                />

                <RefundInfoCard
                    price={119000}
                    discount={0}
                    totalPrice={119000}
                    paymentMethod={"계좌 간편결제 (카카오뱅크)"}
                />
            </section>

            <Button className="w-full h-[60px] mb-10" onClick={() => router.push(`/mypage`)}>
                환불 신청하기
            </Button>
        </div>
    );
}

MyPageRefundPage.layout = MyPageLayout;
