"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "@/components/ui/Button";
import { Phone, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "The CCC", href: "/the-ccc" },
  { name: "Classes", href: "/classes" },
  { name: "Coaches", href: "/coaches" },
  { name: "Students", href: "/students" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-muted/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" alt="Counter Combat Club Logo" className="h-12 w-12 object-contain rounded-full border border-muted/50" />
              <span className="font-display font-bold text-xl tracking-tight hidden sm:inline-block">
                COUNTER COMBAT CLUB
              </span>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground font-display tracking-widest uppercase">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors hover:text-accent ${isActive ? "text-accent" : ""}`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="tel:+447435605543"
              className={buttonVariants({ variant: "default", size: "sm", className: "hidden sm:flex gap-2" })}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-16 right-0 bottom-0 z-50 w-72 bg-background/80 backdrop-blur-xl border-l border-muted/50"
            >
              <motion.div 
                className="flex flex-col p-6 space-y-1"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
                  closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                }}
              >
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.name}
                      variants={{
                        open: { x: 0, opacity: 1 },
                        closed: { x: 50, opacity: 0 }
                      }}
                    >
                      <Link
                        href={link.href}
                        className={`block py-3 px-4 text-lg font-display font-bold uppercase tracking-widest rounded-lg transition-colors ${
                          isActive 
                            ? "text-accent bg-accent/10" 
                            : "text-foreground hover:text-accent hover:bg-accent/5"
                        }`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div 
                  className="pt-4 mt-4 border-t border-muted/30"
                  variants={{
                    open: { y: 0, opacity: 1 },
                    closed: { y: 20, opacity: 0 }
                  }}
                >
                  <a
                    href="tel:+447435605543"
                    className={buttonVariants({ variant: "default", size: "lg", className: "w-full flex gap-2" })}
                    onClick={() => setMobileOpen(false)}
                  >
                    <Phone className="h-5 w-5" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>

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
