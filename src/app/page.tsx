import Image from "next/image";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Service />
      <Contact />
    </main>
  );
}
