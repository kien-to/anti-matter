"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="bg-primary text-white rounded-lg p-1.5">
            <Zap size={16} />
          </span>
          Gojo
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://calendly.com/kiento0905-hec/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 px-2.5 text-sm font-medium rounded-lg hover:bg-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            Book a Call
          </a>
          <ButtonLink
            href="#contact"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white transition-colors duration-200"
          >
            Get Started Free
          </ButtonLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-white px-4 pb-4">
          <nav className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white w-full"
            >
              Get Started Free
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
