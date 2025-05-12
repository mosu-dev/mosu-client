import { MosuLogo } from "@/apps/ui/MosuLogo";

export default function SignUpPage() {
    return (
        <div>
            <header className="my-20">
                <MosuLogo />
            </header>
        </div>
    );
}

SignUpPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
