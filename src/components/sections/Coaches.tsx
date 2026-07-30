"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export function Coaches() {
  const coaches = [
    {
      name: "Dr. Renato Rustam P.",
      title: "Combat Sambo / MMA Coach",
      bio: "Hailing from Chechnya, Dr. Renato is a 9× MMA and Combat Sambo World Champion. With 11 European Championship titles to his name, he brings an unmatched level of elite competitive experience to the mats.",
      image: "/renato.jpg"
    },
    {
      name: "Givi Shariashvili",
      title: "Judo / Sambo",
      bio: "A legendary grappler from Georgia, Givi is a 5× World Champion in both Sambo and Judo. His absolute mastery of the sport has earned him National Championship titles across Russia, Georgia, and the UK.",
      image: "/givi.jpg"
    },
    {
      name: "Muhammad Shariq Hussain",
      title: "Combat Sambo / MMA",
      bio: "A multiple-time British Champion, Muhammad combines explosive striking with suffocating grappling. He has built a reputation across the UK for producing dominant fighters.",
      image: "/coach-shariq.jpg"
    },
    {
      name: "Musa Hussain",
      title: "Boxing",
      bio: "A highly decorated British Boxing Champion, Musa specializes in elite striking mechanics, footwork, and devastating knockout power.",
      image: "/musa.jpg"
    },
    {
      name: "Tamim Al Kubati",
      title: "Taekwondo / Karate",
      bio: "An Olympic Silver Medalist and 5× World Champion, Tamim brings world-class precision, speed, and elite-level traditional martial arts pedigree to the striking program.",
      image: "/tamim.jpg"
    },
    {
      name: "Salman Malitsaev",
      title: "Wrestling",
      bio: "An 11× Chechen Champion and Russian Master of Sport, Salman is a grappling powerhouse who has dominated the wrestling circuits across Europe and the UK.",
      image: "/salman.png"
    },
    {
      name: "Paul Timmins",
      title: "Combat Sambo / Boxing",
      bio: "Holding Championship titles in both Britain and Ireland, Paul is a seasoned combat veteran who seamlessly blends elite boxing with high-level Sambo.",
      image: "/paul.png"
    },
    {
      name: "Sadia Hussain",
      title: "Japanese Jiu Jitsu",
      bio: "A highly respected Black Belt in traditional Japanese Jiu Jitsu, Sadia specializes in leverage-based self-defense, joint manipulation, and technical grappling.",
      image: "/sadia.jpg"
    }
  ];

  return (
    <section id="coaches" className="py-24 bg-background scroll-mt-16">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">
              Meet The <span className="text-accent">Champions</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              All coaches hold Enhanced DBS clearance, are Safeguarding certified, First Aid for Sport qualified, and carry International Professional Instructor ID cards.
            </p>
          </div>
          <a href="/coaches" className="inline-flex items-center gap-2 font-display uppercase tracking-widest font-bold text-accent hover:text-accent-hover transition-colors whitespace-nowrap">
            Full Roster <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
        >
          {coaches.map((coach, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-xl bg-muted/20 border border-muted/50 hover:border-accent transition-all duration-300 z-10 hover:z-20 hover:-translate-y-4 hover:scale-[1.02] hover:[filter:drop-shadow(0_0_20px_rgba(229,57,53,0.4))]"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={coach.image} 
                  alt={coach.name} 
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-[transform,filter] duration-700 ease-out group-hover:scale-[1.2]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
                
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
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
