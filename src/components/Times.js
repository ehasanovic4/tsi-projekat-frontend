import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css'

const time = ['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00']

function Times(props) {

 const [event, setEvent] = useState(null)
 const [info, setInfo] = useState(false)

 function displayInfo(e) {
   setInfo(true);
   setEvent(e.target.innerText);
}

return (
 
 <div className="times">
    <p>Slobodni termini:</p>
   {time.map(times => {
    return (
    <div>
      <button onClick={(e)=> displayInfo(e)}> {times} </button>
    </div>
        )
     })}
    <div>
      {info ? `Odabrali ste ${event}h, ${props.date.toDateString()}, unesite podatke` : null}
    </div>
 </div>
  )
}

export default Times;