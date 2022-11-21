import React from 'react'
import SlikaPozadine from "../assets/slika1.png"
import "../styles/Pocetna.css"

function Pocetna() {
  return (
    <div className='pocetna'>
      <div 
      className='headerContainer' 
      style={{backgroundImage: `url(${SlikaPozadine})`}}
      >
        <h1>GLOW UP</h1>
        <p>Mjesto gdje brinemo o Vašoj ljepoti</p>
      </div>
    </div>
  )
}

export default Pocetna;
