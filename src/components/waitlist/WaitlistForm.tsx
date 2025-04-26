
import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

interface FormData {
  fullName: string;
  email: string;
  startupName: string;
}

interface WaitlistFormProps {
  onSubmit: (data: FormData) => Promise<void>;
  error: string;
  isLoading: boolean;
}

export const WaitlistForm = ({ onSubmit, error, isLoading }: WaitlistFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    startupName: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      className="w-full bg-white/5 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white/10 shadow-xl max-w-md hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ scale: 1.01 }}
    >
      <h2 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3 text-center">Secure Your Spot Today</h2>
      <p className="text-white/70 text-sm md:text-base mb-4 md:mb-6 text-center">Limited spots available for early access.</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 md:gap-5">
        <div className="flex flex-col gap-1 md:gap-2">
          <label className="text-white/90 text-sm font-medium ml-1">Full Name</label>
          <motion.div whileFocus={{ scale: 1.01 }}>
            <Input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              className="py-3 px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/40"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <label className="text-white/90 text-sm font-medium ml-1">Email Address</label>
          <motion.div whileFocus={{ scale: 1.01 }}>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className="py-3 px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/40"
            />
          </motion.div>
        </div>
        <div className="flex flex-col gap-1 md:gap-2">
          <label className="text-white/90 text-sm font-medium ml-1">Startup Name</label>
          <motion.div whileFocus={{ scale: 1.01 }}>
            <Input
              type="text"
              name="startupName"
              value={formData.startupName}
              onChange={handleInputChange}
              placeholder="Enter your startup name (optional)"
              className="py-3 px-4 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-white/40"
            />
          </motion.div>
        </div>
        {error && <p className="text-red-400 text-sm text-center mt-1 md:mt-2">{error}</p>}
        <p className="text-white/80 text-sm text-center">Join now for <strong>exclusive perks</strong> at launch!</p>
        <motion.button
          type="submit"
          disabled={isLoading}
          className="w-full py-3 text-white transition duration-300 rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-violet-500 hover:shadow-xl disabled:opacity-50 text-lg font-semibold"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isLoading ? "Joining..." : "Join the Waitlist"}
        </motion.button>
      </form>
      <p className="text-white/60 text-xs text-center mt-4">By joining, you agree to our Terms & Privacy Policy.</p>
    </motion.div>
  );
};
