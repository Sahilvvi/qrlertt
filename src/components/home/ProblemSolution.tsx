"use client";

import React from "react";
import { Section, FadeIn } from "../ui/Section";
import { motion } from "framer-motion";
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const points = [
    {
        traditional: "Easy to duplicate or forge",
        modern: "Encrypted QR security that prevents forgery",
    },
    {
        traditional: "No real-time status verification",
        modern: "Instant verification through our secure database",
    },
    {
        traditional: "Manual data entry for entry/exit",
        modern: "Automated scanning and logging in milliseconds",
    },
    {
        traditional: "Lost cards remain active",
        modern: "Instant remote deactivation of lost/stolen cards",
    },
];

export const ProblemSolution = () => {
    return (
        <Section id="solution" className="bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.01] skew-x-[-15deg] translate-x-20 pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div>
                    <FadeIn direction="right" blur scale={0.9}>
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Why Upgrade?</h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter">
                            Traditional ID Cards <br />Are <span className="text-primary italic">Obsolete.</span>
                        </h2>
                        <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed max-w-lg">
                            Legacy cards are static, insecure, and lack the real-time data capabilities needed to protect today's educational and corporate environments.
                        </p>
                    </FadeIn>

                    <div className="space-y-6">
                        {points.map((point, i) => (
                            <FadeIn key={i} direction="right" delay={i * 0.1} scale={0.95}>
                                <div className="group bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col md:flex-row gap-8 hover:-translate-y-1">
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3 text-red-500 font-black text-[10px] uppercase tracking-widest">
                                            <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                            Traditional ID
                                        </div>
                                        <p className="text-slate-400 text-sm font-medium">{point.traditional}</p>
                                    </div>
                                    <div className="hidden md:flex items-center justify-center">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-slate-200 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                                            <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <div className="flex items-center gap-3 text-secondary font-black text-[10px] uppercase tracking-widest">
                                            <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                            The QrLert Upgrade
                                        </div>
                                        <p className="text-slate-800 font-black text-sm uppercase tracking-tight">{point.modern}</p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <div className="relative">
                    <FadeIn direction="left" blur scale={0.9}>
                        <div className="relative overflow-hidden rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-white group">
                            <div className="bg-primary p-16 lg:p-24 text-center space-y-12 relative overflow-hidden">
                                {/* Inner glow */}
                                <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />

                                <motion.div
                                    whileHover={{ rotate: 360, scale: 1.1 }}
                                    transition={{ duration: 1 }}
                                    className="w-24 h-24 bg-white/5 rounded-[2rem] flex items-center justify-center mx-auto border border-white/10 group-hover:bg-secondary group-hover:border-transparent transition-all duration-700"
                                >
                                    <CheckCircle2 className="w-12 h-12 text-secondary group-hover:text-primary transition-colors duration-700" />
                                </motion.div>
                                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-outfit font-black text-white leading-[1.1] tracking-tighter">
                                    Secure Your DNA <br /> with the <span className="text-secondary italic">QrLert Edge.</span>
                                </h3>
                                <div className="pt-6">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                                            <p className="text-5xl font-black text-secondary tracking-tighter">99%</p>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Forgery Halt</p>
                                        </div>
                                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10 text-center hover:bg-white/10 transition-colors">
                                            <p className="text-5xl font-black text-secondary tracking-tighter">10ms</p>
                                            <p className="text-[10px] font-black uppercase tracking-widest text-white/40 mt-2">Sync Speed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
};
