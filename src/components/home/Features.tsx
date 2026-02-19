"use client";

import React from "react";
import { Section, FadeIn } from "../ui/Section";
import { QrCode, Shield, Users, Database, Globe, Zap, Cpu, Bell } from "lucide-react";

const features = [
    {
        icon: QrCode,
        title: "QR Attendance tracking",
        description: "Teachers can scan codes class-wise to mark student presence effortlessly and accurately.",
    },
    {
        icon: Bell,
        title: "Real-time Notifications",
        description: "Keep parents informed with instant notifications about their child's daily attendance status.",
    },
    {
        icon: Shield,
        title: "User-Friendly Interface",
        description: "Intuitive design ensures easy navigation for both educators and parents across all devices.",
    },
    {
        icon: Cpu,
        title: "Automated Absentee Identification",
        description: "Instantly identify absentees to enable swift intervention and follow-up measures by staff.",
    },
    {
        icon: Users,
        title: "Enhanced Communication",
        description: "Foster transparency and collaboration between schools and parents through automated tools.",
    },
    {
        icon: Database,
        title: "Secure Student Profiles",
        description: "Manage and update student images and information easily for identity verification.",
    },
];

export const Features = () => {
    return (
        <Section id="features" className="relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-secondary/[0.03] rounded-full blur-[120px] pointer-events-none" />

            <div className="text-center max-w-4xl mx-auto mb-24 relative z-10">
                <FadeIn scale={0.9} blur direction="up">
                    <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Core Technology</h4>
                    <h2 className="text-3xl sm:text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter">Cutting-Edge Features <br />for <span className="text-primary italic">Identity Mastery.</span></h2>
                    <p className="text-xl text-slate-500 font-light leading-relaxed max-w-2xl mx-auto">Our smart ID system bridges the gap between physical reliability and modern digital intelligence.</p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
                {features.map((feature, i) => (
                    <FadeIn key={i} delay={i * 0.1} scale={0.95} blur direction="up">
                        <div className="group p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all h-full hover:-translate-y-4 duration-500 cursor-pointer">
                            <div className="w-20 h-20 bg-slate-50 text-secondary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-sm group-hover:shadow-primary/30">
                                <feature.icon className="w-10 h-10" />
                            </div>
                            <h3 className="text-2xl font-outfit font-black mb-6 text-slate-800 tracking-tighter group-hover:text-primary transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed text-sm italic font-medium">
                                {feature.description}
                            </p>
                            <div className="mt-10 pt-6 border-t border-slate-50 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                <span className="text-[10px] font-black uppercase tracking-widest text-primary">Explore Feature</span>
                                <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-primary">
                                    <Zap size={14} fill="currentColor" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>
        </Section>
    );
};
