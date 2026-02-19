"use client";

import React from "react";
import { Button } from "../ui/Button";
import { FadeIn, Section } from "../ui/Section";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ShieldCheck, Zap, Globe, ArrowRight, Play, CheckCircle2 } from "lucide-react";

export const Hero = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 100, damping: 30 });
    const springY = useSpring(mouseY, { stiffness: 100, damping: 30 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        mouseX.set(x);
        mouseY.set(y);
    };

    const float1X = useTransform(springX, [-500, 500], [-20, 20]);
    const float1Y = useTransform(springY, [-500, 500], [-20, 20]);
    const float2X = useTransform(springX, [-500, 500], [40, -40]);
    const float2Y = useTransform(springY, [-500, 500], [40, -40]);

    return (
        <section
            className="relative min-h-[110vh] flex items-center pt-32 pb-40 overflow-hidden bg-primary perspective-1000"
            onMouseMove={handleMouseMove}
        >
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-secondary/20 blur-[120px] rounded-full animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-purple-600/10 blur-[150px] rounded-full animate-pulse delay-500" />
            </div>

            {/* Decorative Grid */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#00cccc_1px,transparent_1px),linear-gradient(to_bottom,#00cccc_1px,transparent_1px)] bg-[size:60px_60px]" />

            <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="text-white">
                    <FadeIn direction="right">
                        <motion.div
                            className="inline-flex items-center gap-3 bg-white/5 px-5 py-2 rounded-full backdrop-blur-xl border border-white/10 text-[10px] font-black mb-10 text-secondary tracking-[0.3em] uppercase shadow-2xl"
                            whileHover={{ scale: 1.05, x: 5 }}
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                            </span>
                            Future-Ready Attendance Management
                        </motion.div>
                        <h1 className="text-4xl sm:text-5xl lg:text-8xl font-outfit font-black leading-[0.95] tracking-tighter mb-10 selection:bg-secondary/30">
                            Modernize Your <br />
                            <span className="text-secondary italic">Campus DNA.</span>
                        </h1>
                        <p className="text-xl lg:text-2xl text-white/50 max-w-xl leading-relaxed font-light mb-12 selection:bg-secondary/20">
                            The elite QR-encryption ecosystem for smart attendance and high-security institutional access.
                        </p>
                        <div className="flex flex-wrap gap-8">
                            <Button size="lg" className="px-12 h-20 rounded-full text-lg shadow-[0_20px_50px_rgba(0,204,204,0.3)] group flex items-center justify-center gap-4 bg-secondary border-none hover:scale-105 transition-all">
                                <span className="font-black uppercase tracking-widest text-sm">Start Free Pilot</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <button className="flex items-center gap-4 text-white font-black hover:text-secondary transition-all group">
                                <div className="w-16 h-16 rounded-full border-2 border-white/10 flex items-center justify-center backdrop-blur-xl group-hover:bg-secondary group-hover:border-secondary transition-all shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-secondary/20 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
                                    <Play className="fill-current ml-1 relative z-10 w-6 h-6 group-hover:text-primary transition-colors" />
                                </div>
                                <span className="text-sm uppercase tracking-[0.3em] font-black italic">Watch Film</span>
                            </button>
                        </div>
                    </FadeIn>

                    <FadeIn direction="right" delay={0.4}>
                        <div className="flex items-center gap-10 mt-20 pt-10 border-t border-white/5">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <motion.div
                                        key={i}
                                        className="w-12 h-12 rounded-full border-2 border-primary bg-slate-800 flex items-center justify-center overflow-hidden shadow-xl"
                                        whileHover={{ y: -5, zIndex: 10 }}
                                    >
                                        <img src={`https://i.pravatar.cc/100?u=${i + 10}`} alt="User" />
                                    </motion.div>
                                ))}
                            </div>
                            <div>
                                <p className="text-sm font-black uppercase tracking-widest text-secondary">Global Impact</p>
                                <p className="text-white/40 text-xs">Trusted by 500+ Top Institutions</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative">
                    <FadeIn direction="left" delay={0.3}>
                        <div className="relative h-[600px] flex items-center justify-center">

                            {/* Background Circle Glow */}
                            <motion.div
                                className="absolute w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] border border-secondary/10"
                                style={{ x: float1X, y: float1Y }}
                            />

                            {/* Floating Card 1 - High Contrast White */}
                            <motion.div
                                className="absolute -left-12 top-0 w-72 p-8 bg-white rounded-[2.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-20 border border-slate-100"
                                style={{ x: float1X, y: float1Y }}
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center shadow-lg">
                                        <ShieldCheck className="text-white w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="text-md font-black text-slate-900 leading-tight">Security Plus</h4>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-1">AES-256 Enabled</p>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full bg-slate-100 rounded-full" />
                                    <div className="h-2 w-3/4 bg-slate-50 rounded-full" />
                                </div>
                            </motion.div>

                            {/* Main Phone Mockup - Responsive width */}
                            <motion.div
                                className="relative z-10 w-[260px] sm:w-[300px] h-[520px] sm:h-[600px] bg-white rounded-[3.5rem] border-[10px] border-slate-100 shadow-2xl overflow-hidden shrink-0"
                                style={{ x: springX.get() * 0.05, y: springY.get() * 0.05 }}
                            >
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-100 rounded-b-xl z-30" />
                                <div className="w-full h-full bg-white relative flex flex-col pt-16 px-6">
                                    <div className="flex justify-between items-center mb-10">
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100" />
                                        <div className="h-4 w-20 bg-slate-100 rounded-full" />
                                        <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100" />
                                    </div>

                                    <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100 aspect-square flex flex-col items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/5 opacity-50" />
                                        <div className="w-32 h-32 border-2 border-primary/20 rounded-2xl relative shadow-[0_10px_30px_rgba(0,45,98,0.05)] bg-white backdrop-blur-sm z-10 overflow-hidden">
                                            <motion.div
                                                animate={{ y: [0, 120, 0] }}
                                                transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                                                className="absolute top-0 left-0 right-0 h-[3px] bg-primary opacity-20 shadow-[0_0_10px_rgba(0,45,98,0.2)] z-20"
                                            />
                                            <div className="absolute inset-0 flex items-center justify-center p-6 opacity-40">
                                                <div className="w-full h-full border-4 border-dashed border-primary/10 rounded-xl" />
                                            </div>
                                        </div>
                                        <p className="mt-8 text-[10px] font-black uppercase text-primary tracking-widest animate-pulse opacity-40">Scanning Active</p>
                                    </div>

                                    <div className="mt-10 space-y-4">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="flex gap-4 items-center">
                                                <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100" />
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-2 w-1/2 bg-slate-100 rounded-full" />
                                                    <div className="h-1.5 w-1/3 bg-slate-50 rounded-full" />
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="mt-auto pb-10">
                                        <div className="h-12 w-full bg-primary rounded-2xl flex items-center justify-center font-black text-white text-xs uppercase tracking-widest shadow-xl shadow-primary/20">
                                            Verify Identity
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Floating Analytics Card - High Contrast White */}
                            <motion.div
                                className="absolute -right-20 bottom-10 w-72 p-8 bg-white rounded-[3rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] z-20 border border-slate-100"
                                style={{ x: float2X, y: float2Y }}
                                animate={{ y: [0, 15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Efficiency</h4>
                                    <CheckCircle2 className="w-5 h-5 text-primary" />
                                </div>
                                <p className="text-4xl font-black mb-1 text-slate-900 tracking-tighter">98.4%</p>
                                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider whitespace-nowrap">Auto-Sync Accuracy</p>
                                <div className="mt-8 flex gap-2 h-16 items-end">
                                    {[30, 60, 45, 90, 65, 80].map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${h}%` }}
                                            transition={{ delay: 1 + i * 0.1, duration: 1 }}
                                            className="flex-1 bg-primary/10 rounded-t-lg hover:bg-primary transition-colors cursor-pointer"
                                        />
                                    ))}
                                </div>
                            </motion.div>

                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-secondary to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 whitespace-nowrap [writing-mode:vertical-lr]">Scroll Exploration</span>
            </motion.div>
        </section>
    );
};
