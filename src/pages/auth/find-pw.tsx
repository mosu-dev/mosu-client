import { useRouter } from "next/router";

import { ChangePasswordSection, FindPasswordSection } from "@/widgets/auth/FindPasswordSteps";

export default function FindPwPage() {
    const router = useRouter();
    const { step } = router.query;

    switch (step) {
        case "change":
            return <ChangePasswordSection />;
        case "find":
            return <FindPasswordSection />;
        default:
            return <FindPasswordSection />;
    }
}

FindPwPage.layout = (page: React.ReactNode) => {
    return <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>;
};
