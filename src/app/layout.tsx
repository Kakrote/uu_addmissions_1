import type { Metadata } from "next";
import { Oswald, DM_Sans, Instrument_Sans } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--oswald",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--dmsans",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--instrument",
  display: "swap",
});

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
      className={`${oswald.variable} ${dmSans.variable} ${instrumentSans.variable} scroll-smooth`}
    >
      <body className="antialiased bg-[#F5F5F5] text-black selection:bg-[#FCA700] selection:text-black">
        {children}
      </body>
    </html>
  );
}
