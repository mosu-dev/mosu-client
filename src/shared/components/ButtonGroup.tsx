import { useEffect, useState } from "react";

import { cn } from "../lib/utils";
import { Button } from "../ui/button";
import { Label } from "../ui/label";

interface ButtonGroupProps {
    id: string;
    defaultValue?: string;
    onChange?: (value: string) => void;
    options: Array<{
        label: string;
        value: string;
    }>;
}

export const ButtonGroup = ({ id, defaultValue, options, onChange }: ButtonGroupProps) => {
    const [selected, setSelected] = useState<string>(defaultValue || "");

    useEffect(() => {
        onChange?.(selected);
    }, [onChange, selected]);

    return (
        <div id={id} className="flex gap-2 mt-3">
            {options.map((option) => {
                return (
                    <Button
                        key={option.value}
                        variant="outline"
                        className={cn(
                            "h-[52px] flex-1",
                            option.value === selected && "border-black",
                        )}
                        onClick={() => setSelected(option.value)}
                    >
                        {option.label}
                    </Button>
                );
            })}
        </div>
    );
};

interface ButtonGroupFieldSetProps extends ButtonGroupProps {
    id: string;
    label: string;
    required?: boolean;
    onChange?: (value: string) => void;
}

export const ButtonGroupFieldSet = ({
    id,
    label,
    required = false,
    ...props
}: ButtonGroupFieldSetProps) => {
    return (
        <fieldset>
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <ButtonGroup id={id} {...props} />
        </fieldset>
    );
};
