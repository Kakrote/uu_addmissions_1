"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandAndRankings from "@/components/BrandAndRankings";
import WelcomeAndPlacement from "@/components/WelcomeAndPlacement";
import SchoolsExplorer from "@/components/SchoolsExplorer";
import OfferAndScholarship from "@/components/OfferAndScholarship";
import CampusMediaAndInsights from "@/components/CampusMediaAndInsights";
import SocialProofAndProcess from "@/components/SocialProofAndProcess";
import Footer from "@/components/Footer";
import FloatingAndModals from "@/components/FloatingAndModals";

export default function AdmissionsLandingClient() {
  const [selectedProgramme, setSelectedProgramme] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState<string | null>(null);
  const [exitOpen, setExitOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const exitShownRef = useRef(false);
  const toastTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleShowToast = useCallback((msg: string) => {
    setToastMessage(msg);
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    toastTimerRef.current = setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  }, []);

  const handleEnquireSchool = useCallback(
    (programme: string) => {
      setSelectedProgramme(programme);
      handleShowToast(`Pre-selected "${programme}" in the enquiry form.`);
    },
    [handleShowToast]
  );

  // Desktop Exit-Intent listener
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !exitShownRef.current) {
        exitShownRef.current = true;
        setExitOpen(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setExitOpen(false);
        setLightboxTitle(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F5F5]">
      <Header />

      <main className="flex-1">
        <HeroSection
          selectedProgramme={selectedProgramme}
          onSelectProgramme={setSelectedProgramme}
          onOpenLightbox={setLightboxTitle}
          onShowToast={handleShowToast}
        />

        <BrandAndRankings />

        <WelcomeAndPlacement onOpenLightbox={setLightboxTitle} />

        <SchoolsExplorer onEnquireSchool={handleEnquireSchool} />

        <OfferAndScholarship onShowToast={handleShowToast} />

        <CampusMediaAndInsights onOpenLightbox={setLightboxTitle} />

        <SocialProofAndProcess onOpenLightbox={setLightboxTitle} />
      </main>

      <Footer />

      <FloatingAndModals
        exitOpen={exitOpen}
        onCloseExit={() => setExitOpen(false)}
        lightboxTitle={lightboxTitle}
        onCloseLightbox={() => setLightboxTitle(null)}
        toastMessage={toastMessage}
        onShowToast={handleShowToast}
      />
    </div>
  );
}
