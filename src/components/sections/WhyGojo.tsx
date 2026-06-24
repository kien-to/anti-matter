"use client";

import { CheckCircle2, XCircle } from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";

export function WhyGojo() {
  const { t } = useTranslations();
  const w = t.whyGojo;

  return (
    <section id="why-gojo" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              {w.label}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-6">
              {w.titleMain}{" "}
              <span className="text-primary">{w.titleAccent}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">{w.p1}</p>
            <p className="text-muted-foreground leading-relaxed">{w.p2}</p>
          </div>

          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            <div className="grid grid-cols-3 bg-[#F8FAFC] px-6 py-4 text-sm font-semibold text-[#0F172A] border-b border-border">
              <span className="col-span-1" />
              <span className="text-center text-primary">{w.thGojo}</span>
              <span className="text-center text-muted-foreground">{w.thTypical}</span>
            </div>
            {w.comparisons.map((label) => (
              <div
                key={label}
                className="grid grid-cols-3 px-6 py-4 text-sm border-b border-border last:border-0 hover:bg-[#F8FAFC] transition-colors duration-150"
              >
                <span className="text-[#0F172A] col-span-1">{label}</span>
                <span className="flex justify-center">
                  <CheckCircle2 size={18} className="text-emerald-500" />
                </span>
                <span className="flex justify-center">
                  <XCircle size={18} className="text-red-400" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
