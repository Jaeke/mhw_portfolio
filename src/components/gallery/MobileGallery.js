import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from 'popmotion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { IoCloseOutline } from 'react-icons/io5';

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

const MobileGallery = () => {
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
    <div className="mobile_gallery_container">
      <div className={modal ? 'modal open' : 'modal'}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            className="mobile_modal_img"
            src={tempImgSrc[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'tween', stiffness: 300, damping: 30 },
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
        <div className="close_btn_container">
          <IoCloseOutline
            className="close_modal"
            onClick={() => {
              setModal(false);
            }}
          />
        </div>
      </div>
      <div className="mobile_gallery_inner">
        {imgData.map((item, i) => (
          <div
            className="mobile_img_container"
            key={i}
            onClick={() => {
              if (item.imgSrc.length > 1) {
                getImg(item.imgSrc);
              }
            }}
          >
            {item.imgSrc.length > 1 ? (
              <>
                <img
                  className="mobile_image"
                  src={item.imgSrc[0]}
                  alt="individual img"
                />
                <span className="mobile_item_text">{item.group}</span>
              </>
            ) : (
              <div className="mobile_noImage_container">
                <span className="noImage_msg">coming soon</span>
                <span className="mobile_noImage_underline" />
                <span className="noImage_msg">furniture</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileGallery;
