"use client";

import { Dispatch, SetStateAction } from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import { navLinks } from "@/constants";
import { styles } from "@/constants/style";

import Container from "./Container";
import MenuIcon from "@/assets/icons/Menu";
import CloseIcon from "@/assets/icons/Close";
import ArrowRight from "@/assets/icons/ArrowRight";

interface navItem {
  href: string;
  label: string;
  isMobile: boolean;
}

interface MobileMenuProps {
  toggleMenu: boolean;
  setToggleMenu: Dispatch<SetStateAction<boolean>>;
}

const NavItem = ({ href, label, isMobile }: navItem) => (
  <li
    className={`navLink font-belanosima text-slate-800 lg:text-white ${
      isMobile ? "mb-4" : "navLinkDesktop"
    }`}
  >
    <Link href={`/#${href}`}>{label}</Link>
  </li>
);

const Logo = () => (
  <Link href="/">
    <Image
      className="w-[100px] lg:w-[130px]"
      src={"/maharesigana navbar logo.png"}
      width={212}
      height={50}
      alt="logo maharesigana"
    />
  </Link>
);

const DonationButton = () => (
  <button className="flex items-center justify-between gap-x-2 rounded-full bg-primaryBlue px-6 py-1">
    <h4 className="font-belanosima text-base font-semibold lg:text-xl">
      Donasi
    </h4>
    <ArrowRight />
  </button>
);

const MobileMenu = ({ toggleMenu, setToggleMenu }: MobileMenuProps) => (
  <div className="lg:hidden">
    <button onClick={() => setToggleMenu((prev) => !prev)}>
      {toggleMenu ? <CloseIcon /> : <MenuIcon />}
    </button>

    <nav className={`${toggleMenu ? `flex` : `hidden`} mobileMenu sidebar`}>
      <ul className="list-none flex-col text-center text-black">
        {navLinks.map((nav) => (
          <NavItem
            href={nav.id}
            label={nav.title}
            key={nav.id}
            isMobile={true}
          />
        ))}
      </ul>
      <div className="transition-all hover:-translate-y-1">
        <DonationButton />
      </div>
    </nav>
  </div>
);

const DesktopMenu = () => (
  <div className="hidden transition-all hover:-translate-y-1 lg:flex">
    <DonationButton />
  </div>
);

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="fixed z-50 w-full bg-white text-white shadow-xl">
      <div className="flex justify-center py-2">
        <Container className="flex items-center justify-between">
          <Logo />
          {/* FOR MOBILE LAYOUT*/}
          <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />

          {/* FOR DESKTOP LAYOUT*/}
          <DesktopMenu />
        </Container>
      </div>
      <div className="flexCenter bg-primaryBlue">
        <Container>
          <nav className="hidden w-full lg:flex">
            <ul className={`flex w-full justify-end gap-x-7 text-white`}>
              {navLinks.map((nav) => (
                <NavItem
                  href={nav.id}
                  label={nav.title}
                  key={nav.id}
                  isMobile={false}
                />
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;
