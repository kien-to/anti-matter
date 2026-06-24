import { CheckCircle2, XCircle } from "lucide-react";

const comparisons = [
  {
    label: "You own the source code",
    gojo: true,
    typical: false,
  },
  {
    label: "Handoff training included",
    gojo: true,
    typical: false,
  },
  {
    label: "Ongoing support & guidance",
    gojo: true,
    typical: false,
  },
  {
    label: "Plain-English documentation",
    gojo: true,
    typical: false,
  },
  {
    label: "No technical jargon required",
    gojo: true,
    typical: false,
  },
  {
    label: "You can update it yourself later",
    gojo: true,
    typical: false,
  },
];

export function WhyGojo() {
  return (
    <section id="why-gojo" className="py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Why Gojo is Different
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] leading-tight mb-6">
              Most agencies build the app.{" "}
              <span className="text-primary">We build your confidence too.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              When you hire a typical agency, you get a finished product — and complete dependence
              on them for every future change. Gojo is different. We believe you should understand
              and control your own technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every Gojo project ends with a hands-on knowledge transfer. You'll know exactly
              how your app works, how to add new features, and who to call if something
              breaks — without paying us every single time.
            </p>
          </div>

          {/* Right: comparison table */}
          <div className="rounded-2xl border border-border overflow-hidden shadow-sm">
            {/* Header row */}
            <div className="grid grid-cols-3 bg-[#F8FAFC] px-6 py-4 text-sm font-semibold text-[#0F172A] border-b border-border">
              <span className="col-span-1"></span>
              <span className="text-center text-primary">Gojo</span>
              <span className="text-center text-muted-foreground">Typical Agency</span>
            </div>

            {/* Rows */}
            {comparisons.map(({ label, gojo, typical }) => (
              <div
                key={label}
                className="grid grid-cols-3 px-6 py-4 text-sm border-b border-border last:border-0 hover:bg-[#F8FAFC] transition-colors duration-150"
              >
                <span className="text-[#0F172A] col-span-1">{label}</span>
                <span className="flex justify-center">
                  {gojo ? (
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  ) : (
                    <XCircle size={18} className="text-red-400" />
                  )}
                </span>
                <span className="flex justify-center">
                  {typical ? (
                    <CheckCircle2 size={18} className="text-emerald-500" />
                  ) : (
                    <XCircle size={18} className="text-red-400" />
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
