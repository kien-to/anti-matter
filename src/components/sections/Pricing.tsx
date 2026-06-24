import { ButtonLink } from "@/components/ui/button-link";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "For simple apps with one core feature.",
    features: [
      "Up to 5 screens / pages",
      "1 core feature built",
      "1-week handoff training",
      "Plain-English documentation",
      "30 days post-launch support",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Builder",
    price: "$6,500",
    description: "For full-featured apps most founders need.",
    features: [
      "Up to 15 screens / pages",
      "Up to 5 features",
      "2-week hands-on training",
      "Video walkthroughs included",
      "90 days post-launch support",
      "1 minor update per month",
    ],
    cta: "Most Popular",
    highlight: true,
  },
  {
    name: "Growth",
    price: "Custom",
    description: "For complex products or ongoing collaboration.",
    features: [
      "Unlimited screens & features",
      "Dedicated project manager",
      "Monthly strategy sessions",
      "Priority support (24h response)",
      "Quarterly feature roadmap",
      "Team training included",
    ],
    cta: "Talk to Us",
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Transparent pricing, no surprises
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Every plan includes full source code ownership and a training program.
            You&apos;ll never be locked in.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map(({ name, price, description, features, cta, highlight }) => (
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
                  Most Popular
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
                {price !== "Custom" && (
                  <span className={`text-sm ml-1 ${highlight ? "text-indigo-200" : "text-muted-foreground"}`}>
                    / project
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
          Not sure which plan fits?{" "}
          <a
            href="https://calendly.com/kiento0905-hec/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline cursor-pointer"
          >
            Book a free 30-min call
          </a>{" "}
          and we&apos;ll figure it out together.
        </p>
      </div>
    </section>
  );
}
