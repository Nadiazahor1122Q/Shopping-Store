import logo from './logo.svg';
import './App.css';
import {BrowserRouter , Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import {DataProvider} from './components/Context/Context';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Signup from './components/Signup/Signup';
import  Footer from './components/footer/footer';


function App() {
  return (
    <>
    
    <DataProvider>
       <div className="app">
              <BrowserRouter>
              <Header/>

              
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/signup" component ={Signup}/>
          <Section/>
            
              <Footer/>
              </BrowserRouter>
          
    </div>
     </DataProvider>
    </>
  );
}

export default App;
