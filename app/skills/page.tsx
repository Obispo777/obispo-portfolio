"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    "SIEM Monitoring (Splunk)", "Phishing Email Analysis",
    "Log Investigation", "Threat Intelligence",
    "Linux & Windows Security", "Network Fundamentals",
    "Incident Response", "TryHackMe SOC Level 1"
  ];

  return (
    <main className="max-w-5xl mx-auto px-6 py-24 min-h-screen">
      <h2 className="text-4xl font-black mb-12 text-white text-center tracking-tighter">TECHNICAL_STACK</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
            className="bg-white/5 p-6 rounded-lg border border-white/10 flex items-center gap-4 transition-all"
          >
            <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span className="text-sm font-mono text-gray-300 uppercase tracking-tight">{skill}</span>
          </motion.div>
        ))}
      </div>
    </main>
  );
}