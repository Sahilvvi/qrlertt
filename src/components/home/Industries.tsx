"use client";

import React from "react";
import { Section, FadeIn } from "../ui/Section";
import { GraduationCap, Building2, Briefcase, Hospital, School, BookOpen } from "lucide-react";

const sectors = [
    { icon: GraduationCap, name: "Colleges & Universities" },
    { icon: School, name: "Schools & Academies" },
    { icon: BookOpen, name: "Coaching Centers" },
    { icon: Building2, name: "Hostels & Housing" },
    { icon: Briefcase, name: "Corporate Offices" },
    { icon: Hospital, name: "Training Institutes" },
];

export const Industries = () => {
    return (
        <Section id="industries" className="bg-slate-50 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#002d62_1px,transparent_1px)] bg-[size:32px_32px]" />
            <div className="text-center max-w-4xl mx-auto mb-20 relative z-10">
                <FadeIn scale={0.9} blur direction="up">
                    <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Market Verticals</h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter italic">Institutional <br /><span className="text-primary not-italic">DNA Verification.</span></h2>
                    <p className="text-xl text-slate-500 font-light max-w-2xl mx-auto leading-relaxed italic">A scalable architecture designed to evolve with the complexity of modern educational and corporate landscapes.</p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative z-10">
                {sectors.map((sector, i) => (
                    <FadeIn key={i} delay={i * 0.1} scale={0.9} blur direction="up">
                        <div className="bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 flex flex-col items-center gap-8 text-center hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-4 transition-all duration-700 group cursor-pointer">
                            <div className="w-20 h-20 rounded-3xl bg-slate-50 text-slate-400 group-hover:bg-primary group-hover:text-white transition-all duration-700 flex items-center justify-center group-hover:rotate-12 group-hover:scale-110 shadow-sm">
                                <sector.icon className="w-10 h-10" />
                            </div>
                            <h3 className="font-outfit font-black text-slate-800 text-[11px] uppercase tracking-widest">{sector.name}</h3>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
};
