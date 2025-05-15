import { useRouter } from "next/router";

import { PostTable } from "@/entities/posts/ui/PostTable";

import { NoticeLayout } from "..";

export default function NoticeAnnouncementPage() {
    const router = useRouter();

    return (
        <div>
            <PostTable
                rows={[
                    {
                        type: "POST",
                        id: 1,
                        title: "재학 중인 학교가 검색이 안됩니다.",
                        author: "홍*동",
                        createdAt: "2025-04-26",
                    },
                    {
                        type: "REPLY",
                        id: 2,
                        title: "재학 중인 학교가 검색이 안됩니다.",
                        author: "홍*동",
                        createdAt: "2025-04-26",
                    },
                ]}
                injectOnClickEventHandler={(row) => () => {
                    router.push(`/notice/announcement/${row.id}`);
                }}
            />
        </div>
    );
}

NoticeAnnouncementPage.layout = NoticeLayout;
