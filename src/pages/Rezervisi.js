
import React from 'react'
import SlikaPozadine from "../assets/rezervisi_back.png"
import '../styles/Rezervisi.css'
import {Link} from 'react-router-dom';

function Rezervisi() {
  return (
    <div className='pocetna' style={{backgroundImage: `url(${SlikaPozadine})`}}>
      <div className='rezervisi'>
      <h1>Rezerviši uslugu: </h1>
     {/* ovdje kasnije dodati link na odabranu uslugu */ }
     <p> </p>
      <label> Odabrana usluga: <Link to="/Usluge"> Njega kose </Link>
    <p></p> 
    {/* ovo potencijalno razviti - da izbaci samo listu ostalih usluga */}
      Promijeni izbor:
      <select>
  <option value="Njega kose">Njega kose</option>
  <option selected value="Njega lica">Njega lica</option>
  <option value="Njega ruku i noktiju">Njega ruku i noktiju</option>
  <option value="Njega tijela">Njega tijela</option>
</select></label>
      <p> </p>
    <form>
  <label>
    Ime: 
    <input type="text"  style={{color: 'crimson', lineHeight : 2, padding: 7 }} name="ime"/>
    <p></p></label>
  <label>
    Prezime: 
    <input type="text" style={{ color: 'crimson', lineHeight : 2, padding: 7 }} lastname="Prezime"/>
    <p></p> </label>
  <label>
    E-mail: 
    <input type="text" style={{ color: 'crimson', lineHeight : 2, padding: 7 }} email="E-mail"/>
    <p></p>
  </label>
  Napomene:
  <textarea style={{ color: 'indianred', lineHeight : 2, padding: 7 }}>
    Unesite dodatne napomene ili poruku za Vaš termin. </textarea> 
<p></p>
{/* potencijalno jos dodati checkbox za 'Da li zelite primati obavijesti?' */}
<input type="submit" style={{ color: 'crimson', lineHeight : 2, padding: 10 }} value="Rezerviši" />


</form>

    </div>
   </div>
  )
}

export default Rezervisi
