"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FadeIn, Section } from "../ui/Section";

const faqs = [
    {
        question: "How long does it take to implement QrLert?",
        answer: "Initial setup and database integration typically take 3-5 business days. Once the data is ready, cards are printed and shipped within 48 hours."
    },
    {
        question: "Is student data secure on your cloud servers?",
        answer: "Absolutely. We use AES-256 encryption and follow strict HIPAA-level protocols for data handling. No personal student data is stored in the QR code itself; it only contains an encrypted pointer."
    },
    {
        question: "Do students need to download an app?",
        answer: "No. The scanning app is only for authorized security personnel or teachers. Students only carry their physical or digital smart ID cards."
    },
    {
        question: "What happens if a student loses their card?",
        answer: "Administrators can instantly deactivate the lost card's QR code from the dashboard and issue a new one without affecting the student's historical data."
    }
];

export const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <Section className="bg-slate-50">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Common Doubts</h4>
                        <h2 className="heading-lg mb-6">Frequently Asked <span className="text-primary">Questions.</span></h2>
                        <p className="text-p max-w-2xl mx-auto">Everything you need to know about implementing QrLert in your institution.</p>
                    </FadeIn>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, i) => (
                        <FadeIn key={i} delay={i * 0.1}>
                            <div
                                className={`rounded-3xl border transition-all overflow-hidden ${activeIndex === i
                                        ? "bg-white border-primary/20 shadow-xl"
                                        : "bg-white/50 border-slate-200 hover:border-primary/20 hover:bg-white"
                                    }`}
                            >
                                <button
                                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                                    onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${activeIndex === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                                            }`}>
                                            <HelpCircle className="w-5 h-5" />
                                        </div>
                                        <span className={`font-bold text-lg ${activeIndex === i ? "text-primary" : "text-slate-700"}`}>
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all ${activeIndex === i ? "bg-secondary border-secondary text-white rotate-180" : "bg-white border-slate-200 text-slate-400"
                                        }`}>
                                        {activeIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <div className="px-8 pb-8 pt-2">
                                                <div className="pl-14 border-l-2 border-slate-100 ml-5">
                                                    <p className="text-slate-500 leading-relaxed italic font-light">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <FadeIn>
                        <p className="text-slate-400 font-medium mb-6">Still have questions?</p>
                        <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-secondary hover:shadow-2xl transition-all">
                            Visit Help Center
                        </button>
                    </FadeIn>
                </div>
            </div>
        </Section>
    );
};
