"use client";

import React, { useState } from "react";
import { Award, ArrowRight, Calculator, Lock } from "lucide-react";
import { OFFER_PROGRAMMES, SCHOLARSHIP_TIERS } from "@/data/admissionsData";

interface OfferAndScholarshipProps {
  onShowToast: (msg: string) => void;
}

export default function OfferAndScholarship({
  onShowToast,
}: OfferAndScholarshipProps) {
  // Section 11: Offer Letter Generator
  const [offerProg, setOfferProg] = useState(OFFER_PROGRAMMES[0]);
  const [offerRole, setOfferRole] = useState("AI Solutions Architect");
  const [offerName, setOfferName] = useState("Rohan Negi");

  const [previewProg, setPreviewProg] = useState(OFFER_PROGRAMMES[0]);
  const [previewRole, setPreviewRole] = useState("AI Solutions Architect");
  const [previewName, setPreviewName] = useState("Rohan Negi");

  // Section 12: Scholarship Calculator
  const [scorePct, setScorePct] = useState<string>("87");
  const [needTopup, setNeedTopup] = useState(false);
  const [lockMobile, setLockMobile] = useState("");

  const numericScore = parseFloat(scorePct) || 0;
  let baseWaiver = 0;
  if (numericScore >= 95) baseWaiver = 100;
  else if (numericScore >= 85) baseWaiver = 60;
  else if (numericScore >= 75) baseWaiver = 35;
  else if (numericScore >= 65) baseWaiver = 20;

  const finalWaiver = needTopup ? Math.min(100, baseWaiver + 10) : baseWaiver;

  const handleGenerateLetter = (e: React.FormEvent) => {
    e.preventDefault();
    setPreviewProg(offerProg);
    setPreviewRole(offerRole.trim() || "Software Engineer");
    setPreviewName(offerName.trim() || "Future UUian");
    onShowToast("Provisional offer preview updated!");
  };

  const handleLockScholarship = (e: React.FormEvent) => {
    e.preventDefault();
    onShowToast(
      `Scholarship slab (${finalWaiver}% waiver) locked! Counsellor will verify documents.`
    );
    setLockMobile("");
  };

  return (
    <>
      {/* 11 · OFFER-LETTER MOCK (Sky #A2DAF7 surface with Black text & White cards) */}
      <section id="sec-11" className="uu-section-cap bg-[#A2DAF7] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
              Visualise Your Graduation Outcome
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              Generate your UU offer letter
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* 3-Step Form */}
            <form
              onSubmit={handleGenerateLetter}
              className="lg:col-span-5 bg-white p-7 space-y-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="offer-prog"
                    className="block font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D] mb-1.5"
                  >
                    Step 1 · Choose programme
                  </label>
                  <select
                    id="offer-prog"
                    value={offerProg}
                    onChange={(e) => setOfferProg(e.target.value)}
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black focus:border-[#16437D] focus:bg-white focus:outline-none"
                  >
                    {OFFER_PROGRAMMES.map((prog) => (
                      <option key={prog} value={prog}>
                        {prog}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="offer-role"
                    className="block font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D] mb-1.5"
                  >
                    Step 2 · Dream role
                  </label>
                  <input
                    id="offer-role"
                    type="text"
                    required
                    value={offerRole}
                    onChange={(e) => setOfferRole(e.target.value)}
                    placeholder="e.g. Corporate Counsel, Product Manager"
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black focus:border-[#16437D] focus:bg-white focus:outline-none"
                  />
                </div>

                <div>
                  <label
                    htmlFor="offer-name"
                    className="block font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D] mb-1.5"
                  >
                    Step 3 · Your Name
                  </label>
                  <input
                    id="offer-name"
                    type="text"
                    required
                    value={offerName}
                    onChange={(e) => setOfferName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black focus:border-[#16437D] focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <button type="submit" className="theme_btn w-full">
                <span>Generate letter</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Mock Offer Letter Preview */}
            <div className="lg:col-span-7 bg-white p-7 md:p-10 flex flex-col justify-between relative border-t-4 border-[#16437D]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/10 pb-5 mb-6">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-[5px] bg-[#16437D] text-[#FCA700] flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-display font-bold text-lg text-black uppercase tracking-wide">
                        Uttaranchal University · Placement Cell
                      </div>
                      <div className="font-eyebrow text-xs font-bold uppercase tracking-wider text-[#707070]">
                        Dehradun · Illustrative Career Preview
                      </div>
                    </div>
                  </div>
                  <span className="bg-[#FCA700] text-black px-3.5 py-1.5 font-display font-bold text-sm tracking-wider uppercase -rotate-2">
                    PLACED · 2031
                  </span>
                </div>

                <h3
                  className="font-display font-normal text-black mb-4"
                  style={{ fontSize: "var(--font-30)" }}
                >
                  Provisional Career Offer Preview
                </h3>
                <p className="font-body text-base md:text-lg text-[#212121] leading-[1.7]">
                  Dear{" "}
                  <strong className="text-[#16437D] underline decoration-[#FCA700] decoration-2 underline-offset-4">
                    {previewName}
                  </strong>
                  , congratulations. Upon completing your{" "}
                  <strong className="text-black">{previewProg}</strong> at
                  Uttaranchal University, Dehradun, you are selected for the
                  role of{" "}
                  <strong className="text-[#16437D]">{previewRole}</strong>.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 mt-8 border-t border-black/10">
                <div>
                  <div className="font-eyebrow font-bold text-[11px] uppercase tracking-wider text-[#707070]">
                    Candidate
                  </div>
                  <div className="font-body font-bold text-sm text-black mt-1">
                    {previewName}
                  </div>
                </div>
                <div>
                  <div className="font-eyebrow font-bold text-[11px] uppercase tracking-wider text-[#707070]">
                    Programme
                  </div>
                  <div className="font-body font-bold text-sm text-black mt-1">
                    {previewProg}
                  </div>
                </div>
                <div>
                  <div className="font-eyebrow font-bold text-[11px] uppercase tracking-wider text-[#707070]">
                    Class Of
                  </div>
                  <div className="font-body font-bold text-sm text-[#16437D] mt-1">
                    2031
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12 · SCHOLARSHIP CALCULATOR (4 Tiers + Live Calculator + Lock Form) */}
      <section id="sec-12" className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24">
        <div className="uu-container space-y-[36px] md:space-y-[50px]">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
              Merit &amp; Need-Based Financial Aid
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              Scholarship tiers + live calculator
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* 4 Tier Cards */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SCHOLARSHIP_TIERS.map((tier) => (
                <div
                  key={tier.id}
                  className={`p-6 relative ${
                    tier.featured
                      ? "bg-[#16437D] text-white"
                      : "bg-white text-black"
                  }`}
                >
                  <div
                    className={`font-eyebrow font-bold text-xs uppercase tracking-wider ${
                      tier.featured ? "text-[#A2DAF7]" : "text-[#707070]"
                    }`}
                  >
                    {tier.tier}
                  </div>
                  <div
                    className={`font-display font-bold text-4xl my-2 leading-none ${
                      tier.featured ? "text-[#FCA700]" : "text-[#16437D]"
                    }`}
                  >
                    {tier.waiver}
                  </div>
                  <div className="font-body font-bold text-base">
                    {tier.title}
                  </div>
                  <p
                    className={`font-body text-sm mt-2 leading-relaxed ${
                      tier.featured ? "text-white/85" : "text-[#707070]"
                    }`}
                  >
                    {tier.criteria}
                  </p>
                </div>
              ))}
            </div>

            {/* Calculator Card + Lock Form */}
            <div className="lg:col-span-6 bg-white p-7 md:p-8 space-y-5 border-t-4 border-[#FCA700]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-[5px] bg-[#16437D] text-white flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3
                  className="font-display font-normal text-black"
                  style={{ fontSize: "var(--font-24)" }}
                >
                  Calculate your 2027–28 tuition waiver
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
                <div>
                  <label
                    htmlFor="comp-score"
                    className="block font-eyebrow font-bold text-xs uppercase tracking-wider text-[#212121] mb-1.5"
                  >
                    Input Class 12 %
                  </label>
                  <input
                    id="comp-score"
                    type="number"
                    min={40}
                    max={100}
                    value={scorePct}
                    onChange={(e) => setScorePct(e.target.value)}
                    className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-lg font-display font-bold text-[#16437D] focus:border-[#16437D] focus:bg-white focus:outline-none"
                  />
                </div>
                <div className="bg-[#F8F8F8] px-4 py-3 rounded-[5px] text-xs font-body text-[#707070]">
                  Enter marks between 40% and 100% to preview merit slab
                  instantly.
                </div>
              </div>

              <label className="flex items-center gap-3 text-sm font-body font-medium text-[#212121] cursor-pointer">
                <input
                  type="checkbox"
                  checked={needTopup}
                  onChange={(e) => setNeedTopup(e.target.checked)}
                  className="accent-[#16437D] w-4 h-4"
                />
                <span>
                  Need-based / Girl Child / Defence ward top-up (+10%)
                </span>
              </label>

              <div className="bg-[#16437D] text-white p-5 flex flex-wrap items-center justify-between gap-3">
                <span className="font-eyebrow font-bold text-xs uppercase tracking-wider text-[#A2DAF7]">
                  Estimated Scholarship
                </span>
                <span className="font-display font-bold text-2xl sm:text-3xl text-[#FCA700]">
                  {finalWaiver > 0
                    ? `${finalWaiver}% Tuition Waiver`
                    : "Contact Counsellor for Aid"}
                </span>
              </div>

              {/* Lock My Scholarship Mini Form */}
              <form
                onSubmit={handleLockScholarship}
                className="pt-4 border-t border-black/10 flex flex-col sm:flex-row gap-3"
              >
                <input
                  type="tel"
                  required
                  value={lockMobile}
                  onChange={(e) => setLockMobile(e.target.value)}
                  placeholder="Enter mobile to lock scholarship"
                  aria-label="Enter mobile number to lock scholarship"
                  className="flex-1 bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black placeholder:text-[#707070] focus:border-[#16437D] focus:bg-white focus:outline-none"
                />
                <button type="submit" className="theme_btn shrink-0">
                  <Lock className="w-4 h-4" />
                  <span>Lock my scholarship</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
