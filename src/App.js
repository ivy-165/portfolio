import "./App.scss";
import { Routes, Route, useLocation } from "react-router-dom";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Skills from "./containers/skills";
import Resume from "./containers/resume";
import Navbar from "./components/navBar";
import particlesConfig from "./helpers/particlesConfig";
import Theme from "./components/theme";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const location = useLocation();
  const renderParticleJsIfCurrentPageIsHomePage = location.pathname === "/Ibhanansaini/";

  return (
    <div className="App">
      
      {/* navbar component */}
      <div className="App__navbar-wrapper">
        <Navbar />
      </div>
      {/* main page content */}
      <div className="App__main-content-wrapper">
        <Theme />
        <Routes>
          {/* create all routes */}
          <Route path="/Ibhanansaini/" index element={<Home />} />
          <Route path="/Ibhanansaini/about" element={<About />} />
          <Route path="/Ibhanansaini/skills" element={<Skills />} />
          <Route path="/Ibhanansaini/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
