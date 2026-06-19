import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { AboutSambo } from "@/components/sections/AboutSambo";
import { Classes } from "@/components/sections/Classes";
import { Coaches } from "@/components/sections/Coaches";
import { Location } from "@/components/sections/Location";
import { Partners } from "@/components/sections/Partners";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 flex flex-col">
        <Hero />
        <TrustBar />
        <AboutSambo />
        <Classes />
        <Coaches />
        <Location />
        <Partners />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
