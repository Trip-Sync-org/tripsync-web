import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Map, Mic, Zap, Users, ShieldAlert, Navigation } from 'lucide-react';

const slides = [
  {
    id: 'map',
    title: 'Real-Time Convoy Map',
    description: 'Never lose a rider again. See everyone’s exact location, speed, and heading on a shared tactical map. If someone falls behind, the system auto-reroutes them to catch up.',
    color: '#ffffff',
    icon: Map,
    mockup: (
      <div className="w-full h-full relative overflow-hidden bg-[#0c0c0c]">
         <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
         <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
           <path d="M20,180 Q40,140 30,100 T70,40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
           <circle cx="20" cy="180" r="3" fill="white" />
           <circle cx="70" cy="40" r="4" fill="#fff" className="animate-ping" />
           <circle cx="70" cy="40" r="2" fill="white" />
         </svg>
         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[80%] bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
            <div className="flex justify-between items-center mb-2">
              <h4 className="text-xs font-bold text-white">Basecamp Alpha</h4>
              <span className="text-[10px] text-white">2.4km</span>
            </div>
            <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="w-[80%] h-full bg-white" />
            </div>
         </div>
      </div>
    )
  },
  {
    id: 'comms',
    title: 'Tactical Voice Channel',
    description: 'Crystal clear, latency-free voice comms. No need to mess with radio frequencies. Just pair your helmet bluetooth and talk to your squad as if they are right next to you.',
    color: '#161616',
    icon: Mic,
    mockup: (
      <div className="w-full h-full bg-[#0c0c0c] flex flex-col items-center justify-center p-6 relative">
         <div className="absolute top-8 left-6 right-6 flex justify-between">
            <div className="text-xs font-bold text-white bg-white/10 px-3 py-1 rounded-full border border-white/20">Squad Alpha</div>
            <div className="flex gap-1">
              <span className="w-1 h-3 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1 h-5 bg-white rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
         </div>
         <div className="relative w-40 h-40 rounded-full bg-white/5 border border-white/15 flex items-center justify-center mb-8">
            <div className="absolute inset-0 rounded-full bg-white/5 animate-ping" />
            <div className="absolute -inset-8 rounded-full border border-white/10 animate-[ping_3s_ease-out_infinite]" />
            <img src="https://i.pravatar.cc/150?img=11" alt="Talking" className="w-24 h-24 rounded-full object-cover border-4 border-[#0c0c0c] relative z-10" />
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center z-20 border-2 border-[#0c0c0c]">
              <Mic className="w-3 h-3 text-black" />
            </div>
         </div>
         <h3 className="font-display text-2xl text-white font-bold mb-1">Alex Rider</h3>
         <p className="text-white/60 font-ui text-sm">Transmitting...</p>
      </div>
    )
  },
  {
    id: 'telemetry',
    title: 'Live Telemetry Dash',
    description: 'Monitor your critical ride stats at a glance. Speed, distance, efficiency score, and weather alerts are all seamlessly integrated into a distraction-free dark interface.',
    color: '#121212',
    icon: Zap,
    mockup: (
      <div className="w-full h-full bg-[#121212] flex flex-col p-6 pt-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
        <div className="flex items-center gap-2 mb-8">
          <Zap className="w-5 h-5 text-white" />
          <span className="font-ui text-sm font-bold text-white tracking-widest uppercase">Dash</span>
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-6">
          <div className="text-center">
            <div className="text-[10px] text-white/50 uppercase tracking-widest mb-2">Current Speed</div>
            <div className="flex items-baseline gap-2 justify-center">
              <span className="text-7xl font-display font-bold text-white tracking-tighter">72</span>
              <span className="text-xl text-white font-bold">mph</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 w-full">
            <div className="bg-[#0c0c0c] rounded-2xl p-4 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase mb-1">Distance</div>
              <div className="text-lg font-bold text-white">124.5 mi</div>
            </div>
            <div className="bg-[#0c0c0c] rounded-2xl p-4 border border-white/5">
              <div className="text-[10px] text-white/40 uppercase mb-1">Efficiency</div>
              <div className="text-lg font-bold text-white">94%</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default function AppShowcase() {
  return (
    <section className="relative w-full py-32 bg-gradient-to-b from-[#0A0A0A] via-[#161616] to-[#0A0A0A] z-20 overflow-hidden">
      {/* Background radial glowing reflections */}
      <div className="absolute top-1/4 left-1/4 w-[700px] h-[700px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Everything you need. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-500">Nothing you don't.</span>
          </h2>
          <p className="text-lg text-white/60 font-ui">
            A distraction-free interface engineered specifically for the road.
          </p>
        </div>

        <div className="flex flex-col gap-32">
          {slides.map((slide, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div 
                key={slide.id} 
                className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-12 md:gap-20`}
              >
                
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <div className="bg-[#121212]/85 backdrop-blur-2xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),_0_0_20px_rgba(255,255,255,0.02)] relative overflow-hidden group hover:border-white/20 transition-colors duration-500">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full group-hover:bg-white/10 transition-colors duration-500" />
                    
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 shadow-lg relative z-10">
                      <slide.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight relative z-10">
                      {slide.title}
                    </h3>
                    
                    <p className="text-base md:text-lg text-white/60 font-ui leading-relaxed relative z-10">
                      {slide.description}
                    </p>
                  </div>
                </div>

                {/* Phone Mockup */}
                <div className="w-full md:w-1/2 flex items-center justify-center relative perspective-[1000px]">
                  <div className="relative w-[280px] h-[580px] md:w-[320px] md:h-[660px] bg-black rounded-[3rem] border-[12px] border-[#171717] shadow-2xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8),_0_0_40px_rgba(255,255,255,0.05)] ring-1 ring-white/10">
                    
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-[#171717] rounded-b-xl z-50 flex justify-center items-end pb-1 gap-2">
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <div className="w-8 h-1 rounded-full bg-white/10" />
                    </div>

                    {/* Screen Content */}
                    <div className="w-full h-full relative bg-[#0A0A0A]">
                      {slide.mockup}
                    </div>
                    
                  </div>
                  
                  {/* Decorative background circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-dashed border-white/10 rounded-full -z-10 shadow-[0_0_50px_rgba(255,255,255,0.03)] opacity-50" />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
