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
          <a
            href="https://calendly.com/kiento0905-hec/new-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 h-12 text-base font-semibold rounded-lg bg-[#F97316] hover:bg-[#EA6C0A] text-white transition-colors duration-200 shadow-lg shadow-orange-900/30 cursor-pointer"
          >
            Book a Free Call
            <ArrowRight size={18} className="ml-2" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center justify-center px-10 h-12 text-base font-medium rounded-lg border border-white/50 text-white hover:bg-white/10 transition-colors duration-200 cursor-pointer"
          >
            View Pricing First
          </a>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-indigo-300">
          <a href="tel:4132104239" className="hover:text-white transition-colors duration-200 cursor-pointer">
            (413) 210-4239
          </a>
          <span className="hidden sm:block opacity-40">&bull;</span>
          <a href="mailto:kientrungto95@gmail.com" className="hover:text-white transition-colors duration-200 cursor-pointer">
            kientrungto95@gmail.com
          </a>
          <span className="hidden sm:block opacity-40">&bull;</span>
          <span>Responds within 1 business day</span>
        </div>
      </div>
    </section>
  );
}
