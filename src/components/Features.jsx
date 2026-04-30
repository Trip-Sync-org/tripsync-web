import { useState, useEffect } from "react";
import { MapPin, Navigation, Radio, Route, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Features() {
  const [activeCard, setActiveCard] = useState(0);

  const problems = [
    { 
      icon: Route, 
      title: "Zero Formation Control", 
      desc: "Riders drift, lanes break, convoy falls apart in traffic.",
      solutionTitle: "Auto-Convoy Protocol",
      solutionDesc: "TripSync's smart algorithms maintain lane integrity and prevent riders from drifting off-course.",
    },
    { 
      icon: Radio, 
      title: "Communication Blackouts", 
      desc: "Leader can't reach tail riders when it matters most.",
      solutionTitle: "Seamless Voice Chat",
      solutionDesc: "Always-on, low-latency group voice chat keeps everyone connected regardless of distance.",
    },
    { 
      icon: MapPin, 
      title: "Checkpoint Confusion", 
      desc: "Nobody knows where to stop, when to stop, or how long.",
      solutionTitle: "Synchronized Waypoints",
      solutionDesc: "Global map updates instantly sync checkpoints to every rider's dashboard in real-time.",
    },
    { 
      icon: Navigation, 
      title: "Formation Blindness", 
      desc: "Staggered riding, convoy order — impossible to maintain.",
      solutionTitle: "Live Radar Tracking",
      solutionDesc: "See exactly where every rider is relative to your position to perfectly maintain formation.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev !== null ? (prev + 1) % problems.length : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [problems.length]);

  return (
    <div className="w-full relative z-10 pointer-events-none">
      {/* Problem Section: Text on the RIGHT, Phone on the LEFT */}
      <section className="md:min-h-screen pt-12 md:pt-24 pb-16 md:pb-12 w-full flex items-start md:items-center px-8 md:px-20 pointer-events-auto -mt-12 md:mt-0">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16">
          <div className="hidden md:block md:w-[40%]">
            {/* Empty space reserved for the 3D phone model on the LEFT */}
          </div>
          <div className="w-full md:w-[60%]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-[3.5rem] leading-tight font-display font-bold mb-4 text-white">
                Group rides shouldn't <br />feel like herding cats.
              </h2>
              <p className="text-lg text-gray-400 font-ui mb-10 max-w-xl">
                Click any common problem below to see how TripSync solves it.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              {problems.map((p, i) => {
                const isActive = activeCard === i;
                
                return (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    onClick={() => setActiveCard(isActive ? null : i)}
                    className={`relative overflow-hidden cursor-pointer p-4 md:p-6 rounded-2xl transition-all duration-500 hover:-translate-y-1 group 
                      ${isActive ? 'bg-[#4FA88A] shadow-[0_10px_40px_rgba(79,168,138,0.3)]' : 'bg-[#111915] border border-[#4FA88A]/10 hover:border-[#4FA88A]/40 shadow-sm'}
                    `}
                  >
                    <AnimatePresence mode="wait">
                      {!isActive ? (
                        <motion.div 
                          key="problem"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative"
                        >
                          <p.icon className="w-5 h-5 md:w-6 md:h-6 text-[#4FA88A] mb-2 md:mb-4 group-hover:scale-110 transition-transform" />
                          <h3 className="font-display font-medium text-sm md:text-lg mb-1 md:mb-2 text-white leading-tight">{p.title}</h3>
                          <p className="font-ui text-[10px] md:text-sm leading-tight md:leading-relaxed text-gray-400">{p.desc}</p>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="solution"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="relative"
                        >
                          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-[#0D1B17] mb-2 md:mb-4" />
                          <h3 className="font-display font-semibold text-sm md:text-lg mb-1 md:mb-2 text-[#0D1B17] leading-tight">{p.solutionTitle}</h3>
                          <p className="text-[#0D1B17]/80 font-ui text-[10px] md:text-sm leading-tight md:leading-relaxed">{p.solutionDesc}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
