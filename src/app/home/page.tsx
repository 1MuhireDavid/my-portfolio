import About from "../components/About";
import EmailSection from "../components/EmailSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjectsSection from "../components/ProjectsSection";


export default function page() {
  
  return (
    <div className="">
       <main className="flex min-h-screen flex-col dark:bg-[#121212]">
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
        <HeroSection />
        <About />
        <ProjectsSection />
        <EmailSection />
      <Footer />
      </div>
    </main>
    </div>
  );
}
