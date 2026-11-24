import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Safe from "./components/Safe";
import { About, Skills, Experience, Education, Certifications, Qualities } from "./components/Sections";
import { Contact, Footer } from "./components/Contact";

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black">Skip to content</a>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Safe />
        <Experience />
        <Education />
        <Certifications />
        <Qualities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}