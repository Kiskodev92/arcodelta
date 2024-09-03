import React, { useEffect } from 'react';
import '../styles/index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Services = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  
  return (
    <section className="services-section" id="services">
      <h2 className="section-title" data-aos="fade-up">Nuestros Servicios</h2>
      <div className="service-category" data-aos="fade-right">
        <h3 className="service-title">Pinturas en general</h3>
        <ul className="service-list">
          <li>Decoración de fachadas, interiores.</li>
          <li>Impermeabilización y humedades.</li>
          <li>Técnicas decorativas, empapelado.</li>
          <li>Alisado de papeles, gotelé, picado, trabajos verticales.</li>
        </ul>
      </div>

      <div className="service-category" data-aos="fade-left">
        <h3 className="service-title">Reformas en general</h3>
        <ul className="service-list">
          <li>Albañilería en general, reformas integrales.</li>
          <li>Especialistas en baños y cocinas.</li>
          <li>Ampliaciones, cerramientos, porches, cuartillas.</li>
          <li>Colocación de solería, zócalos.</li>
          <li>Enfoscados, monocapas, morteros hidrófugos.</li>
          <li>Placas de ducha, ventanas.</li>
          <li>Escayola, pladur.</li>
        </ul>
      </div>

      <div className="service-category" data-aos="fade-right">
        <h3 className="service-title">Fontanería en general</h3>
        <ul className="service-list">
          <li>Instalaciones, reformas.</li>
          <li>Averías, salideros, bajantes.</li>
          <li>Montaje de sanitarios, termos.</li>
        </ul>
      </div>

      <div className="service-category" data-aos="fade-left">
        <h3 className="service-title">Limpieza en general</h3>
        <ul className="service-list">
          <li>Limpiezas integrales, terminaciones de obra.</li>
          <li>Tejados, verdina.</li>
          <li>Pintura en Vertical.</li>
        </ul>
      </div>

      <div className="service-category" data-aos="fade-right">
        <h3 className="service-title">Casas prefabricadas</h3>
        <ul className="service-list">
        <li>Diseño y planificación personalizada para casas de madera.</li>
        <li>Fabricación y montaje de módulos prefabricados con madera de alta calidad.</li>
        <li>Instalación de acabados interiores y exteriores, incluyendo suelos y revestimientos.</li>
        <li>Asesoramiento completo en materiales y técnicas de construcción sostenible.</li>
        </ul>
      </div>

      <div className="service-category" data-aos="fade-left">
        <h3 className="service-title">Trabajos verticales</h3>
        <ul className="service-list">
          <li>Nuestros expertos  proporcionan acabados impecables y duraderos para cualquier superficie vertical. </li>
          <li>Director Técnico: Antonio Martínez Bejarano.</li>
          <li>Número de Contacto: 628636246 </li>
        </ul>
      </div>
    </section>
  );
};