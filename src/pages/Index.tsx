
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const featureList = [
  {
    title: "Priority Access",
    description: "Be among the first to experience our platform",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    title: "Exclusive Benefits",
    description: "Get special perks reserved for early adopters",
    gradient: "from-blue-500 to-violet-500",
  },
  {
    title: "Founder Updates",
    description: "Direct insights into our development journey",
    gradient: "from-indigo-500 to-blue-500",
  },
];

const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validateLinkedIn = (url: string) => url.includes("linkedin.com/");

export default function Index() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    linkedin: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.fullName) {
      toast.error("Please enter your name");
      return;
    }
    if (!validateEmail(form.email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!validateLinkedIn(form.linkedin)) {
      toast.error("Please enter a valid LinkedIn URL");
      return;
    }

    setLoading(true);

    try {
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitted(true);
      toast.success("Successfully joined the waitlist!");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements with new animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-purple-500/20 blur-[120px] animate-blob" />
        <div className="absolute -bottom-[30%] -right-[20%] w-[60%] h-[60%] rounded-full bg-blue-500/20 blur-[120px] animate-blob animation-delay-2000" />
        <div className="absolute top-[20%] right-[20%] w-[45%] h-[45%] rounded-full bg-violet-500/20 blur-[120px] animate-blob animation-delay-4000" />
      </div>

      {/* Main content container with motion */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container relative z-10 px-4 py-10"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={itemVariants}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join the Future of{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Be part of our exclusive community and get early access to revolutionary features.
            </p>
          </motion.div>

          {/* Features grid with stagger animation */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featureList.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-200"
                  style={{
                    background: `linear-gradient(to right, ${feature.gradient})`,
                  }}
                />
                <div className="relative p-6 bg-gray-900/50 backdrop-blur-xl rounded-lg border border-gray-800">
                  <h3 className={cn(
                    "text-xl font-semibold mb-2 bg-gradient-to-r bg-clip-text text-transparent",
                    feature.gradient
                  )}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form section with AnimatePresence */}
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="max-w-md mx-auto text-center p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-gray-800"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Welcome Aboard! 🚀</h3>
                <p className="text-gray-300 mb-6">
                  You're now on our exclusive waitlist. We'll notify you when we're ready to launch.
                </p>
                <div className="flex justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => window.open("https://twitter.com/intent/tweet?text=Just+joined+the+waitlist!", "_blank")}
                    className="bg-white/10 hover:bg-white/20 text-white border-gray-700"
                  >
                    Share on Twitter
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-md mx-auto space-y-6 p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-gray-800"
              >
                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                  />
                  <Input
                    type="url"
                    placeholder="LinkedIn Profile URL"
                    value={form.linkedin}
                    onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
                    className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  disabled={loading}
                >
                  {loading ? "Processing..." : "Join Waitlist"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
