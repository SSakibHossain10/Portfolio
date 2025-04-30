import Abbout from "./components/Abbout";
import Experiences from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grow">
        <Abbout />
        <Skills />
        <Experiences />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
