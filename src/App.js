import React from 'react'
import Home from './components/Home/Home';
import Buildings from './components/Buildings/Buildings';
import Contact from './components/Contact Us/Contact';
import More from './components/More/More';
import Creativity from './components/Creativity/Creativity';
import Projects from './components/Projects/Projects';
import Legacy from './components/Legacy of Success/Legacy';
import ContactUs from './components/Footer contact us/ContactUs';
import './App.css';

//The first page of project
function App() {
  return (
    <div className="App">
     <Home/>
     <Buildings/>
     <Contact/>
     <More/>
     <Creativity/> 
     <Projects/>
     <Legacy/>
     <ContactUs/>
    </div>
  );
}

export default App;
