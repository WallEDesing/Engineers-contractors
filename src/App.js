import './App.css';
import Buildings from './components/Buildings/Buildings';
import Contact from './components/Contact Us/Contact';
import Creativity from './components/Creativity/Creativity';
import Home from './components/Home/Home';
import ContactUs from './components/Footer contact us/ContactUs';
import Legacy from './components/Legacy of Success/Legacy';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
     <Home/>
     <Contact/>
     <Buildings/>
     <Creativity/> 
     <Projects/>
     <Legacy/>
     <ContactUs/>
    </div>
  );
}

export default App;
