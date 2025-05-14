import { useRouter } from "next/router";

interface RegisteredExamCardBodyProps {
    id: number;
    schoolName: string;
    examDate: string;
    examSubjects: string[];
    lunchOption: boolean;
}

const RegisteredExamCardBody = ({
    id,
    schoolName,
    examDate,
    examSubjects,
    lunchOption,
}: RegisteredExamCardBodyProps) => {
    const router = useRouter();

    return (
        <div className="px-5 pt-5 not-first-of-type:border-t">
            <div>
                <h2 className="font-bold">{schoolName}</h2>
                <p className="text-[#909090] font-normal">
                    <span>{examDate}</span>
                    <span className="font-light text-[#D9D9D9] mx-1"> | </span>
                    <span>{examSubjects.join(", ")}</span>
                    <span className="font-light text-[#D9D9D9] mx-1"> | </span>
                    <span>도시락 {lunchOption ? "O" : "X"}</span>
                </p>
            </div>

            <footer className="my-5 rounded-lg border flex font-semibold">
                <button
                    className="border-r-[0.5px] flex-1 p-4 hover:cursor-pointer"
                    onClick={() => {
                        router.push(`/mypage/exam/${id}`);
                    }}
                >
                    상세조회
                </button>
                <button
                    className="border-l-[0.5px] flex-1 p-4 hover:cursor-pointer"
                    onClick={() => {
                        router.push(`/mypage/refund/${id}`);
                    }}
                >
                    취소 및 환불
                </button>
            </footer>
        </div>
    );
};

export interface RegisteredExamCardProps {
    registeredDate: string;
    paymentStatus: string;
    totalPrice: number;

    exams: RegisteredExamCardBodyProps[];
}

export const RegisteredExamCard = ({
    registeredDate,
    paymentStatus,
    totalPrice,
    exams,
}: RegisteredExamCardProps) => {
    return (
        <article className="border border-[#E2E2E2] w-full h-fit rounded-md">
            <header className="flex justify-between border-b p-5">
                <h2>
                    <span className="font-semibold">{registeredDate} 신청</span>
                    <span className="text-[#D9D9D9]"> | </span>
                    <span className="text-[#0080FF]">{paymentStatus}</span>
                </h2>
                <p className="font-semibold">{totalPrice.toLocaleString()} 원</p>
            </header>
            {exams.map(({ id, ...exam }) => {
                return <RegisteredExamCardBody key={id} id={id} {...exam} />;
            })}
        </article>
    );
};
