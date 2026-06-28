import LoadingScreen from './components/ui/LoadingScreen';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import WorkProcess from './components/sections/WorkProcess';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import TrustSection from './components/sections/TrustSection';
import Testimonials from './components/sections/Testimonials';
import Availability from './components/sections/Availability';
import Contact from './components/sections/Contact';

export default function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Projects />
          <WorkProcess />
          <Skills />
          <Experience />
          <TrustSection />
          <Testimonials />
          <Availability />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
