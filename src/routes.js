import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { About, Home, Projects, Contact } from './views';

const appRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default appRoutes;
