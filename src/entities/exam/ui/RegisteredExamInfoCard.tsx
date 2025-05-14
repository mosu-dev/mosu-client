import { cn } from "@/shared/lib/utils";

interface RegisteredExamInfoCardProps {
    examDate: string;
    examSchool: string;
    examLocation: string;
    examSubjects: string[];
}

export const RegisteredExamInfoCard = ({
    examDate,
    examSchool,
    examLocation,
    examSubjects,
}: RegisteredExamInfoCardProps) => {
    return (
        <article className="border border-[#E2E2E2] w-full h-fit rounded-md">
            <header className="flex justify-between border-b p-5">
                <h2 className="font-semibold">신청 정보</h2>
            </header>

            <div
                className={cn(
                    "m-5 [&_p]:my-1",
                    "[&_p>span:first-child]:text-[#909090]",
                    "[&_p>span:nth-child(2)]:text-[#D9D9D9] [&_p>span:nth-child(2)]:mx-2",
                )}
            >
                <p>
                    <span>응시일시</span>
                    <span>|</span>
                    <span>{examDate}</span>
                </p>
                <p>
                    <span>응시장소</span>
                    <span>|</span>
                    <span>{examSchool}</span>
                </p>
                <p>
                    <span>상세주소</span>
                    <span>|</span>
                    <span>{examLocation}</span>
                </p>
                <p>
                    <span>응시과목</span>
                    <span>|</span>
                    <span>{examSubjects.join(", ")}</span>
                </p>
            </div>
        </article>
    );
};
