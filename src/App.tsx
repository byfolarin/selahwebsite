import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import GivingAttribution from "./components/GivingAttribution";
import LiveSection from "./components/LiveSection";
import MemberProfiles from "./components/MemberProfiles";
import EngagementScore from "./components/EngagementScore";
import PrivacyIntegrations from "./components/PrivacyIntegrations";
import Comparison from "./components/Comparison";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="min-h-screen bg-bg">
        <Hero />
        <GivingAttribution />
        <LiveSection />
        <MemberProfiles />
        <EngagementScore />
        <PrivacyIntegrations />
        <Comparison />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
