import CoachesPreview from "@/components/sections/CoachesPreview";
import Hero from "@/components/sections/Hero";
import JoinCTA from "@/components/sections/JoinCTA";
import MissionSection from "@/components/sections/MissionSection";
import SchedulePreview from "@/components/sections/SchedulePreview";
import UnitedWayPreview from "@/components/sections/UnitedWayPreview";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MissionSection />
      <UnitedWayPreview />
      <SchedulePreview />
      <CoachesPreview />
      <JoinCTA />
    </>
  );
}