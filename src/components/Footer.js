import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import '../styles/Footer.css';

import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";



function Footer() {
const [open, setOpen] = React.useState(false);

const handleClickToOpen = () => {
  setOpen(true);
};

const handleToClose = () => {
  setOpen(false);
};

  return (
    <div className="footerWrapper">
        <div className="gradient"></div>
    <div className="footer">
      <div className="socialMedia">
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
      <InstagramIcon /></a>

      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
      <FacebookIcon/></a>

      <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer">
      <MailIcon/></a>
       
      <PhoneIcon  
              onClick={handleClickToOpen}>
        
      </PhoneIcon>
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle>{"Kontaktirajte nas na broj:"}</DialogTitle>
        <DialogContent>
          <DialogContentText>
             +387 62 000 000
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <PhoneIcon onClick={handleToClose} 
                  color="primary" autoFocus>
            Zatvori
          </PhoneIcon>
        </DialogActions>
      </Dialog>


        
      </div>
      <p> &copy; 2022 glowup.com </p>
      <p> All rights reserved. </p>
      
    </div>
    </div>
  );
}


export default Footer;