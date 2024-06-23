import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NavBar from "@/components/Navbar";
import Program from "@/components/Program";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About />
        <Program />
      </main>
      <Footer />
    </>
  );
}
