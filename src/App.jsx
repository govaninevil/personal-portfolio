import {useState} from 'react'
import { BrowserRouter as Router , Route, Routes} from 'react-router-dom';


import './App.css'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ProjectPage from './pages/Project_page';
import Service from './pages/Service';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route  path="/About" Component={About} />
        <Route  path="/Contact" Component={Contact} />
        <Route  path="/Project" Component={ProjectPage} />
        <Route  path="/Service" Component={Service} />
      </Routes>
    </Router>
  )
}

export default App
