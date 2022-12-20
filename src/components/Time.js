import React, { useState } from 'react';
import Calendar from 'react-calendar';
import '../styles/Calendar.css'
import Times from '../components/Times.js'

function Time(props) {
 
    return (
    <div>
     {props.showTime ? <Times date={props.date} handleClickToOpen={props.handleClickToOpen} setTime={props.setTime}/> : null}
    </div>
     )
   }
   
   export default Time;