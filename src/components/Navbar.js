import React, {useState} from 'react';
import Logo from '../assets/logo.jpg';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import styled from '@emotion/styled';

function Navbar() {
    const [openLinks, setOpenLinks] = useState(false)
    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    }
/* Linija 27 i 35 dodana za kalendar!*/

  return (
    <div className="navbarWrapper"> 
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <ImageWrapper>
                <Image src={Logo}/>
            </ImageWrapper>
            <div className='hiddenLinks'>
            <Link to="/">Početna</Link>
            <Link to="/onama">O nama</Link>
            <Link to="/usluge">Usluge</Link>
            {/*<Link to="/rezervisi">Rezerviši</Link>*/}
           <Link to="/kalendar">Rezerviši termin</Link> 
            </div>
        </div>  
        <div className="rightSide">
            <Link to="/">Početna</Link>
            <Link to="/onama">O nama</Link>
            <Link to="/usluge">Usluge</Link>
{/*<Link to="/rezervisi">Rezerviši</Link>*/}
            <Link to="/kalendar">Rezerviši termin</Link>  
            <button onClick={toggleNavbar}>
            <ReorderIcon/>
            </button>
        </div>  
    </div>
    <div className="gradient"></div>
    </div>

   
  )
}

const Image = styled.img`
    width: 100%;
`

const ImageWrapper = styled.div`
    width: 70px;
    border-radius: 50%;
`

export default Navbar
