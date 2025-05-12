import { MosuLogo } from "@/apps/ui/MosuLogo";

export default function SignInPage() {
    return (
        <div>
            <header className="my-20">
                <MosuLogo />
            </header>

            <div></div>

            <footer></footer>
        </div>
    );
}

SignInPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
