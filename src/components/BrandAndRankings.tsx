import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import {
  BIG_NUMBERS,
  RANK_CARDS,
  STATUTORY_SEALS,
} from "@/data/admissionsData";

export default function BrandAndRankings() {
  return (
    <>
      {/* 04 · BRAND BAND ("#UniquelyYOU" Full Width University Blue Band) */}
      <section
        id="sec-04"
        className="uu-section-cap bg-[#16437D] text-white py-12 md:py-16 text-center"
      >
        <div className="uu-container">
          <div className="font-eyebrow font-bold text-xs uppercase tracking-[0.18em] text-[#A2DAF7] mb-2">
            Uttaranchal University · Dehradun
          </div>
          <h2
            className="font-display font-bold tracking-[0.03em] text-[#FCA700]"
            style={{ fontSize: "var(--font-60)" }}
          >
            #UniquelyYOU
          </h2>
          <p className="font-body text-sm md:text-base text-white/90 max-w-xl mx-auto mt-3 leading-relaxed">
            One campus, twelve disciplines, and an academic path tailored to
            your ambition.
          </p>
        </div>
      </section>

      {/* 05 · TAPPABLE TICKER (Sky #A2DAF7 surface with Black text — 13.9:1 contrast) */}
      <a
        href="#hero-form"
        id="sec-05"
        className="uu-section-cap block py-3.5 bg-[#A2DAF7] text-black border-y border-[#16437D]/20 overflow-hidden hover:bg-[#FCA700] transition-colors duration-500 focus-light"
      >
        <div className="animate-uu-marquee font-eyebrow text-xs sm:text-sm font-bold uppercase tracking-[0.12em] flex items-center gap-6">
          <span>Admissions Open 2027–28</span>
          <span aria-hidden="true">•</span>
          <span>Uniquely YOU</span>
          <span aria-hidden="true">•</span>
          <span className="underline underline-offset-4">Apply Now →</span>
          <span aria-hidden="true">•</span>
          <span>NAAC A+ Accredited</span>
          <span aria-hidden="true">•</span>
          <span>Admissions Open 2027–28</span>
          <span aria-hidden="true">•</span>
          <span>Uniquely YOU</span>
          <span aria-hidden="true">•</span>
          <span className="underline underline-offset-4">Apply Now →</span>
          <span aria-hidden="true">•</span>
          <span>Up to 100% Merit Scholarships</span>
          <span aria-hidden="true">•</span>
        </div>
      </a>

      {/* 06 · RANKINGS & SEALS (4 Rank Cards + 5 Statutory Seals on Page Grey) */}
      <section id="sec-06" className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D] tracking-wide">
              Accreditations &amp; Benchmarks
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              Ranked. Rated. Recognised.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {RANK_CARDS.map((card) => (
              <div
                key={card.id}
                className="bg-white p-7 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="font-eyebrow font-bold text-xs uppercase tracking-widest text-[#707070]">
                    Rank {card.id}
                  </div>
                  <div className="font-display font-bold text-4xl md:text-5xl text-[#16437D] my-3 leading-none">
                    {card.numeral}
                  </div>
                  <div className="font-body font-bold text-base text-black">
                    {card.title}
                  </div>
                  <div className="font-body text-sm text-[#707070] mt-1">
                    {card.subtitle}
                  </div>
                </div>
                <div
                  className="w-[50px] h-[1px] bg-[#16437D] mt-6 group-hover:w-[80px] group-hover:bg-[#FCA700] transition-all duration-500"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>

          {/* 5 Statutory Seals */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STATUTORY_SEALS.map((seal) => (
              <div
                key={seal.code}
                className="bg-white px-5 py-4 flex items-center gap-3 border-b-2 border-[#16437D]"
              >
                <ShieldCheck className="w-5 h-5 text-[#16437D] shrink-0" />
                <div>
                  <div className="font-display font-bold text-base text-black leading-none">
                    {seal.code}
                  </div>
                  <div className="font-body text-xs text-[#707070] mt-1">
                    {seal.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 · BIG NUMBERS (10 Stat Tiles on Stone #E2E3DE warm background) */}
      <section id="sec-07" className="uu-section-cap bg-[#E2E3DE] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
                University Scale
              </div>
              <h2
                className="font-display font-normal tracking-[0.04em] text-black mt-1"
                style={{ fontSize: "var(--font-48)" }}
              >
                By the numbers
              </h2>
            </div>
            <a
              href="#hero-form"
              className="inline-flex items-center gap-2 font-body font-semibold text-sm text-[#16437D] hover:text-black transition-colors duration-300 focus-light"
            >
              <span>Download university factbook</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {BIG_NUMBERS.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 relative group hover:-translate-y-0.5 transition-transform duration-300"
              >
                <div className="font-display font-bold text-3xl md:text-4xl text-[#16437D] leading-none">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-[#212121] mt-2.5">
                  {stat.label}
                </div>
                <div
                  className="w-[40px] h-[1px] bg-[#16437D] mt-4 group-hover:bg-[#FCA700] group-hover:w-[64px] transition-all duration-500"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
