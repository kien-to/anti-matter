"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";

export function Testimonials() {
  const { t } = useTranslations();
  const ts = t.testimonials;

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F0F4FF] to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {ts.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">{ts.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ts.items.map(({ name, role, initials, quote }) => (
            <Card key={name} className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-7">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-[#0F172A] leading-relaxed mb-6 text-sm sm:text-base">
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-semibold">
                    {initials}
                  </div>
                  <div>
                    <p className="font-semibold text-[#0F172A] text-sm">{name}</p>
                    <p className="text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
