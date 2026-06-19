export function AboutSambo() {
  return (
    <section className="py-24 bg-background overflow-hidden relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-6">
            What is <span className="text-accent">Sambo?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Sambo (Russian: са́мбо — самозащита без оружия) is a Russian martial art and combat sport. The word &quot;SAMBO&quot; is a shortening of samozashchita bez oruzhiya, which literally translates as &quot;self-defence without weapons&quot;. Its development began in the early 1920s by the Soviet Red Army to improve their hand-to-hand combat abilities, intended as a merger of the most effective techniques of other martial arts.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
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
            <p className="text-muted-foreground mb-6">
              Combat Sambo includes all of Wrestling, Grappling, BJJ, Traditional Japanese Jiu Jitsu, Thai Boxing, Judo and more. The SAMBO and Combat Sambo rules can be different in different countries.
            </p>
            <ul className="space-y-2 text-sm text-foreground font-medium">
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Full Contact Striking</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> Chokes & Submissions</li>
              <li className="flex items-center gap-2"><span className="text-accent">✓</span> No-Holds-Barred Combat</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
