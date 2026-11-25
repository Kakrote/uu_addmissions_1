"use client";

import React, { useState } from "react";
import { ArrowUp, Phone, MessageSquare, X, Play, CheckCircle2 } from "lucide-react";

interface FloatingAndModalsProps {
  exitOpen: boolean;
  onCloseExit: () => void;
  lightboxTitle: string | null;
  onCloseLightbox: () => void;
  toastMessage: string | null;
  onShowToast: (msg: string) => void;
}

export default function FloatingAndModals({
  exitOpen,
  onCloseExit,
  lightboxTitle,
  onCloseLightbox,
  toastMessage,
  onShowToast,
}: FloatingAndModalsProps) {
  const [waNumber, setWaNumber] = useState("");

  const handleExitSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCloseExit();
    setWaNumber("");
    onShowToast("2027–28 brochure & fee structure sent on WhatsApp!");
  };

  return (
    <>
      {/* 23A · Desktop Persistent "Enquire now ↑" Pill (Fixed Bottom-Right) */}
      <a
        href="#hero-form"
        className="hidden md:inline-flex items-center gap-2 fixed bottom-6 right-6 z-40 px-6 py-3.5 rounded-full bg-[#FCA700] text-black font-body font-bold text-sm shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:bg-[#16437D] hover:text-white transition-colors duration-500 focus-light"
      >
        <span>Enquire now</span>
        <ArrowUp className="w-4 h-4" />
      </a>

      {/* 23B · Mobile Sticky Bottom Bar */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t-2 border-[#16437D] grid grid-cols-3 divide-x divide-[#D8D8D8] text-xs font-body font-bold shadow-[0_-4px_16px_rgba(0,0,0,0.12)]">
        <a
          href="tel:18002124201"
          className="py-3.5 flex items-center justify-center gap-1.5 text-[#16437D]"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call</span>
        </a>
        <a
          href="#hero-form"
          className="py-3.5 flex items-center justify-center gap-1.5 text-[#16437D]"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href="#hero-form"
          className="py-3.5 flex items-center justify-center bg-[#16437D] text-white"
        >
          Apply now →
        </a>
      </div>

      {/* 23C · Desktop Exit-Intent Modal ("Before you go") */}
      {exitOpen && (
        <div
          className="fixed inset-0 z-[1200] bg-black/65 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="exit-modal-title"
        >
          <div className="bg-white max-w-md w-full p-7 sm:p-8 relative shadow-2xl border-t-4 border-[#FCA700]">
            <button
              type="button"
              onClick={onCloseExit}
              aria-label="Close exit intent modal"
              className="arrow_btn absolute top-4 right-4"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D]">
              2027–28 Admissions Kit
            </div>
            <h3
              id="exit-modal-title"
              className="font-display font-normal text-3xl text-black mt-1"
            >
              Before you go
            </h3>
            <p className="font-body text-sm text-[#707070] mt-2 leading-relaxed">
              Get the 2027–28 brochure, fee structure, and scholarship slabs
              sent straight to your WhatsApp.
            </p>

            <form onSubmit={handleExitSubmit} className="mt-5 space-y-3.5">
              <input
                type="tel"
                required
                pattern="[0-9]{10}"
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value)}
                placeholder="Enter 10-digit WhatsApp number"
                aria-label="Enter 10-digit WhatsApp number"
                className="w-full bg-[#F6F6F6] border border-[#D8D8D8] rounded-[5px] px-4 py-3 text-sm text-black placeholder:text-[#707070] focus:border-[#16437D] focus:bg-white focus:outline-none"
              />
              <button type="submit" className="theme_btn w-full">
                Send on WhatsApp →
              </button>
              <p className="font-eyebrow text-xs text-[#707070] text-center">
                We’ll never share your number.
              </p>
            </form>
          </div>
        </div>
      )}

      {/* 23D · Media / Video Lightbox Modal */}
      {lightboxTitle && (
        <div
          className="fixed inset-0 z-[1200] bg-black/75 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-modal-title"
        >
          <div className="bg-white max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border-t-4 border-[#16437D]">
            <button
              type="button"
              onClick={onCloseLightbox}
              aria-label="Close media preview"
              className="arrow_btn absolute top-4 right-4"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="font-eyebrow font-bold text-xs uppercase tracking-wider text-[#16437D]">
              Media Preview
            </div>
            <h3
              id="lightbox-modal-title"
              className="font-display font-normal text-2xl text-black mt-1 mb-5 pr-8"
            >
              {lightboxTitle}
            </h3>

            <div className="aspect-video rounded-[10px] bg-uu-feature text-white flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-[#FCA700] text-black flex items-center justify-center mb-3">
                <Play className="w-7 h-7 fill-current ml-0.5" />
              </div>
              <div className="font-display text-xl font-bold">
                Uttaranchal University · Dehradun
              </div>
              <p className="font-body text-xs sm:text-sm text-[#A2DAF7] mt-1 max-w-md">
                High-definition campus film &amp; student story showcase ready
                for video stream integration.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* 23E · Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed top-24 right-4 z-[1300] bg-[#16437D] text-white border-l-4 border-[#FCA700] px-5 py-3.5 text-sm font-body font-medium shadow-xl flex items-center gap-2.5 max-w-sm"
        >
          <CheckCircle2 className="w-4 h-4 text-[#FCA700] shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </>
  );
}
