import { ArrowRight } from "lucide-react";

export function Coaches() {
  const coaches = [
    {
      name: "Dr. Renato Rustam P.",
      title: "Combat Sambo / MMA Coach",
      bio: "From Chechnya. 9× MMA/Combat Sambo World Champion WCF. 11× European Champion. Kavkaz Cup Champion. Multiple Times National Champion.",
      image: "https://countercombat.club/wp-content/uploads/2023/05/Bisayev.jpg"
    },
    {
      name: "Givi Shariashvili",
      title: "Judo / Sambo",
      bio: "From Georgia. 5× World Champion of Sambo and Judo. Russian Champion. Georgian Champion. British Champion.",
      image: "https://countercombat.club/wp-content/uploads/2023/05/Nashad.jpg"
    },
    {
      name: "Muhammad Shariq Hussain",
      title: "Combat Sambo / MMA",
      bio: "From UK. Multiple times British Champion.",
      image: "/mma_coach.png"
    },
    {
      name: "Musa Hussain",
      title: "Boxing",
      bio: "British Boxing Champion.",
      image: "/boxing_coach.png"
    },
    {
      name: "Tamim Al Kubati",
      title: "Taekwondo / Karate",
      bio: "5× World Champion. Olympic Silver Medalist.",
      image: "/taekwondo_coach.png"
    },
    {
      name: "Salman Malitsaev",
      title: "Wrestling",
      bio: "From Chechnya. 11× Chechen Champion. Multiple times Russian Master Champion. Multiple times British Champion.",
      image: "/wrestling_coach.png"
    },
    {
      name: "Paul Timmins",
      title: "Combat Sambo / Boxing",
      bio: "Irish/British. British Champion. Irish Champion.",
      image: "/boxing_coach.png"
    },
    {
      name: "Sadia Hussain",
      title: "Japanese Jiu Jitsu",
      bio: "From UK. Black Belt.",
      image: "/bjj_coach.png"
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
          <a href="#" className="inline-flex items-center gap-2 font-display uppercase tracking-widest font-bold text-accent hover:text-accent-hover transition-colors whitespace-nowrap">
            Full Roster <ArrowRight className="h-5 w-5" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {coaches.map((coach, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-muted/20 border border-muted/50 hover:border-accent/50 transition-colors">
              <div className="aspect-[4/5] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105 mix-blend-luminosity group-hover:mix-blend-normal"
                />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <div className="text-accent font-display text-sm uppercase tracking-widest font-bold mb-1">
                    {coach.title}
                  </div>
                  <h3 className="font-display font-bold text-2xl uppercase text-foreground mb-2">
                    {coach.name}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-2">
                    {coach.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
