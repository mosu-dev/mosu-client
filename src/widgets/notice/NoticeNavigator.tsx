import Link from "next/link";
import { useRouter } from "next/router";

import { cn } from "@/shared/lib/utils";

const NoticeNavigationItem = ({
    className,
    children,
    ...props
}: React.ComponentProps<typeof Link>) => {
    const router = useRouter();

    const isActive = props.href === router.pathname;
    const isDefaultActive = !router.pathname;

    return (
        <Link
            className={cn(
                "w-full flex items-center justify-center h-full border border-[#E2E2E2]",
                isActive && "border-black",
                isDefaultActive && "first:border-black",
                className,
            )}
            {...props}
        >
            {children}
        </Link>
    );
};

export const NoticeNavigator = () => {
    return (
        <nav className="w-full h-16 text-[20px] flex mb-10">
            <NoticeNavigationItem href="/notice/faq">자주 묻는 질문</NoticeNavigationItem>
            <NoticeNavigationItem href="/notice/announcement">공지사항</NoticeNavigationItem>
            <NoticeNavigationItem href="/notice/new">문의글 쓰기</NoticeNavigationItem>
            <NoticeNavigationItem href="/notice/my">내 문의글 조회</NoticeNavigationItem>
        </nav>
    );
};
