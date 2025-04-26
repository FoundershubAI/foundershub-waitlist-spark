
import { motion } from "framer-motion";

export const SuccessCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white/5 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/10 shadow-xl max-w-md text-center hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.01 }}
    >
      {/* Confetti Animation */}
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-2 h-2 rounded"
          style={{
            backgroundColor: ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'][Math.floor(Math.random() * 5)],
            top: '0px',
            left: '50%'
          }}
          initial={{
            x: Math.random() * 300 - 150,
            y: -100,
          }}
          animate={{
            y: 800,
            x: Math.random() * 400 - 200,
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            delay: Math.random() * 0.5,
            ease: "easeIn",
          }}
        />
      ))}
      
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
        className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center"
      >
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">Welcome Aboard! 🎉</h2>
      <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6">
        You've secured your spot on the waitlist. Get ready for an amazing journey!
      </p>
      
      <motion.button
        className="w-full py-3 text-white transition duration-300 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-violet-500 hover:shadow-xl text-lg font-semibold"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => {
          // Share functionality can be added here
          window.open('https://twitter.com/intent/tweet?text=Just+joined+the+waitlist!', '_blank');
        }}
      >
        Share with Friends
      </motion.button>
    </motion.div>
  );
};
