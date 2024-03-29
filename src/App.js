import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pocetna from './pages/Pocetna';
import Onama from './pages/Onama';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Rezervisi from './pages/Rezervisi';
import Usluge from './pages/Usluge';
import Calendar from './pages/Calendar';

/* Linija 23 dodana za kalendar!*/

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<Pocetna/>}/> 
        <Route exact path="/Rezervisi" element = {<Rezervisi/>}/> 
        <Route exact path="/Onama" element = {<Onama/>}/> 
        <Route exact path="/Usluge" element = {<Usluge/>}/> 
        <Route exact path="/Kalendar" element = {<Calendar/>}/> 
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
