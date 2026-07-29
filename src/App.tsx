import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
    <SmoothScroll>
      <Nav />
      <main className="min-h-screen bg-bg">
        <Hero />
      </main>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
