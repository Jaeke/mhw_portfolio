import React, { useEffect, useState } from 'react';
import { wrap } from 'popmotion';
import { motion, AnimatePresence } from 'framer-motion';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { Sidebar } from '../../components';
import './Home.style.scss';
import { sliderImage } from '../../components/gallery/sliderImage';

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

const HomePage = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, sliderImage.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, []);

  return (
    <>
      {width > 716 ? (
        <div className="home_layout">
          <div className="sidebar_hidden">
            <Sidebar />
          </div>
          <div className="home_content">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                className="web_home_slider_img"
                key={page}
                src={sliderImage[imageIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'Spring', stiffness: 300, damping: 30 },
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
            <div className="web_next" onClick={() => paginate(1)}>
              <BsChevronRight />
            </div>
            <div className="web_prev" onClick={() => paginate(-1)}>
              <BsChevronLeft />
            </div>
          </div>
        </div>
      ) : (
        <div className="mobile_home_layout">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              className="home_slider_img"
              key={page}
              src={sliderImage[imageIndex]}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'smooth', stiffness: 300, damping: 30 },
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
          <div className="mobile_next" onClick={() => paginate(1)}>
            <BsChevronRight />
          </div>
          <div className="mobile_prev" onClick={() => paginate(-1)}>
            <BsChevronLeft />
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;
