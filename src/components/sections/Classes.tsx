"use client";

import { buttonVariants } from "@/components/ui/Button";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" as const } },
};

export function Classes() {
  return (
    <section id="classes" className="py-24 bg-muted/10 border-y border-muted/30 scroll-mt-16">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Training <span className="text-accent">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Chechen Style Combat Sambo classes for adults and children. Your first lesson is just £10 — fully refunded when you sign up.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
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
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight flex items-center justify-center gap-3">
              <Calendar className="h-8 w-8 text-accent" />
              Class Timetable
            </h3>
          </div>
          {/* Dynamic Timetable */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-7 gap-2">
              {[
                {
                  day: "Mon",
                  full: "Monday",
                  sessions: [
                    { venue: "Oxford Mosque", city: "Oxford", time: "7:30–8:30 pm", type: "Sambo" }
                  ]
                },
                {
                  day: "Tue",
                  full: "Tuesday",
                  sessions: [
                    { venue: "CCC HQ", city: "Birmingham", time: "See HQ", type: "All Classes" },
                    { venue: "Mubashirun Centre", city: "Leicester", time: "7:00–8:30 pm", type: "Sambo/MMA" }
                  ]
                },
                {
                  day: "Wed",
                  full: "Wednesday",
                  sessions: [
                    { venue: "CCC HQ", city: "Birmingham", time: "See HQ", type: "All Classes" },
                    { venue: "BMAC", city: "Birmingham", time: "4:30–5:30 pm", type: "Sambo" }
                  ]
                },
                {
                  day: "Thu",
                  full: "Thursday",
                  sessions: [
                    { venue: "CCC HQ", city: "Birmingham", time: "See HQ", type: "All Classes" },
                    { venue: "Mubashirun Centre", city: "Leicester", time: "7:00–8:30 pm", type: "Sambo/MMA" }
                  ]
                },
                {
                  day: "Fri",
                  full: "Friday",
                  sessions: [
                    { venue: "CCC HQ", city: "Birmingham", time: "See HQ", type: "All Classes" },
                    { venue: "BMAC", city: "Birmingham", time: "4:30–5:30 pm", type: "Sambo" },
                    { venue: "Oxford Mosque", city: "Oxford", time: "7:30–8:30 pm", type: "Sambo" }
                  ]
                },
                {
                  day: "Sat",
                  full: "Saturday",
                  sessions: [
                    { venue: "CCC HQ", city: "Birmingham", time: "See HQ", type: "All Classes" }
                  ]
                },
                {
                  day: "Sun",
                  full: "Sunday",
                  sessions: [
                    { venue: "CCC HQ", city: "Birmingham", time: "See HQ", type: "All Classes" }
                  ]
                }
              ].map((day) => (
                <div key={day.day} className="flex flex-col gap-2">
                  {/* Day Header */}
                  <div className={`text-center py-3 px-1 rounded-lg font-display font-bold text-xs uppercase tracking-widest ${
                    day.sessions.some(s => s.city === "Oxford") && day.sessions.length === 1
                      ? "bg-purple-900/40 border border-purple-500/30 text-purple-300"
                      : "bg-accent/10 border border-accent/20 text-accent"
                  }`}>
                    <span className="block text-lg leading-none mb-0.5">{day.day}</span>
                    <span className="hidden sm:block text-[9px] opacity-60">{day.full}</span>
                  </div>
                  {/* Sessions */}
                  <div className="flex flex-col gap-1.5">
                    {day.sessions.map((session, i) => (
                      <div
                        key={i}
                        className={`rounded-lg p-2 border text-[10px] leading-tight ${
                          session.city === "Oxford"
                            ? "bg-purple-900/20 border-purple-500/20 text-purple-200"
                            : session.venue === "CCC HQ"
                            ? "bg-accent/10 border-accent/20 text-white"
                            : "bg-muted/20 border-muted/40 text-muted-foreground"
                        }`}
                      >
                        <div className={`font-bold font-display uppercase tracking-wide truncate mb-0.5 ${
                          session.city === "Oxford" ? "text-purple-300" : session.venue === "CCC HQ" ? "text-accent" : "text-foreground/80"
                        }`}>
                          {session.venue}
                        </div>
                        <div className="flex items-center gap-0.5 opacity-80">
                          <Clock className="h-2 w-2 flex-shrink-0" />
                          <span className="truncate">{session.time}</span>
                        </div>
                        <div className="mt-0.5 opacity-60 truncate">{session.type}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded bg-accent/30 border border-accent/40 inline-block"></span>
                Birmingham (CCC HQ)
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded bg-muted/40 border border-muted/50 inline-block"></span>
                Birmingham (BMAC)
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-3 w-3 rounded bg-purple-900/40 border border-purple-500/30 inline-block"></span>
                Leicester &amp; Oxford
              </div>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4">
              * CCC HQ (598 Coventry Rd, B10 0US) runs sessions every day except Monday. Contact us for exact daily times.
            </p>
          </div>

          {/* Pricing */}
          <div className="text-center mt-16">
            <h3 className="font-display font-bold text-3xl uppercase tracking-tight mb-8">
              Monthly <span className="text-accent">Pricing</span>
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto py-8 px-4">
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
        </motion.div>
      </div>
    </section>
  );
}
