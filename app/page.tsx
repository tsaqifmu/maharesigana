import About from "@/components/About";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
      </main>
    </>
  );
}
