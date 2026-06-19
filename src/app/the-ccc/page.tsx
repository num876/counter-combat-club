import Link from "next/link";
import { ArrowLeft, Trophy, Zap, Award, Globe } from "lucide-react";

export default function TheCCCPage() {
  const stats = [
    { value: "137", label: "British Champions Trained", icon: Trophy },
    { value: "3", label: "World Champions", icon: Globe },
    { value: "2", label: "European Champions", icon: Award },
    { value: "876", label: "Fights Worldwide", icon: Zap },
    { value: "393", label: "Knockouts", icon: Zap },
    { value: "45+", label: "Years Experience", icon: Award },
  ];

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-display uppercase tracking-widest text-sm font-bold">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Founder Section */}
        <section className="mb-20">
          <p className="text-accent font-display uppercase tracking-widest font-bold text-sm mb-4">Founded by</p>
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight text-foreground leading-[0.9] mb-4">
            Dr. Renato <span className="text-accent">&quot;Rustam&quot;</span> P.
          </h1>
          <p className="text-xl text-muted-foreground font-medium mb-12">
            Multiple-time World Champion from Chechnya, Russia
          </p>

          <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
            <p>
              Coach Rustam is a highly experienced martial arts coach and professional referee. Since relocating to the UK in 2014, he has trained <span className="text-accent font-bold">137 British Champions</span>, <span className="text-accent font-bold">3 World Champions</span>, and <span className="text-accent font-bold">2 European Champions</span> across Combat Sambo, Judo, and MMA.
            </p>
            <p>
              Alongside his sporting career, he is a <span className="font-bold text-foreground">Clinical Neuropsychologist</span>, working with children and adults with Autism, ADHD, ADD, and other special educational needs.
            </p>
            <p>
              In 2023–2024, he received the <span className="font-bold text-foreground">Award of Outstanding Service</span> from both the International Budo Federation and the British Sambo Federation. In 2024, he was also honoured with the <span className="font-bold text-foreground">Award of Outstanding Service to the Special Needs Community</span> by the Academy of Martial Arts Birmingham.
            </p>
          </div>
        </section>

        {/* Ranks & Expertise */}
        <section className="mb-20 p-8 rounded-2xl bg-muted/20 border border-muted/50">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground mb-6">Ranks & Expertise</h2>
          <div className="space-y-4 text-foreground/90">
            <p>With <span className="font-bold text-foreground">over 45 years of experience</span> in a wide range of martial arts, he specialises in Combat Sambo, Aikido, Kickboxing, and Muay Thai.</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2"><span className="text-accent font-bold">•</span> Aikido Master (1st Dan)</li>
              <li className="flex items-center gap-2"><span className="text-accent font-bold">•</span> Judo (6th Dan)</li>
              <li className="flex items-center gap-2"><span className="text-accent font-bold">•</span> Combat Sambo / Sambo Grandmaster (Level 6)</li>
            </ul>
            <p>He has been teaching martial arts since 2001, delivering elite-level instruction across <span className="font-bold text-foreground">six different countries</span>.</p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="mb-20">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground mb-8">Competition Record</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="p-6 rounded-xl border border-muted/50 bg-background hover:border-accent/30 transition-colors text-center">
                <stat.icon className="h-6 w-6 text-accent mx-auto mb-3" />
                <p className="text-3xl font-bold font-display text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground text-sm mt-4 text-center">
            876 fights worldwide (amateur and professional), including 393 knockouts, across MMA, Combat Sambo, Kickboxing, Wrestling, and Judo.
          </p>
        </section>

        {/* About CCC */}
        <section className="mb-20">
          <h2 className="font-display font-bold text-4xl uppercase tracking-tight text-foreground mb-8">
            About <span className="text-accent">The CCC</span>
          </h2>
          <div className="space-y-6 text-foreground/90 text-lg leading-relaxed">
            <p>
              The Counter Combat Club team is a highly successful and respected martial arts organisation. We take great pride in our coaches, our disciplined and dedicated students, and our battle-tested warriors.
            </p>
            <p>
              Over the past few years, our team has consistently brought home trophies and medals from every tournament we have entered, both nationally and internationally.
            </p>
            <p>
              Our primary martial arts discipline is <span className="font-bold text-foreground">Combat Sambo — the Russian style of MMA</span>. This sport integrates the full technical spectrum of: Judo, Wrestling, Brazilian Jiu-Jitsu (BJJ), Muay Thai, Karate, and Kickboxing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl bg-accent/10 border border-accent/20">
          <h3 className="font-display font-bold text-2xl uppercase text-foreground mb-4">Ready to Train?</h3>
          <Link href="/classes" className="inline-flex items-center gap-2 bg-accent text-white font-display font-bold uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-accent/80 transition-colors">
            View Classes & Timetable
          </Link>
        </div>
      </div>
    </div>
  );
}
