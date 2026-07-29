import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FeatureShowcase from "./components/FeatureShowcase";
import ResourcesGrid from "./components/ResourcesGrid";
import ClosingCTA from "./components/ClosingCTA";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="min-h-screen bg-bg">
        <Hero />
        <FeatureShowcase />
        <ResourcesGrid />
        <ClosingCTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
