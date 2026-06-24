import { Lightbulb, Hammer, GraduationCap } from "lucide-react";

const steps = [
  {
    icon: Lightbulb,
    step: "01",
    title: "Share your idea",
    description:
      "Tell us what problem you want to solve. No technical jargon needed — just explain it like you'd tell a friend.",
    color: "bg-indigo-50 text-indigo-600",
  },
  {
    icon: Hammer,
    step: "02",
    title: "We build it together",
    description:
      "Our team designs and builds your app. You stay involved at every milestone so there are no surprises.",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: GraduationCap,
    step: "03",
    title: "You learn to own it",
    description:
      "We hand off your app with a personalized training plan. You'll know how to add features, fix issues, and keep it growing.",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            The Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            From idea to independence in 3 steps
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Most agencies build your app and leave. Gojo builds it <em>and</em> makes sure
            you never need to hire someone just to change a button color.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop) */}
          <div className="hidden md:block absolute top-14 left-1/6 right-1/6 h-px bg-gradient-to-r from-indigo-200 via-orange-200 to-emerald-200" />

          {steps.map(({ icon: Icon, step, title, description, color }) => (
            <div key={step} className="flex flex-col items-center text-center">
              <div className={`relative w-28 h-28 rounded-2xl flex flex-col items-center justify-center shadow-sm ${color} mb-6`}>
                <Icon size={32} />
                <span className="absolute -top-2 -right-2 bg-[#0F172A] text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center">
                  {step}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-3">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
