import React from 'react'
import Home from '../src/components/Home/Home';
import Buildings from './components/Buildings/Buildings';
import Contact from './components/Contact Us/Contact';
import More from './components/More/More';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home/>
      <Buildings/>
      <Contact/>
      <More/>
    </div>
  );
}

export default App;
