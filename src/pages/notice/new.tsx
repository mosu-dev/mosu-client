import { FilePreview } from "@/entities/form/ui/FilePreview";

import { InputFieldSet } from "@/shared/components/Input";
import { TextareaFieldSet } from "@/shared/components/TextArea";
import { Button } from "@/shared/ui/button";
import { Label } from "@/shared/ui/label";

import { NoticeLayout } from ".";

export default function NewQuestionPage() {
    return (
        <div className="flex flex-col gap-10">
            <InputFieldSet
                id="title"
                label="제목"
                placeholder="제목을 입력해주세요."
                required={false}
                className="text-lg"
            />
            <TextareaFieldSet
                id="content"
                label="내용"
                placeholder="문의할 내용을 입력해주세요."
                required={false}
                className="min-h-[200px] text-lg"
            />

            <fieldset>
                <legend className="flex gap-2 mb-4">
                    <Label>첨부파일</Label>
                    <Button variant="outline" className="w-24">
                        + 파일 추가
                    </Button>
                </legend>

                <div>
                    <FilePreview
                        fileName="캡처.png"
                        onOpen={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        onRemove={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </div>
            </fieldset>

            <Button variant="default" className="h-[60px] w-full max-w-[500px] mx-auto">
                등록하기
            </Button>
        </div>
    );
}

NewQuestionPage.layout = NoticeLayout;
