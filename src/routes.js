import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home } from './views';

const appRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};

export default appRoutes;
