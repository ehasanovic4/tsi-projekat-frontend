import React, {useState} from 'react';
import Logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo}/>
            <div className='hiddenLinks'>
            <Link to="/">Pocetna</Link>
            <Link to="/usluge">Usluge</Link>
            <Link to="/onama">O nama</Link>
            <Link to="/rezervisi">Rezerviši</Link>
            <Link to="/kontakt">Kontakt</Link>
            </div>
        </div>  
        <div className="rightSide">
            <Link to="/">Pocetna</Link>
            <Link to="/usluge">Usluge</Link>
            <Link to="/onama">O nama</Link>
            <Link to="/rezervisi">Rezerviši</Link>
            <Link to="/kontakt">Kontakt</Link>
            <button onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>  
    </div>
  )
}

export default Navbar
