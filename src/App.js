import Header from "./component/header/index";
import Slider from "./component/slider/index";
import FareContainer from './component/fare-container/index';
import Footer from './component/footer/index';
import './common.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <div className="App">
        <Header/>
        <Slider/>
        <FareContainer/>
        <Footer/>
    </div>
  );
}

export default App;
