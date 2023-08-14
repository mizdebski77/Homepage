import { Navbar } from "../common/Navbar/navbar";
import { About } from "../features/About/about";
import { Home } from "../features/Home/home";
import { Skills } from "../features/Skills/skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
