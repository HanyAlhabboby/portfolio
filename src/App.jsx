import LogoSection from "./sections/LogoSection";
import NavBar from "./components/NavBar";
import FeatureCards from "./sections/FeatureCards";
import Hero from "./sections/hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import ExperienceSection from "./sections/ExperienceSection";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <LogoSection />
      {/* <FeatureCards /> */}
      <ExperienceSection />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
