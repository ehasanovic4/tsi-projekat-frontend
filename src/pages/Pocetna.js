import React from 'react'
import Slika from "../assets/primer.jpg"
import styled from '@emotion/styled';
import "../styles/Pocetna.css"
import {Link} from 'react-router-dom';

function Pocetna() {
  return ( 
    <MainWrapper>
      <ImageWrapper>
        <Image src={Slika}/>
      </ImageWrapper>
      <MainContent>     
          <h1>GLOW UP</h1>
          <p>Mjesto gdje brinemo o Vašoj ljepoti proba</p>
          <Link to="/Kalendar">
            <Button> Rezerviši već danas </Button>
          </Link>
          
      </MainContent>
    </MainWrapper>
  )
}




const Button = styled.button`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  justify-content: center;
  background-color: hsl(0, 25%, 30%);
  width: 180px;
  color: white;
  text-decoration: none;
  font-size: 20px;
  padding: 5px;

  @media (max-width: 600px){
    font-size: 18px;
    padding: 10px;
  }
  `

const MainContent = styled.div`
  margin: 0 auto;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  padding-bottom: 80px;
  padding-left: 20px;
  h1 {
    font-size: 70px;
    height: 60px;
    font-weight: 50;
    color: hsl(0,25%,40%);
  }

  p { 
    padding: 0;
    font-size: 40px;
    font-weight: lighter;
    color: hsl(0, 25%, 44%);
    position: relative;
  }

  @media (max-width: 600px){
    h1{
      font-size: 50px;
    }
    p{
      font-size: 30px;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
`

const ImageWrapper = styled.div`
  max-width: 330px;
  height: 100%;

  box-shadow: 15px 0px 35px rgba(0, 0, 0,0.5);

  @media (max-width: 600px){
    display: none;
  }
`

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 600px;
`



export default Pocetna;

