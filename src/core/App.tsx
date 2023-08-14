import { Navbar } from "../common/Navbar/navbar";
import { About } from "../features/About/about";
import { Contact } from "../features/Contact/contact";
import { Education } from "../features/Education/education";
import { Home } from "../features/Home/home";
import { Porfolio } from "../features/Portfolio/portfolio";
import { Skills } from "../features/Skills/skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Porfolio />
      <Contact />
    </>
  );
}

export default App;
