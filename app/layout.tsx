import type { Metadata } from "next";
import { Inter, Belanosima, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sourseSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-sourceSerif",
});
const belanosima = Belanosima({
  subsets: ["latin"],
  weight: ["600", "400", "700"],
  variable: "--font-belanosima",
});

export const metadata: Metadata = {
  title: "Maharesigana",
  description:
    "Maharesigana merupakan organisasi yang berdiri pada tahun 2016. Bergerak dalam penanggulangan Bencana mulai dari pra,saat hingga Pasca Bencana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${belanosima.variable} ${sourseSerif.variable}`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
