export interface SignUpStep1Payload {
    id: string;
    password: string;
    passwordConfirm: string;
    termsOfUse: boolean;
    termsOfInfo: boolean;
    termsOfMarketing: boolean;
}

export interface SignUpStep2Payload {
    name: string;
    birth: string;
    phoneNumber: string;
    email: string;
    school: string;
    grade: number;
}

export interface SignUpState extends SignUpStep1Payload, SignUpStep2Payload {
    step: number;
}

export const signUpInitialState: SignUpState = {
    step: 1,
    id: "",
    password: "",
    passwordConfirm: "",
    termsOfUse: false,
    termsOfInfo: false,
    termsOfMarketing: false,
    name: "",
    birth: "",
    phoneNumber: "",
    email: "",
    school: "",
    grade: 0,
};

export type SignUpAction =
    | { type: "SET_1ST_STEP"; payload: SignUpStep1Payload }
    | { type: "SET_2ND_STEP"; payload: SignUpStep2Payload }
    | { type: "PREV_STEP" }
    | { type: "NEXT_STEP" };

export const signUpReducer = (state: SignUpState, action: SignUpAction): SignUpState => {
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
