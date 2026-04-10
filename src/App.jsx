import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import FeatureShowcase from "./components/FeatureShowcase";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Privacy from "./components/Privacy";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <FeatureShowcase />
      <Pricing />
      <Features />
      <Privacy />
      <Cta />
      <Footer />
    </>
  );
}
