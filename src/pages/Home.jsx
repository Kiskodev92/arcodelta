import React, { useEffect } from 'react';
import '../styles/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Logo from '../assets/LogoEmpresa.png';

export const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className='sectionHome' id='home'>
      <div className='logo-container' data-aos="fade-down">
        <img className='logoHome' src={Logo} alt="Business Logo" />
      </div>
      <div className='header-content' data-aos="fade-up" data-aos-delay="200">
        <h1 className='company-name'>CONSTRUCCIÓN Y APLICADOS ARCO DELTA</h1>
        <p className='slogan'>REFORMANDO SUEÑOS, CUMPLIENDO ILUSIONES</p>
      </div>
    </section>
  );
}
