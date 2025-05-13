import { Label } from "../ui/label";

interface FieldSetProps extends React.ComponentProps<"fieldset"> {
    id: string;
    label: string;
    required?: boolean;
    children: React.ReactNode;
}

export const FieldSet = ({ id, label, children, required = false, ...props }: FieldSetProps) => {
    return (
        <fieldset {...props}>
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            {children}
        </fieldset>
    );
};
