import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import hand from "../../assets/images/image.png";
import './Navbar.css'



function Navbar() {
  return (
 
    <div className="navbar">

        <img src={hand} alt="" width={150} />
        
        <ul className='nav-links'>
            <li>Events</li>
            <li>Members</li>
            <li>Projects</li>
            <li>Gallery</li>
            <li>join us</li>
        </ul>

        <ul className='icons'>

            <li><FaFacebook  size={25}/></li>
            <li><AiFillInstagram size={25} /></li>
            <li><FaDiscord size={25} /></li>
            <li><FaLinkedin size={25} /></li>

        </ul>






    </div>

  )
}

export default Navbar