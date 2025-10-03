"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import "./index.css";

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#inicio", label: "INÍCIO", ariaLabel: "Ir para o início" },
    {
      href: "#quem-somos",
      label: "QUEM SOMOS",
      ariaLabel: "Ir para quem somos",
    },
    {
      href: "#areas-atuacao",
      label: "ÁREAS DE ATUAÇÃO",
      ariaLabel: "Ir para áreas de atuação",
    },
    { href: "#contato", label: "CONTATO", ariaLabel: "Ir para contato" },
  ];

  // Função para navegação suave
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.substring(1); // Remove o #
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Offset para compensar a altura do navbar fixo (64px = h-16)
      const navbarHeight = 64;
      const targetPosition = targetElement.offsetTop - navbarHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }

    // Fechar menu mobile se estiver aberto
    setIsOpen(false);
  };

  return (
    // border-b-1 border-border
    <nav className="text-gold-100 font-montserrat fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded flex items-center justify-center">
                <img
                  src="/logo.webp"
                  alt="Pereira & Zanatta Logo"
                  className="w-10 h-10 object-contain mt-2"
                  loading="eager"
                />
              </div>
              <span className="text-2xl font-semibold hidden sm:block">
                Advogados
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="nav-link text-sm font-medium tracking-wide"
                aria-label={item.ariaLabel}
                onClick={(e) => handleSmoothScroll(e, item.href)}
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
                aria-label={item.ariaLabel}
                className="mobile-menu-item text-sm font-medium tracking-wide py-2 px-2 rounded-md hover:bg-gold-500/10 transition-colors"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
