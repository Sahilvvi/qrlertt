"use client";

import React from "react";
import { motion } from "framer-motion";
import { Section, FadeIn } from "../ui/Section";
import { ListChecks, QrCode, Printer, CheckCircle } from "lucide-react";

const steps = [
    {
        icon: ListChecks,
        title: "Data Collection",
        description: "Upload student or employee data via our secure web dashboard.",
    },
    {
        icon: QrCode,
        title: "QR Generation",
        description: "Our system generates encrypted QR codes unique to each individual.",
    },
    {
        icon: Printer,
        title: "Smart Printing",
        description: "High-quality plastic cards are printed with the QR and individual branding.",
    },
    {
        icon: CheckCircle,
        title: "Live Verification",
        description: "Use our app to scan and verify credentials instantly at any location.",
    },
];

export const HowItWorks = () => {
    return (
        <Section id="process" className="bg-primary overflow-hidden relative py-32 lg:py-48">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />

            <div className="text-center max-w-4xl mx-auto mb-24 text-white relative z-10">
                <FadeIn scale={0.9} blur direction="up">
                    <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Execution Path</h4>
                    <h2 className="text-3xl sm:text-5xl lg:text-8xl font-outfit font-black mb-10 leading-[0.8] tracking-tighter italic">Precision <span className="text-secondary not-italic">Workflow.</span></h2>
                    <p className="text-xl text-white/40 font-light max-w-2xl mx-auto italic">A seamless 4-step orchestration to digitize and secure your entire institutional identity ecosystem.</p>
                </FadeIn>
            </div>

            <div className="relative z-10 container">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-[4rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {steps.map((step, i) => (
                        <FadeIn key={i} delay={i * 0.15} scale={0.9} blur direction="up">
                            <div className="relative text-center group cursor-pointer">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 360 }}
                                    transition={{ duration: 0.8 }}
                                    className="w-24 h-24 rounded-[2rem] bg-white text-primary mx-auto mb-10 flex items-center justify-center text-3xl font-black shadow-[0_20px_50px_rgba(0,0,0,0.3)] group-hover:bg-secondary group-hover:text-primary transition-all z-10 relative border-4 border-slate-900 group-hover:border-white"
                                >
                                    {i + 1}
                                </motion.div>
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-12 rounded-[3.5rem] group-hover:bg-white/10 transition-all duration-700 hover:-translate-y-4">
                                    <div className="mb-10 flex justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-secondary transition-colors duration-700">
                                            <step.icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-700" />
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-outfit font-black text-white mb-4 tracking-tighter group-hover:text-secondary transition-colors">{step.title}</h3>
                                    <p className="text-white/30 text-sm leading-relaxed font-light italic">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
};
