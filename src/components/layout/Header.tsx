"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "../ui/Button";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Product", href: "/product" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
];

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/90 backdrop-blur-md py-3 shadow-md"
                    : "bg-transparent py-5"
            )}
        >
            <nav className="container flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className={cn(
                        "relative w-10 h-10 transition-all duration-300 rounded-lg overflow-hidden shrink-0",
                        scrolled ? "bg-primary" : "bg-white shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    )}>
                        <img
                            src="/qrlert.png"
                            alt="QrLert Logo"
                            className="w-full h-full object-contain p-1.5"
                        />
                    </div>
                    <span className={cn(
                        "font-outfit text-2xl font-black tracking-tight",
                        scrolled ? "text-primary" : "text-white"
                    )}>
                        QrLert <span className="font-light text-secondary">Attendance</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-8">
                    <ul className="flex items-center gap-8">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={cn(
                                        "font-medium transition-colors hover:text-secondary",
                                        pathname === link.href
                                            ? "text-secondary"
                                            : scrolled
                                                ? "text-slate-700"
                                                : "text-white/90"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={cn(
                        "lg:hidden p-2 rounded-md",
                        scrolled ? "text-primary" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-xl transition-all duration-300 overflow-hidden",
                    isMobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
                )}
            >
                <ul className="container flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "block py-2 font-medium text-slate-700",
                                    pathname === link.href && "text-secondary"
                                )}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
