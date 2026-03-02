"use client";
import { motion } from "framer-motion";
import { FaShieldAlt, FaCode, FaGraduationCap } from "react-icons/fa";

export default function About() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 items-center min-h-[90vh]">
      <div className="md:w-1/2">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-black mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent uppercase tracking-tighter"
        >
          IDENTIFY: OBISPO LOPEZ
        </motion.h2>
        
        <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
          <p>
            Currently pursuing a degree in <span className="font-bold text-white">Computer Science at Kean University</span> (GPA: 3.77). I specialize in bridging the gap between software development and defensive security operations.
          </p>
          
          <p>
            I am an aspiring <span className="text-cyan-400 font-mono text-base font-bold">SOC Analyst</span> dedicated to mastering the art of threat detection. My current work involves simulating attack traffic and hardening virtualized environments to better understand adversary behavior.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <div className="flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-lg w-24">
               <FaGraduationCap className="text-cyan-400 mb-2 text-xl" />
               <span className="text-[10px] uppercase font-bold text-gray-500 text-center">Education</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-lg w-24">
               <FaShieldAlt className="text-purple-400 mb-2 text-xl" />
               <span className="text-[10px] uppercase font-bold text-gray-500 text-center">Security</span>
            </div>
            <div className="flex flex-col items-center p-3 bg-white/5 border border-white/10 rounded-lg w-24">
               <FaCode className="text-amber-400 mb-2 text-xl" />
               <span className="text-[10px] uppercase font-bold text-gray-500 text-center">Development</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Identity Card Placeholder */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="md:w-1/2 flex justify-center relative w-full"
      >
        <div className="absolute inset-0 bg-cyan-600/10 blur-[80px] rounded-full" />
        
        <div className="relative z-10 w-80 h-96 bg-[#0a0a0b] border border-white/20 rounded-2xl overflow-hidden flex flex-col shadow-2xl">
          {/* Scanning Line Animation */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 z-20 shadow-[0_0_15px_#22d3ee]"
          />

          <div className="p-6 border-b border-white/10 bg-white/5">
            <div className="w-12 h-1 w-full bg-cyan-500/20 rounded-full mb-4 overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="w-1/2 h-full bg-cyan-500"
                />
            </div>
            <h3 className="font-mono text-xs text-cyan-500 uppercase tracking-widest">Personnel_File_v.1.0</h3>
          </div>

          <div className="p-8 space-y-5 font-mono">
            <div>
              <p className="text-[10px] text-gray-500 uppercase">Subject</p>
              <p className="text-white text-sm">Obispo Lopez</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase">Institution</p>
              <p className="text-white text-sm">Kean University</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase">Specialization</p>
              <p className="text-white text-sm">Cybersecurity & CS</p>
            </div>
            <div>
              <p className="text-[10px] text-gray-500 uppercase">Current Status</p>
              <p className="text-cyan-400 text-sm animate-pulse">Training_In_Progress...</p>
            </div>
          </div>
          
          <div className="mt-auto p-4 bg-white/5 border-t border-white/10 text-center">
            <span className="text-[9px] text-gray-600 uppercase tracking-[0.3em]">Credentials_Verified</span>
          </div>
        </div>
      </motion.div>
    </main>
  );
}