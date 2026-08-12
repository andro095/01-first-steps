import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";

const navItems = [
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
    { path: "/pricing", label: "Pricing" },
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
                    <Link
                        prefetch
                        key={navItem.path}
                        href={navItem.path}
                        className="text-white mr-2"
                    >
                        {navItem.label}
                    </Link>
                ))
            }
        </nav>
    );
};