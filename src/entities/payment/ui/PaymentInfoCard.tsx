import { cn } from "@/shared/lib/utils";

interface PaymentInfoCardProps {
    price: number;
    discount: number;
    totalPrice: number;
    paymentMethod: string;
}

export const PaymentInfoCard = ({
    price,
    discount,
    totalPrice,
    paymentMethod,
}: PaymentInfoCardProps) => {
    return (
        <article className="border border-[#E2E2E2] w-full h-fit rounded-md">
            <header className="flex justify-between border-b p-5">
                <h2 className="font-semibold">결제 정보</h2>
            </header>

            <div className={cn("m-5 [&_p]:my-2")}>
                <p className="flex justify-between">
                    <span className="text-[#909090]">상품금액</span>
                    <span>{price.toLocaleString()}원</span>
                </p>
                <p className="flex justify-between">
                    <span className="text-[#909090]">할인</span>
                    <span>-{discount.toLocaleString()}원</span>
                </p>

                <hr className="my-4" />

                <p className="flex justify-between items-center">
                    <span className="font-semibold">총 결제금액</span>
                    <span className="text-xl font-bold text-[#0080FF]">
                        {totalPrice.toLocaleString()}원
                    </span>
                </p>
                <p className="text-right text-[#909090]">{paymentMethod}</p>
            </div>
        </article>
    );
};
