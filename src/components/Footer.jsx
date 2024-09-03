import React from 'react';
import '../styles/Footer.css';
import { FaWhatsapp, FaInstagram  } from "react-icons/fa6";

export const Footer = () => {
  return (

    <div className='Footer' id="footer">
    <a href="https://wa.me/34691438254?text=Hola,%20me%20interesan%20sus%20servicios!" smooth={true} duration={500}>
    <FaWhatsapp className='social-icon' />
    </a>
    <a  href="mailto:refartsev@gmail.com?" smooth={true} duration={500}>
    Refartsev@gmail.com
    </a>
    <a href="https://www.instagram.com/reformas_y_aplicados_arcodelta/" smooth={true} duration={500}>
    <FaInstagram className='social-icon' />
    </a>
</div>
  )
}
