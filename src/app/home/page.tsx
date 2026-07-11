import About from "../components/About";
import Certifications from "../components/Certifications";
import EmailSection from "../components/EmailSection";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";
import Skills from "../components/Skills";

export default function page() {
  return (
    <main className="flex min-h-screen flex-col dark:bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 sm:px-12 py-4">
        <HeroSection />
        <About />
        <Experience />
        <Skills />
        <Certifications />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
