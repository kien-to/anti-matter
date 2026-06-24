import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Boutique owner",
    initials: "SM",
    stars: 5,
    quote:
      "I had zero coding knowledge and was terrified of the technical side. Gojo built my booking app and spent two weeks making sure I could manage it myself. I've added three new features on my own since launch.",
  },
  {
    name: "James P.",
    role: "Fitness coach",
    initials: "JP",
    stars: 5,
    quote:
      "Every other agency I talked to treated me like I couldn't understand anything. Gojo explained everything in plain English. I now know exactly what's going on under the hood of my client portal.",
  },
  {
    name: "Aisha L.",
    role: "Nonprofit director",
    initials: "AL",
    stars: 5,
    quote:
      "We were stuck paying a developer $150/hr for simple updates. After Gojo's training, my operations manager handles most changes herself. We've saved thousands already.",
  },
  {
    name: "Rafael B.",
    role: "Restaurant owner",
    initials: "RB",
    stars: 5,
    quote:
      "The app looks better than anything I expected, and I actually understand how it works now. When I needed to add a loyalty program feature, I did it myself with just the docs Gojo provided.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 bg-gradient-to-b from-[#F0F4FF] to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Real Stories
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Founders who built — and now own — their apps
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ name, role, initials, stars, quote }) => (
            <Card key={name} className="border border-border shadow-sm hover:shadow-md transition-shadow duration-200">
              <CardContent className="p-7">
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: stars }).map((_, i) => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-[#0F172A] leading-relaxed mb-6 text-sm sm:text-base">
                  &ldquo;{quote}&rdquo;
                </p>

                {/* Author */}
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
