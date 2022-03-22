import React from 'react';

import './Projects.style.scss';
import { MenuToggler } from '../../components';
import Gallery from '../../components/gallery';

const Projects = () => {
  return (
    <div className="projects_container">
      <MenuToggler projects={true} />
      <Gallery />
    </div>
  );
};

export default Projects;
