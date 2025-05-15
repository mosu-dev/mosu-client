import { useEffect, useMemo, useReducer } from "react";

import { SelectField } from "@/shared/components/Select";
import { Label } from "@/shared/ui/label";

import { BirthRange } from "../utils/birthRange";

type BirthState = {
    year: number;
    month: number;
    day: number;
};

type BirthAction =
    | { type: "SET_YEAR"; payload: number }
    | { type: "SET_MONTH"; payload: number }
    | { type: "SET_DAY"; payload: number };

const birthReducer = (state: BirthState, action: BirthAction): BirthState => {
    switch (action.type) {
        case "SET_YEAR":
            return { ...state, year: action.payload };
        case "SET_MONTH":
            return { ...state, month: action.payload };
        case "SET_DAY":
            return { ...state, day: action.payload };
        default:
            return state;
    }
};

interface BirthFieldSetProps {
    id?: string;
    label?: string;
    required?: boolean;

    onChange: (year: number, month: number, day: number) => void;
}

// TODO: 생년월일이 feature/auth-signup, feature/apply에 중복되어 있음 -> entities로 분리 필요
export const BirthFieldSet = ({
    id = "birth",
    label = "생년월일",
    required = false,
    onChange,
}: BirthFieldSetProps) => {
    const [state, dispatch] = useReducer(birthReducer, {
        year: 0,
        month: 0,
        day: 0,
    });

    const yearOptions = useMemo(() => BirthRange.yearOptions(), []);
    const monthOptions = useMemo(() => BirthRange.monthOptions(), []);
    const dayOptions = useMemo(
        () => BirthRange.dayOptions(state.year, state.month),
        [state.year, state.month],
    );

    useEffect(() => {
        onChange(state.year, state.month, state.day);
    }, [state.year, state.month, state.day, onChange]);

    return (
        <fieldset>
            <Label htmlFor={id} required={required}>
                {label}
            </Label>
            <div className="flex gap-2 mt-2">
                <SelectField
                    id="birth_year"
                    placeholder="연도"
                    triggerClassName="w-full"
                    options={yearOptions}
                    onValueChange={(year) => dispatch({ type: "SET_YEAR", payload: Number(year) })}
                />
                <SelectField
                    id="birth_month"
                    placeholder="월"
                    triggerClassName="w-full"
                    options={monthOptions}
                    onValueChange={(month) =>
                        dispatch({ type: "SET_MONTH", payload: Number(month) })
                    }
                />
                <SelectField
                    id="birth_day"
                    placeholder="일"
                    triggerClassName="w-full"
                    options={dayOptions}
                    onValueChange={(day) => dispatch({ type: "SET_DAY", payload: Number(day) })}
                />
            </div>
        </fieldset>
    );
};
