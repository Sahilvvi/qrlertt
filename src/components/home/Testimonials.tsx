"use client";

import React from "react";
import { Section, FadeIn } from "../ui/Section";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Dr. Rajesh Kumar",
        role: "Dean, City University",
        quote: "The switch to QRlert was seamless. Our campus security has improved significantly, and students love having a digital backup of their IDs.",
    },
    {
        name: "Anita Sharma",
        role: "Principal, Global Academy",
        quote: "Verification at entry gates used to be a mess. With the QRlert app, it takes less than a second per student. Exceptional technology.",
    },
    {
        name: "Vikram Singh",
        role: "HR Director, TechCorp",
        quote: "We use QRlert for employee access and attendance. The cloud dashboard has saved our HR team dozens of hours every month.",
    },
];

export const Testimonials = () => {
    return (
        <Section id="testimonials">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <FadeIn>
                    <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Success Stories</h4>
                    <h2 className="heading-lg mb-6">Trusted by Educators & Industry <span className="text-primary italic">Leaders.</span></h2>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((item, i) => (
                    <FadeIn key={i} delay={i * 0.1}>
                        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm relative space-y-6">
                            <div className="flex text-secondary gap-1">
                                {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-4 h-4 fill-current" />)}
                            </div>
                            <p className="text-slate-600 italic leading-relaxed">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                                <div className="w-12 h-12 bg-slate-200 rounded-full" />
                                <div>
                                    <h4 className="font-bold text-slate-800">{item.name}</h4>
                                    <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">{item.role}</p>
                                </div>
                            </div>
                            <Quote className="absolute top-10 right-10 w-12 h-12 text-slate-50 z-0" />
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
};
