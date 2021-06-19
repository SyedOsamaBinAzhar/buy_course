import logo from './logo.svg';
import './App.css';

//importing pages
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';


//importing Components
import Navbar from './Components/Reusable/Navbar/Navbar';


//importing libraries
import {BrowserRouter,Switch,Route} from "react-router-dom"




function App() {
  return (
    <div className="App">
      <Navbar/>
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
