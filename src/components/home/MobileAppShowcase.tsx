"use client";

import React from "react";
import { motion } from "framer-motion";
import { FadeIn, Section } from "../ui/Section";
import { Smartphone, Bell, Shield, Zap } from "lucide-react";

const features = [
    { title: "Instant Verification", desc: "Scan any QR card and get verification in under 500ms.", icon: Zap },
    { title: "Parent Notifications", desc: "Automatic WhatsApp/SMS alerts sent when entry/exit is logged.", icon: Bell },
    { title: "Offline Support", desc: "Works even without internet using on-device encrypted caching.", icon: Shield },
];

export const MobileAppShowcase = () => {
    return (
        <Section className="bg-white overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <FadeIn direction="right">
                    <div className="relative">
                        <div className="absolute -top-20 -left-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

                        <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Mobile Experience</h4>
                        <h2 className="heading-xl mb-8 leading-tight">The Power of QrLert <br /><span className="text-secondary italic">in Your Pocket.</span></h2>
                        <p className="text-p mb-10 max-w-lg">
                            Our high-performance mobile application transforms any smartphone into a military-grade identity verification terminal.
                        </p>

                        <div className="space-y-8">
                            {features.map((f, i) => (
                                <motion.div
                                    key={i}
                                    className="flex gap-6 items-start"
                                    whileHover={{ x: 10 }}
                                >
                                    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 border border-slate-100 shadow-sm text-primary group">
                                        <f.icon className="w-6 h-6 group-hover:text-secondary transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-slate-800 mb-2">{f.title}</h4>
                                        <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </FadeIn>

                <FadeIn direction="left">
                    <div className="relative flex justify-center">
                        {/* Mobile Phone Mockup */}
                        <div className="relative w-[300px] h-[600px] bg-slate-900 rounded-[3rem] border-8 border-slate-800 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-2xl z-20" />

                            {/* App UI */}
                            <div className="absolute inset-0 bg-primary p-6 pt-12 text-white">
                                <div className="flex justify-between items-center mb-8">
                                    <div className="w-10 h-10 rounded-full bg-white/10" />
                                    <h5 className="font-outfit font-black text-sm uppercase tracking-widest">Scanner</h5>
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                                    </div>
                                </div>

                                <div className="bg-white/10 rounded-[2rem] p-6 text-center border border-white/10 mb-8 backdrop-blur-md">
                                    <div className="w-40 h-40 bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center p-4">
                                        <div className="w-full h-full border-4 border-dashed border-primary/20 rounded-2xl flex items-center justify-center">
                                            <div className="w-0.5 h-full bg-secondary absolute animate-scan" />
                                        </div>
                                    </div>
                                    <p className="text-xs font-bold text-white/60 mb-1">Align QR Code to Scan</p>
                                    <p className="text-[10px] text-white/30">v.10.4 Secure Link Active</p>
                                </div>

                                <div className="space-y-3">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-center">
                                        <div className="w-10 h-10 rounded-lg bg-secondary/20" />
                                        <div className="flex-1">
                                            <div className="h-2 w-20 bg-white/20 rounded-full mb-2" />
                                            <div className="h-1.5 w-12 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5 flex gap-4 items-center opacity-50">
                                        <div className="w-10 h-10 rounded-lg bg-white/5" />
                                        <div className="flex-1">
                                            <div className="h-2 w-16 bg-white/20 rounded-full mb-2" />
                                            <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            className="absolute -right-10 top-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[200px]"
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Shield className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-black uppercase text-slate-800">Verified</span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-tight">Identity authenticated with 256-bit encryption key.</p>
                        </motion.div>

                        <motion.div
                            className="absolute -left-10 bottom-20 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 max-w-[200px]"
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Bell className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-black uppercase text-slate-800">Alert Sent</span>
                            </div>
                            <p className="text-[10px] text-slate-500 leading-tight">In-app and WhatsApp notification sent to parent successfully.</p>
                        </motion.div>
                    </div>
                </FadeIn>
            </div>

            <style jsx>{`
                @keyframes scan {
                    0% { transform: translateY(-80px); }
                    100% { transform: translateY(80px); }
                }
                .animate-scan {
                    animation: scan 2s linear infinite;
                    width: 100%;
                    height: 2px;
                    background: #00cccc;
                    box-shadow: 0 0 15px #00cccc;
                    position: absolute;
                }
            `}</style>
        </Section>
    );
};
