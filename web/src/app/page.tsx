import Hero from "@/components/home/Hero";
import Summary from "@/components/home/Summary";
import Benefits from "@/components/home/Benefits";
import ScheduleLocation from "@/components/home/ScheduleLocation";
import Contact from "@/components/home/Contact";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Summary />
      <Benefits />
      <ScheduleLocation />
      <Contact />
      <FAQ />
    </main>
  );
}
