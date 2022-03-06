import React from 'react';
import { MenuToggler } from '../../components';

import './Projects.style.scss';

const Projects = () => {
  return (
    <div className="projects_container">
      <MenuToggler projects={true} />
      <h1>This is project gallery page</h1>
    </div>
  );
};

export default Projects;
