import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footerWrapper">
        <div className="gradient"></div>
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon/>
        <FacebookIcon/>
        <MailIcon/>
        <PhoneIcon/>
      </div>
      <p> &copy; 2022 glowup.com </p>
      <p> All rights reserved. </p>
      
    </div>
    </div>
  );
}


export default Footer;