"use client";

import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Section, FadeIn } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Linkedin, Facebook, Instagram, Calendar, Users, Briefcase, Headphones } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="bg-white relative overflow-hidden">
            {/* Page-wide decorative elements */}
            <div className="absolute top-0 left-0 w-full h-[1000px] bg-gradient-to-b from-slate-50 to-transparent pointer-events-none" />

            <PageHero
                subtitle="Contact Us"
                title={<>Empower Your School <br /><span className="text-secondary italic">with QrLert.</span></>}
                description="Our team is here to help you embrace a new era of efficient attendance management and parental communication."
            />

            {/* NEW SECTION: Quick Dept Access */}
            <div className="container relative z-30 -mt-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { n: "Sales Team", i: Briefcase, c: "Quick Quotes" },
                        { n: "Technical Support", i: Headphones, c: "24/7 Resolve" },
                        { n: "Media & PR", i: Globe, c: "Brand Assets" },
                        { n: "Partnerships", i: Users, c: "Growth" }
                    ].map((dept, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.9} blur>
                            <motion.div
                                whileHover={{ y: -15, scale: 1.05 }}
                                className="bg-white p-12 rounded-[3.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.05)] border border-slate-100 flex flex-col items-center text-center group cursor-pointer duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
                            >
                                <div className="w-20 h-20 bg-slate-50 rounded-[2rem] flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-700 text-secondary shadow-sm group-hover:rotate-[360deg]">
                                    <dept.i className="w-8 h-8" />
                                </div>
                                <h4 className="font-outfit font-black text-slate-800 text-sm uppercase tracking-widest">{dept.n}</h4>
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary mt-3 opacity-40 group-hover:opacity-100 transition-opacity italic">{dept.c}</p>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <Section className="bg-white pt-48 pb-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-[100px] pointer-events-none -mr-40" />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-start container relative z-10">
                    {/* Contact Info */}
                    <div className="lg:col-span-1 space-y-8">
                        <FadeIn direction="right" blur scale={0.95}>
                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 15 }}
                                    className="flex gap-8 p-12 bg-slate-50/50 rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all group duration-700 cursor-pointer"
                                >
                                    <div className="w-20 h-20 bg-white text-primary rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                                        <Phone className="w-8 h-8" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-outfit font-black text-slate-800 text-2xl tracking-tighter">Direct Line</h4>
                                        <p className="text-slate-500 font-medium text-lg mt-1">+91 70014 05007</p>
                                        <p className="text-secondary text-[10px] mt-4 font-black tracking-[0.3em] uppercase bg-secondary/10 px-4 py-2 rounded-full w-fit italic">Mon-Sat Available</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 15 }}
                                    className="flex gap-8 p-12 bg-slate-50/50 rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all group duration-700 cursor-pointer"
                                >
                                    <div className="w-20 h-20 bg-white text-primary rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12">
                                        <Mail className="w-8 h-8" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-outfit font-black text-slate-800 text-2xl tracking-tighter">Official Email</h4>
                                        <p className="text-slate-500 font-medium text-lg mt-1">support@qrlert.in</p>
                                        <p className="text-slate-400 text-[10px] font-black mt-4 uppercase tracking-widest bg-slate-100 px-4 py-2 rounded-full w-fit">sales@qrlert.in</p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 15 }}
                                    className="flex gap-8 p-12 bg-slate-50/50 rounded-[3.5rem] border border-slate-100 hover:bg-white hover:shadow-[0_40px_100px_rgba(0,0,0,0.06)] transition-all group duration-700 cursor-pointer"
                                >
                                    <div className="w-20 h-20 bg-white text-primary rounded-[2rem] flex items-center justify-center shrink-0 shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                                        <MapPin className="w-8 h-8" />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-outfit font-black text-slate-800 text-2xl tracking-tighter">HQ Location</h4>
                                        <p className="text-slate-500 font-medium leading-[1.4] mt-1 text-lg">15, 2nd Floor, Mahabir Market, Siliguri, WB</p>
                                        <p className="text-secondary text-[10px] mt-4 font-black tracking-widest uppercase italic">Appointment basis</p>
                                    </div>
                                </motion.div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="right" delay={0.2} blur scale={0.9}>
                            <div className="bg-primary p-16 rounded-[4rem] text-white space-y-10 relative overflow-hidden shadow-[0_40px_120px_rgba(0,45,98,0.3)] group">
                                <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-secondary/10 blur-[80px] rounded-full group-hover:scale-150 transition-transform duration-[2s]" />
                                <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full" />
                                <Clock className="w-16 h-16 text-secondary relative z-10 animate-pulse" />
                                <h4 className="text-4xl lg:text-5xl font-outfit font-black relative z-10 leading-[0.9] tracking-tighter italic">Elite <br /><span className="text-secondary not-italic">Response.</span></h4>
                                <p className="text-xl opacity-40 relative z-10 leading-relaxed font-light italic">Inquiries are triaged within 24 business hours. Our technical specialists prioritize active institutional deployments.</p>
                                <div className="relative z-10 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-secondary bg-white/5 py-4 px-8 rounded-full border border-white/10 w-fit">
                                    <div className="w-2 h-2 rounded-full bg-secondary animate-ping" />
                                    Active Monitoring
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <FadeIn direction="left" blur scale={0.95}>
                            <div className="bg-white p-12 md:p-20 lg:p-24 rounded-[5rem] shadow-[0_50px_150px_rgba(0,0,0,0.08)] border border-slate-100 relative overflow-hidden group">
                                <div className="absolute top-[-5%] right-[-5%] opacity-[0.03] -rotate-12 pointer-events-none group-hover:rotate-0 transition-transform duration-[3s]">
                                    <MessageSquare className="w-[600px] h-[600px]" />
                                </div>
                                <div className="relative z-10">
                                    <h3 className="text-5xl lg:text-8xl font-outfit font-black text-slate-900 mb-16 leading-[0.8] tracking-tighter">Send a <br /><span className="text-primary italic">Query.</span></h3>
                                    <form className="space-y-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] ml-2">Identity Details</label>
                                                <input type="text" className="w-full px-10 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-8 focus:ring-secondary/10 transition-all font-black text-xs uppercase tracking-[0.2em] text-slate-700 placeholder:opacity-20" placeholder="FULL NAME" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] ml-2">Node Communication</label>
                                                <input type="email" className="w-full px-10 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-8 focus:ring-secondary/10 transition-all font-black text-xs uppercase tracking-[0.2em] text-slate-700 placeholder:opacity-20" placeholder="EMAIL@INSTITUTION.DOM" />
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                            <div className="space-y-4">
                                                <label className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] ml-2">Active Line</label>
                                                <input type="tel" className="w-full px-10 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-8 focus:ring-secondary/10 transition-all font-black text-xs uppercase tracking-[0.2em] text-slate-700 placeholder:opacity-20" placeholder="+91 00000 00000" />
                                            </div>
                                            <div className="space-y-4">
                                                <label className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] ml-2">Institutional Hub</label>
                                                <input type="text" className="w-full px-10 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-8 focus:ring-secondary/10 transition-all font-black text-xs uppercase tracking-[0.2em] text-slate-700 placeholder:opacity-20" placeholder="UNIVERSITY / BOARD" />
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] ml-2">Service Protocol</label>
                                            <div className="relative">
                                                <select className="w-full px-10 py-6 rounded-[2rem] bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-8 focus:ring-secondary/10 transition-all appearance-none font-black text-xs uppercase tracking-[0.2em] text-slate-700">
                                                    <option>Advanced ID Solutions</option>
                                                    <option>Enterprise Identity Systems</option>
                                                    <option>Custom Stack Integration</option>
                                                    <option>Infrastructure Deployment</option>
                                                </select>
                                                <div className="absolute right-10 top-1/2 -translate-y-1/2 pointer-events-none">
                                                    <Briefcase size={20} className="text-slate-200" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-4">
                                            <label className="text-[11px] font-black text-slate-300 uppercase tracking-[0.3em] ml-2">Detailed Payload</label>
                                            <textarea className="w-full px-10 py-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:outline-none focus:ring-8 focus:ring-secondary/10 transition-all min-h-[200px] font-medium text-slate-700 placeholder:uppercase placeholder:text-[10px] placeholder:font-black placeholder:tracking-[0.3em] placeholder:opacity-20" placeholder="What are your institutional objectives..."></textarea>
                                        </div>
                                        <Button className="w-full flex items-center justify-center gap-6 h-24 rounded-[2rem] shadow-[0_30px_60px_rgba(0,45,98,0.2)] hover:-translate-y-3 transition-all duration-500 transform active:scale-95 bg-primary group" size="lg">
                                            <span className="text-sm font-black uppercase tracking-[0.4em]">Initialize Inquiry</span>
                                            <Send className="w-6 h-6 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform duration-500" />
                                        </Button>
                                    </form>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Section>

            {/* NEW SECTION: Meeting Scheduler Visual */}
            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] skew-x-[-15deg] translate-x-20 pointer-events-none" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center container relative z-10">
                    <FadeIn direction="right" blur scale={0.9}>
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Direct Access</h4>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black mb-10 leading-[0.9] tracking-tighter">Schedule a <br /><span className="text-primary italic">Live Demo.</span></h2>
                        <p className="text-xl text-slate-500 mb-12 font-light leading-relaxed max-w-lg italic">Pick a slot that works for your administration team. We'll show you the dashboard, printing tech, and scanner app in a 30-min session.</p>
                        <div className="flex flex-wrap gap-6">
                            <Button size="lg" className="px-12 h-20 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_20px_50px_rgba(0,45,98,0.2)] bg-primary group">
                                Book Discovery <Calendar className="ml-3 w-5 h-5 group-hover:rotate-12 transition-transform" />
                            </Button>
                            <Button variant="outline" size="lg" className="px-12 h-20 rounded-full font-black text-xs uppercase tracking-widest hover:bg-white shadow-xl transition-all border-slate-200">Full Product Demo</Button>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" blur scale={0.9}>
                        <div className="bg-white p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col gap-8 md:gap-10 relative group">
                            <div className="md:absolute md:top-12 md:right-12 bg-secondary/10 px-6 md:px-8 py-3 rounded-full flex items-center gap-3 border border-secondary/20 w-fit mb-4 md:mb-0">
                                <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_#00cccc]" />
                                <span className="text-[10px] font-black uppercase text-secondary tracking-widest">Slots Available Today</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-outfit font-black text-slate-800 tracking-tighter italic">February 2026</h3>
                            <div className="grid grid-cols-7 gap-4 text-center">
                                {["S", "M", "T", "W", "T", "F", "S"].map(d => <span key={d} className="text-[11px] font-black text-slate-300 uppercase tracking-widest">{d}</span>)}
                                {Array.from({ length: 31 }).map((_, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ scale: 1.2, zIndex: 20 }}
                                        className={`h-11 w-11 flex items-center justify-center rounded-2xl font-black text-xs cursor-pointer transition-all duration-300 ${[12, 14, 15, 19, 22].includes(i + 1) ? "bg-primary text-white shadow-xl shadow-primary/20 scale-110 ring-4 ring-primary/5" : "hover:bg-slate-50 text-slate-400 font-bold opacity-30 hover:opacity-100"}`}
                                    >
                                        {i + 1}
                                    </motion.div>
                                ))}
                            </div>
                            <div className="pt-10 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex -space-x-4">
                                    {[1, 2, 3, 4].map(i => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ y: -5, zIndex: 10 }}
                                            className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-xl"
                                        >
                                            <img src={`https://i.pravatar.cc/100?u=${i + 40}`} alt="Admin" className="w-full h-full object-cover" />
                                        </motion.div>
                                    ))}
                                    <div className="w-12 h-12 rounded-full border-4 border-white bg-slate-50 flex items-center justify-center text-[10px] font-black text-slate-400 shadow-xl relative z-0">+12</div>
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-300 italic">Recently Booked</span>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* NEW SECTION: Community/Social Feed */}
            <Section className="bg-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-100 to-transparent" />
                <div className="text-center mb-32 relative z-10">
                    <FadeIn scale={0.9} blur direction="up">
                        <h4 className="text-secondary font-black uppercase tracking-[0.3em] text-[10px] mb-6">Join the Network</h4>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black italic">Connected <span className="text-primary not-italic">Ecosystem.</span></h2>
                    </FadeIn>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto container relative z-10 px-6">
                    {[
                        { n: "LinkedIn", i: Linkedin, c: "5,000+ Connections", d: "Join discussions with industry leaders." },
                        { n: "Instagram", i: Instagram, c: "Daily Updates", d: "Behind the scenes at our printing labs." },
                        { n: "Facebook", i: Facebook, c: "Community Hub", d: "News and events for educators." }
                    ].map((sol, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.95} blur>
                            <div className="p-16 rounded-[4rem] bg-slate-50 border border-slate-100 text-center hover:bg-white hover:shadow-[0_50px_100px_rgba(0,0,0,0.06)] transition-all duration-700 group cursor-pointer hover:-translate-y-6">
                                <div className="w-24 h-24 bg-white rounded-[2.5rem] flex items-center justify-center mx-auto mb-12 shadow-2xl group-hover:bg-primary group-hover:text-white transition-all duration-700 group-hover:rotate-[360deg] group-hover:scale-110">
                                    <sol.i className="w-10 h-10" />
                                </div>
                                <h3 className="text-3xl font-outfit font-black text-slate-800 mb-4 tracking-tighter">{sol.n}</h3>
                                <p className="text-[10px] font-black text-secondary uppercase tracking-[0.4em] mb-8 opacity-40 group-hover:opacity-100 transition-opacity italic">{sol.c}</p>
                                <p className="text-slate-400 text-md leading-relaxed italic font-light max-w-[200px] mx-auto">{sol.d}</p>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Section>

            {/* NEW SECTION: Global Presence */}
            <Section className="bg-slate-900 text-white overflow-hidden relative py-48">
                <div className="absolute inset-0 opacity-[0.2] bg-[url('https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center mix-blend-overlay grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 opacity-95" />
                <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
                    <FadeIn direction="up" blur scale={0.9}>
                        <h2 className="text-5xl lg:text-9xl font-outfit font-black mb-24 leading-[0.8] tracking-tighter italic">Securing <br /><span className="text-secondary not-italic">Futures Globally.</span></h2>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
                            {[
                                { c: "250+", l: "Cities Reached" },
                                { c: "1.2M", l: "Cards Printed" },
                                { c: "12", l: "Awards Won" },
                                { c: "98%", l: "Client Retention" }
                            ].map((s, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -15 }}
                                    className="space-y-6 group"
                                >
                                    <p className="text-6xl lg:text-7xl font-black text-secondary tracking-tighter group-hover:scale-110 transition-transform duration-500">{s.c}</p>
                                    <div className="h-[1px] w-16 bg-white/10 mx-auto group-hover:w-24 group-hover:bg-secondary transition-all duration-500" />
                                    <p className="text-[11px] font-black uppercase tracking-[0.4em] opacity-20 text-white group-hover:opacity-100 transition-opacity italic">{s.l}</p>
                                </motion.div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* Map Section matching home high contrast */}
            <section className="h-[700px] w-full bg-slate-50 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/[0.03] group-hover:bg-primary/[0.06] transition-colors duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <FadeIn direction="none" blur scale={0.8}>
                        <div className="text-center relative">
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{ duration: 5, repeat: Infinity }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"
                            />
                            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 md:mb-12 shadow-[0_30px_80px_rgba(0,0,0,0.1)] relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 cursor-pointer">
                                <MapPin className="w-10 h-10 md:w-12 md:h-12 text-primary animate-bounce" />
                            </div>
                            <h3 className="text-2xl md:text-4xl font-outfit font-black text-primary/40 uppercase tracking-[0.4em] mb-4 md:mb-6 italic">Regional Headquarters</h3>
                            <p className="text-primary/20 font-black text-[9px] md:text-[11px] uppercase tracking-[0.4em] md:tracking-[0.6em] bg-primary/5 py-3 px-6 md:px-8 rounded-full border border-primary/10 w-fit mx-auto">Siliguri, West Bengal Office</p>
                        </div>
                    </FadeIn>
                </div>
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none bg-[radial-gradient(#002d62_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="absolute bottom-12 left-12 flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-primary/20 group-hover:text-primary/40 transition-colors">
                    <div className="w-10 h-[1px] bg-primary/10 group-hover:w-16 transition-all" />
                    <Globe size={16} />
                    <span>88.4236° E, 26.7271° N</span>
                </div>
            </section>
        </div>
    );
}
