"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projectList = [
    {
      title: "SOC Homelab",
      desc: "Built a SOC-style lab using Ubuntu & Windows VMs to analyze phishing headers, investigate IPs, and simulate attacker behavior.",
      tag: "INFRASTRUCTURE"
    },
    {
      title: "Attack Chain Simulation",
      desc: "Investigated multi-stage malware execution and privilege escalation using Splunk logs.",
      tag: "FORENSICS"
    }
  ];

  return (
    <main className="max-w-4xl mx-auto px-6 py-24 min-h-screen">
      <h2 className="text-4xl font-black mb-12 text-white tracking-widest uppercase">ACTIVE_PROJECTS</h2>
      
      <div className="space-y-8">
        {projectList.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ x: 10 }} 
            className="group bg-white/5 border-l-4 border-l-purple-500 border-y border-r border-white/10 p-8 rounded-r-xl transition-all hover:bg-white/10"
          >
            <span className="text-[10px] font-bold tracking-[0.3em] text-purple-400 uppercase">{p.tag}</span>
            <h3 className="font-bold text-2xl text-white mt-1 group-hover:text-cyan-400 transition-colors">{p.title}</h3>
            <p className="mt-4 text-gray-400 leading-relaxed font-light">
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}