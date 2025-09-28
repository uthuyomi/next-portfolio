import Image from "next/image";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Skills />
      <Contact />
    </main>
  );
}
