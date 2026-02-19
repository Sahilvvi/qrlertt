"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { PageHero } from "@/components/ui/PageHero";
import { Section, FadeIn } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Calendar, User, ArrowRight, Tag, Bookmark, Play, Download, Search, Globe, Shield } from "lucide-react";

const posts = [
    {
        title: "How QR Technology is Revolutionizing Campus Security in 2026",
        excerpt: "Discover the shift from traditional plastic cards to smart encrypted QR systems and what it means for student safety.",
        date: "Feb 12, 2026",
        author: "Admin",
        tag: "Technology",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Top 5 Benefits of Automating Student Attendance via Smart IDs",
        excerpt: "Manual attendance is a thing of the past. Learn how smart IDs can save your institution thousands of hours.",
        date: "Feb 05, 2026",
        author: "Security Expert",
        tag: "Efficiency",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Protecting Student Privacy in the Age of Digital Identity",
        excerpt: "We dive deep into the encryption standards used by QRlert to ensure that student data remains private and secure.",
        date: "Jan 28, 2026",
        author: "Cyber Specialist",
        tag: "Privacy",
        image: "https://images.unsplash.com/photo-1614064641935-447607e2c07a?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "The Environmental Impact of Reusable vs Single-Use ID Cards",
        excerpt: "Thinking green for your school? Here is why a smart ID system is the most sustainable choice for long-term use.",
        date: "Jan 15, 2026",
        author: "Green Leader",
        tag: "Sustainability",
        image: "https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Scaling Identity Management for Large Universities",
        excerpt: "Learn how to manage identity for over 50,000 students across multiple campuses with a single unified dashboard.",
        date: "Jan 10, 2026",
        author: "Project Lead",
        tag: "Scalability",
        image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800"
    },
    {
        title: "Future of Biometric Tags and QR Core Integration",
        excerpt: "Exploring the hybrid approach where biometric data meets encrypted QR scanning for ultra-high security areas.",
        date: "Jan 02, 2026",
        author: "Tech Researcher",
        tag: "Innovation",
        image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=800"
    }
];

