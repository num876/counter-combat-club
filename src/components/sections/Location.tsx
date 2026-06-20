"use client";

import { MapPin, Navigation } from "lucide-react";
  const locations = [
    {
      city: "Birmingham",
      venues: [
        {
          name: "CCC MMA Academy (HQ)",
          address: "598 Coventry Road, B10 0US",
          schedule: "Every day except Monday — see timetable above",
          mapQuery: "598+Coventry+Rd,+Small+Heath,+Birmingham+B10+0US",
          highlight: true
        },
        {
          name: "Birmingham Martial Arts Centre",
          address: "1319 Stratford Road, B28 9HH",
          schedule: "Wednesday & Friday: 4:30 pm – 5:30 pm",
          mapQuery: "1319+Stratford+Road,+Birmingham+B28+9HH"
        }
      ]
    },
    {
      city: "Leicester",
      venues: [
        {
          name: "Mubashirun Centre",
          address: "Unit 3, 10 Gough Road, LE5 4AL",
          schedule: "Tuesday & Thursday: 7:00 pm – 8:30 pm",
          mapQuery: "10+Gough+Road,+Leicester+LE5+4AL"
        },
        {
          name: "Al Quds Fitness & Health",
          address: "Cobden St, Leicester LE1 2LB",
          schedule: "Contact for schedule",
          mapQuery: "Cobden+St,+Leicester+LE1+2LB"
        }
      ]
    },
    {
      city: "Oxford",
      venues: [
        {
          name: "Central Oxford Mosque",
          address: "Central Oxford Mosque OX4 1DJ",
          schedule: "Monday: 7:30 pm – 8:30 pm • Friday: 7:30 pm – 8:30 pm",
          mapQuery: "Central+Oxford+Mosque+OX4+1DJ"
        }
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/10 border-y border-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl uppercase tracking-tight mb-4">
            Training <span className="text-accent">Locations</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We currently deliver training at five locations across the UK.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {locations.map((loc, i) => (
            <div key={i}>
              <h3 className="font-display font-bold text-2xl uppercase tracking-wider text-accent mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                {loc.city}
              </h3>
              <div className="space-y-4">
                {loc.venues.map((venue, j) => (
                  <div
                    key={j}
                    className={`p-5 rounded-xl border transition-all hover:-translate-y-1 hover:scale-[1.02] ${
                      venue.highlight
                        ? "bg-accent/5 border-accent/30 hover:border-accent/60 shadow-[0_0_15px_rgba(229,57,53,0.1)]"
                        : "bg-background border-muted/50 hover:border-accent/30 shadow-sm"
                    }`}
                  >
                    <h4 className="font-display font-bold uppercase tracking-wide text-foreground mb-1">
                      {venue.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">{venue.address}</p>
                    <p className="text-sm text-foreground/80 font-medium">{venue.schedule}</p>
                    <a
                      href={`https://maps.google.com/?q=${venue.mapQuery}`}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-hover mt-3 font-medium transition-colors"
                    >
                      <Navigation className="h-3 w-3" />
                      Get Directions
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Map for HQ */}
        <div className="relative rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto border border-muted/50 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:shadow-[0_0_30px_rgba(229,57,53,0.3)] hover:scale-[1.01]">
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
    </section>
  );
}
