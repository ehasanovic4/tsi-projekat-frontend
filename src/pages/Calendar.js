import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css'
import Time from '../components/Time.js'

function Kalendar() {
    const [date, setDate] = useState(new Date())
    const [showTime, setShowTime] = useState(false) 
   
   
   return (
    
    <div className="Calendar">
        <div className="CalendarTop">
      <h3 className="header">Odaberite datum termina:</h3>
      <div className="calendar-container">
      <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
      <p> </p>
    
      </div>
      
       </div> 
      <div className="CalendarBottom">
      {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p>
      <span>Odabrani datum: </span>{date.toDateString()}
   </p> 
          )
   }
         <Time showTime={showTime} date={date}/>      
          
      </div>
      <h2> Unesite podatke </h2> 
      {/* Popunjavanje forme za rezervaciju */}
<div className='pocetna' >
      <div className='rezervisi' >
    <form>
      <p> </p>
      <p> </p>
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
  <textarea style={{ color: 'indianred', lineHeight : 2, padding: 10 }}>
    Unesite dodatne napomene ili poruku za Vaš termin. </textarea> 
<p></p>
{/* potencijalno jos dodati checkbox za 'Da li zelite primati obavijesti?' */}
<input type="submit" style={{ color: 'crimson', lineHeight : 2, padding: 7 }} value="Rezerviši"/>
</form>
    </div>
   </div>

    
    </div>



     )
   
   }
   
   export default Kalendar;
