"use client";

import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";

export function Pricing() {
  const { t } = useTranslations();
  const p = t.pricing;

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {p.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">{p.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{p.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {p.plans.map(({ name, price, description, features, cta, highlight }) => (
            <div
              key={name}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                highlight
                  ? "border-primary bg-primary text-white shadow-xl shadow-indigo-200 scale-[1.02]"
                  : "border-border bg-white"
              }`}
            >
              {highlight && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F97316] text-white px-4 py-1 text-xs font-semibold">
                  {p.mostPopular}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${highlight ? "text-white" : "text-[#0F172A]"}`}>
                  {name}
                </h3>
                <p className={`text-sm mb-4 ${highlight ? "text-indigo-200" : "text-muted-foreground"}`}>
                  {description}
                </p>
                <span className={`text-4xl font-bold ${highlight ? "text-white" : "text-[#0F172A]"}`}>
                  {price}
                </span>
                {price.startsWith('$') && (
                  <span className={`text-sm ml-1 ${highlight ? "text-indigo-200" : "text-muted-foreground"}`}>
                    {p.perProject}
                  </span>
                )}
              </div>

              <ul className="space-y-3 flex-1 mb-8">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2
                      size={16}
                      className={`mt-0.5 flex-shrink-0 ${highlight ? "text-indigo-200" : "text-emerald-500"}`}
                    />
                    <span className={highlight ? "text-indigo-100" : "text-[#0F172A]"}>{feature}</span>
                  </li>
                ))}
              </ul>

              <ButtonLink
                href="#contact"
                className={`w-full transition-colors duration-200 ${
                  highlight
                    ? "bg-white text-primary hover:bg-indigo-50"
                    : "bg-[#F97316] hover:bg-[#EA6C0A] text-white"
                }`}
              >
                {cta}
              </ButtonLink>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          {p.notSure}{" "}
          <a
            href="https://calendly.com/kiento0905-hec/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline cursor-pointer"
          >
            {p.bookCall}
          </a>{" "}
          {p.figureOut}
        </p>
      </div>
    </section>
  );
}
