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
      <h1 className="header">Rezerviši svoj termin</h1>
      <div className="calendar-container">
      <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
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

    </div>
     )
   
   }
   
   export default Kalendar;
