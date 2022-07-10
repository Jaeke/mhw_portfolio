import React from 'react';
import { Route, Routes } from 'react-router-dom';

// import { About, Home, Projects, Contact, Email } from './views';
import About from './views/about/About';
import Home from './views/home/Home';
import Projects from './views/gallery/Projects';
import Contact from './views/contact/Contact';
import Email from './views/email/Email';

const appRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/gallery" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/email" element={<Email />} />
    </Routes>
  );
};

export default appRoutes;
