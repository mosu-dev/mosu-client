import {
    SignUpContextProvider,
    useSignUpContext,
} from "@/features/auth-signup/contexts/SignUpContext";
import { SignUpStepNavigator } from "@/features/auth-signup/ui/StepNavigator";

import { SignUpStep1, SignUpStep2, SignUpStep3 } from "@/widgets/auth/SignUpSteps";

import { Button } from "@/shared/ui/button";

const SignUpSteps = () => {
    const { state } = useSignUpContext();

    switch (state.step) {
        case 1:
            return <SignUpStep1 />;
        case 2:
            return <SignUpStep2 />;
        case 3:
            return <SignUpStep3 />;
        default:
            return null;
    }
};

export default function SignUpPage() {
    const { dispatch } = useSignUpContext();

    return (
        <div>
            <header>
                <h1 className="my-20 text-center text-[2.5rem] font-bold">회원가입</h1>
                <SignUpStepNavigator step={1} />
            </header>

            <SignUpSteps />

            <Button
                variant="default"
                className="w-full h-[60px] my-10"
                onClick={() => dispatch({ type: "NEXT_STEP" })}
            >
                다음으로
            </Button>
        </div>
    );
}

SignUpPage.layout = (page: React.ReactNode) => {
    return (
        <SignUpContextProvider>
            <div className="w-full max-w-[500px] mx-auto px-4">{page}</div>
        </SignUpContextProvider>
    );
};
