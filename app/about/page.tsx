"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 items-center min-h-[90vh]">
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
        >
          IDENTIFY: OBISPO LOPEZ
        </motion.h2>
        <div className="space-y-4 text-gray-300 text-lg leading-relaxed font-light">
          <p>
            Computer Science student at <span className="font-bold text-white">Kean University</span> (GPA: 3.77) with hands-on experience in <span className="text-cyan-400 font-mono">SOC-style investigations</span>, phishing analysis, and log monitoring.
          </p>
          <p>
            Completed <span className="text-purple-400 font-mono">Google Cybersecurity Certificate</span> and <span className="text-purple-400 font-mono">TryHackMe SOC Level 1 path</span>. Currently preparing for <span className="text-cyan-400 font-mono">CompTIA Security+</span>.
          </p>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="md:w-1/2 flex justify-center relative"
      >
        {/* Decorative Glow behind photo */}
        <div className="absolute inset-0 bg-purple-600/20 blur-[80px] rounded-full" />
        <img 
          src="/profile-photo.png" 
          className="relative z-10 rounded-2xl border-2 border-white/10 shadow-2xl w-80 grayscale hover:grayscale-0 transition-all duration-500" 
          alt="Obispo Lopez" 
        />
      </motion.div>
    </main>
  );
}