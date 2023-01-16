import About from './Component/About/About';
import Achievement from './Component/Achievement/Achievement';
import Blog from './Component/Blog/Blog';
import Cta from './Component/Cta/Cta';
import Features from './Component/Features/Features';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import OurTeam from './Component/OurTeam/OurTeam';

function App() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Achievement></Achievement>
      <Features></Features>
      <OurTeam></OurTeam>
      <Cta></Cta>
      <Blog></Blog>
      <Footer></Footer>
    </div>
  );
}

export default App;
