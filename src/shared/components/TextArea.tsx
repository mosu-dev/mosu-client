import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";

interface TextareaFieldSetProps extends React.ComponentProps<"textarea"> {
    id: string;
    label: string;
    placeholder?: string;
    required?: boolean;
}

export const TextareaFieldSet = ({
    id,
    label,
    placeholder,
    required,
    ...props
}: TextareaFieldSetProps) => {
    return (
        <fieldset>
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <Textarea id={id} placeholder={placeholder} {...props} />
        </fieldset>
    );
};
