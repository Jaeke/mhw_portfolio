import React, { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import './Gallery.style.scss';
import { imgData } from './imgData';

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Gallery = () => {
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState([]);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  // for modal
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, tempImgSrc.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className={modal ? 'modal open' : 'modal'}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            className="modal_img"
            src={tempImgSrc[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        <div className="next" onClick={() => paginate(1)}>
          <BsChevronRight />
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          <BsChevronLeft />
        </div>
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
            className={`img_container`}
            key={i}
            onClick={() => {
              getImg(item.imgSrc);
            }}
          >
            <img className="image" src={item.imgSrc[0]} alt="individual img" />
            <span key={i} className="img_title">
              <span className="item_text">{item.group}</span>
            </span>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default Gallery;
