"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
    dark?: boolean;
}

export const Section = ({
    children,
    id,
    className,
    containerClassName,
    dark = false,
}: SectionProps) => {
    return (
        <section
            id={id}
            className={cn(
                "section-padding overflow-hidden",
                dark ? "bg-slate-900 text-white" : "bg-white text-slate-900",
                className
            )}
        >
            <div className={cn("container", containerClassName)}>
                {children}
            </div>
        </section>
    );
};

export const FadeIn = ({
    children,
    className,
    delay = 0,
    direction = "up",
    scale = 1,
    blur = false
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    scale?: number;
    blur?: boolean;
}) => {
    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
            scale: scale !== 1 ? scale : 1,
            filter: blur ? "blur(10px)" : "none",
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            filter: "none",
        },
    };

    return (
        <motion.div
            className={className}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            {children}
        </motion.div>
    );
};
