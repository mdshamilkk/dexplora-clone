import Hero from "./components/Hero";
import UpcomingTrips from "./components/UpcomingTrips";
import Itinerary from "./components/Itinerary";
import Activities from "./components/Activities";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#050505] text-white overflow-x-hidden w-full">

      {/* HERO */}
      <Hero />

      {/* UPCOMING TRIPS */}
      <UpcomingTrips />

      {/* ITINERARY */}
      <Itinerary />

      {/* ACTIVITIES */}
      <Activities />

      {/* CTA */}
      <CTA />

      {/* FOOTER */}
      <Footer />

    </main>
  );
}