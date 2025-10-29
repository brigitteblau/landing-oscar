import { Reveal } from "./components/reveal";
import Hero from "./components/Hero.jsx";
import TechStack from "./components/TechStack.jsx";
import ManiSection from "./components/ManiSection.jsx";
import CTA from "./components/CTA.jsx";
import About from "./components/About.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Reveal as="section" className="container" staggerChildren y={28} duration={0.9}>
        <Hero />
      </Reveal>

      <Reveal as="section" className="container" y={24}>
        <TechStack />
      </Reveal>

      <Reveal as="section" className="container" y={24}>
        <ManiSection />
      </Reveal>

      <Reveal as="section" className="container" y={24}>
        <CTA />
      </Reveal>

      <Reveal as="section" className="container" y={20}>
        <About />
      </Reveal>

        <Footer />
    </>
  );
}
