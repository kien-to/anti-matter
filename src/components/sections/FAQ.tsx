import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do I need any technical knowledge to work with Gojo?",
    a: "None at all. If you can explain your idea in plain language, we can build it. We handle all the technical complexity and explain things in terms that make sense to you.",
  },
  {
    q: "What happens after the app is built?",
    a: "That's where Gojo is different from a typical agency. We spend dedicated time teaching you how your app works — how to update content, add new features, and troubleshoot common issues. You'll receive video walkthroughs and plain-English documentation you can refer back to anytime.",
  },
  {
    q: "Who owns the app and the code when it's done?",
    a: "You do, completely. We transfer full ownership of the source code to you at the end of the project. You're never locked into using us for future work.",
  },
  {
    q: "How long does it take to build an app?",
    a: "A Starter project typically takes 4–6 weeks. A Builder project is 8–12 weeks. We work in milestones and keep you updated throughout, so there are no surprises.",
  },
  {
    q: "What if I need changes or new features after launch?",
    a: "Builder and Growth plans include post-launch support. After that period, you can either make changes yourself (that's the point of the training!), hire any developer to work on the code, or come back to us for additional work — your choice.",
  },
  {
    q: "What types of apps do you build?",
    a: "We build web apps, mobile apps (iOS + Android), internal business tools, e-commerce stores, booking systems, client portals, community platforms, and more. If you can describe what it needs to do, we can scope it out.",
  },
  {
    q: "Is there a free consultation?",
    a: "Yes. Every project starts with a free 30-minute discovery call. We'll hear about your idea, share our honest assessment, and tell you what a project would look like — no commitment required.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Questions you might have
          </h2>
          <p className="mt-4 text-muted-foreground">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a href="#contact" className="text-primary hover:underline cursor-pointer">
              Just ask us directly.
            </a>
          </p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, index) => (
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
