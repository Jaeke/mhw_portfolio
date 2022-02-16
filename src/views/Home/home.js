import React from 'react';
import { Sidebar } from '../../components';

import './Home.style.scss';

const Home = () => {
  return (
    <div className="home_layout">
      <div className="sidebar_hidden">
        <Sidebar />
      </div>
      <div className="home_content">
        This is going to be a carousel for images
      </div>
    </div>
  );
};

export default Home;
