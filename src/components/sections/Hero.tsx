"use client";

import { buttonVariants } from "@/components/ui/Button";
import { Phone, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background z-20" />
        {/* Grayscale overlay for blend effect — static, no repaint */}
        <div className="absolute inset-0 bg-background/30 mix-blend-color z-[5]" />
        <motion.div
          initial={{ scale: 1.4, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 z-0"
        >
          <Image
            src="/hd_sambo_hero.png"
            alt=""
            fill
            priority
            className="object-cover object-center grayscale"
            sizes="100vw"
          />
        </motion.div>
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
        
        <motion.div 
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "circOut", delay: 0.5 }}
        >
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl font-medium drop-shadow-md leading-relaxed border-l-4 border-accent pl-4 py-1 bg-gradient-to-r from-black/60 to-transparent">
            The UK's Only Coaching Team Built by World Champions and <span className="text-accent font-bold">Psychological Professionals</span>.
            <span className="text-sm opacity-90 block mt-4">We don't just build physical champions. Through expert psychological coaching, we cultivate unshakeable discipline, emotional regulation, and elite mental resilience in every student.</span>
          </p>
        </motion.div>

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
