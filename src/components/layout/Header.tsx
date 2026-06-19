import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { Phone, Menu } from "lucide-react";

export function Header() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-muted/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-accent flex items-center justify-center rounded font-display font-bold text-white leading-none">
                CCC
              </div>
              <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">
                COUNTER COMBAT CLUB
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground font-display tracking-widest uppercase">
            <Link href="/the-ccc" className="transition-colors hover:text-accent">The CCC</Link>
            <Link href="/classes" className="transition-colors hover:text-accent">Classes</Link>
            <Link href="/coaches" className="transition-colors hover:text-accent">Coaches</Link>
            <Link href="/students" className="transition-colors hover:text-accent">Students</Link>
            <Link href="/contact" className="transition-colors hover:text-accent">Contact</Link>
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+447435605543"
              className={buttonVariants({ variant: "default", size: "sm", className: "hidden sm:flex gap-2" })}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button className="md:hidden text-foreground p-2">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Bottom Sticky Call Bar */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-background/95 border-t border-muted/50 backdrop-blur z-50 pb-safe">
        <a
          href="tel:+447435605543"
          className={buttonVariants({ variant: "default", size: "lg", className: "w-full flex gap-2 text-lg shadow-[0_0_20px_rgba(229,57,53,0.3)]" })}
        >
          <Phone className="h-5 w-5" />
          Call / WhatsApp Now
        </a>
      </div>
    </>
  );
}
