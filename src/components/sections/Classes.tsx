"use client";

import { buttonVariants } from "@/components/ui/Button";
import { ArrowRight, Calendar } from "lucide-react";
  return (
    <section id="classes" className="py-24 bg-muted/10 border-y border-muted/30 scroll-mt-16">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Training <span className="text-accent">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chechen Style Combat Sambo classes for adults and children. First lesson is £10 — returned to you upon signing the monthly membership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Adults */}
          <div className="group relative overflow-hidden rounded-2xl bg-background border border-muted/50 transition-all hover:border-accent shadow-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(229,57,53,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://countercombat.club/wp-content/uploads/2026/01/the-coach-team-e1768006174557.jpg')] bg-cover bg-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 grayscale mix-blend-luminosity" />
            
            <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[400px]">
              <div className="mb-2 bg-accent text-white text-xs font-bold font-display uppercase tracking-wider px-3 py-1 inline-flex w-fit rounded">
                Ages 16+
              </div>
              <h3 className="font-display font-bold text-3xl uppercase mb-3 text-white">Adult Sessions</h3>
              <p className="text-white/80 mb-8 line-clamp-2">
                Sambo, Combat Sambo and MMA training across five locations in the UK. Multiple sessions per week at the CCC MMA Academy.
              </p>
              
              <div className="flex gap-4">
                <a href="tel:+447435605543" className={buttonVariants({ variant: "default" })}>
                  Book Trial
                </a>
              </div>
            </div>
          </div>

          {/* Kids */}
          <div className="group relative overflow-hidden rounded-2xl bg-background border border-muted/50 transition-all hover:border-accent shadow-xl hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(229,57,53,0.3)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544367567-0f2fcb046eeb?q=80&w=2120&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 group-hover:opacity-60 transition-all duration-700 grayscale mix-blend-luminosity" />
            
            <div className="relative z-20 p-8 h-full flex flex-col justify-end min-h-[400px]">
              <div className="mb-2 bg-white text-black text-xs font-bold font-display uppercase tracking-wider px-3 py-1 inline-flex w-fit rounded">
                Ages 5-15
              </div>
              <h3 className="font-display font-bold text-3xl uppercase mb-3 text-white">Child Sessions</h3>
              <p className="text-white/80 mb-8 line-clamp-2">
                Every day except Monday at CCC MMA Academy. Build discipline, confidence, and respect in a safe, structured environment with DBS-cleared coaches.
              </p>
              
              <div className="flex gap-4">
                <a href="tel:+447435605543" className={buttonVariants({ variant: "default" })}>
                  Book Trial
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight flex items-center justify-center gap-3">
              <Calendar className="h-8 w-8 text-accent" />
              Class Timetable
            </h3>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-muted/30 hover:border-accent/30 transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://countercombat.club/wp-content/uploads/2026/01/IMG-20260109-WA0019.jpg" 
              alt="Counter Combat Club Timetable" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Pricing */}
          <div className="text-center mt-16">
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-8">
              Monthly <span className="text-accent">Pricing</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto overflow-hidden">
              <div className="p-6 rounded-xl border border-muted/50 bg-background hover:border-accent transition-all shadow-lg hover:shadow-[0_0_20px_rgba(229,57,53,0.3)] hover:-translate-y-2">
                <p className="text-3xl font-bold font-display text-foreground">£45</p>
                <p className="text-sm text-muted-foreground mt-1">Per Month</p>
                <p className="text-sm text-foreground/80 font-medium mt-3">2 Sessions per Week</p>
              </div>
              <div className="p-6 rounded-xl border border-accent/40 bg-accent/5 hover:border-accent/80 transition-all relative sm:scale-105 shadow-[0_0_15px_rgba(229,57,53,0.15)] hover:shadow-[0_0_30px_rgba(229,57,53,0.4)] z-10 hover:scale-110">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold font-display uppercase tracking-wider px-3 py-1 rounded">Popular</div>
                <p className="text-3xl font-bold font-display text-foreground">£55</p>
                <p className="text-sm text-muted-foreground mt-1">Per Month</p>
                <p className="text-sm text-foreground/80 font-medium mt-3">3 Sessions per Week</p>
              </div>
              <div className="p-6 rounded-xl border border-muted/50 bg-background hover:border-accent transition-all shadow-lg hover:shadow-[0_0_20px_rgba(229,57,53,0.3)] hover:-translate-y-2">
                <p className="text-3xl font-bold font-display text-foreground">£65</p>
                <p className="text-sm text-muted-foreground mt-1">Per Month</p>
                <p className="text-sm text-foreground/80 font-medium mt-3">Unlimited Sessions + Gym Use</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
