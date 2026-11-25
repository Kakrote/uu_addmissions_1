import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { FOOTER_COLUMNS, FOOTER_QUICK_LINKS } from "@/data/admissionsData";

export default function Footer() {
  return (
    <footer
      id="sec-22"
      className="uu-section-cap bg-uu-footer text-white pt-[50px] pb-24 md:pb-[90px]"
    >
      <div className="uu-container">
        {/* Two-part grid: 5 link columns + 350px contact column per DS Board 08 */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left: 5 Link Columns + Quick Links */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-[30px]">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.heading}>
                  <h3 className="font-body font-bold text-[14px] text-white mb-[24px]">
                    {col.heading}
                  </h3>
                  <ul className="space-y-[6px]">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className={`font-body text-[14px] text-white/90 hover:text-[#FCA700] transition-colors duration-300 focus-dark ${
                            col.boldLinks ? "font-bold" : "font-normal"
                          }`}
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Quick Links Row (70px above per DS Board 08) */}
            <div className="mt-12 lg:mt-[70px] flex flex-wrap items-center gap-x-[20px] gap-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body font-bold text-[14px] text-white hover:text-[#FCA700] transition-colors duration-300 focus-dark"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: 350px Contact Column set off by 1px #6B90BD line & 50px left padding */}
          <div className="lg:w-[350px] shrink-0 lg:border-l lg:border-[#6B90BD] lg:pl-[50px] space-y-6">
            {/* Footer Logo */}
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-[5px] bg-white/10 border border-[#6B90BD] flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-lg text-[#FCA700]">
                  UU
                </span>
              </div>
              <div>
                <div className="font-display font-bold text-lg uppercase tracking-wide text-white leading-none">
                  Uttaranchal University
                </div>
                <div className="font-eyebrow text-[11px] uppercase tracking-widest text-[#A2DAF7] mt-1">
                  #UniquelyYOU
                </div>
              </div>
            </div>

            <p className="font-body text-[14px] text-white/90 leading-relaxed">
              Premnagar, Dehradun - 248007, Uttarakhand, INDIA
            </p>

            {/* Note: DS Board 08 flags Grey 9A fails 4.5:1 on blue gradient end; using high-contrast #D4E2F4 */}
            <div className="space-y-4">
              <div>
                <div className="font-body text-xs text-[#D4E2F4] flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Phone</span>
                </div>
                <a
                  href="tel:01352770300"
                  className="font-body font-medium text-[15px] text-white hover:text-[#FCA700] transition-colors focus-dark"
                >
                  0135-2770300
                </a>
                <div className="font-body text-xs text-[#A2DAF7] mt-0.5">
                  Toll-free: 1800 212 4201
                </div>
              </div>

              <div>
                <div className="font-body text-xs text-[#D4E2F4] flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5" />
                  <span>Email</span>
                </div>
                <a
                  href="mailto:university@uumail.in"
                  className="font-body font-medium text-[15px] text-white hover:text-[#FCA700] transition-colors focus-dark"
                >
                  university@uumail.in
                </a>
              </div>
            </div>

            {/* Embedded Campus Map · 10px radius per DS Board 03 & 08 */}
            <a
              href="https://maps.google.com/?q=Uttaranchal+University+Premnagar+Dehradun"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-[10px] bg-white/10 border border-white/15 p-5 hover:bg-white/15 transition-colors duration-300 focus-dark"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-[#FCA700] font-eyebrow font-bold text-xs uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Campus Map</span>
                </div>
                <span className="font-eyebrow text-[11px] text-[#A2DAF7]">
                  Open Directions ↗
                </span>
              </div>
              <div className="mt-3 h-20 rounded-[6px] bg-[#16437D]/60 border border-[#6B90BD]/40 flex flex-col items-center justify-center text-center px-3">
                <div className="font-body font-semibold text-xs text-white">
                  Arcadia Grant, Premnagar, NH-72
                </div>
                <div className="font-body text-[11px] text-[#D4E2F4] mt-0.5">
                  Dehradun · 30.3413° N, 77.9544° E
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-6 border-t border-[#6B90BD]/40 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#D4E2F4] font-body">
          <span>
            © 2027 Uttaranchal University, Dehradun. All rights reserved.
          </span>
          <span className="font-eyebrow uppercase tracking-wider text-[11px]">
            Admissions 2027–28 · #UniquelyYOU
          </span>
        </div>
      </div>
    </footer>
  );
}
