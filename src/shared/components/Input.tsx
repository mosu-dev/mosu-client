import { Button } from "../ui/button";
import { Label } from "../ui/label";

type InputProps = React.ComponentProps<"input">;

export const Input = ({ ...props }: InputProps) => {
    return (
        <input
            {...props}
            className="w-full border-b-[#ebebeb] border-b-[1px] h-[52px] focus:outline-none"
        ></input>
    );
};

interface InputFieldSetProps extends InputProps {
    id: string;
    label: string;
    required?: boolean;
}

export const InputFieldSet = ({ id, label, required = false, ...props }: InputFieldSetProps) => {
    return (
        <fieldset>
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <Input id={id} {...props} />
        </fieldset>
    );
};

interface InputWithButtonFieldSet extends InputFieldSetProps {
    buttonLabel: string;
    buttonOnClick: () => void;
}

export const InputWithButtonFieldSet = ({
    id,
    required,
    label,
    buttonLabel,
    buttonOnClick,
    ...props
}: InputWithButtonFieldSet) => {
    return (
        <fieldset>
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <div className="flex items-center relative">
                <Input id={id} {...props} />
                <Button variant="outline" className="absolute right-0" onClick={buttonOnClick}>
                    {buttonLabel}
                </Button>
            </div>
        </fieldset>
    );
};
