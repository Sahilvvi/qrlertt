import { Hero } from "@/components/home/Hero";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { Features } from "@/components/home/Features";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { CTA } from "@/components/home/CTA";
import { Stats } from "@/components/home/Stats";
import { MobileAppShowcase } from "@/components/home/MobileAppShowcase";
import { IntegrationFlow } from "@/components/home/IntegrationFlow";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="bg-primary pt-12">
        {/* Value Props Bar */}
        <div className="container bg-white rounded-2xl shadow-xl py-10 px-8 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20 -mb-20 border border-slate-100 italic">
          {[
            { title: "Secure QR System", desc: "Military-grade encryption for every card." },
            { title: "In-House Manufacturing", desc: "Fast turnaround and high-quality printing." },
            { title: "Cloud-Based Dashboard", desc: "Manage your data from anywhere, anytime." },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 border-r last:border-0 border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <div className="w-6 h-6 bg-secondary rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-bold text-primary">{item.title}</h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-24">
        <ProblemSolution />
      </div>
      <Stats />
      <Features />
      <MobileAppShowcase />
      <HowItWorks />
      <IntegrationFlow />
      <Industries />
      <Testimonials />
      <FAQ />
      <div className="pb-32">
        <CTA />
      </div>
    </>
  );
}
