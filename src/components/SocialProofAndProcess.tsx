"use client";

import React, { useState } from "react";
import { Play, Phone, MessageSquare, ArrowRight, Globe2, Plus, Minus } from "lucide-react";
import {
  FAQS,
  INTERNATIONAL_PARTNERS,
  PROCESS_STEPS,
  TESTIMONIALS,
} from "@/data/admissionsData";

interface SocialProofAndProcessProps {
  onOpenLightbox: (title: string) => void;
}

const FAQ_CATS: { key: "all" | "admissions" | "fees" | "campus"; label: string }[] = [
  { key: "all", label: "All" },
  { key: "admissions", label: "Admissions" },
  { key: "fees", label: "Fees" },
  { key: "campus", label: "Campus" },
];

const TRUST_BADGES = ["NAAC A+", "UGC", "BCI", "PCI", "AICTE", "AIU"];

export default function SocialProofAndProcess({
  onOpenLightbox,
}: SocialProofAndProcessProps) {
  const [faqCat, setFaqCat] = useState<"all" | "admissions" | "fees" | "campus">(
    "all"
  );
  const [openFaqId, setOpenFaqId] = useState<string>("f1");

  const filteredFaqs =
    faqCat === "all" ? FAQS : FAQS.filter((item) => item.cat === faqCat);

  const handleFaqCategory = (cat: "all" | "admissions" | "fees" | "campus") => {
    setFaqCat(cat);
    const nextList = cat === "all" ? FAQS : FAQS.filter((f) => f.cat === cat);
    if (nextList.length > 0) {
      setOpenFaqId(nextList[0].id);
    }
  };

  return (
    <>
      {/* 16 · INTERNATIONAL FOOTPRINT BAND (Sky #A2DAF7 surface with Black text) */}
      <section id="sec-16" className="uu-section-cap bg-[#A2DAF7] py-14 md:py-20">
        <div className="uu-container">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 font-eyebrow font-bold text-xs uppercase tracking-[0.14em] text-[#16437D] mb-2">
                <Globe2 className="w-4 h-4" />
                <span>Global Collaborations</span>
              </div>
              <h2
                className="font-display font-normal text-black"
                style={{ fontSize: "var(--font-42)" }}
              >
                35+ partner universities worldwide
              </h2>
              <p className="font-body text-sm md:text-base text-[#212121] mt-2 leading-relaxed">
                Semester exchange, credit transfer, twinning, and dual-degree
                pathways across 4 continents.
              </p>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-8 gap-2.5">
              {INTERNATIONAL_PARTNERS.map((country) => (
                <div
                  key={country.code}
                  className="bg-white px-3 py-3 text-center border-b-2 border-[#16437D]"
                >
                  <div className="font-display font-bold text-base text-[#16437D]">
                    {country.code}
                  </div>
                  <div className="font-body text-[11px] font-medium text-[#212121] mt-0.5">
                    {country.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 17 · TESTIMONIALS (3 Video Testimonial Cards on Page Grey) */}
      <section id="sec-17" className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
              Straight from students
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              Video testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.id}
                className="bg-white p-8 flex flex-col justify-between gap-6 border-t-4 border-[#16437D]"
              >
                <div className="space-y-5">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-full bg-[#16437D] text-[#FCA700] flex items-center justify-center font-display font-bold text-base shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <div className="font-body font-bold text-base text-black">
                        {item.name}
                      </div>
                      <div className="font-body text-xs text-[#707070] mt-0.5">
                        {item.meta}
                      </div>
                    </div>
                  </div>

                  <p className="font-body text-base text-[#212121] leading-[1.66]">
                    “{item.quote}”
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenLightbox(item.videoTitle)}
                  className="theme_btn w-full"
                >
                  <Play className="w-4 h-4 fill-current" />
                  <span>Watch story</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 18 · 4-STEP ADMISSIONS PROCESS (Stone #E2E3DE surface) */}
      <section id="sec-18" className="uu-section-cap bg-[#E2E3DE] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
              Ready? Let’s talk.
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              Admissions process in 4 steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-white p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block bg-[#16437D] text-[#FCA700] font-display font-bold text-2xl px-3.5 py-1 mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-display font-normal text-2xl text-black">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm md:text-base text-[#707070] mt-2 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div
                  className="w-[50px] h-[1px] bg-[#16437D] mt-6"
                  aria-hidden="true"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 19 · CONTACT BAND (Feature Panel Gradient) */}
      <section id="sec-19" className="uu-section-cap bg-uu-feature text-white py-12 md:py-16">
        <div className="uu-container flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-eyebrow font-bold text-xs uppercase tracking-[0.14em] text-[#A2DAF7]">
              Direct Admissions Helpline
            </div>
            <h2
              className="font-display font-normal text-white mt-1"
              style={{ fontSize: "var(--font-42)" }}
            >
              Prefer to just talk?
            </h2>
          </div>

          <div className="flex flex-wrap gap-3.5">
            <a
              href="tel:18002124201"
              className="inline-flex items-center gap-2.5 min-h-[53px] px-7 py-3 rounded-[5px] bg-[#FCA700] text-black font-body font-bold text-base hover:bg-white hover:text-[#16437D] transition-colors duration-500 focus-dark"
            >
              <Phone className="w-4 h-4" />
              <span>Call 1800 212 4201</span>
            </a>

            <a
              href="#hero-form"
              className="inline-flex items-center gap-2.5 min-h-[53px] px-7 py-3 rounded-[5px] border-2 border-white/75 text-white font-body font-semibold text-base hover:bg-white hover:text-[#16437D] transition-colors duration-500 focus-dark"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Counselling</span>
            </a>
          </div>
        </div>
      </section>

      {/* 20 · FAQ (Accordion + Category Tabs on Page Grey) */}
      <section id="sec-20" className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
                Got questions?
              </div>
              <h2
                className="font-display font-normal tracking-[0.04em] text-black mt-1"
                style={{ fontSize: "var(--font-48)" }}
              >
                Frequently asked questions
              </h2>
            </div>

            <div
              className="flex flex-wrap gap-2"
              role="tablist"
              aria-label="FAQ categories"
            >
              {FAQ_CATS.map((cat) => (
                <button
                  key={cat.key}
                  type="button"
                  role="tab"
                  aria-selected={faqCat === cat.key}
                  onClick={() => handleFaqCategory(cat.key)}
                  className={`px-5 py-2.5 rounded-[5px] font-body font-semibold text-sm transition-colors duration-500 cursor-pointer focus-light ${
                    faqCat === cat.key
                      ? "bg-[#16437D] text-white"
                      : "bg-white text-black hover:bg-[#FCA700] hover:text-black"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 max-w-4xl">
            {filteredFaqs.map((item, idx) => {
              const isOpen = openFaqId === item.id;
              return (
                <div key={item.id} className="bg-white">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqId(isOpen ? "" : item.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus-light"
                  >
                    <span className="font-body font-semibold text-base text-black flex items-baseline gap-3">
                      <span className="font-display font-bold text-lg text-[#16437D]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span>{item.q}</span>
                    </span>
                    <span className="w-8 h-8 shrink-0 bg-[#F5F5F5] text-[#16437D] flex items-center justify-center">
                      {isOpen ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 pl-14 font-body text-base text-[#212121] leading-[1.66] border-t border-black/5">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 21 · CLOSING CTA + TRUST-BADGE ROW */}
      <section
        id="sec-21"
        className="uu-section-cap bg-[#16437D] text-white py-16 md:py-24 text-center"
      >
        <div className="uu-container max-w-4xl space-y-6">
          <div className="font-eyebrow font-bold text-xs sm:text-sm uppercase tracking-[0.16em] text-[#A2DAF7]">
            Admissions Open 2027–28 · Dehradun
          </div>
          <h2
            className="font-display font-normal text-white leading-[1.12]"
            style={{ fontSize: "var(--font-48)" }}
          >
            Your seat at Uttaranchal University starts with one step.
          </h2>
          <p className="font-body text-base md:text-lg text-white/85 max-w-2xl mx-auto">
            Apply early to lock merit scholarships and priority hostel
            allocation for the 2027–28 session.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#hero-form"
              className="inline-flex items-center gap-2.5 min-h-[53px] px-8 py-3 rounded-[5px] bg-[#FCA700] text-black font-body font-bold text-base hover:bg-white hover:text-[#16437D] transition-colors duration-500 focus-dark"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="tel:18002124201"
              className="inline-flex items-center gap-2.5 min-h-[53px] px-7 py-3 rounded-[5px] border-2 border-white/75 text-white font-body font-semibold text-base hover:bg-white hover:text-[#16437D] transition-colors duration-500 focus-dark"
            >
              <Phone className="w-4 h-4" />
              <span>Call 1800 212 4201</span>
            </a>
          </div>

          {/* 6 Trust Badges */}
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 pt-8">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge}
                className="border border-[#6B90BD] bg-white/5 py-3 font-display font-bold text-base tracking-wider text-white"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
