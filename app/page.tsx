import Hero from "@/components/Hero/Hero";
import About from "@/components/About";
import Program from "@/components/Program";
import Artikel from "@/components/Artikel";

export default function Home() {
  return (
    <main className="font-inter">
      <Hero />
      <About />
      <Program />
      <Artikel />
    </main>
  );
}
