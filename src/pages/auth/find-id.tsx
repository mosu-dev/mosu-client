import { InputFieldSet, InputWithButtonFieldSet } from "@/shared/components/Input";
import { Button } from "@/shared/ui/button";

export default function FindIdPage() {
    return (
        <div>
            <header className="my-20">
                <h1 className="text-[2.5rem] font-bold text-center my-">아이디 찾기</h1>
            </header>

            <div className="flex flex-col gap-4">
                <InputFieldSet
                    id="name"
                    label="이름"
                    type="text"
                    placeholder="이름을 입력해주세요."
                    required={true}
                />
                <InputWithButtonFieldSet
                    id="tel"
                    label="전화번호"
                    type="tel"
                    placeholder="전화번호를 입력해주세요."
                    required={true}
                    buttonLabel="본인인증"
                    buttonOnClick={() => undefined}
                />
                <InputWithButtonFieldSet
                    id="certification_number"
                    label="인증번호"
                    type="tel"
                    placeholder="인증번호를 입력해주세요."
                    required={true}
                    buttonLabel="확인하기"
                    buttonOnClick={() => undefined}
                />

                <Button className="h-[60px] w-full my-16">다음으로</Button>
            </div>
        </div>
    );
}

FindIdPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
