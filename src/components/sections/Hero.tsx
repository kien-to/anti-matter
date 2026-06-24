"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star } from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";

const socialProofAvatars = ["KT", "SM", "JP", "AL", "RB"];

export function Hero() {
  const { t } = useTranslations();
  const h = t.hero;

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F0F4FF] to-background pt-20 pb-28 px-4 sm:px-6">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #4F46E5 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <Badge
          variant="secondary"
          className="mb-6 px-4 py-1.5 text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-100"
        >
          {h.badge}
        </Badge>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight max-w-4xl mx-auto">
          {h.headlineStart}{" "}
          <span className="text-primary">{h.headlineAccent}</span>{" "}
          {h.headlineEnd}
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {h.sub}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink
            href="#contact"
            size="lg"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white px-8 h-12 text-base font-semibold transition-colors duration-200 shadow-md shadow-orange-200"
          >
            {h.cta1}
            <ArrowRight size={18} className="ml-2" />
          </ButtonLink>
          <ButtonLink
            href="#how-it-works"
            size="lg"
            variant="outline"
            className="px-8 h-12 text-base transition-colors duration-200"
          >
            {h.cta2}
          </ButtonLink>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex -space-x-2">
            {socialProofAvatars.map((initials) => (
              <div
                key={initials}
                className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 border-2 border-white flex items-center justify-center text-xs font-semibold"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span>
            <strong className="text-foreground">{h.socialProof}</strong>
          </span>
        </div>
      </div>
    </section>
  );
}
