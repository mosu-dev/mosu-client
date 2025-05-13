import * as React from "react";

import { cn } from "@/shared/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            data-slot="textarea"
            className={cn(
                "placeholder:text-[#909090] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30",
                "flex field-sizing-content min-h-16 w-full bg-transparent py-2",
                "transition-[color] outline-none disabled:cursor-not-allowed disabled:opacity-50",
                "border-b border-[#E2E2E2] resize-none text-lg ",
                className,
            )}
            {...props}
        />
    );
}

export { Textarea };
