import Link from "next/link";

import { siteConfiguration } from "@/apps/site";

export const NavTop = () => {
    return (
        <nav className="w-full h-[100px] bg-black text-white px-12 mx-auto sticky top-0">
            <ul className="flex items-center w-full h-full gap-6 max-w-[1920px] mx-auto">
                <li className="flex-1">
                    <Link href="/" className="font-akony text-2xl font-bold">
                        MOSU
                    </Link>
                </li>
                {siteConfiguration.navTop.map((navItem) => {
                    return (
                        <li key={navItem.href}>
                            <Link href={navItem.href}>{navItem.label}</Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
