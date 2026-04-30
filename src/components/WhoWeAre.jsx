import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Route, Zap, MessageSquare } from "lucide-react";

const pillars = [
  {
    id: "sync",
    icon: Route,
    title: "Synchronized Routing",
    desc: "Everyone gets the same route, dynamically updated. If someone takes a wrong turn, the convoy adjusts.",
    color: "from-[#4FA88A]/10 to-transparent",
    border: "group-hover:border-[#4FA88A]/50",
    glow: "bg-[#4FA88A]/20",
    stats: [
      { label: "Latency", val: "< 50ms" },
      { label: "Accuracy", val: "Sub-meter" }
    ]
  },
  {
    id: "live",
    icon: Zap,
    title: "Live Telemetry",
    desc: "Monitor battery, speed, and distance of every rider in real-time. No more guessing who's falling behind.",
    color: "from-[#4FA88A]/10 to-transparent",
    border: "group-hover:border-[#4FA88A]/50",
    glow: "bg-[#4FA88A]/20",
    stats: [
      { label: "Update Rate", val: "10 Hz" },
      { label: "Data Usage", val: "Minimal" }
    ]
  },
  {
    id: "comms",
    icon: MessageSquare,
    title: "Tactical Comms",
    desc: "One-tap alerts and voice channels. Signal stops, hazards, or breaks without taking your hands off the bars.",
    color: "from-[#4FA88A]/10 to-transparent",
    border: "group-hover:border-[#4FA88A]/50",
    glow: "bg-[#4FA88A]/20",
    stats: [
      { label: "Channels", val: "Unlimited" },
      { label: "Clarity", val: "Crystal" }
    ]
  }
];

function PillarCard({ pillar, i, isActive, onHover }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouseMove(event) {
    onHover();
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: i * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-[#0a0f0d] transition-colors duration-500 cursor-pointer overflow-hidden ${isActive ? 'border border-[#4FA88A]/50 shadow-[0_0_20px_rgba(79,168,138,0.1)]' : 'border border-white/5'}`}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
      
      <div className="relative z-10 text-left flex flex-row md:flex-col h-full gap-4 md:gap-0" style={{ transform: "translateZ(50px)" }}>
        <div className={`shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-black/40 border flex items-center justify-center md:mb-6 shadow-inner relative overflow-hidden transition-colors duration-500 ${isActive ? 'border-[#4FA88A]/30' : 'border-white/10'}`}>
           <pillar.icon className={`w-5 h-5 md:w-6 md:h-6 text-[#4FA88A] transition-transform duration-500 ${isActive ? 'scale-110' : ''}`} />
           <div className={`absolute inset-0 ${pillar.glow} blur-md transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        
        <div className="flex-1 flex flex-col">
          <h3 className="text-lg md:text-2xl font-display font-bold text-white mb-1 md:mb-3">{pillar.title}</h3>
          <p className="text-gray-400 font-ui text-[10px] md:text-sm leading-tight md:leading-relaxed mb-3 md:mb-8 flex-1">
            {pillar.desc}
          </p>

          <div className="grid grid-cols-2 gap-2 md:gap-4 pt-3 md:pt-6 border-t border-white/5">
            {pillar.stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-[8px] md:text-[10px] uppercase tracking-wider text-gray-500 font-ui mb-0.5 md:mb-1">{stat.label}</div>
                <div className={`font-display font-bold text-sm md:text-lg transition-colors duration-500 ${isActive ? 'text-[#4FA88A]' : 'text-white'}`}>
                  {stat.val}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function WhoWeAre() {
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => (prev + 1) % pillars.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-16 md:py-40 bg-transparent flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-8 md:mb-16 relative z-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#4FA88A]/30 text-xs font-ui font-medium tracking-widest text-[#4FA88A] bg-[#4FA88A]/10 backdrop-blur-sm shadow-[0_0_15px_rgba(79,168,138,0.2)]">
          CORE PILLARS
        </span>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-8 md:mb-20 relative z-10"
      >
        <h2 className="text-3xl md:text-5xl font-display font-bold leading-[1.2] text-white">
          We turn chaotic group rides into a <span className="text-[#4FA88A]">synchronized tactical unit.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto w-full relative z-10 perspective-[1000px]">
        {pillars.map((pillar, i) => (
          <PillarCard key={pillar.id} pillar={pillar} i={i} isActive={activePillar === i} onHover={() => setActivePillar(i)} />
        ))}
      </div>
    </section>
  );
}
