import * as LabelPrimitive from "@radix-ui/react-label";
import * as React from "react";

import { cn } from "@/shared/lib/utils";

type LabelProps = React.ComponentProps<typeof LabelPrimitive.Root> & {
    required?: boolean;
};

function Label({ className, children, required = false, ...props }: LabelProps) {
    return (
        <LabelPrimitive.Root
            data-slot="label"
            className={cn(
                "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                className,
            )}
            {...props}
        >
            {children}
            {required && (
                <span className="text-[#0080ff] ml-[-4px]" aria-hidden>
                    *
                </span>
            )}
        </LabelPrimitive.Root>
    );
}

export { Label };
