import React, { useState, useEffect } from 'react';
import Navbar from './components/nav/Navbar';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Portfolio from './pages/portfolio/Portfolio';
import Contact from './pages/contact/Contact';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import './App.css';


function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() =>{
    const timer = setTimeout (() =>{
      updateLoad()
    }, 1200);

    return
  }, []);
  
  return (
    
    <Router className="App">
        <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/about'>
              <About />
            </Route>

            <Route exact path='/portfolio'>
              <Portfolio />
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route path='/contact'element={<Contact/>}>
              
            </Route>
             
          </Switch>
        
    </Router>
  );
}

export default App;
