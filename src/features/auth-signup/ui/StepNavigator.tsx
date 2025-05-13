import { ChevronRight } from "lucide-react";

import { cn } from "@/shared/lib/utils";

interface StepNavigatorProps {
    step: number;
}

export const SignUpStepNavigator = ({ step }: StepNavigatorProps) => {
    return (
        <nav>
            <ul className="flex text-sm font-semibold w-full items-center justify-between h-[48px]">
                <SignInStepNavigatorItem index={1} label="약관 동의" active={step >= 1} />

                <SignUpStepNavigatorDecorator active={step >= 2} />
                <SignInStepNavigatorItem index={2} label="정보 입력" active={step >= 2} />

                <SignUpStepNavigatorDecorator active={step >= 3} />
                <SignInStepNavigatorItem index={3} label="가입 완료" active={step >= 3} />
            </ul>
        </nav>
    );
};

interface SignInStepNavigatorProps {
    index: number;
    label: string;
    active: boolean;
}

export const SignInStepNavigatorItem = ({ index, label, active }: SignInStepNavigatorProps) => {
    return (
        <li
            className={cn(
                "flex gap-1 border-b-[1.5px] h-full flex-1 text-center justify-center items-center",
                active ? "text-black border-black" : "text-[#D9D9D9] border-[#D9D9D9]",
            )}
        >
            <p>{index}</p>
            <p>{label}</p>
        </li>
    );
};

interface SignUpStepNavigatorDecoratorProps {
    active: boolean;
}

export const SignUpStepNavigatorDecorator = ({ active }: SignUpStepNavigatorDecoratorProps) => {
    return (
        <li
            className={cn(
                "h-full mx-4 flex items-center",
                active ? "text-black" : "text-[#D9D9D9]",
            )}
        >
            <ChevronRight strokeWidth={1} />
        </li>
    );
};
