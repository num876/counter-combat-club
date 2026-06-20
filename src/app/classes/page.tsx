import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Info, ArrowDown } from "lucide-react";

export default function ClassesPage() {
  const adultLocations = [
    {
      city: "Birmingham",
      venues: [
        {
          name: "CCC MMA ACADEMY",
          address: "598 Coventry Road, B10 0US",
          schedule: "Scroll down to see the timetable"
        },
        {
          name: "BIRMINGHAM MARTIAL ARTS CENTER",
          address: "1319 Stratford Road, B28 9HH",
          schedule: "Every Wednesday and Friday: 4.30pm till 5.30pm"
        }
      ]
    },
    {
      city: "Leicester",
      venues: [
        {
          name: "MUBASHIRUN CENTER",
          address: "Unit3 10 Gough Road, Leicester, LE5 4AL",
          schedule: "Every Tuesday: 7pm till 8.30pm"
        },
        {
          name: "AL QUDS FITNESS & HEALTH",
          address: "Cobden St, Leicester LE1 2LB",
          schedule: "Contact for schedule"
        }
      ]
    },
    {
      city: "Oxford",
      venues: [
        {
          name: "CENTRAL OXFORD MOSQUE",
          address: "Central Oxford Mosque, OX4 1DJ",
          schedule: "Every Monday: 7.30pm till 8.30pm, Every Friday: 7.30pm till 8.30pm"
        }
      ]
    }
  ];

  const childSessions = [
    { location: "BIRMINGHAM: CCC MMA ACADEMY", time: "Every day except Monday" },
    { location: "BIRMINGHAM: MARTIAL ARTS CENTER", time: "Wednesday & Friday: from 4.30pm till 5.30pm" },
    { location: "LEICESTER: MUBASHIRUN CENTER", time: "Tuesday & Thursday: from 7pm till 8.30pm" },
    { location: "OXFORD", time: "Monday: from 7.30pm till 8.30pm, Friday: from 7.30pm till 8.30pm" },
  ];

  return (
    <div className="py-24 pb-32 sm:pb-24 bg-background min-h-screen">
      <div className="container max-w-5xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-display uppercase tracking-widest text-sm font-bold">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight text-foreground leading-[0.9] mb-6">
            Chechen Style <span className="text-accent">Combat Sambo</span>
          </h1>
          <p className="text-xl text-muted-foreground">Classes for Adults and Children</p>
        </div>

        {/* Pricing / Offer */}
        <div className="mb-20 bg-accent/10 border border-accent/20 rounded-2xl p-8 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-accent text-white mb-4">
            <Info className="h-6 w-6" />
          </div>
          <h3 className="font-display font-bold text-2xl uppercase tracking-tight text-foreground mb-3">Trial Offer</h3>
          <p className="text-lg text-foreground/90">
            First lesson is <span className="font-bold text-accent">£10</span> — This will be returned to you upon signing the monthly membership.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-background border border-muted/50 rounded-xl p-4">
              <p className="font-display text-2xl font-bold text-foreground">£45<span className="text-sm text-muted-foreground">/mo</span></p>
              <p className="text-sm mt-1">2 Sessions/Week</p>
            </div>
            <div className="bg-accent border border-accent rounded-xl p-4 text-white sm:scale-105 shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white text-accent text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded">Popular</div>
              <p className="font-display text-2xl font-bold">£55<span className="text-sm text-white/70">/mo</span></p>
              <p className="text-sm mt-1 font-medium">3 Sessions/Week</p>
            </div>
            <div className="bg-background border border-muted/50 rounded-xl p-4">
              <p className="font-display text-2xl font-bold text-foreground">£65<span className="text-sm text-muted-foreground">/mo</span></p>
              <p className="text-sm mt-1">Unlimited + Gym</p>
            </div>
          </div>
        </div>

        {/* Adult Sessions */}
        <section className="mb-20">
          <h2 className="font-display font-bold text-3xl uppercase tracking-tight text-foreground mb-8 border-b border-muted/30 pb-4">
            Adult Sessions
          </h2>
          <p className="text-muted-foreground mb-8">We currently deliver training at five locations across the UK.</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {adultLocations.map((loc, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-display font-bold text-xl uppercase tracking-widest text-accent flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  {loc.city}
                </h3>
                {loc.venues.map((venue, j) => (
                  <div key={j} className="p-5 rounded-xl border border-muted/50 bg-muted/5 hover:border-muted transition-colors">
                    <h4 className="font-bold text-foreground mb-2">{venue.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{venue.address}</p>
                    <p className="text-sm font-medium text-foreground/80">{venue.schedule}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* Child Sessions */}
        <section className="mb-20">
          <h2 className="font-display font-bold text-3xl uppercase tracking-tight text-foreground mb-8 border-b border-muted/30 pb-4">
            Child Sessions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {childSessions.map((session, i) => (
              <div key={i} className="p-5 rounded-xl border border-muted/50 bg-muted/5 flex flex-col sm:flex-row justify-between gap-4">
                <span className="font-bold text-foreground">{session.location}</span>
                <span className="text-accent font-medium text-sm sm:text-right">{session.time}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Timetable */}
        <section className="mb-24 text-center">
          <h2 className="font-display font-bold text-3xl uppercase tracking-tight text-foreground mb-8 flex items-center justify-center gap-3">
            <Calendar className="h-8 w-8 text-accent" />
            Academy Timetable
          </h2>
          <div className="rounded-2xl overflow-hidden border border-muted/50 shadow-2xl bg-white p-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://countercombat.club/wp-content/uploads/2026/01/IMG-20260109-WA0019.jpg" 
              alt="Counter Combat Club Timetable"
              className="w-full h-auto" 
            />
          </div>
        </section>

        {/* Gym Etiquette */}
        <section className="bg-muted/10 border border-muted/30 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="font-display font-bold text-4xl uppercase tracking-tight text-foreground mb-2">
              Gym Etiquette
            </h2>
            <p className="text-2xl text-accent font-display tracking-widest uppercase">Reigi 礼儀</p>
          </div>
          
          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              The Counter Combat Club (CCC) follows the traditional Caucasian, English, and Japanese codes of etiquette. Reigi (礼儀), meaning proper etiquette and pronounced 'reh-yee', is deeply rooted in Japanese culture and is especially important in traditional martial arts schools. Reigi is based on respect — for one's Sensei (coach), senior students, training partners, the school, and even the equipment we use.
            </p>
            <p>
              In practice, Reigi goes far beyond simple manners. Every action has a correct way of being performed, and failure to follow these standards may be seen as a lack of respect or poor behaviour. In some cultures, such lapses can even be considered a serious insult.
            </p>
            <p>
              For the Western mindset, these codes of conduct can be difficult to fully grasp and are often applied in a less rigid manner. Nevertheless, as martial artists, we should always strive to observe Reigi to the best of our ability and continually improve it. Good etiquette is what separates disciplined martial artists from those who lack respect. It defines how we interact with others and reminds us to treat people with the same courtesy and respect that we expect in return.
            </p>
            <p>
              Reigi is therefore a cornerstone of martial arts practice, shaping not only how we train, but how we conduct ourselves in everyday life. Without Reigi, martial arts risk becoming just another physical activity — offering fitness benefits but lacking character, discipline, and depth. Etiquette builds discipline; discipline creates structure; and through structure, students better understand and absorb what is being taught. These values naturally carry over into daily life, helping individuals become more respectful, confident, and balanced people. This is one of the key reasons why many parents choose to enrol their children in martial arts training.
            </p>
            <p className="font-medium text-foreground italic border-l-4 border-accent pl-4 py-2 mt-8">
              Reigi, however, must always come from the heart. It should never be empty ritual or mere 'lip service.' Without genuine meaning and intention, etiquette loses its purpose. True Reigi is lived, not performed.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
