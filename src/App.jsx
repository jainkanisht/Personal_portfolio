import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0); // Remove this line if not needed

  return (
    <>
      <Navbar/>
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
      <Footer/>
    </>
  );
}

export default App;