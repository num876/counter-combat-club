import Link from "next/link";
import { ArrowLeft, Trophy, Medal, Star } from "lucide-react";

export default function StudentsPage() {
  const featuredStudents = [
    {
      name: "Rustam Rafiev",
      age: 19,
      records: "Silver Medallist (International Sambo Championship 2019), SAMBO Gold Medallist 2019 March (Sambo Competition KENT)",
    },
    {
      name: "Ibrahim Khan",
      age: 18,
      records: "2-0-0 (JUDO), 2-0-0 (SAMBO/COMBAT SAMBO). Gold Medallist (JUDO CHAMPIONSHIP April 2019, Sittingbourne, UK). Gold Medallist Doncaster Combat Sambo Championship (03.09.2022)",
    },
    {
      name: "Zidan Mustafa",
      age: 17,
      records: "2-0-0 (JUDO), 2-0-0 (SAMBO/COMBAT SAMBO). Gold Medallist (JUDO CHAMPIONSHIP April 2019, Sittingbourne, UK)",
    },
    {
      name: "Azizul Mohammed Uddin",
      age: 33,
      records: "2-0-0 (Sambo). Silver Medalist (International Sambo Championship 2019)",
    },
  ];

  const otherChampions = [
    { name: "Harry H.T.", title: "Multiple times British Champion" },
    { name: "Abdullah", title: "Multiple times British Champion" },
    { name: "Ansar Chaudrhy", title: "Multiple times British Champion" },
    { name: "Suleyman", title: "Multiple times British Champion" },
    { name: "Yahya Arif", title: "Multiple Times British Champion" },
    { name: "Sam H. W. L.", title: "Multiple times British Champion" },
    { name: "Ibrahim Ullah Ghazi", title: "British Champion" },
    { name: "Ahmed M.", title: "Multiple times British Champion" },
    { name: "Zayden", title: "British Champion" },
    { name: "Maymoonah", title: "Multiple times British Champion" },
    { name: "Maryam", title: "Multiple times British Champion" },
    { name: "Uthman Dehneen", title: "British Champion" },
    { name: "Isaac G.", title: "Multiple times British Champion" },
    { name: "Abraham Ayassamy", title: "Multiple Times British Champion" },
    { name: "Hanzalah Bormand", title: "British Champion" },
    { name: "Ubaydah Sadat", title: "Student of The Year 2025" },
  ];

  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-display uppercase tracking-widest text-sm font-bold">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight text-foreground leading-[0.9] mb-4">
            Home of <span className="text-accent">Champions</span>
          </h1>
          <p className="text-xl text-muted-foreground">& UK Superstars</p>
        </div>

        {/* Featured Students */}
        <section className="mb-20">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground mb-8 flex items-center gap-3">
            <Star className="h-6 w-6 text-accent" />
            Featured Students
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredStudents.map((student, i) => (
              <div key={i} className="p-6 rounded-2xl border border-muted/50 bg-muted/10 hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display font-bold text-xl uppercase text-foreground">{student.name}</h3>
                  <span className="text-xs font-display font-bold uppercase tracking-wider bg-accent/10 text-accent px-2 py-1 rounded border border-accent/20">
                    Age {student.age}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{student.records}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Other Champions */}
        <section className="mb-20">
          <h2 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground mb-8 flex items-center gap-3">
            <Trophy className="h-6 w-6 text-accent" />
            Hall of Champions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {otherChampions.map((champ, i) => (
              <div key={i} className="p-4 rounded-xl border border-muted/50 bg-background hover:border-accent/30 transition-colors text-center">
                <Medal className="h-5 w-5 text-accent mx-auto mb-2" />
                <h3 className="font-display font-bold text-sm uppercase text-foreground mb-1">{champ.name}</h3>
                <p className="text-xs text-muted-foreground">{champ.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl bg-accent/10 border border-accent/20">
          <h3 className="font-display font-bold text-2xl uppercase text-foreground mb-4">Want to Join Our Champions?</h3>
          <Link href="/classes" className="inline-flex items-center gap-2 bg-accent text-white font-display font-bold uppercase tracking-wider px-8 py-4 rounded-lg hover:bg-accent/80 transition-colors">
            View Classes & Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
