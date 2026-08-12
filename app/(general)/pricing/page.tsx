import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Pricing Page',
    description: 'Pricing Information Page',
    keywords: ['Pricing Page', 'Andre', 'Information']
};

export default function PricingPage() {
    return (
        <>
            <span className="text-7xl">Pricing Page</span>
        </>
    )
}