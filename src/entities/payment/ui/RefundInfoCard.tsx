import { cn } from "@/shared/lib/utils";

interface RefundInfoCardProps {
    price: number;
    discount: number;
    totalPrice: number;
    paymentMethod: string;
}

export const RefundInfoCard = ({
    price,
    discount,
    totalPrice,
    paymentMethod,
}: RefundInfoCardProps) => {
    return (
        <article className="border border-[#E2E2E2] w-full h-fit rounded-md">
            <header className="flex justify-between border-b p-5">
                <h2 className="font-semibold">환불 안내</h2>
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
                    <span className="font-semibold">환불 예상금액</span>
                    <span className="text-xl font-bold text-[#0080FF]">
                        {totalPrice.toLocaleString()}원
                    </span>
                </p>
                <p className="text-right text-[#909090]">{paymentMethod}</p>
            </div>
        </article>
    );
};
