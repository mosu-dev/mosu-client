import { Fragment } from "react";

import { NavTop } from "@/apps/ui/NavTop";

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <Fragment>
            <header>
                <NavTop />
            </header>

            <main>{children}</main>

            <footer></footer>
        </Fragment>
    );
};
