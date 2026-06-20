import Link from "next/link";
import { ArrowLeft, ShieldCheck, Award } from "lucide-react";

export default function CoachesPage() {
  const coaches = [
    {
      name: "Dr. Renato Rustam P.",
      discipline: "Combat Sambo / MMA",
      from: "Chechnya",
      credentials: "9X MMA/Combat Sambo World Champion WCF, 11X European Champion, Kavkaz Cup Champion, Multiple Times National Champion",
      image: "/renato.jpg"
    },
    {
      name: "Givi Shariashvili",
      discipline: "Judo / Sambo",
      from: "Georgia",
      credentials: "5X World Champion of Sambo and Judo, Russian Champion, Georgian Champion, British Champion",
      image: "/givi.jpg"
    },
    {
      name: "Muhammad Shariq Hussain",
      discipline: "Combat Sambo / MMA",
      from: "UK",
      credentials: "Multiple times British Champion",
      image: "/coach-shariq.jpg"
    },
    {
      name: "Musa Hussain",
      discipline: "Boxing",
      from: "UK",
      credentials: "British Boxing Champion",
      image: "/musa.jpg"
    },
    {
      name: "Azizul Hakim Mohammed Uddin",
      discipline: "Combat Sambo / MMA",
      from: "UK",
      credentials: "Sambo - BJJ - Grappling, Multiple times British Champion",
      image: "/bjj_coach.png"
    },
    {
      name: "Paul Timmins",
      discipline: "Combat Sambo / Boxing",
      from: "Irish/British",
      credentials: "British Champion, Irish Champion",
      image: "/paul.png"
    },
    {
      name: "Sadia Hussain",
      discipline: "Japanese Jiu Jitsu",
      from: "UK",
      credentials: "Black Belt",
      image: "/sadia.jpg"
    },
    {
      name: "Salman Malitsaev",
      discipline: "Wrestling",
      from: "Chechnya",
      credentials: "11X Chechen Champion, Multiple times Russian Master Champion, Multiple times British Champion",
      image: "/salman.png"
    },
    {
      name: "Tamim Al Kubati",
      discipline: "Taekwondo / Karate",
      from: "Yemen",
      credentials: "5X World Champion, Olympic Silver Medalist",
      image: "/tamim.jpg"
    }
  ];

  return (
    <div className="py-24 pb-32 sm:pb-24 bg-background min-h-screen">
      <div className="container max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-display uppercase tracking-widest text-sm font-bold">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight text-foreground leading-[0.9] mb-6">
            Our <span className="text-accent">Coaches</span>
          </h1>
          
          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-muted/10 border border-muted/50 flex flex-col md:flex-row items-center gap-4 text-left">
            <div className="h-12 w-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-accent" />
            </div>
            <p className="text-muted-foreground font-medium text-lg">
              All coaches hold <span className="text-foreground">Enhanced DBS clearance</span>, are <span className="text-foreground">Safeguarding certified</span>, <span className="text-foreground">First Aid for Sport qualified</span>, and carry <span className="text-foreground">International Professional Instructor ID cards</span>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coaches.map((coach, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-muted/10 border border-muted/30 hover:border-accent/50 transition-all shadow-xl hover:-translate-y-1">
              <div className="aspect-[4/3] relative overflow-hidden bg-muted/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={coach.image} 
                  alt={coach.name}
                  className="absolute inset-0 w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
              </div>
              
              <div className="p-6 relative z-10 -mt-16">
                <div className="mb-3 bg-accent text-white text-xs font-bold font-display uppercase tracking-wider px-3 py-1 inline-flex w-fit rounded shadow-md">
                  {coach.discipline}
                </div>
                
                <h3 className="font-display font-bold text-2xl uppercase text-foreground mb-1">
                  {coach.name}
                </h3>
                <p className="text-accent text-sm font-bold uppercase tracking-wider mb-4">
                  From {coach.from}
                </p>
                
                <div className="flex items-start gap-2 mt-4 text-muted-foreground">
                  <Award className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm leading-relaxed">{coach.credentials}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
