"use client";

import React, { useState } from "react";
import { Phone, MessageSquare, Menu, X, ArrowRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Courses", href: "#sec-10" },
  { label: "Scholarships", href: "#sec-12" },
  { label: "Placements", href: "#sec-09" },
  { label: "Campus", href: "#sec-14" },
  { label: "FAQs", href: "#sec-20" },
];

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      {/* 01 · UTILITY BAR */}
      <div className="bg-[#16437D] text-white border-b border-white/15">
        <div className="uu-container py-2 flex flex-wrap items-center justify-between gap-2 text-xs font-body">
          <div className="flex items-center gap-3">
            <span className="bg-[#FCA700] text-black font-eyebrow font-bold uppercase tracking-wider px-2.5 py-0.5 text-[11px] rounded-[5px]">
              Admissions 2027–28
            </span>
            <span className="hidden sm:inline text-white/90">
              Premnagar, Dehradun · NAAC A+ Accredited
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 font-medium">
            <a
              href="tel:18002124201"
              className="hover:text-[#FCA700] transition-colors duration-300 focus-dark"
            >
              Toll-free: 1800 212 4201
            </a>
            <span className="text-white/35" aria-hidden="true">
              |
            </span>
            <a
              href="#hero-form"
              className="hover:text-[#FCA700] transition-colors duration-300 focus-dark"
            >
              WhatsApp
            </a>
            <span className="text-white/35" aria-hidden="true">
              |
            </span>
            <a
              href="#hero-form"
              className="font-bold underline underline-offset-4 hover:text-[#FCA700] transition-colors duration-300 focus-dark"
            >
              Login
            </a>
          </div>
        </div>
      </div>

      {/* 02 · STICKY HEADER (UU Design System Board 07) */}
      <header className="sticky top-0 z-[1090] bg-[#F5F5F5]/95 backdrop-blur-md border-b border-black/10 transition-colors duration-500">
        {/* Signature 5px Amber & Blue top bar */}
        <div className="w-full h-[5px] grid grid-cols-2" aria-hidden="true">
          <div className="bg-[#FCA700]" />
          <div className="bg-[#16437D]" />
        </div>

        <div className="w-full max-w-[2545px] mx-auto px-4 sm:px-6 lg:px-[55px]">
          <div className="flex items-center justify-between gap-4 min-h-[76px] lg:min-h-[112px] xl:min-h-[139px]">
            {/* Brand Logo Lockup (up to 460px wide) */}
            <a
              href="#"
              className="flex items-center gap-3.5 max-w-[460px] group focus-light rounded-[5px] py-1"
            >
              <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-[5px] bg-[#16437D] text-white flex items-center justify-center shrink-0 relative overflow-hidden">
                <svg
                  viewBox="0 0 40 40"
                  className="w-7 h-7"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M8 8V22C8 28.6274 13.3726 34 20 34C26.6274 34 32 28.6274 32 22V8"
                    stroke="#FCA700"
                    strokeWidth="3.5"
                    strokeLinecap="square"
                  />
                  <path
                    d="M15 8V21C15 23.7614 17.2386 26 20 26C22.7614 26 25 23.7614 25 21V8"
                    stroke="#FFFFFF"
                    strokeWidth="3"
                    strokeLinecap="square"
                  />
                </svg>
              </div>
              <div>
                <div className="font-display font-bold text-lg sm:text-2xl tracking-wide uppercase text-black leading-none group-hover:text-[#16437D] transition-colors duration-500">
                  Uttaranchal University
                </div>
                <div className="font-eyebrow font-bold text-[11px] uppercase tracking-[0.14em] text-[#16437D] mt-1">
                  Dehradun · Uniquely YOU
                </div>
              </div>
            </a>

            {/* Right Cluster: 5 Nav Links + Action Cluster */}
            <div className="flex items-center">
              {/* 5 Uppercase Nav Links (hidden below 1366px per DS Board 07) */}
              <nav
                aria-label="Primary Navigation"
                className="hidden min-[1366px]:flex items-center gap-[32px] min-[1600px]:gap-[50px] mr-[40px] min-[1600px]:mr-[50px]"
              >
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-body font-medium text-[18px] min-[1600px]:text-[21px] uppercase tracking-[0.1em] text-black hover:text-[#16437D] transition-colors duration-500 whitespace-nowrap focus-light rounded-[4px] py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              {/* Action Buttons Cluster */}
              <div className="flex items-center gap-[10px]">
                <a href="#hero-form" className="apply_btn text-sm sm:text-base whitespace-nowrap">
                  Apply Now
                </a>

                <a
                  href="tel:18002124201"
                  aria-label="Call Admissions Toll-Free 1800 212 4201"
                  className="info_btn hidden sm:inline-flex"
                >
                  <Phone className="w-[24px] h-[24px]" strokeWidth={1.9} />
                </a>

                <a
                  href="#hero-form"
                  aria-label="Enquire via WhatsApp or Chat"
                  className="info_btn hidden sm:inline-flex"
                >
                  <MessageSquare className="w-[24px] h-[24px]" strokeWidth={1.9} />
                </a>

                <button
                  type="button"
                  onClick={() => setDrawerOpen(true)}
                  aria-label="Open navigation menu"
                  className="inline-flex items-center justify-center w-[48px] h-[48px] sm:w-[53px] sm:h-[53px] ml-[6px] sm:ml-[10px] text-[#16437D] hover:text-[#FCA700] transition-colors duration-500 cursor-pointer focus-light rounded-[5px]"
                >
                  <Menu className="w-[28px] h-[28px]" strokeWidth={2.1} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Navigation Drawer (for <1366px and quick directory access) */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-[1100] bg-black/55 backdrop-blur-xs flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="w-full max-w-sm bg-[#F5F5F5] h-full flex flex-col justify-between p-7 shadow-2xl border-l-4 border-[#16437D]">
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-black/15">
                <div>
                  <div className="font-eyebrow font-bold text-xs uppercase tracking-widest text-[#16437D]">
                    Admissions 2027–28
                  </div>
                  <div className="font-display text-2xl font-bold uppercase text-black">
                    Explore UU
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation menu"
                  className="info_btn"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-2">
                {NAV_LINKS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="bg-white px-5 py-4 font-body font-medium text-lg uppercase tracking-[0.08em] text-black hover:text-[#16437D] flex items-center justify-between transition-colors duration-500 border-b-2 border-transparent hover:border-[#16437D] focus-light"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#16437D]" />
                  </a>
                ))}
              </nav>
            </div>

            <div className="space-y-3 pt-6 border-t border-black/15">
              <a
                href="#hero-form"
                onClick={() => setDrawerOpen(false)}
                className="theme_btn w-full"
              >
                Apply Now for 2027–28
              </a>
              <div className="grid grid-cols-2 gap-2.5 text-center text-xs font-body font-semibold">
                <a
                  href="tel:18002124201"
                  className="bg-white py-3 px-3 rounded-[5px] text-[#16437D] hover:bg-[#FCA700] hover:text-black transition-colors duration-500"
                >
                  1800 212 4201
                </a>
                <a
                  href="#sec-12"
                  onClick={() => setDrawerOpen(false)}
                  className="bg-white py-3 px-3 rounded-[5px] text-[#16437D] hover:bg-[#FCA700] hover:text-black transition-colors duration-500"
                >
                  Scholarships
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
