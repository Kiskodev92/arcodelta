import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Import images //
import faBefore from '../assets/Fachada1.jpeg';
import faAfter from '../assets/Fachada2.png';
import kitBefore from '../assets/Cocina1.jpeg';
import kitAfter from '../assets/Cocina2.jpeg';
import paintBefore from '../assets/Pintura1.png';
import paintAfter from '../assets/Pintura2.png';
import VertAfter from '../assets/Vertical1.jpeg';
import VertBefore from '../assets/Vertical2.jpeg';
import FloorBefore from '../assets/Floor1.jpeg';
import FloorAfter from '../assets/Floor2.jpeg';
import Wood1 from '../assets/Wood1.jpeg';
import Wood2 from '../assets/Wood2.jpeg';
import Wood3 from '../assets/Wood3.jpeg';
import Wood4 from '../assets/Wood4.jpeg';
import Wood5 from '../assets/Wood5.jpeg';
import Bath1 from '../assets/Bath1.jpeg';
import Bath2 from '../assets/Bath2.jpeg';
import Bath3 from '../assets/Bath3.jpeg';
import Bath4 from '../assets/Bath4.png';
import Bath5 from '../assets/Bath5.png';
import Bboard1 from '../assets/Blackboard1.jpeg';
import Bboard2 from '../assets/Blackboard2.jpeg';
import Bboard3 from '../assets/Blackboard3.jpeg';
import Bboard4 from '../assets/Blackboard4.jpeg';
import Kit1 from '../assets/Kitchen1.jpeg';
import Kit2 from '../assets/Kitchen2.jpeg';
import Kit3 from '../assets/Kitchen3.jpeg';

export const Projects = () => {
  const [expandedImage, setExpandedImage] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleImageClick = (image) => {
    setExpandedImage(image);
  };

  const handleCloseModal = () => {
    setExpandedImage(null);
  };

  const projects = [
    {
      title: 'Reparación de fachadas',
      beforeImage: faBefore,
      afterImage: faAfter,
    },
    {
      title: 'Construcción de cocinas',
      beforeImage: kitBefore,
      afterImage: kitAfter,
    },
    {
      title: 'Pinturas de interior',
      beforeImage: paintBefore,
      afterImage: paintAfter,
    },
    {
      title: 'Trabajos verticales',
      beforeImage: VertBefore,
      afterImage: VertAfter,
    },
    {
      title: 'Reformas de suelo',
      beforeImage: FloorBefore,
      afterImage: FloorAfter,
    },
  ];

  const recentProjects = [
    {
      title: 'Casas prefabricadas',
      images: [Wood1, Wood2, Wood3, Wood4, Wood5],
    },
    {
      title: 'Baños',
      images: [Bath1, Bath2, Bath3, Bath4, Bath5],
    },
    {
      title: 'Armarios',
      images: [Bboard1, Bboard2, Bboard3, Bboard4],
    },
    {
      title: 'Cocinas',
      images: [Kit1, Kit2, Kit3],
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title" data-aos="fade-up">
        Proyectos
      </h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-images">
              <div className="project-image before" onClick={() => handleImageClick(project.beforeImage)}>
                <p>Antes</p>
                <img src={project.beforeImage} alt={`Before ${project.title}`} />
              </div>
              <div className="project-image after" onClick={() => handleImageClick(project.afterImage)}>
                <p>Después</p>
                <img src={project.afterImage} alt={`After ${project.title}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="projects-title" data-aos="fade-up" style={{ marginTop: '50px' }}>
        Trabajos Recientes
      </h2>
      <div className="recent-projects-container">
        {recentProjects.map((project, index) => (
          <div className="recent-project-card" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
            <h3 className="recent-project-title">{project.title}</h3>
            <div className="recent-project-images">
              {project.images.map((image, imgIndex) => (
                <div key={imgIndex} className="recent-project-image" onClick={() => handleImageClick(image)}>
                  <img src={image} alt={`${project.title} ${imgIndex + 1}`} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <img src={expandedImage} alt="Expanded view" className="modal-image" />
          </div>
        </div>
      )}
    </section>
  );
};


