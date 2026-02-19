"use client";

import React from "react";
import { Section, FadeIn } from "../ui/Section";
import { Button } from "../ui/Button";

export const CTA = () => {
    return (
        <div className="container relative z-10 mb-[-100px]">
            <FadeIn>
                <div className="bg-gradient-navy rounded-[2rem] p-10 lg:p-20 text-center shadow-2xl overflow-hidden relative border border-white/10">
                    {/* Abstract circles */}
                    <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-outfit font-bold text-white leading-[1.1]">
                            Secure Your Campus with <br />
                            <span className="text-secondary">QRlert Today.</span>
                        </h2>
                        <p className="text-xl text-white/70">
                            Join 500+ institutions that have already upgraded to a smarter,
                            more secure identity management system.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 pt-4">
                            <Button size="lg" className="px-12 bg-white text-primary hover:bg-slate-100">
                                Schedule Consultation
                            </Button>
                            <Button variant="outline" size="lg" className="px-12 border-white/20 text-white hover:bg-white/10">
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
};
