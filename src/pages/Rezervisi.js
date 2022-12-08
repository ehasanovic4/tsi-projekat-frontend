
import React, { useState } from 'react'
import SlikaPozadine from "../assets/rezervisi_back.png"
import '../styles/Rezervisi.css'
import {Link} from 'react-router-dom';
import styled from '@emotion/styled';

function getDate(){
  return [new Date().getMonth() + 1, new Date().getFullYear()]
}

function daysInMonth (month, year) {
  return new Date(year, month, 0).getDate();
} 

function Rezervisi() {
  const date = getDate();
  const [day, setDay] = useState(null);
  const numberOfDays = new Array(daysInMonth(date[1], date[0]) + 1).fill(0);
    const onClickHanlder = (e)=>{
        console.log("" + Object.values(e.target)[1].children + "<");
        setDay(Object.values(e.target)[1].children);
        //ovdje ide redirect na drugu stranicu npr /termin?dan=day
      }
  
    
  return (
    <div className='pocetna'>
      {day ? <div>Izabrani dan: {day}</div>: <div>Izabrite dan</div>}
      <DatePickerWrapper>
        {
          numberOfDays.map((day, index) => (
            <Button onClick={onClickHanlder} key={index}>
              {index + 1}
            </Button>
          ))
        }
      </DatePickerWrapper>
      {/* <ButtonPicker onClick={onClickHanlder}>Rezerviši</ButtonPicker> */}
   </div>
  )
}

const ButtonPicker = styled.button`
  width: 200px;
  margin: 0 auto;

  height: 60px;
  border-radius: 10px;

  font-size: 20px;
  font-weigth: 700;

  margin-bottom: 30px;
  &:hover{
    scale: 1.1;
  }
`

const DatePickerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-width: 900px;
  margin: 0 auto;
  padding: 30px;
  height: 100%;
`

const Button = styled.button`
  width: 130px;
  padding: 10px;
  background: rgba(0,0,0,0.3);
  border-radius: 10px;

  font-size: 18px;
  font-weight: 700;

  &:hover{
    scale: 1.05;
    background: rgba(0,0,0,0.1);
    
  box-shadow: 15px 0px 35px rgba(0, 0, 0,0.3);
  }

`

export default Rezervisi
