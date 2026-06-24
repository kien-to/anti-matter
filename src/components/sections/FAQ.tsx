"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslations } from "@/contexts/LanguageContext";

export function FAQ() {
  const { t } = useTranslations();
  const f = t.faq;

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {f.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">{f.title}</h2>
          <p className="mt-4 text-muted-foreground">
            {f.subText}{" "}
            <a href="mailto:kientrungto95@gmail.com" className="text-primary hover:underline cursor-pointer">
              {f.subLink}
            </a>
          </p>
        </div>

        <Accordion className="space-y-3">
          {f.items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index}
              className="bg-white border border-border rounded-xl px-6 data-[state=open]:shadow-sm transition-shadow duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-[#0F172A] hover:no-underline py-5 cursor-pointer">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
