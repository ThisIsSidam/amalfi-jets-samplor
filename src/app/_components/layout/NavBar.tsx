"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Phone } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-346 items-center justify-between px-8">
        {/* Left */}
        <div className="flex items-center gap-8">
          <NavButton label="Programs" onTap={() => {}} />
          <NavButton label="Aircraft" onTap={() => {}} />
          <NavButton label="Why Amalfi" onTap={() => {}} />
        </div>

        {/* Center */}
        <Link
          href="/"
          className="text-xl font-medium tracking-widest text-gray-200"
        >
          AMALFI JETS
        </Link>

        {/* Right */}
        <div className="flex text-sm items-center gap-6">
          <a
            href="tel:+18776262534"
            className="flex items-center gap-2 text-gray-200"
          >
            <Phone size={16} />
            +1 (877) 626-2534
          </a>

          <Button className="bg-white text-black px-6 py-6 rounded-4xl transition-all duration-200 ease-out hover:bg-white hover:scale-105">
            Request a Quote
          </Button>
        </div>
      </nav>
    </header>
  );
};

const NavButton = ({ label, onTap }: { label: string; onTap: () => void }) => {
  return (
    <button
      className="flex items-center gap-1 text-sm text-gray-200 transition-opacity hover:opacity-75"
      onClick={onTap}
    >
      {label}
      <ChevronDown size={16} strokeWidth={2} />
    </button>
  );
};

export default Navbar;
