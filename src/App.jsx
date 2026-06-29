import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeatureShowcase from "./components/FeatureShowcase";
import WeeklyReport from "./components/WeeklyReport";
import AppleWatch from "./components/AppleWatch";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Privacy from "./components/Privacy";
import Faq from "./components/Faq";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <FeatureShowcase />
        <WeeklyReport />
        <AppleWatch />
        <Dashboard />
        <Pricing />
        <Privacy />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
