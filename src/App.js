import './App.css';
import Navbar from './components/Navbar';
import Pocetna from './pages/Pocetna';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element = {<Pocetna/>}/> 
      </Routes>
      </Router>
    </div>
  );
}

export default App;
