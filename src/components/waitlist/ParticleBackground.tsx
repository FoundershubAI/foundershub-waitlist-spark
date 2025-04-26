
import { motion } from "framer-motion";

export const ParticleBackground = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
    >
      {/* Large Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bg-gradient-to-br from-purple-500/20 to-purple-900/20 rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 0.5,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            scale: Math.random() * 0.5 + 1,
          }}
          transition={{
            duration: 20 + Math.random() * 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${10 + Math.random() * 20}%`,
            height: `${10 + Math.random() * 20}%`,
          }}
        />
      ))}

      {/* Small Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i + 10}
          className="absolute bg-white/30 rounded-full"
          initial={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
          }}
          transition={{
            duration: 15 + Math.random() * 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            width: `${4 + Math.random() * 8}px`,
            height: `${4 + Math.random() * 8}px`,
          }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent"></div>
    </motion.div>
  );
};
