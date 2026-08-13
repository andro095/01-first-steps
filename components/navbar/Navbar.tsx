import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components";

const navItems = [
    { path: "/about", text: "About" },
    { path: "/contact", text: "Contact" },
    { path: "/pricing", text: "Pricing" },
];

export const Navbar = () => {
    console.log("Navbar Creado");

    return (
        <nav
            className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded"
        >

            <Link
                prefetch
                href="/"
                className="flex items-center text-white"
            >
                <HomeIcon
                    className="mr-2"
                />
                <span
                >
                    Home
                </span>
            </Link>

            <div
                className="flex flex-1"
            />

            {
                navItems.map(navItem => (
                    <ActiveLink
                        key={navItem.path}
                        {...navItem}
                    />
                ))
            }
        </nav>
    );
};