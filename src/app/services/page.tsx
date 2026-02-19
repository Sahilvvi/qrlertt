"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Section, FadeIn } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Printer, Code2, ShieldAlert, BadgeCheck, Lightbulb, Headphones, ArrowRight, Check, Rocket, Settings, Users, Building2, Briefcase, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "High-Volume Card Manufacturing",
        desc: "We utilize industrial-grade printing technology to produce thousands of high-quality plastic ID cards with rapid turnaround times.",
        icon: Printer
    },
    {
        title: "Custom Software Integration",
        desc: "Our engineers can integrate the QRlert verification system directly into your existing student or employee management portals.",
        icon: Code2
    },
    {
        title: "Security Infrastructure Audit",
        desc: "We assess your current campus entry/exit points and provide a comprehensive strategy for smart identity implementation.",
        icon: ShieldAlert
    },
    {
        title: "Managed Cloud Dashboard",
        desc: "Let us handle the technical side. We provide a fully managed cloud service for your IDs with 99.9% uptime guarantee.",
        icon: BadgeCheck
    },
    {
        title: "Enterprise Customization",
        desc: "Need specific features? We build custom ID card logic and dashboard modules tailored to your unique organizational workflow.",
        icon: Lightbulb
    },
    {
        title: "24/7 Priority Support",
        desc: "Our dedicated support team is always available to assist with scanning hardware or software management issues.",
        icon: Headphones,
        features: ["Dedicated Support Channel", "On-site Assistance", "Emergency Response"]
    }
];

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <PageHero
                subtitle="Our Services"
                title={<>Comprehensive <br /><span className="text-secondary">Enterprise Solutions.</span></>}
                description="From bulk printing to custom API integrations, we provide everything needed to secure your modern institution."
            />

            <Section className="bg-slate-50">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <FadeIn scale={0.9} blur direction="up">
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">What We Offer</h4>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter">Security Solutions <br />at every <span className="text-primary italic">Scale.</span></h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed">From individual school branches to multi-state university boards, we provide the infrastructure needed for modern identity management.</p>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((service, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.95}>
                            <div className="group p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all h-full hover:-translate-y-4 duration-500 cursor-pointer">
                                <div className="w-20 h-20 bg-slate-50 text-primary rounded-3xl flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white group-hover:rotate-[360deg] transition-all duration-700 shadow-sm">
                                    <service.icon className="w-10 h-10" />
                                </div>
                                <h3 className="text-2xl font-outfit font-black mb-6 text-slate-800 tracking-tighter group-hover:text-primary transition-colors">{service.title}</h3>
                                <p className="text-slate-400 leading-relaxed text-sm mb-10 font-medium italic">{service.desc}</p>
                                <ul className="space-y-4">
                                    {service.features?.map((f, j) => (
                                        <li key={j} className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-widest group-hover:text-slate-800 transition-colors">
                                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                {!service.features && (
                                    <div className="pt-6 mt-auto">
                                        <div className="h-1 w-12 bg-slate-100 group-hover:bg-secondary group-hover:w-full transition-all duration-700 rounded-full" />
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* NEW SECTION: Workflow Process */}
            <Section className="bg-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/[0.03] skew-x-[-15deg] translate-x-20 pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center container">
                    <FadeIn direction="right" blur scale={0.9}>
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Our Methodology</h4>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black mb-12 leading-[0.9] tracking-tighter">From Discovery to <br /><span className="text-primary italic">Elite Deployment.</span></h2>
                        <div className="space-y-12">
                            {[
                                { t: "Needs Assessment", icon: Lightbulb, d: "We analyze your current attendance bottlenecks and security requirements." },
                                { t: "Platform Configuration", icon: Settings, d: "Setting up your institution's digital dashboard and database architecture." },
                                { t: "On-site Training", icon: Rocket, d: "Empowering your staff with scanning tools and management protocols." }
                            ].map((step, i) => (
                                <div key={i} className="flex gap-8 relative group">
                                    {i < 2 && <div className="absolute left-10 top-20 w-[2px] h-16 bg-slate-100 group-hover:bg-secondary transition-all duration-700" />}
                                    <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl group-hover:shadow-primary/20 group-hover:-translate-y-2">
                                        <step.icon className="w-8 h-8" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="text-2xl font-outfit font-black mb-3 group-hover:text-primary transition-colors tracking-tighter">{step.t}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm italic">{step.d}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" blur scale={0.9}>
                        <div className="relative group">
                            <div className="absolute -inset-10 bg-secondary/5 rounded-[4rem] blur-[100px] animate-pulse pointer-events-none" />
                            <div className="relative bg-white p-6 rounded-[4.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.1)] border-[12px] border-slate-50 rotate-3 group-hover:rotate-0 transition-all duration-1000 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply opacity-50 group-hover:opacity-0 transition-opacity duration-1000" />
                                <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=1200" alt="Workflow" className="rounded-[3.5rem] scale-110 group-hover:scale-100 transition-transform duration-1000" />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* NEW SECTION: Pricing Tiers */}
            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#002d62_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
                    <FadeIn scale={0.9} blur direction="up">
                        <h4 className="text-secondary font-black uppercase tracking-[0.35em] text-[10px] mb-6">Investment Plans</h4>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black leading-[0.9] tracking-tighter">Tailored for <br /><span className="text-primary italic">Every Institution.</span></h2>
                    </FadeIn>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 container relative z-10">
                    {[
                        { n: "Lite Pilot", p: "Custom", f: ["Up to 500 Students", "QR Scanning App", "Cloud Dashboard", "Email Support"], b: "Start Pilot" },
                        { n: "Standard Pro", p: "Contact Sales", f: ["Unlimited Students", "Bulk PVC Printing", "WhatsApp Alerts", "Staff ID Integration"], b: "Most Popular", popular: true },
                        { n: "Board Enterprise", p: "Exclusive", f: ["Multi-Branch Support", "API Integration", "White-label Dashboard", "24/7 Dedicated Manager"], b: "Review Plan" }
                    ].map((plan, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={plan.popular ? 1 : 0.95} blur={!plan.popular}>
                            <div className={cn(
                                "p-16 rounded-[4rem] border transition-all h-full flex flex-col group relative overflow-hidden",
                                plan.popular ? "bg-primary text-white border-primary shadow-[0_40px_100px_rgba(0,0,0,0.3)] scale-105 z-10" : "bg-white border-slate-100 hover:border-primary/20 text-slate-800 shadow-sm hover:shadow-2xl"
                            )}>
                                {plan.popular && (
                                    <div className="absolute top-10 right-[-35px] bg-secondary text-primary font-black text-[10px] uppercase tracking-widest py-2 px-12 rotate-45 shadow-xl">
                                        Best Value
                                    </div>
                                )}
                                <h3 className="text-xl font-outfit font-black mb-3 uppercase tracking-[0.2em] opacity-60">{plan.n}</h3>
                                <p className={cn("text-5xl font-outfit font-black mb-12 tracking-tighter", plan.popular ? "text-secondary" : "text-primary")}>{plan.p}</p>
                                <div className="h-[1px] w-full bg-current opacity-10 mb-12" />
                                <ul className="space-y-6 mb-16 flex-1">
                                    {plan.f.map((f, j) => (
                                        <li key={j} className="flex items-center gap-4 text-sm font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                                            <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0", plan.popular ? "bg-white/10" : "bg-primary/5")}>
                                                <Check className={cn("w-3.5 h-3.5", plan.popular ? "text-secondary" : "text-primary")} />
                                            </div>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                                <Button size="lg" className={cn(
                                    "w-full h-20 rounded-[2rem] font-black uppercase tracking-widest text-xs transition-all duration-500 shadow-2xl group overflow-hidden relative",
                                    plan.popular ? "bg-secondary text-primary hover:bg-white" : "bg-primary text-white hover:bg-secondary"
                                )}>
                                    <span className="relative z-10">{plan.b}</span>
                                    <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-3 transition-transform" />
                                </Button>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* NEW SECTION: Verticals (Target Industries) */}
            <Section className="bg-white relative overflow-hidden">
                <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-50/50 rounded-full blur-[120px] pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center container">
                    <FadeIn direction="right" blur scale={0.9}>
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { n: "K-12 Schools", i: Building2, c: "bg-blue-500/10", t: "text-blue-600" },
                                { n: "Universities", i: Users, c: "bg-purple-500/10", t: "text-purple-600" },
                                { n: "Distributors", i: Briefcase, c: "bg-orange-500/10", t: "text-orange-600" },
                                { n: "Events", i: Globe, c: "bg-green-500/10", t: "text-green-600" }
                            ].map((v, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -15, scale: 1.05 }}
                                    className="p-12 rounded-[3.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center group duration-500 hover:bg-white hover:shadow-2xl"
                                >
                                    <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center mb-8 transition-all group-hover:rotate-12 group-hover:scale-110 shadow-sm", v.c, v.t)}>
                                        <v.i size={36} />
                                    </div>
                                    <h4 className="font-outfit font-black text-slate-800 text-sm tracking-widest uppercase">{v.n}</h4>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" blur scale={0.95}>
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Market Verticals</h4>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter">Serving the <br /><span className="text-primary italic">Entire Ecosystem.</span></h2>
                        <p className="text-xl text-slate-500 font-light leading-relaxed mb-12 italic">Whether you're a single branch school or a government board overseeing thousands of students, our scalable architecture adapts to your volume.</p>
                        <ul className="space-y-6">
                            {["Centralized Data Management", "Regional Branch Control", "Unified Security Protocols"].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-5 text-slate-800 font-black tracking-widest text-[11px] uppercase group cursor-pointer"
                                >
                                    <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-primary transition-all duration-500 group-hover:scale-110 shadow-sm">
                                        <BadgeCheck className="w-6 h-6" />
                                    </div>
                                    <span className="group-hover:translate-x-2 transition-transform">{item}</span>
                                </motion.li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>
            </Section>

            {/* NEW SECTION: SLA Commitment */}
            <Section className="bg-white overflow-hidden">
                <FadeIn scale={0.9} blur direction="none">
                    <div className="max-w-6xl mx-auto p-16 lg:p-24 rounded-[5rem] border-[16px] border-slate-50 bg-slate-50/30 relative overflow-hidden group hover:border-primary/5 transition-all duration-1000 shadow-[0_50px_150px_rgba(0,0,0,0.03)] text-center">
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] -mr-60 -mt-60 group-hover:bg-secondary/10 transition-colors pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] -ml-60 -mb-60 group-hover:bg-primary/10 transition-colors pointer-events-none" />

                        <div className="relative z-10 mb-20">
                            <h2 className="text-5xl lg:text-8xl font-outfit font-black text-slate-800 mb-8 leading-[0.9] tracking-tighter">Service <br /><span className="text-secondary italic">Guarantee.</span></h2>
                            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed italic">We don't just provide software; we provide a promise of reliability and enterprise-grade performance.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative z-10">
                            {[
                                { val: "99.9%", l: "Uptime SLA", d: "Cloud services always available." },
                                { val: "< 4h", l: "Response Time", d: "Fast resolution to any emergencies." },
                                { val: "24/7", l: "Secure Monitoring", d: "Continuous system health checks." }
                            ].map((stat, i) => (
                                <FadeIn key={i} delay={0.2 + i * 0.2} direction="up" scale={0.9}>
                                    <div className="space-y-6 group/stat">
                                        <motion.p
                                            whileHover={{ scale: 1.1, y: -5 }}
                                            className="text-7xl lg:text-8xl font-outfit font-black text-primary group-hover:text-secondary transition-all duration-700 tracking-tighter"
                                        >
                                            {stat.val}
                                        </motion.p>
                                        <div className="h-[2px] w-12 bg-slate-200 mx-auto group-hover/stat:w-24 group-hover/stat:bg-secondary transition-all duration-700" />
                                        <p className="text-xs font-black text-slate-800 uppercase tracking-[0.4em]">{stat.l}</p>
                                        <p className="text-sm text-slate-400 font-medium leading-relaxed italic">{stat.d}</p>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </FadeIn>
            </Section>

            <Section className="bg-slate-50 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-white skew-y-[-2deg] origin-top-left pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center container relative z-10 py-20">
                    <FadeIn direction="right" blur scale={0.9}>
                        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_120px_rgba(0,0,0,0.15)] border-[16px] border-white group cursor-pointer">
                            <div className="absolute inset-0 bg-primary/30 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000 z-10" />
                            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000" alt="Consultation" className="scale-110 group-hover:scale-100 transition-transform duration-[2s] grayscale group-hover:grayscale-0" />
                            <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-primary shadow-2xl">
                                    <Briefcase size={32} />
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" blur scale={0.95}>
                        <div className="relative">
                            <h4 className="text-secondary font-black uppercase tracking-[0.35em] text-[11px] mb-8">Expert Guide</h4>
                            <h2 className="text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter text-slate-900">Personalized <br /><span className="text-primary italic">Expert Audit.</span></h2>
                            <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed italic">
                                Not sure where to start? Our experts provide a free security audit of your current ID system and demonstrate how QrLert can save you time while drastically increasing campus security.
                            </p>
                            <div className="space-y-8 mb-16">
                                {[
                                    "On-site or remote security audits",
                                    "Custom pricing for bulk orders",
                                    "Live dashboard demonstrations"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 15 }}
                                        className="flex items-center gap-6 text-slate-800 font-black tracking-[0.05em] uppercase text-xs group cursor-pointer"
                                    >
                                        <div className="w-14 h-14 rounded-[1.5rem] bg-white border border-slate-100 flex items-center justify-center text-secondary shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                                            <BadgeCheck className="w-7 h-7" />
                                        </div>
                                        <span className="group-hover:text-primary transition-colors">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                            <Button size="lg" className="px-16 h-20 rounded-2xl shadow-3xl hover:-translate-y-4 transition-all duration-500 shadow-primary/20 group bg-primary relative overflow-hidden">
                                <span className="relative z-10 font-black uppercase tracking-[0.2em] text-sm">Book a Free Session</span>
                                <ArrowRight className="ml-4 relative z-10 group-hover:translate-x-4 transition-transform text-secondary w-6 h-6" />
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Reusing CTA feel */}
            <Section dark className="bg-primary text-center py-48 overflow-hidden relative">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-secondary/10 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse delay-1000" />
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#00cccc_1px,transparent_1px),linear-gradient(to_bottom,#00cccc_1px,transparent_1px)] bg-[size:60px_60px]" />

                <FadeIn scale={0.9} blur direction="none">
                    <h2 className="text-5xl lg:text-9xl font-outfit font-black mb-12 leading-[0.8] tracking-tighter">Ready to Scale Your <br /><span className="text-secondary italic">Core DNA?</span></h2>
                    <p className="text-2xl text-white/30 mb-20 max-w-3xl mx-auto italic font-light leading-relaxed">Our custom solutions are designed to grow with your institution, providing military-grade security at every step.</p>
                    <div className="flex flex-wrap justify-center gap-10">
                        <Button size="lg" className="bg-secondary text-primary hover:bg-white px-16 h-20 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all shadow-[0_20px_60px_rgba(0,204,204,0.3)] hover:-translate-y-2">
                            Contact Sales Team
                        </Button>
                        <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/5 px-16 h-20 rounded-full font-black uppercase tracking-[0.2em] text-xs transition-all hover:-translate-y-2">
                            Partner with QrLert
                        </Button>
                    </div>
                </FadeIn>
            </Section>
        </div>
    );
}

function GraduationCap({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </svg>
    )
}
