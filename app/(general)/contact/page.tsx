import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Page',
    description: 'Contact Information Page',
    keywords: ['Contact Page', 'Andre', 'Information']
};

export default function ContactPage() {
    return (
        <>
            <span className="text-7xl">Contact Page</span>
        </>
    )
}