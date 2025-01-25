// components/Header/Header.tsx
"use client";
import { motion } from 'framer-motion';
import { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={`${styles.cosmicHeader} py-6 px-8`}>
      <div className={styles.starField}></div>
      
      <nav className="flex justify-between items-center max-w-7xl mx-auto">
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={styles.nebulaLogo}
        >
          StellarUI
          <span className={styles.twinkle}>&#10022;</span>
        </motion.div>

        <div className="flex space-x-8">
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className={`${styles.astroLink} ${styles.neonYellow}`}
          >
            Components
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className={`${styles.astroLink} ${styles.neonPurple}`}
          >
            Showcase
          </motion.a>
          <motion.a
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className={`${styles.astroLink} ${styles.neonCyan}`}
          >
            Contact
          </motion.a>
        </div>
      </nav>
    </header>
  );
};

export default Header;