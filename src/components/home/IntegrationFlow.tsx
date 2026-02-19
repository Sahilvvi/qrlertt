"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Cpu, Cloud, Smartphone, ArrowRight } from "lucide-react";
import { FadeIn, Section } from "../ui/Section";

const steps = [
    { name: "ERP Sync", icon: Database, desc: "We pull existing student/staff data securely from your current management system." },
    { name: "QR Encoding", icon: Cpu, desc: "Our system generates unique, encrypted QR tokens linked to student profiles." },
    { name: "Cloud Hub", icon: Cloud, desc: "Data is synced across our high-availability cloud cluster for instant access." },
    { name: "Scanner App", icon: Smartphone, desc: "Your security personnel scan the card, triggering instant verification logs." },
];

export const IntegrationFlow = () => {
    return (
        <Section className="bg-white">
            <div className="text-center mb-20">
                <FadeIn>
                    <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Unified Architecture</h4>
                    <h2 className="heading-lg mb-6">Seamless <span className="text-primary italic">System Integration.</span></h2>
                    <p className="text-p max-w-2xl mx-auto">
                        How QrLert connects your institutional data to physical security points in real-time.
                    </p>
                </FadeIn>
            </div>

            <div className="relative max-w-6xl mx-auto px-4">
                {/* Connecting Line (Desktop) */}
                <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-1 bg-slate-100 -z-0">
                    <motion.div
                        className="h-full bg-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
                    {steps.map((step, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div className="group text-center">
                                <motion.div
                                    className="w-[120px] h-[120px] rounded-[2.5rem] bg-white border-4 border-slate-50 flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:border-secondary transition-all group-hover:shadow-2xl group-hover:-translate-y-2 relative"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <step.icon className="w-10 h-10 text-primary group-hover:text-secondary transition-colors" />
                                    {i < steps.length - 1 && (
                                        <div className="absolute -right-10 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center text-slate-200">
                                            <ArrowRight className="w-6 h-6" />
                                        </div>
                                    )}
                                </motion.div>
                                <h3 className="text-xl font-black text-slate-800 mb-4">{step.name}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed px-4">{step.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </Section>
    );
};
