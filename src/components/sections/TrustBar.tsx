import { Trophy, Users, ShieldCheck, MapPin } from "lucide-react";

export function TrustBar() {
  const points = [
    {
      icon: Trophy,
      title: "World Champion Coaches",
      description: "9× World Champion, Olympic medalist & more."
    },
    {
      icon: ShieldCheck,
      title: "DBS & Safeguarding",
      description: "All coaches Enhanced DBS cleared & certified."
    },
    {
      icon: Users,
      title: "Adult & Child Sessions",
      description: "First lesson £10, refunded on sign-up."
    },
    {
      icon: MapPin,
      title: "5 UK Locations",
      description: "Birmingham, Leicester & Oxford."
    }
  ];

  return (
    <section className="bg-muted/30 border-y border-muted/50 py-12 relative z-20 -mt-16 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
          {points.map((point, index) => (
            <div key={index} className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                <point.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display font-bold uppercase tracking-wide text-foreground">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
