import React from 'react'

function UslugeItem({image, name, opis}) {
  return (
    <div className='uslugeItem'>
      <div style={{backgroundImage: `url(${image})`}}></div>
      <h1>{name}</h1>
      <p>{opis}</p>
    </div>
  )
}

export default UslugeItem
