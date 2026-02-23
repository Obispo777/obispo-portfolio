"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIPage() {
  const [message, setMessage] = useState("");
  const [reply, setReply] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async () => {
    if (!message) return;
    setIsLoading(true);
    setReply(""); 
    
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      });
      const data = await res.json();
      setReply(data.reply);
    } catch (err) {
      setReply("ERROR: CONNECTION_TIMEOUT. Please verify network status.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-24 min-h-screen flex flex-col items-center">
      
      {/* 🛡️ Professional Status Indicator */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-cyan-500/10 blur-[60px] rounded-full" />
        
        <motion.div 
          animate={isLoading ? { rotate: 360 } : { rotate: 0 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          className="relative z-10 w-32 h-32 border-2 border-dashed border-cyan-500/30 rounded-full flex items-center justify-center"
        >
          <div className="w-24 h-24 border-2 border-cyan-500 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md">
            {/* The "Core" pulse */}
            <motion.div 
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-3 h-3 rounded-full ${isLoading ? 'bg-amber-500' : 'bg-cyan-500'} shadow-[0_0_15px_rgba(34,211,238,0.5)]`}
            />
          </div>
        </motion.div>
      </div>

      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-white tracking-tight">
          Portfolio <span className="text-cyan-500">Assistant</span>
        </h1>
        <p className="text-gray-500 font-mono text-xs mt-2 uppercase tracking-widest">
          {isLoading ? "Querying Knowledge Base..." : "System Ready: 256-bit Encryption Active"}
        </p>
      </div>

      {/* 🖥️ Clean Analyst Terminal */}
      <div className="w-full max-w-3xl bg-[#0a0a0b] border border-white/10 rounded-lg overflow-hidden shadow-2xl">
        {/* Header Bar */}
        <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex justify-between items-center">
            <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Secure_Console_v2.04</span>
            <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-white/10" />
                <div className="w-2 h-2 rounded-full bg-white/10" />
            </div>
        </div>

        <div className="p-8">
          <div className="flex flex-col gap-6">
            <div className="relative">
                <input
                  className="w-full bg-black/40 border border-white/10 rounded-md p-4 text-white font-mono text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                  placeholder="Inquire about SOC homelab, certifications, or technical skills..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button 
                  onClick={sendMessage}
                  disabled={isLoading}
                  className="absolute right-3 top-3 px-4 py-1.5 bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-800 text-white font-bold rounded text-xs transition-all uppercase tracking-tighter"
                >
                  {isLoading ? "Querying" : "Submit"}
                </button>
            </div>

            <AnimatePresence>
                {reply && (
                <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-mono text-sm leading-relaxed"
                >
                    <div className="bg-[#111113] p-6 rounded-md border border-white/5">
                        <span className="text-cyan-500 block mb-3 font-bold text-[11px] tracking-widest uppercase">
                            [Analysis Result]
                        </span>
                        <div className="text-gray-300">
                           {reply}
                        </div>
                    </div>
                </motion.div>
                )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="mt-8 flex gap-8">
          <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-600 uppercase font-bold">Latency</span>
              <span className="text-xs text-cyan-500/70 font-mono">14ms</span>
          </div>
          <div className="flex flex-col items-center border-x border-white/10 px-8">
              <span className="text-[10px] text-gray-600 uppercase font-bold">Status</span>
              <span className="text-xs text-green-500 font-mono">Online</span>
          </div>
          <div className="flex flex-col items-center">
              <span className="text-[10px] text-gray-600 uppercase font-bold">Auth</span>
              <span className="text-xs text-cyan-500/70 font-mono">Verified</span>
          </div>
      </div>
    </main>
  );
}