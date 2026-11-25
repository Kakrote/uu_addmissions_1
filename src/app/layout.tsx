import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admissions 2027–28 | Uttaranchal University, Dehradun",
  description:
    "Apply for the 2027–28 intake across 100+ undergraduate, postgraduate, and doctoral programmes at Uttaranchal University, Dehradun (NAAC A+ Accredited).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
    >
      <body className="antialiased bg-[#F5F5F5] text-black selection:bg-[#FCA700] selection:text-black">
        {children}
      </body>
    </html>
  );
}
