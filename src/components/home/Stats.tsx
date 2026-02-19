"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Scan, ShieldCheck, Award } from "lucide-react";

const stats = [
    { label: "Active Institutions", value: "500+", icon: Users, color: "bg-blue-500" },
    { label: "Daily ID Scans", value: "250K+", icon: Scan, color: "bg-secondary" },
    { label: "Uptime Guaranteed", value: "99.9%", icon: ShieldCheck, color: "bg-green-500" },
    { label: "Security Awards", value: "12", icon: Award, color: "bg-purple-500" },
];

export const Stats = () => {
    return (
        <section className="py-24 bg-slate-50 overflow-hidden">
            <div className="container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all group group-hover:-translate-y-2"
                        >
                            <div className={`${stat.color} w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-4xl font-outfit font-black text-primary mb-2 tracking-tight">{stat.value}</h3>
                            <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
