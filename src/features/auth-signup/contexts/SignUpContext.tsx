import { createContext, useContext, useReducer } from "react";

import { SignUpAction, SignUpState, signUpInitialState, signUpReducer } from "./SignUpReducer";

export const SignUpContext = createContext<{
    state: SignUpState;
    dispatch: React.Dispatch<SignUpAction>;
} | null>(null);

export const SignUpContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(signUpReducer, signUpInitialState);

    return (
        <SignUpContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </SignUpContext.Provider>
    );
};

export const useSignUpContext = () => {
    const context = useContext(SignUpContext);
    if (!context) {
        throw new Error("useSignUpContext must be used within a SignUpContextProvider");
    }
    return context;
};
