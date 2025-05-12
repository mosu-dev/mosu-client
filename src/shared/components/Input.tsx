import { Label } from "../ui/label";

interface InputProps extends React.ComponentProps<"input"> {
    sideButton?: React.ReactNode;
}

export const Input = ({ sideButton, ...props }: InputProps) => {
    return (
        <div>
            <input
                {...props}
                className="w-full border-b-[#ebebeb] border-b-[1px] h-[52px] focus:outline-none"
            ></input>
            {sideButton}
        </div>
    );
};

interface InputFieldSetProps extends InputProps {
    id: string;
    label: string;
}

export const InputFieldSet = ({ id, label, ...props }: InputFieldSetProps) => {
    return (
        <fieldset>
            <Label htmlFor={id}>{label}</Label>
            <Input id={id} {...props} />
        </fieldset>
    );
};
