import { useRouter } from "next/router";

import { FilePreviewWithDownload } from "@/entities/form/ui/FilePreviewWithDownload";

import { Button } from "@/shared/ui/button";
import { Table, TableHead, TableHeader, TableRow } from "@/shared/ui/table";

import { NoticeLayout } from "..";

export default function NoticeAnnouncementDetailPage() {
    const router = useRouter();
    console.log(router.query.id);

    return (
        <div>
            <section>
                <Table className="text-xl">
                    <TableHeader className="border-t border-black">
                        <TableRow className="h-20">
                            <TableHead className="w-full">
                                재학 중인 학교가 검색이 안됩니다.
                            </TableHead>
                            <TableHead className="text-center px-10">홍*동</TableHead>
                            <TableHead className="text-center">2025-04-26</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>

                <article className="my-5 text-lg max-w-[550px] whitespace-pre-wrap">
                    {`안녕하세요.신청하려고 진행 중인데, 학교 검색하는 단계에서 제 학교 이름이 나오지 않습니다. \n현재 홍길동고등학교에 재학 중인데, 검색해도 결과가 없습니다. \n혹시 따로 추가 요청을 해야 하나요?빠른 답변 부탁드립니다!`}
                </article>

                <div className="pb-10">
                    <FilePreviewWithDownload
                        fileName="캡쳐.png"
                        onOpen={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        onRemove={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </div>
            </section>

            <section>
                <Table className="text-xl">
                    <TableHeader className="border-t border-black">
                        <TableRow className="h-20">
                            <TableHead className="w-full">
                                Re. 재학 중인 학교가 검색이 안됩니다.
                            </TableHead>
                            <TableHead className="text-center px-10">관리자</TableHead>
                            <TableHead className="text-center">2025-04-26</TableHead>
                        </TableRow>
                    </TableHeader>
                </Table>

                <article className="my-5 text-lg max-w-[550px] whitespace-pre-wrap">
                    {`안녕하세요, 신청 과정에서 불편을 드려 죄송합니다.현재 시스템에 등록된 학교 목록에 홍길동고등학교가 포함되어 있지 않은 것으로 확인됩니다.\n해당 경우, 아래 방법 중 하나로 진행 부탁드립니다:\n학교 추가 요청:\n[학교 추가 요청서 링크 또는 이메일 주소 기재]로 학교명, 주소, 연락처 등의 정보를 보내주시면 확인 후 신속히 반영해드리겠습니다.\n임시 등록 방법:\n신청을 서둘러야 하는 경우, 학교명 란에 *‘기타’*를 선택 후 하단의 비고란에 ‘홍길동고등학교 재학 중’이라고 기재해 주시면 됩니다.\n학교 등록 처리 후 문자 또는 이메일로 다시 안내드리겠습니다.`}
                </article>
            </section>

            <Button
                variant="outline"
                className="flex items-center justify-center text-lg ml-auto mr-0 h-12"
                onClick={() => router.push("/notice/announcement")}
            >
                목록으로
            </Button>
        </div>
    );
}

NoticeAnnouncementDetailPage.layout = NoticeLayout;
