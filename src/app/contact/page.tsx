import Link from "next/link";
import { ArrowLeft, Phone, MapPin, Mail, Clock, MessageSquare } from "lucide-react";
import { buttonVariants } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="py-24 bg-background min-h-screen">
      <div className="container max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors mb-12 font-display uppercase tracking-widest text-sm font-bold">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <div className="mb-16">
          <h1 className="font-display font-bold text-5xl md:text-7xl uppercase tracking-tight text-foreground leading-[0.9] mb-4">
            Get In <span className="text-accent">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Ready to start training? Have questions about our sessions? Contact us directly or fill out the form below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-muted/10 border border-muted/50 rounded-2xl p-8 space-y-8">
              <div>
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-foreground flex items-center gap-2 mb-4">
                  <Phone className="h-5 w-5 text-accent" />
                  Call or WhatsApp
                </h3>
                <ul className="space-y-4 text-lg text-muted-foreground">
                  <li>
                    <a href="tel:+447435605543" className="hover:text-accent transition-colors flex items-center gap-3">
                      <span className="font-medium text-foreground">07435 605543</span>
                      <span className="text-xs font-bold font-display uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded border border-accent/30">Primary</span>
                    </a>
                  </li>
                  <li>
                    <a href="tel:+447390613190" className="hover:text-accent transition-colors">
                      07390 613190
                    </a>
                  </li>
                  <li>
                    <a href="tel:+447496597840" className="hover:text-accent transition-colors">
                      07496 597840
                    </a>
                  </li>
                </ul>
              </div>

              <div className="pt-8 border-t border-muted/30">
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-foreground flex items-center gap-2 mb-4">
                  <MapPin className="h-5 w-5 text-accent" />
                  Main Academy (HQ)
                </h3>
                <p className="text-lg text-muted-foreground mb-4">
                  Counter Combat Club<br />
                  598 Coventry Road<br />
                  Small Heath<br />
                  Birmingham<br />
                  B10 0US
                </p>
              </div>

              <div className="pt-8 border-t border-muted/30">
                <h3 className="font-display font-bold text-xl uppercase tracking-wider text-foreground flex items-center gap-2 mb-4">
                  <Globe className="h-5 w-5 text-accent" />
                  Social Media
                </h3>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-display uppercase tracking-widest font-bold text-sm">Facebook</a>
                  <a href="https://instagram.com/countercombatclub" className="text-muted-foreground hover:text-accent transition-colors font-display uppercase tracking-widest font-bold text-sm">Instagram</a>
                  <a href="#" className="text-muted-foreground hover:text-accent transition-colors font-display uppercase tracking-widest font-bold text-sm">YouTube</a>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden aspect-video border border-muted/50 grayscale hover:grayscale-0 transition-all duration-700 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2430.298818037466!2d-1.8590635!3d52.4736631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bba3b5190001%3A0x6bba3b5190001!2s598%20Coventry%20Rd%2C%20Small%20Heath%2C%20Birmingham%20B10%200US!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 bg-muted/20"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-muted/5 border border-muted/30 rounded-2xl p-8">
            <div className="mb-8">
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight text-foreground mb-2 flex items-center gap-3">
                <MessageSquare className="h-7 w-7 text-accent" />
                Send a Message
              </h3>
              <p className="text-muted-foreground">If you want to book a lesson, please tell us your name, age, and preferred training style.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold font-display uppercase tracking-wider text-foreground">First Name *</label>
                  <input type="text" id="firstName" required className="w-full bg-background border border-muted/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="age" className="text-sm font-bold font-display uppercase tracking-wider text-foreground">Age</label>
                  <input type="number" id="age" className="w-full bg-background border border-muted/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold font-display uppercase tracking-wider text-foreground">Email Address *</label>
                <input type="email" id="email" required className="w-full bg-background border border-muted/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-bold font-display uppercase tracking-wider text-foreground">Phone Number</label>
                <input type="tel" id="phone" className="w-full bg-background border border-muted/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors" />
              </div>

              <div className="space-y-2">
                <label htmlFor="technique" className="text-sm font-bold font-display uppercase tracking-wider text-foreground">Training Technique</label>
                <select id="technique" className="w-full bg-background border border-muted/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                  <option value="">Select a style...</option>
                  <option value="sambo">Sambo / Combat Sambo</option>
                  <option value="muay-thai">Muay Thai</option>
                  <option value="judo">Judo</option>
                  <option value="wrestling">Wrestling</option>
                  <option value="weapons">Weapons Combat</option>
                </select>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label htmlFor="message" className="text-sm font-bold font-display uppercase tracking-wider text-foreground">Message</label>
                  <span className="text-xs text-muted-foreground">Max 180 chars</span>
                </div>
                <textarea id="message" maxLength={180} rows={4} className="w-full bg-background border border-muted/50 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition-colors resize-none"></textarea>
              </div>

              <button type="submit" className="w-full bg-accent hover:bg-accent-hover text-white font-display font-bold uppercase tracking-widest py-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}

// Simple fallback for globe icon to avoid missing import errors
function Globe(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}
