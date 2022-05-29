import React, { useState, useEffect } from 'react';

import './Projects.style.scss';
import { MenuToggler } from '../../components';
import Gallery from '../../components/gallery';
import MobileGallery from '../../components/gallery/MobileGallery';

const Projects = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  return (
    <>
      {width > 716 ? (
        <div className="projects_container">
          <MenuToggler projects={true} />
          <Gallery />
        </div>
      ) : (
        <div>
          <MobileGallery />
        </div>
      )}
    </>
  );
};

export default Projects;
