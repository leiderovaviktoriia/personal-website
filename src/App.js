import AboutMe from "./components/AboutMe/AboutMe";
import CardContainer from "./components/CardContainer/CardContainer";
import Description from "./components/Description/Description";
import ExamplesContainer from "./components/ExamplesContainer/ExamplesContainer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Section from "./layouts/Section";

function App() {
  return (
    <>
      <Header />
      <Section className="information" id="home">
        <AboutMe name="Viktoriia Leiderova" />
        <Description />
      </Section>
      <Section className="work-experience" id="work-experience">
        <h3>Work Experience</h3>
        <CardContainer />
      </Section>
      <Section className="skills">
        <Skills />
      </Section>
      <Section className="examples" id="examples">
        <ExamplesContainer />
      </Section>
      <Section className="contact" id="contact">
        <Footer />
      </Section>
    </>
  );
}

export default App;
