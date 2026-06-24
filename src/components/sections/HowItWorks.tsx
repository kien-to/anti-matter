"use client";

import { Lightbulb, Hammer, GraduationCap } from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";

const stepIcons = [Lightbulb, Hammer, GraduationCap];
const stepColors = [
  "bg-indigo-50 text-indigo-600",
  "bg-orange-50 text-orange-600",
  "bg-emerald-50 text-emerald-600",
];

export function HowItWorks() {
  const { t } = useTranslations();
  const h = t.howItWorks;

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {h.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">{h.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{h.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px bg-gradient-to-r from-indigo-200 via-orange-200 to-emerald-200" />
          {h.steps.map(({ step, title, description }, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={step} className="flex flex-col items-center text-center">
                <div className={`relative w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-sm ${stepColors[i]} mb-6`}>
                  <Icon size={32} />
                  <span className="absolute -top-2 -right-2 bg-[#0F172A] text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
                    {step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-3">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
