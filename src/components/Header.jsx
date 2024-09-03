import React from 'react';
import Logo from '../assets/LogoEmpresa.png';
import '../styles/Header.css';
import { Link } from 'react-scroll';

export const Header = () => {

  return (
    <>
    <header className='Header'>
        <img className='logo' src={Logo} alt="Business Logo" /> 
        <div className='selection'>
            <Link to="Home" smooth={true} duration={500}>
             Sobre nosotros
            </Link>
            <Link to="Services" smooth={true} duration={500}>
            Servicios
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              Proyectos
            </Link>
            <Link to="footer" smooth={true} duration={500}>
            Contactanos
            </Link>
        </div>
    </header>
    </>
  )
}
