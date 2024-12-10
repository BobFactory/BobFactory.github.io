import AboutMe from "./components/about_me";
import ContactUsForm from "./components/contact_form";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Services from "./components/my_services";
import Projects from "./components/projects";

export default function Home() {
  return (
    <div className="bg-base-100">
      <Header />
      <Hero />
      <div className="divider"></div>

      {/* About Section */}
      <div id="about" className="mb-16">
        <AboutMe />
      </div>

      {/* My Services */}
      <div id="services">
        <Services />
      </div>

      {/* My Projects */}
      <div id="projects">
        <Projects />
      </div>

      {/* Contact Us */}
      <div id="contact_us">
        <ContactUsForm />
      </div>

      <Footer />
    </div>
  );
}





