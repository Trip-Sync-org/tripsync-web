import { useState, useEffect } from "react";
import { Navigation, Battery, Signal, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [activeRider, setActiveRider] = useState(0);
  
  // Simulate active riders updating
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveRider((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const riders = [
    { name: "Alex T.", distance: "0.2 mi", speed: "65 mph", status: "Leader", battery: "84%" },
    { name: "You", distance: "0.0 mi", speed: "65 mph", status: "Middle", battery: "92%" },
    { name: "Sarah M.", distance: "0.5 mi", speed: "68 mph", status: "Tail", battery: "45%" },
  ];

  return (
    <div className="w-full relative z-10 pointer-events-none">
      <section className="md:min-h-screen w-full flex items-center px-6 md:px-20 pointer-events-auto py-10 md:pt-24 md:pb-12">
        <div className="max-w-[1400px] w-full mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="hidden md:block md:w-[50%]">
            {/* Empty space reserved for the 3D phone model on the LEFT */}
          </div>
          
          <div className="w-full md:w-[50%] flex flex-col justify-center">
             
             {/* The Text Content */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="mb-6 md:mb-8 text-left"
             >
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-3 md:mb-4 text-white leading-tight tracking-tight">
                  Everything You Need.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-300 to-neutral-500 pb-1 inline-block">Right on Your Dash.</span>
               </h2>
               <p className="text-sm md:text-base text-white/60 font-ui max-w-lg leading-relaxed md:leading-normal">
                  TripSync keeps the most critical data front and center. Monitor your convoy's speed, distance, and status without ever losing focus on the road.
               </p>
             </motion.div>

             {/* The Functional Widget Simulation */}
             <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-md md:max-w-sm lg:max-w-md bg-[#161616]/80 border border-white/10 rounded-3xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
             >
               <div className="flex items-center justify-between mb-4">
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                     <Zap className="w-5 h-5 text-white" />
                   </div>
                   <div>
                     <h3 className="font-display font-semibold text-white">Live Convoy Status</h3>
                     <p className="text-xs text-gray-400 font-ui">Real-time sync active</p>
                   </div>
                 </div>
                 <Signal className="w-5 h-5 text-white animate-pulse" />
               </div>

               <div className="flex flex-col gap-2 md:gap-2">
                 {riders.map((rider, i) => {
                   const isHighlight = activeRider === i;
                   return (
                     <motion.div 
                       key={i} 
                       animate={{ 
                         backgroundColor: isHighlight ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0)",
                         borderColor: isHighlight ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0)",
                         scale: isHighlight ? 1.02 : 1,
                         opacity: isHighlight ? 1 : 0.6
                       }}
                       transition={{ duration: 0.5 }}
                       className="p-3 rounded-2xl flex items-center justify-between border"
                     >
                       <div className="flex items-center gap-4">
                         <div className="relative">
                           <div className={`w-3 h-3 rounded-full ${isHighlight ? 'bg-white shadow-[0_0_8px_#ffffff]' : 'bg-gray-600'}`}></div>
                           {isHighlight && (
                             <motion.div 
                               initial={{ scale: 0, opacity: 0.5 }}
                               animate={{ scale: 2.5, opacity: 0 }}
                               transition={{ duration: 1.5, repeat: Infinity }}
                               className="absolute inset-0 rounded-full bg-white"
                             />
                           )}
                         </div>
                         <div>
                           <div className="font-display font-medium text-white">{rider.name}</div>
                           <div className="text-xs text-gray-400 font-ui flex items-center gap-2">
                             <span>{rider.status}</span>
                             <span>•</span>
                             <span>{rider.distance}</span>
                           </div>
                         </div>
                       </div>
                       
                       <div className="flex items-center gap-6">
                         <div className="text-right">
                           <div className={`font-ui font-bold transition-colors duration-500 ${isHighlight ? 'text-white' : 'text-gray-500'}`}>{rider.speed}</div>
                         </div>
                         <div className="flex items-center gap-1 text-xs text-gray-500">
                           <Battery className="w-3 h-3" />
                           {rider.battery}
                         </div>
                       </div>
                     </motion.div>
                   );
                 })}
               </div>
             </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
