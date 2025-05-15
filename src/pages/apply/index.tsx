import { ApplyContextProvider, useApplyContext } from "@/features/apply/contexts/ApplyContext";

import { ApplyStep1 } from "@/widgets/apply/ApplyStep1";
import { ApplyStep2 } from "@/widgets/apply/ApplyStep2";
import { ApplyStep3 } from "@/widgets/apply/ApplyStep3";

export default function ApplyPage() {
    const { state } = useApplyContext();

    switch (state.step) {
        case 1:
            return <ApplyStep1 />;
        case 2:
            return <ApplyStep2 />;
        case 3:
            return <ApplyStep3 />;
        default:
            return null;
    }
}

ApplyPage.layout = (page: React.ReactNode) => {
    return (
        <ApplyContextProvider>
            <div className="w-full max-w-[640px] mx-auto px-4">{page}</div>
        </ApplyContextProvider>
    );
};
