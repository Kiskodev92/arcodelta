import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const About = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title" data-aos="fade-up">Sobre Nosotros</h2>
        <p className="about-text" data-aos="fade-up">
          En <strong>CONSTRUCCIÓN Y APLICADOS ARCO DELTA</strong>, nuestra misión es transformar tus ideas y sueños en espacios reales y funcionales. Con años de experiencia en el sector de la construcción y reformas, nos enorgullece ofrecer soluciones personalizadas y de alta calidad para cada proyecto que emprendemos.
        </p>
        <p className="about-text" data-aos="fade-up" data-aos-delay="200">
          Nos especializamos en reformas integrales, adaptándonos a las necesidades de cada cliente y cuidando cada detalle, desde la planificación hasta la ejecución. Nuestro equipo profesional está comprometido con la excelencia y la satisfacción del cliente, garantizando que cada proyecto se entregue a tiempo y con los más altos estándares.
        </p>
        <p className="about-text" data-aos="fade-up" data-aos-delay="400">
          En ARCO DELTA, entendemos que cada espacio tiene una historia y una función. Por eso, trabajamos contigo para asegurarnos de que tu visión se haga realidad, siempre cumpliendo con nuestras promesas: <strong>reformar sueños y cumplir ilusiones.</strong>
        </p>
      </div>
    </section>
  );
};