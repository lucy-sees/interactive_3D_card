import React, { useState, FC } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import Tilt from 'react-parallax-tilt';


interface GlassCardProps {
  image: string;
  title: string;
  description: string;
}

interface StatItem {
  value: string;
  label: string;
}

const GlassCard: FC<GlassCardProps> = ({ image, title, description }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 100 };
  const rotatedX = useSpring(rotateX, springConfig);
  const rotatedY = useSpring(rotateY, springConfig);

  const handleMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const x = (e.clientX - rect.left) / width - 0.5;
    const y = (e.clientY - rect.top) / height - 0.5;
    
    rotateX.set(y * 10);
    rotateY.set(x * 10);
  };

  const stats: StatItem[] = [
    { value: '98%', label: 'Engagement' },
    { value: '24h', label: 'Delivery' }
  ];

  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      glareEnable={true}
      glareMaxOpacity={0.2}
      glareColor="#ffffff"
      glarePosition="all"
    >
      <motion.div
        className="glass-card-container"
        onPointerMove={handleMove}
        onHoverStart={() => setIsFlipped(true)}
        onHoverEnd={() => setIsFlipped(false)}
        style={{ perspective: 1000, rotate: rotatedX, rotateY: rotatedY }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            className="glass-card"
            initial={false}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
            style={{ transformStyle: 'preserve-3d' as const }}
          >
            {/* Front Side */}
            <div className="card-front">
              <div className="card-image-container">
                <img src={image} alt={title} className="card-image" />
              </div>
              <h3 className="card-title">{title}</h3>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="explore-btn"
                role="button"
              >
                Explore
              </motion.button>
            </div>

            {/* Back Side */}
            <div className="card-back">
              <p className="card-description">{description}</p>
              <div className="stats-container">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <span>{stat.value}</span>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </Tilt>
  );
};

export default GlassCard;