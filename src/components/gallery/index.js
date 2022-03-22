import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';

import './Gallery.style.scss';
import { imgData } from './imgData';

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState([]);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  return (
    <>
      <div className={modal ? 'modal open' : 'modal'}>
        {tempImgSrc.map((img, i) => (
          <img key={i} src={img} alt="img" />
        ))}
        <IoCloseOutline
          className="close_modal"
          onClick={() => {
            setModal(false);
          }}
        />
      </div>
      <motion.div
        className="gallery"
        initial={{ y: '-50px', opacity: 0 }}
        animate={{
          y: '0px',
          x: '0px',
          opacity: 1,
        }}
        transition={{
          type: 'tween',
          duration: 1,
        }}
      >
        {imgData.map((item, i) => (
          <div
            className="image"
            key={i}
            onClick={() => {
              getImg(item.imgSrc);
            }}
          >
            <img
              src={item.imgSrc[0]}
              alt="card"
              style={{
                position: 'relative',
                width: '100%',
              }}
            />
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;
