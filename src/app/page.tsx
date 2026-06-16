"use client";

import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import LessonPackages from "@/components/home/LessonPackages";
import HowItWorks from "@/components/home/HowItWorks";
import InstructorSnippet from "@/components/home/InstructorSnippet";
import FirstLessonBanner from "@/components/home/FirstLessonBanner";
import Testimonials from "@/components/home/Testimonials";
import AreasCovered from "@/components/home/AreasCovered";
import TheorySection from "@/components/home/TheorySection";
import WhatsAppSection from "@/components/home/WhatsAppSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <LessonPackages />
      <HowItWorks />
      <InstructorSnippet />
      <FirstLessonBanner />
      <Testimonials />
      <AreasCovered />
      <TheorySection />
      <WhatsAppSection />
    </>
  );
}