export default function BlogPage() {
    return (
        <div className="bg-white">
            <PageHero
                subtitle="Insights & Updates"
                title={<>Thinking Forward in <br /><span className="text-secondary">Security & Tech.</span></>}
                description="Stay ahead of the curve with our latest articles on institutional security, QR technology, and campus management."
            />

            {/* NEW SECTION: Blog Topics Bar */}
            <div className="container relative z-30 -mt-16">
                <div className="bg-white p-4 rounded-3xl shadow-2xl border border-slate-100 flex flex-wrap justify-center gap-4">
                    {[
                        { n: "Encryption", i: Shield },
                        { n: "Global Trends", i: Globe },
                        { n: "Tech Stack", i: Bookmark },
                        { n: "Future Tech", i: Search }
                    ].map((topic, i) => (
                        <button key={i} className="flex items-center gap-3 px-6 py-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                            <topic.i className="w-5 h-5 text-secondary group-hover:scale-110 transition-transform" />
                            <span className="font-black text-xs uppercase tracking-widest text-slate-800">{topic.n}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Featured Post overlap matching home/product style */}
            <Section className="bg-white pt-24 relative z-20">
                <FadeIn scale={0.95} blur>
                    <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 group cursor-pointer relative">
                        <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="p-12 lg:p-16 flex flex-col justify-center relative z-10">
                                <motion.span
                                    whileHover={{ scale: 1.05, x: 5 }}
                                    className="bg-secondary text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 inline-block w-fit shadow-xl"
                                >
                                    Featured Insight
                                </motion.span>
                                <h2 className="text-4xl lg:text-5xl font-outfit font-black mb-8 leading-tight text-white group-hover:text-secondary transition-colors">Implementing Smart IDs: A Guide for <br /><span className="text-secondary italic">Higher Education.</span></h2>
                                <p className="text-lg text-white/60 mb-10 max-w-xl font-light leading-relaxed">A comprehensive breakdown of the transition from legacy systems to QR-based identity management in university campuses.</p>
                                <div className="flex items-center gap-6 text-sm text-white/40">
                                    <div className="flex items-center gap-2 font-bold hover:text-white transition-colors"><User className="w-4 h-4 text-secondary" /> <span>Dr. James Wilson</span></div>
                                    <div className="flex items-center gap-2 font-bold"><Calendar className="w-4 h-4 text-secondary" /> <span>Feb 15, 2026</span></div>
                                </div>
                            </div>
                            <div className="aspect-square lg:aspect-auto overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" alt="Blog Featured" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-1000" />
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Section>

            <Section className="bg-white">
                <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 text-center md:text-left">
                    <FadeIn direction="right" blur scale={0.9}>
                        <h2 className="text-4xl lg:text-5xl font-outfit font-black text-slate-800">Latest <span className="text-primary italic">News.</span></h2>
                    </FadeIn>
                    <FadeIn direction="left">
                        <div className="flex gap-3 overflow-x-auto pb-4 max-w-full">
                            {["All Posts", "Technology", "Efficiency", "Security", "Sustainability"].map((cat, i) => (
                                <motion.button
                                    key={cat}
                                    whileHover={{ y: -5 }}
                                    className={`px-6 py-2.5 rounded-full whitespace-nowrap text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-sm ${i === 0 ? "bg-primary text-white shadow-xl shadow-primary/20" : "bg-slate-50 text-slate-400 hover:bg-white hover:text-primary hover:shadow-md"}`}
                                >
                                    {cat}
                                </motion.button>
                            ))}
                        </div>
                    </FadeIn>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {posts.map((post, i) => (
                        <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.95}>
                            <div className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col hover:-translate-y-4 duration-500">
                                <div className="aspect-[16/10] overflow-hidden relative">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                    <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] text-primary flex items-center gap-2 shadow-2xl">
                                        <Tag className="w-3 h-3 text-secondary" />
                                        {post.tag}
                                    </div>
                                </div>
                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex items-center gap-4 text-[10px] text-slate-400 font-black uppercase tracking-[0.25em] mb-6">
                                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-secondary" /> {post.date}</span>
                                    </div>
                                    <h3 className="text-2xl font-outfit font-black text-slate-800 mb-6 group-hover:text-primary transition-colors leading-snug">{post.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1 font-light italic">{post.excerpt}</p>
                                    <Link href="#" className="flex items-center gap-3 text-primary font-black text-[11px] uppercase tracking-[0.25em] group/link mt-auto">
                                        <span className="relative pb-1">
                                            Full Article
                                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-secondary group-hover/link:w-full transition-all duration-300" />
                                        </span>
                                        <ArrowRight className="w-4 h-4 group-hover/link:translate-x-3 transition-transform text-secondary" />
                                    </Link>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <FadeIn direction="up" scale={0.9} blur>
                        <Button variant="outline" size="lg" className="px-16 h-16 rounded-full border-slate-200 text-slate-400 hover:text-primary hover:border-primary font-black uppercase tracking-widest text-xs transition-all hover:bg-slate-50">
                            Explore Archive
                        </Button>
                    </FadeIn>
                </div>
            </Section>

            {/* NEW SECTION: Video/Podcast Series */}
            <Section className="bg-primary text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-secondary/5 skew-x-[-15deg] translate-x-20 pointer-events-none" />
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:30px_30px]" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center container">
                    <FadeIn direction="right">
                        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full mb-8">
                            <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                            <span className="text-[10px] font-black uppercase tracking-widest text-secondary">New Series</span>
                        </div>
                        <h2 className="text-4xl lg:text-7xl font-outfit font-black mb-8 leading-[0.9] tracking-tighter">QrLert <br /><span className="text-secondary italic">Safety Briefings.</span></h2>
                        <p className="text-xl text-white/40 mb-12 max-w-lg font-light leading-relaxed">Watch our weekly video series where we break down complex security concepts for institutional administrators.</p>
                        <Button size="lg" className="bg-secondary text-primary hover:bg-white flex items-center gap-4 px-12 h-16 rounded-full font-black text-xs uppercase tracking-widest shadow-2xl group">
                            <Play className="w-5 h-5 fill-current group-hover:scale-125 transition-transform" />
                            <span>Watch Episode</span>
                        </Button>
                    </FadeIn>
                    <FadeIn direction="left" blur scale={0.9}>
                        <div className="relative rounded-[4rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border-[12px] border-white/5 aspect-video group cursor-pointer">
                            <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" alt="Podcast" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-[2s]" />
                            <div className="absolute inset-0 bg-primary/40 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="w-24 h-24 bg-secondary text-primary rounded-full flex items-center justify-center shadow-2xl relative"
                                >
                                    <div className="absolute inset-0 rounded-full bg-secondary animate-ping opacity-25" />
                                    <Play className="w-10 h-10 ml-1.5 fill-current" />
                                </motion.div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>

            {/* NEW SECTION: Resource Center */}
            <Section className="bg-white overflow-hidden relative">
                <div className="absolute top-[10%] left-[-5%] w-64 h-64 bg-slate-50 rounded-full blur-3xl pointer-events-none opacity-50" />
                <div className="container relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:20 gap-8">
                        <div>
                            <FadeIn direction="right">
                                <h4 className="text-secondary font-black uppercase tracking-[0.25em] text-[10px] mb-4">Library</h4>
                                <h2 className="text-4xl md:text-5xl lg:text-7xl font-outfit font-black leading-[0.9] tracking-tighter">Resource <br /><span className="text-primary italic">Download Center.</span></h2>
                            </FadeIn>
                        </div>
                        <FadeIn direction="left">
                            <Button variant="outline" className="border-slate-200 h-14 rounded-2xl px-8 font-black text-xs uppercase tracking-widest hover:bg-slate-50 w-full md:w-auto">View All Resources</Button>
                        </FadeIn>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { t: "Institutional Security Guide 2026", type: "PDF", size: "4.2 MB" },
                            { t: "QR Deployment Checklist", type: "Docs", size: "1.1 MB" },
                            { t: "Privacy Compliance Whitepaper", type: "PDF", size: "2.8 MB" }
                        ].map((res, i) => (
                            <FadeIn key={i} delay={i * 0.1} direction="up" scale={0.95}>
                                <div className="p-10 rounded-[2.5rem] border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-2xl transition-all flex justify-between items-center group cursor-pointer duration-500">
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-secondary mb-2 tracking-[0.2em]">{res.type} • {res.size}</p>
                                        <h4 className="font-bold text-slate-800 text-lg leading-tight group-hover:text-primary transition-colors">{res.t}</h4>
                                    </div>
                                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all cursor-pointer shadow-xl group-hover:scale-110">
                                        <Download className="w-6 h-6" />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-slate-50 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#00cccc_1px,transparent_1px),linear-gradient(to_bottom,#00cccc_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="max-w-5xl mx-auto relative z-10">
                    <FadeIn scale={0.9} blur direction="none">
                        <div className="bg-primary rounded-[4rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.3)]">
                            <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-secondary opacity-10 blur-[130px] rounded-full pointer-events-none" />
                            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-600 opacity-10 blur-[130px] rounded-full pointer-events-none" />

                            <div className="relative z-10 space-y-10">
                                <h3 className="text-4xl lg:text-7xl font-outfit font-black leading-[0.9] tracking-tighter">Secure Your <br /><span className="text-secondary italic">Inbox Insight.</span></h3>
                                <p className="text-xl text-white/40 max-w-xl mx-auto font-light leading-relaxed italic">Join 10,000+ professionals receiving our monthly digest on smart campus security technology.</p>
                                <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto pt-8">
                                    <input
                                        type="email"
                                        placeholder="Your work email"
                                        className="flex-[2] px-8 md:px-10 py-5 md:py-6 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 focus:outline-none focus:ring-4 focus:ring-secondary/20 placeholder:text-white/20 text-white font-black text-[10px] md:text-xs uppercase tracking-widest"
                                    />
                                    <Button size="lg" className="flex-1 h-16 md:h-20 rounded-2xl md:rounded-3xl bg-secondary text-primary hover:bg-white transition-all transform active:scale-95 text-[10px] md:text-xs font-black uppercase tracking-widest shadow-2xl">
                                        Subscribe Now
                                    </Button>
                                </form>
                                <p className="text-[10px] text-white/20 uppercase font-bold tracking-[0.3em]">No spam • 100% Secure • Unsubscribe anytime</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </Section>
        </div>
    );
}
