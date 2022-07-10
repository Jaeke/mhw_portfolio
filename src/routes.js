import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutPage from './Views/about/AboutPage';
import ProjectsPage from './Views/gallery/ProjectsPage';
import ContactPage from './Views/contact/ContactPage';
import EmailPage from './Views/email/EmailPage';
import HomePage from './Views/home/HomePage';

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
