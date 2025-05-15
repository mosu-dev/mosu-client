type ExamPlaceAndDate = {
    region: string;
    date: string;
    schoolName: string;
};

export interface ApplyStep1Payload {
    examPlaceAndDate: ExamPlaceAndDate[];
}

export interface ApplyStep2Payload {
    name: string;
    gender: "MALE" | "FEMALE";
    birth: string;
    phoneNumber: string;

    studentType: "CURRENT" | "GRADUATED";
    grade?: number;
    schoolName?: string;

    exploration1: string;
    exploration2: string;
    lunchOption: boolean;

    termsOfWarning: boolean;
    termsOfRefund: boolean;
}

export interface ApplyState extends ApplyStep1Payload, ApplyStep2Payload {
    step: number;
}

export const applyInitialState: ApplyState = {
    step: 1,
    examPlaceAndDate: [],
    name: "",
    gender: "MALE",
    birth: "",
    phoneNumber: "",
    studentType: "CURRENT",
    exploration1: "",
    exploration2: "",
    lunchOption: false,
    termsOfWarning: false,
    termsOfRefund: false,
};

export type ApplyAction =
    | { type: "SET_1ST_STEP"; payload: ApplyStep1Payload }
    | { type: "SET_2ND_STEP"; payload: ApplyStep2Payload }
    | { type: "APPEND_EXAM" }
    | { type: "EDIT_REGION"; payload: { index: number; region: string } }
    | { type: "EDIT_DATE"; payload: { index: number; date: string } }
    | { type: "EDIT_SCHOOL_NAME"; payload: { index: number; schoolName: string } }
    | { type: "PREV_STEP" }
    | { type: "NEXT_STEP" };

export const applyReducer = (state: ApplyState, action: ApplyAction): ApplyState => {
    switch (action.type) {
        case "SET_1ST_STEP":
            return {
                ...state,
                ...action.payload,
            };
        case "SET_2ND_STEP":
            return {
                ...state,
                ...action.payload,
            };
        case "APPEND_EXAM":
            return {
                ...state,
                examPlaceAndDate: [
                    ...state.examPlaceAndDate,
                    { region: "", date: "", schoolName: "" },
                ],
            };
        case "PREV_STEP":
            return {
                ...state,
                step: state.step - 1,
            };
        case "NEXT_STEP":
            return {
                ...state,
                step: state.step + 1,
            };
        default:
            return state;
    }

    return state;
};
