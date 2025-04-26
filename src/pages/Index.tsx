
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { ParticleBackground } from "@/components/waitlist/ParticleBackground";
import { SuccessCard } from "@/components/waitlist/SuccessCard";

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export default function Index() {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [joinCount, setJoinCount] = useState(1247);

  useEffect(() => {
    if (!submitted) {
      const interval = setInterval(() => {
        setJoinCount(prev => prev + Math.floor(Math.random() * 3));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [submitted]);

  const handleSubmit = async (formData: { fullName: string; email: string; startupName: string }) => {
    setError("");
    if (!formData.fullName) {
      setError("Please enter your name");
      return;
    }
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email");
      return;
    }

    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      toast.success("Successfully joined the waitlist!");
    } catch (err) {
      toast.error("Failed to join waitlist. Please try again.");
      setError("Submission failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      
      <div className="relative z-10 flex h-screen items-center justify-center px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row w-full items-center justify-between gap-8 md:gap-12">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left max-w-md w-full"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Join the Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-violet-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Be among the first to experience our revolutionary platform. Early adopters get exclusive benefits.
            </p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-left bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <motion.div
                animate={{ textContent: joinCount }}
                transition={{ duration: 2 }}
                className="text-3xl font-bold text-white mb-2"
              />
              <p className="text-white/70">Founders already joined</p>
            </motion.div>
          </motion.div>

          {/* Right Side - Form/Success */}
          {!submitted ? (
            <WaitlistForm onSubmit={handleSubmit} error={error} isLoading={isLoading} />
          ) : (
            <SuccessCard />
          )}
        </div>
      </div>
    </div>
  );
}
