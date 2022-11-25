import React from 'react'
import SlikaPozadine from "../assets/slika1.png"
import "../styles/Pocetna.css"
import {Link} from 'react-router-dom';

function Pocetna() {
  return (
    <div className='pocetna' style={{backgroundImage: `url(${SlikaPozadine})`}}>
      <div 
      className='headerContainer'>     
        <h1>GLOW UP</h1>
        <p>Mjesto gdje brinemo o Vašoj ljepoti</p>
        <Link to="/Rezervisi">
          <button> Rezervisi vec danas </button>
        </Link>
      </div>
    </div>
  )
}

export default Pocetna;

