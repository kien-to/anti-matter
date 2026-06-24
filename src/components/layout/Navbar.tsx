"use client";

import { useState } from "react";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button-link";
import { Menu, X, Zap } from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";
import { Lang } from "@/lib/translations";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useTranslations();

  const LangToggle = () => (
    <div className="flex items-center gap-0.5 bg-muted rounded-md p-0.5">
      {(["en", "vi"] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-2.5 py-1 rounded text-xs font-semibold transition-colors duration-150 cursor-pointer uppercase ${
            lang === l
              ? "bg-white text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );

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
          {t.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right: toggle + CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <LangToggle />
          <a
            href="https://calendly.com/kiento0905-hec/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-8 px-2.5 text-sm font-medium rounded-lg hover:bg-muted hover:text-foreground transition-colors duration-200 cursor-pointer"
          >
            {t.nav.bookCall}
          </a>
          <ButtonLink
            href="#contact"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white transition-colors duration-200"
          >
            {t.nav.getStarted}
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
            {t.nav.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-foreground cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <LangToggle />
            <ButtonLink
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 bg-[#F97316] hover:bg-[#EA6C0A] text-white w-full"
            >
              {t.nav.getStarted}
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
