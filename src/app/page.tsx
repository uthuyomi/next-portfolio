import Image from "next/image";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Particle from "@/components/common/Particles";

export default function Home() {
  return (
    <>
      <Particle />
      <main className="relative z-20">
        <Hero />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
