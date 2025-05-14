import { RegisteredExamCard } from "@/entities/exam/ui/RegisteredExamCard";

export const MyPageLayout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[640px] mx-auto px-4">{page}</div>;
};

const registeredExamData = [
    {
        registeredDate: "25.05.01",
        paymentStatus: "결제 완료",
        totalPrice: 119000,
        exams: [
            {
                id: 3,
                schoolName: "서울고등학교",
                examDate: "2025-08-26",
                examSubjects: ["국어", "수학", "영어", "한국사", "생활과 윤리", "윤리와 사상"],
                lunchOption: false,
            },
        ],
    },
    {
        registeredDate: "25.04.29",
        paymentStatus: "결제 완료",
        totalPrice: 229000,
        exams: [
            {
                id: 6,
                schoolName: "목동중학교",
                examDate: "2025-08-19",
                examSubjects: ["국어", "수학", "영어", "한국사", "생활과 윤리", "윤리와 사상"],
                lunchOption: true,
            },
            {
                id: 4,
                schoolName: "서울고등학교",
                examDate: "2025-08-12",
                examSubjects: ["국어", "수학", "영어", "한국사", "생활과 윤리", "윤리와 사상"],
                lunchOption: true,
            },
        ],
    },
    {
        registeredDate: "25.04.01",
        paymentStatus: "결제 완료",
        totalPrice: 119000,
        exams: [
            {
                id: 1,
                schoolName: "서울고등학교",
                examDate: "2025-08-26",
                examSubjects: ["국어", "수학", "영어", "한국사", "생활과 윤리", "윤리와 사상"],
                lunchOption: true,
            },
        ],
    },
];

export default function MyPage() {
    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">마이페이지</h1>
            </header>

            <section className="flex flex-col gap-5">
                {registeredExamData.map((exam, index) => (
                    <RegisteredExamCard
                        key={index}
                        registeredDate={exam.registeredDate}
                        paymentStatus={exam.paymentStatus}
                        totalPrice={exam.totalPrice}
                        exams={exam.exams}
                    />
                ))}
            </section>
        </div>
    );
}

MyPage.layout = MyPageLayout;
