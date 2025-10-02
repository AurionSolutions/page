import ContactSection from "@/components/sections/Contact";
import HomeSection from "@/components/sections/Home";
import ProjectsSection from "@/components/sections/Projects";
import TechnologiesSection from "@/components/sections/Technologies";
import WorksSection from "@/components/sections/Works";


export default function root() {

  return (
    <main className="flex items-center justify-center flex-col max-w-[1920px] mx-auto">
      <HomeSection />
      <WorksSection />
      <ProjectsSection />
      <TechnologiesSection />
      <ContactSection />
    </main>
  )
}