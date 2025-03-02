// components/GlassCard/GlassCard.tsx
"use client";
import React, { useState, FC } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import Tilt from "react-parallax-tilt";
import { FiLinkedin, FiGithub, FiMail, FiGlobe } from "react-icons/fi";
import styles from "./GlassCard.module.css";

interface GlassCardProps {
  image: string;
  title: string;
  position: string;
  contact: string;
  expertise: string[];
  socials: {
    linkedin?: string;
    github?: string;
    email?: string;
    website?: string;
  };
}

const GlassCard: FC<GlassCardProps> = ({
  image,
  title,
  position,
  contact,
  expertise,
  socials = {},
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100 };
  const rotatedX = useSpring(rotateX, springConfig);
  const rotatedY = useSpring(rotateY, springConfig);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    rotateX.set(y * 10);
    rotateY.set(x * 10);
  };

  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#9c27b0"
      glarePosition="all"
    >
      <motion.div
        className={styles.glassCardContainer}
        onPointerMove={handleMove}
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
        style={{ rotateX: rotatedX, rotateY: rotatedY }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            className= {`${styles.glassCard} ${isFlipped ? styles.isFlipped : ""}`}
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
          >
            {/* Front Side - Avatar */}
            <div className={styles.cardFront}>
              <div className={styles.avatarContainer}>
                <img src={image} alt={title} className={styles.avatarImage} />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardPosition}>{position}</p>
            </div>

            {/* Back Side - Professional Details */}
            <div className={styles.cardBack}>
              <div className={styles.detailsContainer}>
                <h4 className={styles.detailTitle}>Professional Details</h4>

                <div className={styles.detailSection}>
                  <FiMail className={styles.detailIcon} />
                  <a href={`mailto:${contact}`} className={styles.detailLink}>
                    {contact}
                  </a>
                </div>

                <div className={styles.detailSection}>
                  <h5 className={styles.expertiseTitle}>Core Expertise</h5>
                  <ul className={styles.expertiseList}>
                    {expertise.map((skill, index) => (
                      <li key={index} className={styles.expertiseItem}>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.socialContainer}>
                  {socials?.linkedin && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiLinkedin className={styles.socialIcon} />
                    </motion.a>
                  )}
                  {socials?.github && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className={styles.socialIcon} />
                    </motion.a>
                  )}
                  {socials?.website && (
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      href={socials.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGlobe className={styles.socialIcon} />
                    </motion.a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Tilt>
  );
};

export default GlassCard;
