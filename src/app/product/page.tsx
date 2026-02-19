"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Section, FadeIn } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Cpu, QrCode, LayoutDashboard, CheckCircle2, Layers, Zap, PenTool, Radio, ArrowRight, X } from "lucide-react";

const productFeatures = [
    {
        title: "High-DPI UV Printing",
        desc: "Our cards are printed using cutting-edge UV technology for vibrant colors and scratch-resistant finishes that last for years.",
        icon: Cpu
    },
    {
        title: "Dynamic QR Linking",
        desc: "QR codes on the cards can be updated remotely. Change the destination URL or data without reprinting the physical card.",
        icon: QrCode
    },
    {
        title: "Eco-Friendly Material",
        desc: "We use high-grade, recyclable PVC and eco-friendly inks, ensuring your security solution is also sustainable.",
        icon: LayoutDashboard
    }
];

export default function ProductPage() {
    return (
        <div className="bg-white">
            <PageHero
                subtitle="Our Product"
                title={<>The Smartest ID Card <br /><span className="text-secondary">Ever Created.</span></>}
                description="QRlert combines high-quality physical manufacturing with advanced digital security. Move beyond plastic cards to a fully integrated digital ecosystem."
            >
                <div className="flex justify-center gap-4">
                    <Button size="lg" className="px-10">Order Samples</Button>
                    <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 px-10">
                        View Tech Specs
                    </Button>
                </div>
            </PageHero>

            {/* Video/Visual Section matching homepage secondary styling */}
            <Section className="bg-white -mt-20 relative z-20">
                <FadeIn>
                    <div className="max-w-5xl mx-auto">
                        <div className="bg-primary rounded-[2.5rem] p-1 md:p-4 shadow-2xl overflow-hidden aspect-video relative group select-none">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                            <div className="relative z-10 h-full flex items-center justify-center">
                                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 cursor-pointer hover:scale-110 transition-transform shadow-2xl">
                                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[18px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                                </div>
                            </div>
                        </div>
                        <p className="text-center text-slate-400 text-sm mt-8 italic">Watch the QRlert security walkthrough (2:45)</p>
                    </div>
                </FadeIn>
            </Section>

            {/* NEW SECTION: Interactive Card Templates */}
            <Section className="bg-white overflow-hidden">
                <div className="flex flex-col lg:flex-row gap-20 items-center">
                    <FadeIn direction="right" className="flex-1">
                        <h4 className="text-secondary font-black uppercase tracking-[0.2em] text-[10px] mb-4">Design Flexibility</h4>
                        <h2 className="heading-lg mb-8">Personalized <br /><span className="text-primary italic">To Your Brand.</span></h2>
                        <p className="text-p mb-8">Choose from our gallery of premium templates or let our designers create a custom layout that perfectly represents your institutional values.</p>
                        <div className="grid grid-cols-2 gap-4">
                            {["Brilliant White", "Midnight Onyx", "Institutional Blue", "Custom Motif"].map((t, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 italic font-bold text-slate-700 text-sm">
                                    <CheckCircle2 className="w-4 h-4 text-secondary" /> {t}
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" className="flex-1">
                        <div className="relative">
                            <motion.div
                                className="w-full aspect-[1.6/1] bg-gradient-navy rounded-3xl p-10 text-white shadow-2xl border border-white/10 relative overflow-hidden group"
                                whileHover={{ rotateY: 15, rotateX: 5 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-[-20deg] translate-x-10" />
                                <div className="flex justify-between items-start mb-12">
                                    <div>
                                        <div className="w-12 h-12 bg-secondary rounded-lg mb-4" />
                                        <h4 className="font-outfit font-black text-2xl">Arjun Mehta</h4>
                                        <p className="text-sm opacity-60">Senior Researcher</p>
                                    </div>
                                    <div className="w-20 h-20 bg-white p-2 rounded-xl">
                                        <QrCode className="w-full h-full text-primary" />
                                    </div>
                                </div>
                                <div className="mt-auto pt-10 border-t border-white/10 flex justify-between items-end">
                                    <div className="space-y-1">
                                        <p className="text-[10px] uppercase font-black tracking-widest opacity-40">Employee ID</p>
                                        <p className="font-bold text-secondary">QL-2026-9482</p>
                                    </div>
                                    <div className="text-[10px] font-black uppercase tracking-widest px-3 py-1 bg-white/10 rounded-full">
                                        Level 4 Access
                                    </div>
                                </div>
                            </motion.div>
                            {/* Decorative shadow */}
                            <div className="absolute -bottom-10 left-10 right-10 h-8 bg-slate-900/10 blur-2xl rounded-full" />
                        </div>
                    </FadeIn>
                </div>
            </Section>

            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#002d62_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="text-center max-w-3xl mx-auto mb-20 relative z-10">
                    <FadeIn scale={0.9} blur direction="up">
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Under the Hood</h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[1.1] tracking-tighter">Engineered for <br /><span className="text-primary italic">Absolute Security.</span></h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">Every QrLert card is a piece of precision engineering, designed to withstand daily use while providing military-grade data protection.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 container relative z-10">
                    {productFeatures.map((f, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.95}>
                            <div className="group p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all h-full hover:-translate-y-4 duration-500 cursor-pointer">
                                <div className="w-20 h-20 bg-primary text-white rounded-3xl flex items-center justify-center shadow-2xl group-hover:bg-secondary group-hover:rotate-[360deg] transition-all duration-700 mb-10 group-hover:shadow-secondary/20">
                                    <f.icon className="w-10 h-10 group-hover:text-primary transition-colors duration-700" />
                                </div>
                                <h3 className="text-2xl font-outfit font-black mb-4 text-slate-800 tracking-tighter group-hover:text-primary transition-colors">{f.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm italic font-medium">{f.desc}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* NEW SECTION: Tech Comparison */}
            <Section className="bg-white">
                <div className="max-w-6xl mx-auto container">
                    <div className="text-center mb-24">
                        <FadeIn direction="up" blur scale={0.9}>
                            <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6" > Comparison Analysis </h4>
                            <h2 className="text-3xl sm:text-4xl lg:text-7xl font-outfit font-black leading-[1.1] tracking-tighter italic">Legacy PVC vs <br /><span className="text-primary not-italic">Smart Ecosystem.</span></h2>
                        </FadeIn>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <FadeIn direction="right" scale={0.9} blur>
                            <div className="p-16 rounded-[4rem] bg-slate-50 border border-slate-100 h-full relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl pointer-events-none" />
                                <h3 className="text-xl font-outfit font-black text-slate-400 mb-12 uppercase tracking-[0.2em] border-b border-slate-200 pb-6 italic">Traditional PVC Cards</h3>
                                <ul className="space-y-8">
                                    {["Static Information Only", "Easy to Counterfeit", "No Real-time Tracking", "Wastes time on manual entry"].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="flex gap-6 items-center text-slate-400 group/item"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 group-hover/item:bg-red-500 group-hover/item:text-white transition-all duration-500 shadow-sm">
                                                <X className="w-4 h-4" />
                                            </div>
                                            <span className="font-bold text-sm tracking-tight">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" scale={0.9} blur={false}>
                            <div className="p-16 rounded-[4rem] bg-primary text-white shadow-[0_40px_100px_rgba(0,45,98,0.25)] relative overflow-hidden h-full group">
                                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-secondary opacity-20 blur-[100px] group-hover:scale-150 transition-transform duration-1000" />
                                <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-400 opacity-10 blur-[100px]" />
                                <h3 className="text-xl font-outfit font-black mb-12 uppercase tracking-[0.2em] border-b border-white/10 pb-6 italic text-secondary">QrLert Smart Cards</h3>
                                <ul className="space-y-8 relative z-10">
                                    {["Dynamic Remote Updates", "Encrypted Token Security", "Live Attendance Analytics", "Automated Parental Alerts"].map((item, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.3 + i * 0.1 }}
                                            className="flex gap-6 items-center group/item"
                                        >
                                            <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary group-hover/item:bg-secondary group-hover/item:text-primary transition-all duration-500 shadow-xl shadow-secondary/10">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <span className="font-black tracking-widest text-[11px] uppercase group-hover/item:text-secondary transition-colors">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* NEW SECTION: Manufacturing Flow */}
            <Section className="bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-[0.05] bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center grayscale" />
                <div className="container relative py-20 z-10">
                    <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full pointer-events-none" />
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <FadeIn direction="right" blur scale={0.9}>
                            <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Factory Direct</h4>
                            <h2 className="text-4xl lg:text-8xl font-outfit font-black mb-12 leading-[1.1] tracking-tighter">Mastering the <br /><span className="text-secondary italic">Physical Craft.</span></h2>
                            <div className="space-y-10">
                                {[
                                    { t: "Pre-Press Optimization", icon: Layers, d: "Automated verification of your brand colors and student resolution." },
                                    { t: "Industrial UV Overlay", icon: Zap, d: "Application of a protective layer that resists heavy-duty friction." },
                                    { t: "Security Validation", icon: PenTool, d: "Final QA test where every QR code is scanned before dispatch." }
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 group-hover:bg-secondary group-hover:text-primary transition-all duration-500 shadow-2xl group-hover:scale-110 group-hover:rotate-6">
                                            <step.icon className="w-8 h-8" />
                                        </div>
                                        <div className="pt-2">
                                            <h4 className="text-2xl font-outfit font-black mb-3 group-hover:text-secondary transition-colors tracking-tighter">{step.t}</h4>
                                            <p className="text-white/30 text-sm leading-relaxed max-w-sm italic font-light">{step.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                        <FadeIn direction="left" blur scale={0.9}>
                            <div className="bg-white/5 p-4 rounded-[4.5rem] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] relative group overflow-hidden">
                                <motion.div
                                    className="absolute inset-0 bg-secondary/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none duration-1000"
                                    initial={false}
                                />
                                <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200" alt="Factory" className="rounded-[4rem] grayscale hover:grayscale-0 scale-110 group-hover:scale-100 transition-all duration-[2s]" />
                                <div className="absolute bottom-10 left-10 z-20 overflow-hidden pointer-events-none">
                                    <div className="flex items-center gap-3 text-secondary font-black text-[10px] uppercase tracking-widest bg-primary/80 backdrop-blur-md py-3 px-6 rounded-full border border-white/10 shadow-2xl translate-y-20 group-hover:translate-y-0 transition-transform duration-700">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full animate-pulse shadow-[0_0_10px_#00cccc]" />
                                        In-House Production
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* NEW SECTION: Hardware Capabilities */}
            <Section className="bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-[100px] pointer-events-none -mr-40" />
                <div className="text-center max-w-3xl mx-auto mb-24 container">
                    <FadeIn scale={0.9} blur direction="up">
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Device Agnostic</h4>
                        <h2 className="text-3xl sm:text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[1.1] tracking-tighter italic">Future-Proof <br /><span className="text-primary not-italic">Integrations.</span></h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed italic">Our cards are compatible with your existing NFC/RFID gate systems, enabling a unified access ecosystem.</p>
                    </FadeIn>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 container">
                    {[
                        { t: "NFC Enabled", icon: Radio, d: "Tap and go access for high-speed turnstiles." },
                        { t: "RFID Support", icon: Cpu, d: "Long-range detection for specialized library systems." },
                        { t: "Smart Chip Slot", icon: Zap, d: "Optional provision for bank-grade financial chips." },
                        { t: "Recyclable PVC", icon: Layers, d: "Eco-friendly materials that don't compromise durability." }
                    ].map((h, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.9}>
                            <div className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 group cursor-pointer h-full">
                                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-8 shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                                    <h.icon className="w-6 h-6 group-hover:text-secondary transition-colors" />
                                </div>
                                <h4 className="font-outfit font-black text-slate-800 mb-4 uppercase tracking-[0.1em] text-xs group-hover:text-primary transition-colors">
                                    {h.t}
                                </h4>
                                <p className="text-slate-400 text-sm leading-relaxed italic font-medium">{h.d}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            <Section dark className="bg-primary overflow-visible">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <FadeIn direction="right">
                        <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Security Standards</h4>
                        <h2 className="text-4xl lg:text-5xl font-outfit font-bold mb-8 text-white leading-tight">The <span className="text-secondary">QRlert</span> Technology Stack</h2>
                        <div className="space-y-6">
                            {[
                                { t: "Proprietary Encryption", d: "We use AES-256 equivalent encryption for all QR data payloads, ensuring they cannot be spoofed." },
                                { t: "Edge Verification", d: "Our scanning app works with local caching, allowing for instant verification even in low-connectivity areas." },
                                { t: "Dashboard Integration", d: "Real-time sync with your existing ERP or Student Management System via our secure API." },
                            ].map((item, i) => (
                                <FadeIn key={i} delay={0.2 + i * 0.1} direction="right">
                                    <div className="flex gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group">
                                        <ShieldCheck className="w-6 h-6 text-secondary shrink-0 group-hover:scale-125 transition-transform" />
                                        <div>
                                            <h4 className="font-bold text-white mb-2">{item.t}</h4>
                                            <p className="text-white/60 text-sm">{item.d}</p>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </FadeIn>

                    <div className="relative">
                        <FadeIn direction="left" scale={0.9} blur>
                            <div className="bg-white/10 backdrop-blur-3xl p-10 rounded-[2.5rem] border border-white/20 shadow-[0_0_50px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 blur-[100px] -mr-32 -mt-32" />
                                <div className="space-y-6 relative z-10">
                                    <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                        <span className="text-secondary font-bold text-sm tracking-widest">LIVE ADMIN DASHBOARD</span>
                                        <div className="flex gap-2">
                                            <div className="w-3 h-3 rounded-full bg-red-400 animate-pulse" />
                                            <div className="w-3 h-3 rounded-full bg-secondary/80 animate-pulse delay-75" />
                                            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse delay-150" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="h-28 bg-white/5 rounded-xl border border-white/5 p-5 flex flex-col justify-center hover:bg-white/10 transition-colors">
                                            <p className="text-[10px] uppercase font-black text-white/40 mb-1 tracking-widest">Total Scans</p>
                                            <p className="text-3xl font-black text-white">12,842</p>
                                        </div>
                                        <div className="h-28 bg-white/5 rounded-xl border border-white/5 p-5 flex flex-col justify-center hover:bg-white/10 transition-colors">
                                            <p className="text-[10px] uppercase font-black text-white/40 mb-1 tracking-widest">Status</p>
                                            <p className="text-lg font-bold text-secondary uppercase flex items-center gap-2">
                                                <div className="w-2 h-2 rounded-full bg-secondary animate-ping" /> Secure
                                            </p>
                                        </div>
                                    </div>
                                    <div className="h-40 bg-white/5 rounded-xl border border-white/5 p-6 flex items-end gap-3 group-hover:bg-white/10 transition-colors">
                                        {[40, 70, 45, 90, 65, 80, 55].map((h, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ height: 0 }}
                                                whileInView={{ height: `${h}%` }}
                                                transition={{ duration: 1, delay: i * 0.1, ease: "backOut" }}
                                                className="flex-1 bg-secondary/30 rounded-t-md border-t border-secondary/50 hover:bg-secondary/60 transition-colors"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* Pricing CTA matching home */}
            <Section className="text-center py-32 bg-white overflow-hidden relative">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
                <FadeIn scale={0.9} blur>
                    <h4 className="text-secondary font-bold uppercase tracking-widest text-sm mb-4">Start Upgrade</h4>
                    <h2 className="heading-lg mb-6">Ready to Modernize Your <br /><span className="text-primary italic">Identity System?</span></h2>
                    <p className="text-p mb-12 max-w-2xl mx-auto leading-relaxed">Join the 500+ institutions already using QRlert to protect their campuses.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Button size="lg" className="px-12 h-16 rounded-full shadow-[0_10px_30px_rgba(0,45,98,0.1)] group">
                            Get Custom Quote <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="px-12 h-16 rounded-full hover:bg-slate-50">Speak to an Expert</Button>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}

