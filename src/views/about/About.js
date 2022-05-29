import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MenuToggler } from '../../components';
import './About.style.scss';

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);

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
        <div className="about_page_container">
          <MenuToggler about={true} />
          <motion.div
            className="bio_picture"
            initial={{ x: '200px', opacity: 0 }}
            animate={{
              x: '0px',
              opacity: 1,
            }}
            transition={{
              type: 'tween',
              duration: 1.2,
            }}
          />
          <div className="bio_container">
            <motion.div
              className="bio_header"
              initial={{ x: '-200px', opacity: 0 }}
              animate={{
                x: '0px',
                opacity: 1,
              }}
              transition={{
                type: 'tween',
                duration: 1.2,
              }}
            >
              Mark H. Wesley
            </motion.div>
            <motion.div
              className="bio_content"
              initial={{ y: '200px', opacity: 0 }}
              animate={{
                y: '0px',
                opacity: 1,
              }}
              transition={{
                type: 'tween',
                duration: 1.2,
              }}
            >
              <p>
                Designer Mark Wesley seamlessly blends your vision for your
                project with interior styling that reflects the feeling you’re
                looking to create. Understanding the power of storytelling
                through design, Mark is highly valued for his innate ability to
                consistently understand that all creative executions result in a
                new feeling, increased comfort or increased sales.
              </p>

              <p>
                Mark’s design career began with lifestyle brands and with his
                natural talent and refined eye for detail, proportion, and
                color, he was quickly discovered by fashion house Ralph Lauren.
              </p>

              <p>
                Mark’s creative work for Ralph’s men’s, women’s and home lines
                debuted in hundreds of spaces including high-fashion runways,
                retail interiors and window designs for premier flagship stores
                nationwide for over 20 years.
              </p>

              <p>
                MHW Studio provides interior design, creative direction,
                installation projects, custom furniture and lighting design for
                hospitality, commercial and residential clients.
              </p>

              <p>
                Mark believes his job is about making the design process easy
                for you, with results that feel good. Through his joy for music,
                travel and learning, he is consistently seeing and refining his
                eye to see the world in new ways and matching that refined
                perspective to your project.
              </p>
            </motion.div>
          </div>
        </div>
      ) : (
        <div className="mobile_about_content">
          <motion.div
            className="mobile_bio_header"
            initial={{ x: '-200px', opacity: 0 }}
            animate={{
              x: '0px',
              opacity: 1,
            }}
            transition={{
              type: 'tween',
              duration: 1.2,
            }}
          >
            <span>mark h. wesley</span>
          </motion.div>
          <motion.div
            className="mobile_bio_picture"
            initial={{ x: '200px', opacity: 0 }}
            animate={{
              x: '0px',
              opacity: 1,
            }}
            transition={{
              type: 'tween',
              duration: 1.2,
            }}
          />
          <motion.div
            className="mobile_bio_content"
            initial={{ x: '-200px', opacity: 0 }}
            animate={{
              x: '0px',
              opacity: 1,
            }}
            transition={{
              type: 'tween',
              duration: 1.2,
            }}
          >
            <p>
              Designer Mark Wesley seamlessly blends your vision for your
              project with interior styling that reflects the feeling you’re
              looking to create. Understanding the power of storytelling through
              design, Mark is highly valued for his innate ability to
              consistently understand that all creative executions result in a
              new feeling, increased comfort or increased sales.
            </p>

            <p>
              Mark’s design career began with lifestyle brands and with his
              natural talent and refined eye for detail, proportion, and color,
              he was quickly discovered by fashion house Ralph Lauren.
            </p>

            <p>
              Mark’s creative work for Ralph’s men’s, women’s and home lines
              debuted in hundreds of spaces including high-fashion runways,
              retail interiors and window designs for premier flagship stores
              nationwide for over 20 years.
            </p>

            <p>
              MHW Studio provides interior design, creative direction,
              installation projects, custom furniture and lighting design for
              hospitality, commercial and residential clients.
            </p>

            <p>
              Mark believes his job is about making the design process easy for
              you, with results that feel good. Through his joy for music,
              travel and learning, he is consistently seeing and refining his
              eye to see the world in new ways and matching that refined
              perspective to your project.
            </p>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default About;
