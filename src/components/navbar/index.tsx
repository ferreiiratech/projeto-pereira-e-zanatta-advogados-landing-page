"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import "./index.css";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "INÍCIO" },
    { href: "#quem-somos", label: "QUEM SOMOS" },
    { href: "#areas-atuacao", label: "ÁREAS DE ATUAÇÃO" },
    { href: "#contato", label: "CONTATO" },
  ];

  return (
    // border-b-1 border-border
    <nav className="text-gold-100 font-montserrat fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Pereira & Zanatta Logo"
                className="w-10 h-10 object-contain mt-2"
              />
            </div>

            <span className="text-2xl font-semibold hidden sm:block">
              Advogados
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden menu-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden mobile-menu-backdrop overflow-hidden transition-all duration-500 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100 mobile-menu-open py-4"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="mobile-menu-item text-sm font-medium tracking-wide py-2 px-2 rounded-md hover:bg-gold-500/10 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}

            {/* <Button className="mobile-menu-item hover:bg-accent mt-4 bg-gold-gradient text-white hover:shadow-gold transition-all duration-300">
              Agende uma consulta
            </Button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
