import { Header } from "@/components/Header";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Stats } from "@/components/Stats";
import { GitHubSection } from "@/components/GitHubSection";
import { Blog } from "@/components/Blog";
import { Testimonials } from "@/components/Testimonials";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Certifications />
        <Education />
        <Stats />
        <GitHubSection />
        <Blog />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
