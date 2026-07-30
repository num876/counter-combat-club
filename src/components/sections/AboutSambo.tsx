"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function AboutSambo() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden relative">
      <div className="container">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="max-w-3xl mx-auto text-center mb-20 relative z-10"
        >
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-6 text-foreground drop-shadow-lg">
            The Ultimate <span className="text-accent">Combat System</span>
          </h2>
          <p className="text-foreground/90 text-lg md:text-xl font-medium leading-relaxed drop-shadow-md">
            Sambo (са́мбо) translates to "self-defence without weapons." Forged by combining the most devastating techniques from the world's leading martial arts, it is arguably the most complete and effective combat system on the planet. Whether your goal is real-world self-defense, elite competition, or physical mastery, Sambo equips you with the tools to dominate.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto"
        >
          {/* Sport Sambo */}
          <div className="p-8 rounded-2xl bg-muted/20 border border-muted/50 hover:border-accent/30 transition-colors">
            <h3 className="font-display font-bold text-2xl uppercase mb-4 text-foreground flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-white/40"></span>
              Sport Sambo
            </h3>
            <p className="text-muted-foreground mb-6">
              Sambo has two traditional training methods — one with a belt system and one without (simply blue and red belt). Sport Sambo focuses on throws, holds, and submissions in a fast-paced grappling format.
            </p>
            <ul className="space-y-2 text-sm text-foreground font-medium">
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Throws & Takedowns</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Fast-paced Grappling</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Advanced Leg Locks</li>
            </ul>
          </div>

          {/* Combat Sambo */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/20 hover:border-accent/50 transition-colors relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 font-display font-bold text-6xl pointer-events-none">
              MMA
            </div>
            <h3 className="font-display font-bold text-2xl uppercase mb-4 text-accent flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-accent"></span>
              Combat Sambo
            </h3>
            <p className="text-white/80 mb-6 group-hover:text-white transition-colors flex-grow">
              A hybrid striking and grappling system where virtually every technique is permitted. This is the ultimate proving ground for mixed martial artists. Training focuses on seamless transitions between heavy striking, clinch work, and fight-ending submissions.
            </p>
            <ul className="space-y-2 text-sm text-foreground font-medium">
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Full Contact Striking</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Chokes & Submissions</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> No-Holds-Barred Combat</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
