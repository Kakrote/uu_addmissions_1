import React from "react";
import { ArrowRight, Building2, FlaskConical, BookOpen, Home, Mic2, Users } from "lucide-react";
import { CAMPUS_TILES } from "@/data/admissionsData";

const TILE_ICONS: Record<string, React.ReactNode> = {
  campus: <Building2 className="w-7 h-7" />,
  labs: <FlaskConical className="w-6 h-6" />,
  library: <BookOpen className="w-6 h-6" />,
  hostels: <Home className="w-6 h-6" />,
  auditorium: <Mic2 className="w-6 h-6" />,
  life: <Users className="w-6 h-6" />,
};

interface WelcomeAndPlacementProps {
  onOpenLightbox: (title: string) => void;
}

export default function WelcomeAndPlacement({
  onOpenLightbox,
}: WelcomeAndPlacementProps) {
  return (
    <>
      {/* 08 · WELCOME + PHOTO GRID (Copy Block + Asymmetric 6-Tile Campus Showcase) */}
      <section id="sec-08" className="uu-section-cap bg-[#F5F5F5] py-16 md:py-24">
        <div className="uu-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            {/* Left Copy Block */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="font-eyebrow font-bold text-base md:text-[21px] text-[#16437D]">
                  Welcome to Dehradun
                </div>
                <h2
                  className="font-display font-normal tracking-[0.04em] text-black mt-1 leading-[1.15]"
                  style={{ fontSize: "var(--font-48)" }}
                >
                  Learning built around doing.
                </h2>
              </div>

              <div className="space-y-[24px] font-body text-base text-[#212121] leading-[1.66]">
                <p>
                  Founded in Premnagar, Dehradun, Uttaranchal University brings
                  twelve specialised schools together on a single residential
                  campus—combining statutory rigour with multidisciplinary
                  freedom.
                </p>
                <p>
                  From moot courts and clinical pharmacies to AI cloud studios
                  and hospitality kitchens, students learn by practising inside
                  real-world environments from their very first semester.
                </p>
              </div>

              <div className="pt-2">
                <a href="#sec-10" className="theme_btn">
                  <span>Find your course</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Asymmetric Photo Grid (6 Tiles) */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {CAMPUS_TILES.map((tile) => (
                <button
                  key={tile.id}
                  type="button"
                  onClick={() => onOpenLightbox(`Campus Gallery · ${tile.title}`)}
                  className={`group text-left relative overflow-hidden cursor-pointer focus-light transition-transform duration-300 hover:-translate-y-0.5 ${
                    tile.featured
                      ? "col-span-2 row-span-2 min-h-[260px] sm:min-h-[300px] bg-uu-feature text-white p-7 flex flex-col justify-between"
                      : "min-h-[142px] bg-white text-black p-5 flex flex-col justify-between"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <span
                      className={`inline-flex items-center justify-center rounded-[5px] p-2.5 ${
                        tile.featured
                          ? "bg-[#FCA700] text-black"
                          : "bg-[#F5F5F5] text-[#16437D] group-hover:bg-[#16437D] group-hover:text-white transition-colors duration-500"
                      }`}
                    >
                      {TILE_ICONS[tile.id]}
                    </span>
                    <span
                      className={`font-eyebrow text-[11px] font-bold uppercase tracking-wider ${
                        tile.featured ? "text-[#A2DAF7]" : "text-[#707070]"
                      }`}
                    >
                      View
                    </span>
                  </div>

                  <div>
                    <div
                      className={`font-display tracking-wide ${
                        tile.featured
                          ? "text-2xl sm:text-3xl font-bold text-white"
                          : "text-lg font-normal text-black group-hover:text-[#16437D] transition-colors duration-500"
                      }`}
                    >
                      {tile.title}
                    </div>
                    <div
                      className={`font-body text-xs sm:text-sm mt-1 ${
                        tile.featured ? "text-white/85" : "text-[#707070]"
                      }`}
                    >
                      {tile.caption}
                    </div>
                    {!tile.featured && (
                      <div
                        className="w-[40px] h-[1px] bg-[#16437D] mt-3 group-hover:w-[70px] group-hover:bg-[#FCA700] transition-all duration-500"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 09 · PLACEMENT HIGHLIGHT (Full-Width Single-Stat Feature Band) */}
      <section
        id="sec-09"
        className="uu-section-cap bg-uu-feature text-white py-16 md:py-24 text-center relative overflow-hidden"
      >
        <div className="uu-container relative z-10 space-y-4">
          <div className="font-eyebrow font-bold text-xs sm:text-sm uppercase tracking-[0.18em] text-[#A2DAF7]">
            2025 Placement Milestone
          </div>
          <div
            className="font-display font-bold tracking-tight text-[#FCA700] leading-none"
            style={{ fontSize: "var(--font-150)" }}
          >
            ₹45 LPA
          </div>
          <p className="font-body text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed pt-2">
            Highest international hospitality &amp; management package offered by
            Hyatt Regency, alongside ₹19.5 LPA from Zscaler.
          </p>
        </div>
      </section>
    </>
  );
}
