import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const menuAnimationVariants = {
  from: {
    opacity: 0,
    x:-2000,
  },
  to: {
    opacity:1,
    x:0,
      transition: { 
      duration: .6, 
      type: 'tween',
      when: 'beforeChildren',
      staggerChildren: .6
    }
  },
  exit: {
    opacity:0,
    x:-2000,
    transition: {
      duration:.6,
      type: 'tween',
      when: 'afterChildren',
      staggerChildren: .6
    }
  }
}

const revealVariants = {
  from: {
    opacity:0,
    y:500
  },
  to: {
    opacity:1,
    y:0,
    transition: {
      duration:.6,
      ease: [0.6, 0.01, -0.05, 0.9],
      when: 'beforeChildren',
      staggerChildren:.4
    }
  },
  exit: {
    opacity:0,
    y:500,
    transition: {
      duration:.6,
      ease: [0.6, 0.01, -0.05, 0.9],
      when: 'afterChildren',
      staggerChildren:.4
    }
  }
}

interface IProps {
    menu:Boolean;
    showMenu: () => void;
}

export const Menu = ({ menu, showMenu }: IProps) => {
  return (
      <>
      <AnimatePresence>
      { menu && ( 
        <motion.div className='menu-backdrop'
          variants={ menuAnimationVariants }
          initial = 'from'
          animate = 'to'
          exit = 'exit'
        >
      <div className="menu-container">
        <motion.div className="menu-box" variants = { revealVariants }>
          <motion.div className='menu-wrapper' variants = { revealVariants }></motion.div>
          <motion.div className='menu-wrapper' variants = { revealVariants }></motion.div>
          <motion.div className='menu-wrapper' variants = { revealVariants }></motion.div>
          <motion.div className='menu-wrapper' variants = { revealVariants }></motion.div>

          <motion.div className="menu-bg" variants={ revealVariants }>
            <motion.div className="link-box">
              <motion.ul variants={ revealVariants }>
                <li onClick={ showMenu }><a href="#">Home</a></li>
                <li onClick={ showMenu }><a href="#about-me">About Me</a></li>
                <li onClick={ showMenu }><a href="#projects">My Work</a></li>
                <li onClick={ showMenu }><a href="#my-skills">My Skills</a></li>
              </motion.ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      </motion.div>
      )}
      </AnimatePresence>
      </>
  );
}
