import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  AboutPage,
  HomePage,
  ProjectsPage,
  ContactPage,
  EmailPage,
} from './views';

const appRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/home" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/gallery" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/email" element={<EmailPage />} />
    </Routes>
  );
};

export default appRoutes;
