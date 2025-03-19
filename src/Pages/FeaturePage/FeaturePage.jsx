import {
  Video,
  Users,
  MessageSquare,
  ShieldCheck,
  Wifi,
  Mic,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Video size={40} className="text-primary" />,
    title: "HD Video Calls",
    description: "Experience crystal-clear video quality with minimal latency.",
  },
  {
    icon: <Users size={40} className="text-secondary" />,
    title: "Group Calls",
    description: "Connect with multiple people at once in a single call.",
  },
  {
    icon: <MessageSquare size={40} className="text-accent" />,
    title: "Live Chat",
    description: "Send instant messages while on a call.",
  },
  {
    icon: <ShieldCheck size={40} className="text-success" />,
    title: "End-to-End Encryption",
    description: "Your conversations remain private and secure.",
  },
  {
    icon: <Wifi size={40} className="text-warning" />,
    title: "Low Bandwidth Mode",
    description: "Optimized for slow internet connections.",
  },
  {
    icon: <Mic size={40} className="text-error" />,
    title: "Noise Cancellation",
    description: "Enhanced audio clarity with AI-powered noise reduction.",
  },
];

const FeaturePage = () => {
  return (
    <div className="min-h-screen bg-base-200 py-12 px-6 mt-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-primary mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Amazing Features
        </motion.h2>
        <p className="text-gray-500 mb-8">
          Everything you need for a seamless and secure video calling
          experience.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white rounded-2xl shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturePage;
