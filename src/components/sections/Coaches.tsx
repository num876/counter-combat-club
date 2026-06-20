"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Coaches() {
  const coaches = [
    {
      name: "Dr. Renato Rustam P.",
      title: "Combat Sambo / MMA Coach",
      bio: "From Chechnya. 9× MMA/Combat Sambo World Champion WCF. 11× European Champion. Kavkaz Cup Champion. Multiple Times National Champion.",
      image: "/renato.jpg"
    },
    {
      name: "Givi Shariashvili",
      title: "Judo / Sambo",
      bio: "From Georgia. 5× World Champion of Sambo and Judo. Russian Champion. Georgian Champion. British Champion.",
      image: "/givi.jpg"
    },
    {
      name: "Muhammad Shariq Hussain",
      title: "Combat Sambo / MMA",
      bio: "From UK. Multiple times British Champion.",
      image: "/coach-shariq.jpg"
    },
    {
      name: "Musa Hussain",
      title: "Boxing",
      bio: "British Boxing Champion.",
      image: "/musa.jpg"
    },
    {
      name: "Tamim Al Kubati",
      title: "Taekwondo / Karate",
      bio: "5× World Champion. Olympic Silver Medalist.",
      image: "/tamim.jpg"
    },
    {
      name: "Salman Malitsaev",
      title: "Wrestling",
      bio: "From Chechnya. 11× Chechen Champion. Multiple times Russian Master Champion. Multiple times British Champion.",
      image: "/salman.png"
    },
    {
      name: "Paul Timmins",
      title: "Combat Sambo / Boxing",
      bio: "Irish/British. British Champion. Irish Champion.",
      image: "/paul.png"
    },
    {
      name: "Sadia Hussain",
      title: "Japanese Jiu Jitsu",
      bio: "From UK. Black Belt.",
      image: "/sadia.jpg"
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-background scroll-mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
              className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4"
            >
              Meet The <span className="text-accent">Champions</span>
            </motion.h2>
            <p className="text-muted-foreground text-lg">
              All coaches hold Enhanced DBS clearance, are Safeguarding certified, First Aid for Sport qualified, and carry International Professional Instructor ID cards.
            </p>
          </div>
          <a href="/coaches" className="inline-flex items-center gap-2 font-display uppercase tracking-widest font-bold text-accent hover:text-accent-hover transition-colors whitespace-nowrap">
            Full Roster <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {coaches.map((coach, index) => (
            <motion.div 
              key={index} 
              variants={{
                hidden: { opacity: 0, y: 100, scale: 0.8 },
                show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", bounce: 0.5 } }
              }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="group relative overflow-hidden rounded-xl bg-muted/20 border border-muted/50 hover:border-accent shadow-lg hover:shadow-[0_0_30px_rgba(229,57,53,0.5)] transition-all duration-300 z-10 hover:z-20"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="object-cover object-top w-full h-full grayscale group-hover:grayscale-0 transition-transform duration-700 ease-out group-hover:scale-[1.2] mix-blend-luminosity group-hover:mix-blend-normal"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="text-accent font-display text-sm uppercase tracking-widest font-bold mb-1 transform transition-all duration-500 group-hover:scale-105 origin-left">
                    {coach.title}
                  </div>
                  <h3 className="font-display font-bold text-lg sm:text-2xl uppercase text-foreground mb-2 drop-shadow-md">
                    {coach.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2 transition-colors duration-300 group-hover:text-foreground/90">
                    {coach.bio}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
