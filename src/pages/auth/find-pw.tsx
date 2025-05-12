export default function FindPwPage() {
    return (
        <div>
            <header className="my-20">
                <h1 className="text-[2.5rem] font-bold text-center my-">비밀번호 찾기</h1>
            </header>
        </div>
    );
}

FindPwPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
