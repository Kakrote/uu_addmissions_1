"use client";

import React, { useEffect, useState } from "react";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { HERO_PROGRAMMES, HERO_SLIDES, HERO_STATS } from "@/data/admissionsData";

interface HeroSectionProps {
  selectedProgramme: string;
  onSelectProgramme: (programme: string) => void;
  onOpenLightbox: (title: string) => void;
  onShowToast: (msg: string) => void;
}

export default function HeroSection({
  selectedProgramme,
  onSelectProgramme,
  onOpenLightbox,
  onShowToast,
}: HeroSectionProps) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(true);

  const activeSlide = HERO_SLIDES[slideIdx];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(
      `Application enquiry registered for ${selectedProgramme || "2027–28 Intake"}!`
    );
    setName("");
    setPhone("");
    setEmail("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIdx((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="sec-03" className="uu-section-cap bg-[#F5F5F5] pb-8 md:pb-12">
      {/* Feature Panel Gradient + Signature 25rem Hero Curve */}
      <div className="bg-uu-feature uu-hero-curve text-white relative overflow-hidden">
        {/* Subtle Architectural Grid Accent */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
          aria-hidden="true"
        />

        <div className="uu-container relative z-10 py-10 md:py-16 lg:py-20">
          {/* Interactive Slide / Video Switcher Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/15">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FCA700]" />
              <span className="font-eyebrow font-bold text-xs uppercase tracking-[0.12em] text-[#A2DAF7]">
                {activeSlide.highlight}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-black/25 backdrop-blur-xs p-1 rounded-[5px] border border-white/15">
              {HERO_SLIDES.map((s, idx) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSlideIdx(idx)}
                  className={`px-3 py-1.5 text-xs font-body font-semibold rounded-[4px] transition-colors duration-300 cursor-pointer focus-dark ${
                    idx === slideIdx
                      ? "bg-[#FCA700] text-black"
                      : "text-white/85 hover:text-white hover:bg-white/10"
                  }`}
                >
                  Slide {idx + 1}
                </button>
              ))}
              <button
                type="button"
                onClick={() => onOpenLightbox("Hero Campus Film · Autoplay Loop")}
                className="px-3 py-1.5 text-xs font-body font-semibold text-[#A2DAF7] hover:text-white border-l border-white/20 flex items-center gap-1.5 cursor-pointer focus-dark"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Video</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-12 items-start">
            {/* Left Column: Headline, Lede, CTAs & 3 Stat Boxes */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-[5px]">
                <span className="font-eyebrow font-bold text-xs uppercase tracking-wider text-[#FCA700]">
                  {activeSlide.tag}
                </span>
                <span className="text-white/50">·</span>
                <span className="font-eyebrow text-xs text-white/95">
                  {activeSlide.caption}
                </span>
              </div>

              <h1
                className="font-display font-normal leading-[1.04] tracking-[0.02em] text-white"
                style={{ fontSize: "var(--font-72)" }}
              >
                Shape a career that is{" "}
                <span className="inline-block bg-[#FCA700] text-black px-3 py-0.5 font-bold">
                  Uniquely YOU
                </span>{" "}
                in the Doon Valley.
              </h1>

              <p className="font-body text-base md:text-lg text-white/90 leading-[1.66] max-w-2xl">
                Join the 2027–28 intake across 100+ industry-aligned
                undergraduate, postgraduate, and doctoral programmes in
                Dehradun.{" "}
                <span className="text-[#A2DAF7] font-medium">
                  {activeSlide.subtitle}
                </span>
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href="#hero-form"
                  className="inline-flex items-center gap-2.5 min-h-[53px] px-8 py-3 rounded-[5px] bg-[#FCA700] text-black font-body font-bold text-base hover:bg-white hover:text-[#16437D] transition-colors duration-500 focus-dark"
                >
                  <span>Apply Now for 2027–28</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => onOpenLightbox("90-Second Campus Film")}
                  className="inline-flex items-center gap-2.5 min-h-[53px] px-7 py-3 rounded-[5px] border-2 border-white/75 text-white font-body font-semibold text-base hover:bg-white hover:text-[#16437D] transition-colors duration-500 cursor-pointer focus-dark"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch the campus film</span>
                </button>
              </div>

              {/* 3 Stat Boxes */}
              <div className="grid grid-cols-3 gap-3 sm:gap-5 pt-3">
                {HERO_STATS.map((stat) => (
                  <div
                    key={stat.id}
                    className="bg-white text-black p-4 sm:p-5 relative"
                  >
                    <div className="font-eyebrow font-bold text-[11px] uppercase tracking-wider text-[#707070]">
                      Stat {stat.id}
                    </div>
                    <div className="font-display font-bold text-2xl sm:text-4xl text-[#16437D] mt-1 leading-none">
                      {stat.value}
                    </div>
                    <div className="font-body text-xs sm:text-sm font-medium text-[#212121] mt-1.5">
                      {stat.label}
                    </div>
                    <div
                      className="w-10 h-[2px] bg-[#FCA700] mt-3"
                      aria-hidden="true"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Inline Enquiry Form (Primary Conversion) */}
            <div
              id="hero-form"
              className="lg:col-span-5 bg-white text-black p-6 sm:p-8 relative scroll-mt-36"
            >
              {/* Top Brand Accent Bar */}
              <div
                className="absolute top-0 inset-x-0 h-[5px] grid grid-cols-2"
                aria-hidden="true"
              >
                <div className="bg-[#FCA700]" />
                <div className="bg-[#16437D]" />
              </div>

              <div className="font-eyebrow font-bold text-xs uppercase tracking-[0.12em] text-[#16437D] mt-1">
                Enquiry Form · Primary Conversion
              </div>
              <h2
                className="font-display font-normal text-black mt-1 leading-tight"
                style={{ fontSize: "var(--font-30)" }}
              >
                Start your 2027–28 application
              </h2>
              <p className="font-body text-sm text-[#707070] mt-1.5 mb-6">
                Share your details and an admissions counsellor will call within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="hero-name"
                    className="block font-eyebrow font-bold uppercase text-[11px] tracking-wider text-[#212121] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="hero-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black placeholder:text-[#707070] focus:border-[#16437D] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-phone"
                    className="block font-eyebrow font-bold uppercase text-[11px] tracking-wider text-[#212121] mb-1.5"
                  >
                    Phone Number
                  </label>
                  <input
                    id="hero-phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 10-digit mobile number"
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black placeholder:text-[#707070] focus:border-[#16437D] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-email"
                    className="block font-eyebrow font-bold uppercase text-[11px] tracking-wider text-[#212121] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="hero-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@email.com"
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black placeholder:text-[#707070] focus:border-[#16437D] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="hero-programme"
                    className="block font-eyebrow font-bold uppercase text-[11px] tracking-wider text-[#212121] mb-1.5"
                  >
                    Programme
                  </label>
                  <select
                    id="hero-programme"
                    required
                    value={selectedProgramme}
                    onChange={(e) => onSelectProgramme(e.target.value)}
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black focus:border-[#16437D] focus:bg-white focus:outline-none transition-colors"
                  >
                    <option value="">Select preferred programme</option>
                    {HERO_PROGRAMMES.map((prog) => (
                      <option key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>

                <label className="flex items-start gap-2.5 pt-1 cursor-pointer text-xs text-[#707070] leading-relaxed">
                  <input
                    type="checkbox"
                    required
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-0.5 accent-[#16437D] w-4 h-4 shrink-0"
                  />
                  <span>
                    I agree to receive calls, SMS, email & WhatsApp updates from
                    Uttaranchal University regarding my 2027–28 application.
                  </span>
                </label>

                <button type="submit" className="theme_btn w-full mt-2">
                  <span>Submit Application Enquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-[#707070] pt-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16437D]" />
                  <span>Zero application fee for online enquiry</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
