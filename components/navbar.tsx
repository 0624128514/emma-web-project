"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "components/ui/button";
import { cn } from "../lib/utils";
import { usePathname } from "next/navigation";
import { useEffectOnce } from "react-use";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Smooth scroll for anchor links
  useEffectOnce(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A" && target.hash) {
        const element = document.querySelector(target.hash);
        if (element) {
          e.preventDefault();
          element.scrollIntoView({ behavior: "smooth" });
          setIsOpen(false);
        }
      }
    };
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  });

  // Determine active section for visual feedback
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const sections = ["product", "features", "contact"];
    const onScroll = () => {
      const scrollPos = window.scrollY + 100;
      let currentSection = null;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos) {
          currentSection = section;
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = (section: string) =>
    cn(
      "text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded",
      activeSection === section
        ? "text-primary font-semibold"
        : "text-gray-700 hover:text-primary"
    );

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200"
          : "bg-transparent"
      )}
      role="banner"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex flex-wrap md:flex-nowrap items-center justify-between">
        <Link href="/" className="flex items-center space-x-2" aria-label="Homepage">
          <span className="font-extrabold text-xl sm:text-2xl tracking-wide text-primary">
            WoodenCraft
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-6 lg:space-x-10"
          role="navigation"
          aria-label="Primary Navigation"
        >
          <Link href="#product" className={linkClass("product")}>
            Our Bed
          </Link>
          <Link href="#features" className={linkClass("features")}>
            Features
          </Link>
          <Link href="#contact" className={linkClass("contact")}>
            Contact
          </Link>
          <Button asChild variant="default" size="sm">
            <Link href="#contact" className="focus:outline-none focus:ring-2 focus:ring-primary rounded">
              Order Now
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-gray-200 shadow-lg"
          role="menu"
          aria-label="Mobile Navigation"
        >
          <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 flex flex-col space-y-4">
            <Link
              href="#product"
              className={linkClass("product")}
              onClick={toggleMenu}
              role="menuitem"
            >
              Our Bed
            </Link>
            <Link
              href="#features"
              className={linkClass("features")}
              onClick={toggleMenu}
              role="menuitem"
            >
              Features
            </Link>
            <Link
              href="#contact"
              className={linkClass("contact")}
              onClick={toggleMenu}
              role="menuitem"
            >
              Contact
            </Link>
            <Button asChild variant="default" size="sm" className="w-full">
              <Link href="#contact" onClick={toggleMenu} role="menuitem">
                Order Now
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
