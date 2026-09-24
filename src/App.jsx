import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Journey from './components/Journey.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Automation from './components/Automation.jsx';
import Education from './components/Education.jsx';
import Focus from './components/Focus.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:bg-signal focus:px-3 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Automation />
        <Education />
        <Focus />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
