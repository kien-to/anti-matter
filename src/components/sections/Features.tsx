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

const services = [
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "iOS and Android apps for your business, customers, or community.",
  },
  {
    icon: Globe,
    title: "Web Apps",
    description: "Custom web platforms that work on any device, any browser.",
  },
  {
    icon: ShoppingCart,
    title: "Online Stores",
    description: "Sell products or services with a storefront that's truly yours.",
  },
  {
    icon: Calendar,
    title: "Booking Systems",
    description: "Let customers schedule appointments, classes, or consultations.",
  },
  {
    icon: Users,
    title: "Community Platforms",
    description: "Membership sites, forums, or directories for your audience.",
  },
  {
    icon: BarChart3,
    title: "Internal Tools",
    description: "Dashboards and workflows that replace clunky spreadsheets.",
  },
  {
    icon: BookOpen,
    title: "Course Platforms",
    description: "Deliver training, lessons, or content to your students.",
  },
  {
    icon: MessageSquare,
    title: "Client Portals",
    description: "Secure spaces where you collaborate with your clients online.",
  },
];

export function Features() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 bg-[#F8FAFC]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            What We Build
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A]">
            Any app you can imagine
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            If you can describe it, we can build it — and teach you how to run it.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ icon: Icon, title, description }) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
