import { Phone, MessageCircle } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="py-24 bg-accent relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay" />
      
      <div className="container relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-5xl md:text-7xl uppercase tracking-tight text-white mb-6 drop-shadow-lg leading-[0.9]">
          Your First Class is <span className="text-black">One Call Away</span>
        </h2>
        
        <p className="text-white/90 text-xl font-medium mb-10 max-w-2xl mx-auto drop-shadow">
          First lesson is just £10 — refunded when you sign up for membership. Contact us to book your trial session this week.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto">
          <a
            href="tel:+447435605543"
            className={buttonVariants({ variant: "default", size: "lg", className: "w-full sm:w-auto gap-3 bg-black text-white hover:bg-black/80 hover:text-white shadow-2xl text-xl h-16 px-8 border border-white/10" })}
          >
            <Phone className="h-6 w-6" />
            07435 605543
          </a>
          <a
            href="https://wa.me/447435605543"
            className={buttonVariants({ variant: "outline", size: "lg", className: "w-full sm:w-auto gap-3 bg-white/10 backdrop-blur text-white border-white/30 hover:bg-white hover:text-black shadow-xl text-xl h-16 px-8" })}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle className="h-6 w-6" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
