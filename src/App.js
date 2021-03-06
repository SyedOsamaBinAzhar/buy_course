import logo from './logo.svg';
import './App.css';

//importing pages
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


//importing Components
import Navbar from './Components/Reusable/Navbar/Navbar';


//importing libraries
import {BrowserRouter,Switch,Route} from "react-router-dom"
import HeroSection from './Components/NotReusable/HeroSection';
import OurStoryAndPayment from './Components/NotReusable/OurStoryAndPayment/OurStoryAndPayment';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <OurStoryAndPayment text="Our Story" buttonContent="View More"/>
      <OurStoryAndPayment text="Payment" buttonContent="View More"/>

        <BrowserRouter>
          <Switch>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>

          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
