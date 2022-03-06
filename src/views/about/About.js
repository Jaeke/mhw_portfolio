import React from 'react';
import { MenuToggler } from '../../components';

const About = () => {
  return (
    <div>
      <MenuToggler about={true} />
      <h1>This is the About page</h1>
    </div>
  );
};

export default About;
