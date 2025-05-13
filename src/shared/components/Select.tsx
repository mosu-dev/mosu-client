import * as SelectPrimitive from "@radix-ui/react-select";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

interface SelectFieldProps extends React.ComponentProps<typeof SelectPrimitive.Root> {
    id: string;
    placeholder: string;
    triggerClassName?: string;
    options?: Array<{ label: string; value: string }>;
}

export const SelectField = ({
    id,
    triggerClassName,
    placeholder,
    options,
    ...props
}: SelectFieldProps) => {
    return (
        <Select {...props}>
            <SelectTrigger className={triggerClassName}>
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent id={id}>
                {options?.map((option) => {
                    return (
                        <SelectItem key={option.value} value={option.value}>
                            {option.label}
                        </SelectItem>
                    );
                })}
            </SelectContent>
        </Select>
    );
};
