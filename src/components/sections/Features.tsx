"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Smartphone,
  Globe,
  ShoppingCart,
  Calendar,
  Users,
  BarChart3,
  BookOpen,
  MessageSquare,
} from "lucide-react";
import { useTranslations } from "@/contexts/LanguageContext";

const serviceIcons = [Smartphone, Globe, ShoppingCart, Calendar, Users, BarChart3, BookOpen, MessageSquare];

export function Features() {
  const { t } = useTranslations();
  const f = t.features;

  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            {f.label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">{f.title}</h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">{f.sub}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {f.services.map(({ title, description }, i) => {
            const Icon = serviceIcons[i];
            return (
              <Card
                key={title}
                className="group border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-default"
              >
                <CardContent className="p-6">
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
