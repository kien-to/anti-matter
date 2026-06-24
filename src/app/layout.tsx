import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gojo — Your App Idea, Built and Yours to Keep",
  description:
    "Gojo helps non-technical founders build custom apps and learn to maintain them independently. From idea to launch — and beyond.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
