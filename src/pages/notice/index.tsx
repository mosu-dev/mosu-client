// pages/notice/index.tsx
import { GetServerSideProps } from "next";

import { NoticeNavigator } from "@/widgets/notice/NoticeNavigator";

export const NoticeLayout = (page: React.ReactNode) => {
    return (
        <section className="my-4">
            <header className="my-20">
                <h1 className="text-[2.5rem] font-bold text-center my-">문의하기</h1>
            </header>
            <div className="w-full max-w-[1000px] mx-auto px-4">
                <NoticeNavigator />
                {page}
            </div>
        </section>
    );
};

export default function NoticePage() {
    // redirect : /notice/faq
}

export const getServerSideProps: GetServerSideProps = async () => {
    return {
        redirect: {
            destination: "/notice/faq",
            permanent: false,
        },
    };
};
