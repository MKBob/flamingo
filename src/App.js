
import './App.css'
import Faq from './Components/faqs/Faq'
import Navbar from './Components/navbar/Navbar';
import OurTeam from './Components/OurTeam/OurTeam'
import Footer from './Components/footer/Footer';
import Home from './Components/Home/Home';
import Welcome from './Components/wellcome/Welcome'
import Slider from './Components/Slider/Slider';
import RoadmapT from './Components/RoadmapTry/RoadmapT';


function App() {
  return (
    <div className="App">
      <Home/>
      <Slider />
      <Welcome/>
      <RoadmapT/>
      <Faq/>
      <OurTeam/>
      <Footer/>
      <Navbar/>
    </div>
  );
}

export default App;
