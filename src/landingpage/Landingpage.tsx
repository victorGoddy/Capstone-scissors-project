import "./landpage.css";
import Faq from "./components/Faq";
import HeroSection from "./components/HeroSection";
import Desktop1 from "./components/Desktop1";
import Section2 from "./components/Section2";
import Desktop2 from "./components/Desktop2";
import Frame22 from "./components/Frame22";
import Footer from "./components/Footer";

const Landingpage = () => {
  return (
    <section id="landingpage">
      <HeroSection />
      <Section2 />
      <Desktop1 />
      <Desktop2 />
      <Faq />
      <Frame22 />
      <Footer />
    </section>
  );
};

export default Landingpage;
