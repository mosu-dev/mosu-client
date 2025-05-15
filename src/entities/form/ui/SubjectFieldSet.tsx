import { Fragment, useState } from "react";

import { SelectField } from "@/shared/components/Select";
import { Label } from "@/shared/ui/label";

interface SubjectFieldSetProps {
    required?: boolean;
    onChange: (exploration1: string, exploration2: string) => void;
}

export const SubjectFieldSet = ({ onChange, required = false }: SubjectFieldSetProps) => {
    const [exploration1, setExploration1] = useState<string>("");
    const [exploration2, setExploration2] = useState<string>("");

    return (
        <Fragment>
            <Label required={required} className="mb-2">
                응시과목
            </Label>
            <fieldset className="grid grid-cols-3 grid-rows-2 gap-4">
                <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">국어</div>
                <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">수학</div>
                <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">영어</div>
                <div>
                    <SelectField
                        id="exploration_1"
                        placeholder="탐구1"
                        triggerClassName="w-full"
                        onValueChange={(value) => {
                            setExploration1(value);
                            onChange(value, exploration2);
                        }}
                    />
                </div>
                <div>
                    <SelectField
                        id="exploration_2"
                        placeholder="탐구2"
                        triggerClassName="w-full"
                        onValueChange={(value) => {
                            setExploration2(value);
                            onChange(exploration1, value);
                        }}
                    />
                </div>
                <div className="text-sm w-full border-b border-b-[#EBEBEB] py-2 px-3">한국사</div>
            </fieldset>
        </Fragment>
    );
};
