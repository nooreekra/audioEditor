import React from 'react';
import About from './components/about/About';
import Features from './components/features/Features';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Newsletter from './components/Newsletter';
import Project from './components/project/Project';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About /> 
      <Newsletter />
      <Project />  
      <Features />
      <Footer />
    </div>
  );
}

export default App;
