import { AboutMe } from "../components/AboutMe";
import { AboutPsychotherapy } from "../components/AboutPsychotherapy";
import { Contact } from "../components/Contact";
import { Depoiments } from "../components/Depoiments";
import FAQ from "../components/FAQ";
import { FirstSection } from "../components/FirstSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Psychotherapy } from "../components/Psychotherapy";
import { Element } from "react-scroll";
import { WhatsAppButton } from "../components/WhatsAppButton";

export const Home = () => {
  return (
    <>
      <Header />
      <Element id="first-section" name="first-section">
        <FirstSection />
        <Psychotherapy />
      </Element>

      <Element id="about-me" name="about-me">
        <AboutMe />
      </Element>
      <Element id="psychotherapy" name="psychotherapy">
        <AboutPsychotherapy />
      </Element>
      <Element id="depoiments" name="depoiments">
        <Depoiments />
      </Element>
      <Element id="faq" name="faq">
        <FAQ />
      </Element>
      <Element id="contact" name="contact">
        <Contact />
      </Element>
      <Footer />
      <WhatsAppButton/>
    </>
  );
};
