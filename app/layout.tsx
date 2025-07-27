import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "./provider";
import React from "react";

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "GeekForGeeks Task 1",
    description: "GFG Task",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
