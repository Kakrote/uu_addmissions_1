"use client";

import React, { useEffect, useState } from "react";
import { Play, ArrowLeft, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { CULTURE_SLIDES, INDUSTRY_TABS } from "@/data/admissionsData";

interface CampusMediaAndInsightsProps {
  onOpenLightbox: (title: string) => void;
}

export default function CampusMediaAndInsights({
  onOpenLightbox,
}: CampusMediaAndInsightsProps) {
  // Section 14: Culture Carousel
  const [carouselIdx, setCarouselIdx] = useState(0);
  const [carouselPaused, setCarouselPaused] = useState(false);

  // Section 15: Industry Insights
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [tableOpen, setTableOpen] = useState(false);

  useEffect(() => {
    if (carouselPaused) return;
    const timer = setInterval(() => {
      setCarouselIdx((prev) => (prev + 1) % CULTURE_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [carouselPaused]);

  const moveCarousel = (dir: number) => {
    setCarouselIdx(
      (prev) => (prev + dir + CULTURE_SLIDES.length) % CULTURE_SLIDES.length
    );
  };

  const slide1 = CULTURE_SLIDES[carouselIdx % CULTURE_SLIDES.length];
  const slide2 = CULTURE_SLIDES[(carouselIdx + 1) % CULTURE_SLIDES.length];
  const activeTab = INDUSTRY_TABS[activeTabIdx];

  return (
    <>
      {/* 13 · CAMPUS FILM (16:9 Lightbox Poster on Stone #E2E3DE) */}
      <section id="sec-13" className="uu-section-cap bg-[#E2E3DE] py-16 md:py-24">
        <div className="uu-container">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div>
              <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
                Learn in the Doon Valley
              </div>
              <h2
                className="font-display font-normal tracking-[0.04em] text-black mt-1"
                style={{ fontSize: "var(--font-48)" }}
              >
                90-second campus film
              </h2>
            </div>

            <button
              type="button"
              onClick={() =>
                onOpenLightbox("90-Second Campus Film · Doon Valley Tour")
              }
              className="w-full aspect-video rounded-[10px] bg-uu-feature text-white flex flex-col items-center justify-center p-6 relative overflow-hidden group cursor-pointer focus-light"
            >
              <div
                className="w-20 h-20 rounded-full bg-[#FCA700] text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                aria-hidden="true"
              >
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div className="mt-5 font-display font-bold text-xl sm:text-2xl tracking-wide text-white">
                Experience Uttaranchal University in 90 Seconds
              </div>
              <div className="mt-1.5 font-eyebrow font-bold text-xs uppercase tracking-[0.14em] text-[#A2DAF7]">
                Click to launch campus film
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* 14 · CAROUSEL (Campus Culture · Square .arrow_btn + Sky Dots + 5s Auto-Advance) */}
      <section
        id="sec-14"
        className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24"
        onMouseEnter={() => setCarouselPaused(true)}
        onMouseLeave={() => setCarouselPaused(false)}
      >
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
                Life at UU
              </div>
              <h2
                className="font-display font-normal tracking-[0.04em] text-black mt-1"
                style={{ fontSize: "var(--font-48)" }}
              >
                Campus culture &amp; student spaces
              </h2>
            </div>

            {/* Arrow buttons per DS Board 04 (.arrow_btn 29px square, shadow, hover Blue) */}
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => moveCarousel(-1)}
                aria-label="Previous culture slide"
                className="arrow_btn"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => moveCarousel(1)}
                aria-label="Next culture slide"
                className="arrow_btn"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[slide1, slide2].map((s, idx) => (
              <button
                key={`${s.id}-${idx}`}
                type="button"
                onClick={() => onOpenLightbox(`Campus Space · ${s.title}`)}
                className={`text-left p-8 min-h-[260px] flex flex-col justify-between transition-colors duration-500 cursor-pointer focus-light ${
                  idx === 0
                    ? "bg-[#16437D] text-white"
                    : "bg-white text-black border-t-4 border-[#A2DAF7]"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    className={`font-display font-bold text-5xl leading-none ${
                      idx === 0 ? "text-[#FCA700]" : "text-[#16437D]"
                    }`}
                  >
                    {s.numeral}
                  </span>
                  <span
                    className={`font-eyebrow font-bold text-xs uppercase tracking-wider px-3 py-1 rounded-[5px] ${
                      idx === 0
                        ? "bg-white/15 text-[#A2DAF7]"
                        : "bg-[#A2DAF7] text-black"
                    }`}
                  >
                    {s.metric}
                  </span>
                </div>

                <div className="mt-8">
                  <div
                    className={`font-eyebrow font-bold text-xs uppercase tracking-wider ${
                      idx === 0 ? "text-[#A2DAF7]" : "text-[#16437D]"
                    }`}
                  >
                    {s.category}
                  </div>
                  <h3 className="font-display font-normal text-2xl sm:text-3xl mt-1">
                    {s.title}
                  </h3>
                  <p
                    className={`font-body text-sm sm:text-base mt-2 leading-relaxed ${
                      idx === 0 ? "text-white/85" : "text-[#707070]"
                    }`}
                  >
                    {s.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Indicator Dots (Sky #A2DAF7 for inactive fade per DS Board 01) */}
          <div className="flex items-center justify-center gap-2.5">
            {CULTURE_SLIDES.map((s, idx) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setCarouselIdx(idx)}
                aria-label={`Go to slide ${idx + 1}: ${s.title}`}
                className={`h-3 transition-all duration-300 cursor-pointer focus-light ${
                  idx === carouselIdx
                    ? "w-8 bg-[#16437D]"
                    : "w-3 bg-[#A2DAF7] hover:bg-[#FCA700]"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 15 · INDUSTRY INSIGHTS (4 Tabs + Animated Chart + UU Data Table) */}
      <section id="sec-15" className="uu-section-cap bg-[#E2E3DE] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[44px]">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
              Where the careers are growing
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              Industry outlook for 2027–2031 graduates
            </h2>
          </div>

          {/* 4 Tabs */}
          <div
            className="flex flex-wrap gap-2.5"
            role="tablist"
            aria-label="Industry growth sectors"
          >
            {INDUSTRY_TABS.map((tab, idx) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={idx === activeTabIdx}
                onClick={() => setActiveTabIdx(idx)}
                className={`px-6 py-3 rounded-[5px] font-body font-semibold text-sm transition-colors duration-500 cursor-pointer focus-light ${
                  idx === activeTabIdx
                    ? "bg-[#16437D] text-white"
                    : "bg-white text-black hover:bg-[#FCA700] hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Main Insight Card */}
          <div className="bg-white p-7 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Animated Bar Chart */}
            <div className="lg:col-span-6 space-y-5">
              <div className="font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D]">
                Projected Demand Index (2025 → 2030)
              </div>
              <div className="space-y-4">
                {activeTab.bars.map((bar, idx) => (
                  <div key={bar.label}>
                    <div className="flex justify-between font-body text-sm font-medium text-[#212121] mb-1.5">
                      <span>{bar.label}</span>
                      <span className="font-display font-bold text-base text-[#16437D]">
                        {bar.val}%
                      </span>
                    </div>
                    <div className="w-full h-4 bg-[#EEEEEE] overflow-hidden">
                      <div
                        className={`h-full transition-all duration-500 ${
                          idx === activeTab.bars.length - 1
                            ? "bg-[#FCA700]"
                            : "bg-[#16437D]"
                        }`}
                        style={{ width: `${bar.val}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Block */}
            <div className="lg:col-span-6 space-y-5">
              <h3
                className="font-display font-normal text-black"
                style={{ fontSize: "var(--font-30)" }}
              >
                {activeTab.title}
              </h3>
              <p className="font-body text-base text-[#212121] leading-[1.66]">
                {activeTab.desc}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#F8F8F8] p-5 border-l-4 border-[#16437D]">
                  <div className="font-display font-bold text-3xl text-[#16437D] leading-none">
                    {activeTab.stat1Val}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-[#707070] mt-2">
                    {activeTab.stat1Lbl}
                  </div>
                </div>
                <div className="bg-[#F8F8F8] p-5 border-l-4 border-[#FCA700]">
                  <div className="font-display font-bold text-3xl text-[#16437D] leading-none">
                    {activeTab.stat2Val}
                  </div>
                  <div className="font-body text-xs sm:text-sm text-[#707070] mt-2">
                    {activeTab.stat2Lbl}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="font-eyebrow text-xs text-[#707070]">
                  {activeTab.source}
                </span>
                <button
                  type="button"
                  onClick={() => setTableOpen((prev) => !prev)}
                  className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-[#16437D] hover:text-black transition-colors duration-300 cursor-pointer focus-light"
                >
                  <span>
                    {tableOpen ? "Hide data table" : "Expand to data table"}
                  </span>
                  {tableOpen ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Collapsible Data Table (Strictly per UU Design System Board 05) */}
          {tableOpen && (
            <div className="uu-table-responsive">
              <table className="uu-data-table">
                <thead>
                  <tr>
                    <th>Sector Track</th>
                    <th>2025 Index</th>
                    <th>2028 Projected</th>
                    <th>2031 Graduation Peak</th>
                  </tr>
                </thead>
                <tbody>
                  {INDUSTRY_TABS.map((item) => (
                    <tr key={item.id}>
                      <td className="font-semibold">{item.label}</td>
                      <td>{item.bars[0].val}%</td>
                      <td>{item.bars[1].val}%</td>
                      <td>{item.bars[2].val}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
