import { Navbar } from "@/components";

export default function GeneralLayout({
    children
}: LayoutProps<"/">) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-24">
                <span className="text-lg">Hello Word</span>
                {children}
            </main>
        </>
    )
}