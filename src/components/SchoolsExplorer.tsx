"use client";

import React, { useState } from "react";
import { FileText, ArrowRight } from "lucide-react";
import { SCHOOLS_LIST } from "@/data/admissionsData";

interface SchoolsExplorerProps {
  onEnquireSchool: (programme: string) => void;
}

export default function SchoolsExplorer({
  onEnquireSchool,
}: SchoolsExplorerProps) {
  const [level, setLevel] = useState<"UG" | "PG">("UG");

  return (
    <section id="sec-10" className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24">
      <div className="uu-container space-y-[36px] md:space-y-[50px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
              Pick your path
            </div>
            <h2
              className="font-display font-normal tracking-[0.04em] text-black mt-1"
              style={{ fontSize: "var(--font-48)" }}
            >
              12 Schools. One YOU.
            </h2>
          </div>

          {/* UG / PG Toggle */}
          <div
            className="inline-flex bg-white p-1 rounded-[5px] border border-[#D8D8D8]"
            role="tablist"
            aria-label="Course degree level"
          >
            <button
              type="button"
              role="tab"
              aria-selected={level === "UG"}
              onClick={() => setLevel("UG")}
              className={`px-6 py-3 text-sm font-body font-semibold rounded-[4px] transition-colors duration-300 cursor-pointer focus-light ${
                level === "UG"
                  ? "bg-[#16437D] text-white"
                  : "bg-transparent text-black hover:text-[#16437D]"
              }`}
            >
              UG Programmes
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={level === "PG"}
              onClick={() => setLevel("PG")}
              className={`px-6 py-3 text-sm font-body font-semibold rounded-[4px] transition-colors duration-300 cursor-pointer focus-light ${
                level === "PG"
                  ? "bg-[#16437D] text-white"
                  : "bg-transparent text-black hover:text-[#16437D]"
              }`}
            >
              PG Programmes
            </button>
          </div>
        </div>

        {/* 12 School Tiles following DS Board 05 Document Tile Anatomy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {SCHOOLS_LIST.map((school) => (
            <div
              key={school.id}
              className="uu-doc-tile flex flex-col justify-between gap-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D]">
                    School {school.code} · {level}
                  </span>
                  <FileText
                    className="w-[22px] h-[22px] text-[#16437D] shrink-0"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="uu-doc-title font-body font-medium text-lg text-black leading-snug">
                  {school.name}
                </h3>

                <p className="font-body text-sm text-[#707070] leading-relaxed">
                  {level === "UG" ? school.ug : school.pg}
                </p>
              </div>

              <a
                href="#hero-form"
                onClick={() => onEnquireSchool(school.featuredProgramme)}
                className="inline-flex items-center gap-1.5 font-body font-semibold text-sm text-[#16437D] hover:text-black transition-colors duration-500 w-fit focus-light"
              >
                <span>Enquire</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
