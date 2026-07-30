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
          <div className="max-w-6xl mx-auto overflow-x-auto">
            <div className="grid grid-cols-7 gap-1.5 min-w-[640px]">
              {[
                {
                  day: "Mon",
                  full: "Monday",
                  sessions: [
                    { label: "Oxford Mosque", time: "7:30–8:30 pm", type: "oxford" },
                  ]
                },
                {
                  day: "Tue",
                  full: "Tuesday",
                  sessions: [
                    { label: "Fighters Class", time: "1:30–2:30 pm", type: "fighters" },
                    { label: "Kids Kickboxing", time: "6:00–7:00 pm", type: "kids" },
                    { label: "Adults Kickboxing", time: "7:00–8:30 pm", type: "adults" },
                    { label: "Fighters Class", time: "8:30–9:30 pm", type: "fighters" },
                    { label: "Leicester", time: "7:00–8:30 pm", type: "oxford" },
                  ]
                },
                {
                  day: "Wed",
                  full: "Wednesday",
                  sessions: [
                    { label: "Womens Class", time: "1:15–2:15 pm", type: "womens" },
                    { label: "Womens Class", time: "3:45–4:45 pm", type: "womens" },
                    { label: "Kids Boxing", time: "5:00–6:00 pm", type: "kids" },
                    { label: "Kids Sambo", time: "6:00–7:00 pm", type: "kids" },
                    { label: "Adults Sambo", time: "7:00–8:30 pm", type: "adults" },
                    { label: "Fighters Class", time: "8:30–9:30 pm", type: "fighters" },
                    { label: "BMAC", time: "4:30–5:30 pm", type: "oxford" },
                  ]
                },
                {
                  day: "Thu",
                  full: "Thursday",
                  sessions: [
                    { label: "Fighters Class", time: "1:30–2:30 pm", type: "fighters" },
                    { label: "Kids Kickboxing", time: "6:00–7:00 pm", type: "kids" },
                    { label: "Adults Kickboxing", time: "7:00–8:30 pm", type: "adults" },
                    { label: "Fighters Class", time: "8:30–9:30 pm", type: "fighters" },
                    { label: "Leicester", time: "7:00–8:30 pm", type: "oxford" },
                  ]
                },
                {
                  day: "Fri",
                  full: "Friday",
                  sessions: [
                    { label: "Fighters Class", time: "1:30–2:30 pm", type: "fighters" },
                    { label: "Kids Boxing", time: "5:00–6:00 pm", type: "kids" },
                    { label: "Kids Sambo", time: "6:00–7:00 pm", type: "kids" },
                    { label: "Adults Sambo", time: "7:00–8:30 pm", type: "adults" },
                    { label: "Fighters Class", time: "8:30–9:30 pm", type: "fighters" },
                    { label: "BMAC", time: "4:30–5:30 pm", type: "oxford" },
                    { label: "Oxford Mosque", time: "7:30–8:30 pm", type: "oxford" },
                  ]
                },
                {
                  day: "Sat",
                  full: "Saturday",
                  sessions: [
                    { label: "Womens Class", time: "11:00 am–12:00 pm", type: "womens" },
                    { label: "Adults MMA", time: "1:00–2:30 pm", type: "adults" },
                    { label: "Adults Sambo", time: "2:30–3:30 pm", type: "adults" },
                    { label: "Kids Sambo", time: "3:30–4:30 pm", type: "kids" },
                    { label: "Kids MMA", time: "4:30–5:30 pm", type: "kids" },
                    { label: "Kids Freestyle", time: "5:30–6:30 pm", type: "kids" },
                    { label: "Adults Freestyle", time: "6:30–7:30 pm", type: "adults" },
                    { label: "Adults Boxing", time: "7:30–9:00 pm", type: "adults" },
                  ]
                },
                {
                  day: "Sun",
                  full: "Sunday",
                  sessions: [
                    { label: "Adults MMA", time: "1:00–2:30 pm", type: "adults" },
                    { label: "Adults Sambo", time: "2:30–3:30 pm", type: "adults" },
                    { label: "Kids Sambo", time: "3:30–4:30 pm", type: "kids" },
                    { label: "Kids MMA", time: "4:30–5:30 pm", type: "kids" },
                    { label: "Kids Freestyle", time: "5:30–6:30 pm", type: "kids" },
                    { label: "Adults Freestyle", time: "6:30–7:30 pm", type: "adults" },
                    { label: "Adults Boxing", time: "7:30–9:00 pm", type: "adults" },
                  ]
                },
              ].map((day) => (
                <div key={day.day} className="flex flex-col gap-1.5">
                  {/* Day Header */}
                  <div className="text-center py-2.5 px-1 rounded-lg font-display font-bold uppercase tracking-widest bg-accent/10 border border-accent/20 text-accent">
                    <span className="block text-base leading-none">{day.day}</span>
                    <span className="hidden sm:block text-[9px] opacity-60 mt-0.5">{day.full}</span>
                  </div>
                  {/* Sessions */}
                  <div className="flex flex-col gap-1">
                    {day.sessions.map((session, i) => {
                      const styles: Record<string, string> = {
                        fighters: "bg-red-900/30 border-red-500/30 text-red-200",
                        womens:   "bg-pink-900/30 border-pink-500/30 text-pink-200",
                        kids:     "bg-amber-900/30 border-amber-500/30 text-amber-200",
                        adults:   "bg-blue-900/30 border-blue-500/30 text-blue-200",
                        oxford:   "bg-purple-900/20 border-purple-500/20 text-purple-300",
                      };
                      const labelStyles: Record<string, string> = {
                        fighters: "text-red-400",
                        womens:   "text-pink-400",
                        kids:     "text-amber-400",
                        adults:   "text-blue-400",
                        oxford:   "text-purple-400",
                      };
                      return (
                        <div key={i} className={`rounded-md p-1.5 border text-[9px] leading-tight ${styles[session.type]}`}>
                          <div className={`font-bold font-display uppercase tracking-wide mb-0.5 ${labelStyles[session.type]}`}>
                            {session.label}
                          </div>
                          <div className="flex items-center gap-0.5 opacity-75">
                            <Clock className="h-2 w-2 flex-shrink-0" />
                            <span>{session.time}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
              {[
                { label: "Fighters", cls: "bg-red-900/40 border-red-500/30" },
                { label: "Womens", cls: "bg-pink-900/40 border-pink-500/30" },
                { label: "Kids", cls: "bg-amber-900/40 border-amber-500/30" },
                { label: "Adults", cls: "bg-blue-900/40 border-blue-500/30" },
                { label: "Other Locations", cls: "bg-purple-900/40 border-purple-500/30" },
              ].map(({ label, cls }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className={`h-3 w-3 rounded border inline-block ${cls}`}></span>
                  {label}
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-3">
              All CCC HQ sessions at 598 Coventry Rd, Small Heath, Birmingham B10 0US
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
