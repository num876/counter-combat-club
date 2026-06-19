export function Partners() {
  const partners = [
    { name: "BattleArena", logo: "https://countercombat.club/wp-content/uploads/2023/05/BattleArena.png" },
    { name: "BattleGround", logo: "https://countercombat.club/wp-content/uploads/2023/05/BattleGround.jpg" },
    { name: "BMAC", logo: "https://countercombat.club/wp-content/uploads/2023/05/BirminghamMartialArtsCentre.jpg" },
    { name: "MAGB", logo: "https://countercombat.club/wp-content/uploads/2023/05/MAGB.jpg" },
    { name: "IWA Affiliated", logo: "https://countercombat.club/wp-content/uploads/2025/08/iwa-logo-300x300.jpeg" }
  ];

  return (
    <section className="py-12 bg-background border-b border-muted/30 overflow-hidden">
      <div className="container">
        <p className="text-center text-sm font-display font-bold uppercase tracking-widest text-muted-foreground mb-8">
          Recognized & Trusted By
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default"
              title={partner.name}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={partner.logo} alt={partner.name} className="h-12 w-auto object-contain mix-blend-luminosity hover:mix-blend-normal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
