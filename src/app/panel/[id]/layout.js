"use client"
import Link from "next/link";
import {usePathname} from 'next/navigation'
import Image from "next/image";

export default function RootLayout({children}) {

    const pathname = usePathname()

    return (
        <div className="flex">
            {children}
        </div>
    )
}
