import React from 'react';

import { Sidebar, Slider } from '../../components';
import './Home.style.scss';

const Home = () => {
  return (
    <div className="home_layout">
      <div className="sidebar_hidden">
        <Sidebar />
      </div>
      <div className="home_content">
        <Slider />
      </div>
    </div>
  );
};

export default Home;
