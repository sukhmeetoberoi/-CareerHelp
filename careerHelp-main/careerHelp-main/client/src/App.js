

import 'bootstrap/dist/css/bootstrap.min.css';

import About from './components/About';
import CareerHelp from './components/Chatai'
import Counts from './components/Counts';
import Features from './components/Features';
import Footer from './components/Footer';
import Services from './components/Services'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom';
import HeroSection from './components/Hero';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <HeroSection/>
     <Navbar/>
      <About/>
      <Counts/>
      <Services/>
      <Features/>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
