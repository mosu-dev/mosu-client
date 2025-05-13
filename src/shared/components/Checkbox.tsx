import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface CheckboxFieldSetProps extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
    id: string;
    label: string;
}

export const CheckboxFieldSet = ({ id, label, ...props }: CheckboxFieldSetProps) => {
    return (
        <fieldset className="flex gap-2 text-base text-[#909090] items-center">
            <Checkbox id={id} {...props} className="w-6 h-6" />
            <Label htmlFor={id}>{label}</Label>
        </fieldset>
    );
};

interface CheckboxWithLinkFieldSetProps extends CheckboxFieldSetProps {
    linkLabel: string;
    linkOnClick: () => void;
}

export const CheckboxWithLinkFieldSet = ({
    id,
    label,
    linkLabel,
    linkOnClick,
    ...props
}: CheckboxWithLinkFieldSetProps) => {
    return (
        <fieldset className="flex gap-2 text-base text-[#909090] items-center">
            <Checkbox id={id} {...props} className="w-6 h-6" />
            <Label htmlFor={id}>{label}</Label>
            <Button variant="link" onClick={linkOnClick} className="ml-auto underline">
                {linkLabel}
            </Button>
        </fieldset>
    );
};
