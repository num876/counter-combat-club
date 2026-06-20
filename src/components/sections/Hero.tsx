"use client";

import { buttonVariants } from "@/components/ui/Button";
import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background with placeholder overlay for future image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/80 to-background">
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply z-10" />
        {/* HD Sambo Background with intense zoom-out effect */}
        <motion.div 
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-[url('/hd_sambo_hero.png')] bg-cover bg-center grayscale mix-blend-luminosity z-0" 
        />
      </div>

      <div className="container relative z-10 pt-20 pb-32 text-center md:text-left flex flex-col md:items-start items-center">
        <motion.div 
          initial={{ x: -100, opacity: 0, skewX: -20 }}
          animate={{ x: 0, opacity: 1, skewX: 0 }}
          transition={{ duration: 0.6, ease: "circOut", delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Sambo • Combat Sambo • MMA
        </motion.div>

        <motion.h1 
          initial={{ y: 50, opacity: 0, scale: 0.9 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.4 }}
          className="font-display font-bold text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase leading-[0.9] mb-6 text-foreground drop-shadow-lg"
        >
          Where <span className="text-accent">Champions</span><br />
          Are Made
        </motion.h1>
        
        <motion.p 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "circOut", delay: 0.5 }}
          className="max-w-2xl text-lg sm:text-xl text-foreground/90 font-medium mb-10 text-pretty md:text-left drop-shadow-md"
        >
          The UK's Only Coaching Team Built by World Champions and Psychological Professionals. Train at the highest level in Small Heath, Birmingham.
        </motion.p>

        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "backOut", delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="https://wa.me/447435605543"
            className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto gap-2 shadow-[0_0_20px_rgba(229,57,53,0.3)] hover:shadow-[0_0_30px_rgba(229,57,53,0.6)] transition-shadow text-lg" })}
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-5 w-5" />
            WhatsApp / Call Now
          </a>
          <a
            href="#classes"
            className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto gap-2 bg-background/50 backdrop-blur hover:bg-background/80" })}
          >
            View Classes
            <ArrowDown className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
