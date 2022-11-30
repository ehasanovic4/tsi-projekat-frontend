import React from 'react'
import { UslugeLista } from "../helpers/UslugeLista"
import UslugeItem from '../components/UslugeItem'
import "../styles/Usluge.css"

function Usluge() {
  return (
    <div className='usluge'>
      <h1 className='naslov'> Usluge </h1>      
      <div className='uslugeLista'>
        {UslugeLista.map((uslugeItem, key)=>{
          return <UslugeItem key={key} image={uslugeItem.image} name={uslugeItem.name} opis={uslugeItem.opis}/>
        })}
      </div>     
    </div>
  )
}

export default Usluge
