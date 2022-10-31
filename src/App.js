import Header from "./components/header/Header";
import HeloBuds from "./components/heloBuds/HeloBuds";
import GliderComp from "./components/glider/Glider";
import ProjectDetail from "./components/project-detail/ProjectDetail";
import LeatestProject from "./components/leatestProject/LeatestProject";
import HireMe from "./components/hireMe/HireMe";
import ToolsSkills from "./components/tools and skills/ToolsSkills";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Header/>
      <HeloBuds/>
      <GliderComp/>
      <ProjectDetail/>
      <LeatestProject/>
      <HireMe/>
      <ToolsSkills/>
      <Footer/>
  
    </div>
  );
}

export default App;
