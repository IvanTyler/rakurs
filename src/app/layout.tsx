import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.scss";
import "./normalize.scss";
import {Wrapper} from "@/src/Components/UI/Wrapper/Wrapper";
import {Header} from "@/src/Components/UI/Header/Header";
import {Footer} from "@/src/Components/UI/Footer/Footer";


export const metadata: Metadata = {
    title: "Rakurs",
    description: "Rakurs",
    icons: {
        icon: [
            {url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png"},
            {url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png"},
        ],
        apple: { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>

            <Wrapper>
                <Header/>
                <main className='main'>
                    {children}
                </main>
                <Footer />
            </Wrapper>
        </body>
        </html>
    );
}
