import { createContext, useContext, useReducer } from "react";

import { ApplyAction, ApplyState, applyInitialState, applyReducer } from "./ApplyReducer";

export const ApplyContext = createContext<{
    state: ApplyState;
    dispatch: React.Dispatch<ApplyAction>;
} | null>(null);

export const ApplyContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(applyReducer, applyInitialState);

    return (
        <ApplyContext.Provider
            value={{
                state,
                dispatch,
            }}
        >
            {children}
        </ApplyContext.Provider>
    );
};

export const useApplyContext = () => {
    const context = useContext(ApplyContext);
    if (!context) {
        throw new Error("useApplyContext must be used within a ApplyContextProvider");
    }
    return context;
};
