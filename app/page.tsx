"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
// 1. Import the specific icons from Font Awesome (via react-icons)
import { FaLinkedin, FaGithub } from "react-icons/fa";

// Define what a Particle looks like for TypeScript
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [displayText, setDisplayText] = useState("");
  const fullText = "Aspiring Cybersecurity Analyst | SOC Enthusiast | Future Security+";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(168, 85, 247, 0.8)";
        ctx.fill();

        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(99, 102, 241, ${1 - dist / 150})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <main className="relative min-h-screen w-full flex flex-col justify-center items-center bg-[#05020a] overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-60" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/20 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-4"
        >
          OBISPO LOPEZ
        </motion.h1>

        <div className="h-8 mb-8 flex items-center justify-center">
          <p className="text-lg md:text-xl font-mono text-cyan-400 uppercase tracking-widest">
            {displayText}
            <span className="animate-pulse ml-1">|</span>
          </p>
        </div>

        {/* Wrapper for CTA Button and Social Icons */}
        <div className="flex flex-col items-center gap-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 bg-transparent border border-purple-500/50 rounded-full hover:bg-purple-500 hover:shadow-[0_0_20px_rgba(168,85,247,0.5)]"
            >
              DOWNLOAD RESUME
            </a>
          </motion.div>

          {/* Social Links Section */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 1.2 }}
            className="flex gap-8 items-center"
          >
            <a 
              href="https://www.linkedin.com/in/obispo-lopez-5b82b72a0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-all duration-300 text-3xl hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Obispo777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 text-3xl hover:scale-110"
            >
              <FaGithub />
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}