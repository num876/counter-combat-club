import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-muted/30 pt-16 pb-32 sm:pb-8">
      {/* Note: extra bottom padding on mobile (pb-28) to account for sticky call bar */}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="h-8 w-8 bg-accent flex items-center justify-center rounded font-display font-bold text-white leading-none text-[9px]">
                CCC
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                COUNTER COMBAT CLUB
              </span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              The UK's Only Coaching Team Built by World Champions and Psychological Professionals.
            </p>
            <div className="flex gap-4 text-sm font-medium text-muted-foreground font-display uppercase tracking-widest">
              <Link href="https://facebook.com/countercombatclub" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                Facebook
              </Link>
              <Link href="https://instagram.com/countercombatclub" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                Instagram
              </Link>
              <Link href="https://youtube.com/@countercombatclub" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">
                YouTube
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display uppercase tracking-widest text-foreground font-bold mb-6">Contact</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href="tel:+447435605543" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-accent" />
                  07435 605543 <span className="text-xs border border-accent/30 text-accent px-1.5 py-0.5 rounded ml-2">PRIMARY</span>
                </a>
              </li>
              <li>
                <a href="tel:+447390613190" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  07390 613190
                </a>
              </li>
              <li>
                <a href="tel:+447496597840" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  07496 597840
                </a>
              </li>
              <li>
                <a href="mailto:info@countercombat.club" className="flex items-center gap-2 hover:text-accent transition-colors">
                  <Mail className="h-4 w-4 text-accent" />
                  info@countercombat.club
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display uppercase tracking-widest text-foreground font-bold mb-6">Location</h3>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span>
                  598 Coventry Rd<br />
                  Small Heath<br />
                  Birmingham<br />
                  B10 0US
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display uppercase tracking-widest text-foreground font-bold mb-6">Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground font-medium">
              <li><Link href="/the-ccc" className="hover:text-accent transition-colors">The CCC</Link></li>
              <li><Link href="/classes" className="hover:text-accent transition-colors">Classes</Link></li>
              <li><Link href="/coaches" className="hover:text-accent transition-colors">Coaches</Link></li>
              <li><Link href="/students" className="hover:text-accent transition-colors">Students</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-muted/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Counter Combat Club. All rights reserved.</p>
          <p>Where Champions Are Made.</p>
        </div>
      </div>
    </footer>
  );
}
