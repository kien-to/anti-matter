import { ButtonLink } from "@/components/ui/button-link";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 bg-primary">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
          Ready to turn your idea into an app you truly own?
        </h2>
        <p className="text-indigo-200 text-lg leading-relaxed mb-10">
          Book a free 30-minute call. No pitch deck. No commitment.
          Just a conversation about your idea and how we can help.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <ButtonLink
            href="mailto:hello@gojo.app"
            size="lg"
            className="bg-[#F97316] hover:bg-[#EA6C0A] text-white px-10 h-12 text-base font-semibold transition-colors duration-200 shadow-lg shadow-orange-900/30"
          >
            Book a Free Call
            <ArrowRight size={18} className="ml-2" />
          </ButtonLink>
          <ButtonLink
            href="#pricing"
            size="lg"
            variant="outline"
            className="px-10 h-12 text-base border-white/40 text-white hover:bg-white/10 transition-colors duration-200"
          >
            View Pricing First
          </ButtonLink>
        </div>

        <p className="mt-8 text-sm text-indigo-300">
          Typically responds within 1 business day &mdash; no automated bots, just humans.
        </p>
      </div>
    </section>
  );
}
