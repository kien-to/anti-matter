import Link from "next/link";
import { Zap, Phone, Mail, CalendarDays } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Refund Policy", href: "#refunds" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-4">
              <span className="bg-primary rounded-lg p-1.5">
                <Zap size={16} />
              </span>
              Gojo
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Helping non-technical founders build apps they understand, own, and can grow.
            </p>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="tel:4132104239"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Phone size={14} className="text-slate-500" />
                  (413) 210-4239
                </a>
              </li>
              <li>
                <a
                  href="mailto:kientrungto95@gmail.com"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <Mail size={14} className="text-slate-500" />
                  kientrungto95@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/kiento0905-hec/new-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  <CalendarDays size={14} className="text-slate-500" />
                  Book a free call
                </a>
              </li>
            </ul>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Gojo. All rights reserved.
          </p>
          <p className="text-sm text-slate-500">
            Built for founders who build — not just for coders.
          </p>
        </div>
      </div>
    </footer>
  );
}
