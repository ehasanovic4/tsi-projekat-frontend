import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import '../styles/Kontakt.css';

function Kontakt() {
  return (
    <div className='kontakt'>
    <div className='socialMedia'>
        <InstagramIcon/>
        <FacebookIcon/>
        <MailIcon/>
        <PhoneIcon/>
      </div>
      </div>
  )
}

export default Kontakt

