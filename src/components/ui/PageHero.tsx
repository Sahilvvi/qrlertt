"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { FadeIn } from "./Section";
import { cn } from "@/lib/utils";
import { Shield, Zap, Globe, Cpu, QrCode } from "lucide-react";

interface PageHeroProps {
    title: React.ReactNode;
    subtitle?: string;
    description: string;
    children?: React.ReactNode;
    className?: string;
}

export const PageHero = ({
    title,
    subtitle,
    description,
    children,
    className,
}: PageHeroProps) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const rotateX = useTransform(springY, [-500, 500], [5, -5]);
    const rotateY = useTransform(springX, [-500, 500], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    return (
        <section
            className={cn("relative pt-44 pb-32 lg:pt-56 lg:pb-48 overflow-hidden bg-primary text-white perspective-1000", className)}
            onMouseMove={handleMouseMove}
        >
            {/* Interactive Background Glow */}
            <motion.div
                className="absolute inset-0 z-0 pointer-events-none"
                style={{
                    background: `radial-gradient(600px circle at ${springX.get() + 500}px ${springY.get() + 300}px, rgba(0, 204, 204, 0.08), transparent)`
                }}
            />

            {/* Floating Background Icons */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
                {[Shield, Zap, Globe, Cpu, QrCode].map((Icon, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-secondary/30"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.2, 0.5, 0.2],
                            y: [Math.random() * 100, Math.random() * -100, Math.random() * 100],
                            x: [Math.random() * 50, Math.random() * -50, Math.random() * 50],
                        }}
                        transition={{
                            duration: 10 + i * 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${(i + 1) * 15}%`,
                            top: `${Math.random() * 80}%`,
                        }}
                    >
                        <Icon size={40 + i * 20} strokeWidth={1} />
                    </motion.div>
                ))}
            </div>

            {/* Background Gradients */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/10 to-transparent blur-3xl opacity-30" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-600/10 blur-[150px] rounded-full" />
            </div>

            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#00cccc_1px,transparent_1px)] [background-size:40px_40px] z-0" />

            <div className="container relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    style={{ rotateX, rotateY }}
                >
                    <FadeIn>
                        {subtitle && (
                            <motion.div
                                className="inline-flex items-center gap-2 bg-white/5 px-5 py-2.5 rounded-full backdrop-blur-xl border border-white/10 text-[11px] font-black mb-10 text-secondary tracking-[0.25em] uppercase shadow-2xl"
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                {subtitle}
                            </motion.div>
                        )}
                        <h1 className="text-4xl sm:text-6xl lg:text-9xl font-outfit font-black leading-[0.95] tracking-tighter mb-10 selection:bg-secondary/30">
                            {title}
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/40 max-w-2xl mx-auto leading-relaxed font-light italic selection:bg-secondary/20">
                            {description}
                        </p>
                        {children && (
                            <motion.div
                                className="pt-16"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                {children}
                            </motion.div>
                        )}
                    </FadeIn>
                </motion.div>
            </div>

            {/* Animated Bottom Line */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-secondary to-transparent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "circOut" }}
            />
        </section>
    );
};
