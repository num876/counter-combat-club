import { buttonVariants } from "@/components/ui/Button";
import { Phone, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background with placeholder overlay for future image */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background/40 via-background/80 to-background">
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        {/* HD Sambo Background */}
        <div className="absolute inset-0 bg-[url('/hd_sambo_hero.png')] bg-cover bg-center opacity-40 grayscale mix-blend-luminosity" />
      </div>

      <div className="container relative z-10 pt-20 pb-32 text-center md:text-left flex flex-col md:items-start items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium text-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          Sambo • Combat Sambo • MMA
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-8xl tracking-tight uppercase leading-[0.9] mb-6 text-foreground drop-shadow-lg">
          Where <span className="text-accent">Champions</span><br />
          Are Made
        </h1>
        
        <p className="max-w-2xl text-lg sm:text-xl text-foreground/90 font-medium mb-10 text-pretty md:text-left drop-shadow-md">
          The UK's Only Coaching Team Built by World Champions and Psychological Professionals. Train at the highest level in Small Heath, Birmingham.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="https://wa.me/447435605543"
            className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto gap-2 shadow-[0_0_20px_rgba(229,57,53,0.3)] text-lg" })}
            target="_blank"
            rel="noreferrer"
          >
            <Phone className="h-5 w-5" />
            WhatsApp / Call Now
          </a>
          <a
            href="#classes"
            className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto gap-2 bg-background/50 backdrop-blur" })}
          >
            View Classes
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
