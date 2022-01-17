import React from 'react';
import Navbar from '../components/navbar/Navbar';

const LayoutComponent = (props) => {
  return (
    <div className="parent-container">
      <Navbar />
      <div className="main-content">{props.children}</div>
    </div>
  );
};

export default LayoutComponent;
