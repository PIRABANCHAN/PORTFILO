import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Tools from "../components/Tools";
import Projects from "../components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Certificate } from "crypto";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Tools />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}