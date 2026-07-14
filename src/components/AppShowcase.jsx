import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Map, Mic, Zap, Users, ShieldAlert, Navigation, Compass, MapPin } from 'lucide-react';

const slides = [
  {
    id: 'telemetry',
    title: 'Live Telemetry Dash',
    description: 'Monitor your critical ride stats at a glance. Speed, distance, efficiency score, and weather alerts are all seamlessly integrated into a distraction-free dark interface.',
    icon: Zap,
    image: '/mockup_telemetry.png'
  },
  {
    id: 'create',
    title: 'Expedition Organizer',
    description: 'Plan and coordinate your route with ease. Set meetup points, define drop-offs, place community-saved attractions, and schedule trip checkpoints before hitting the road.',
    icon: MapPin,
    image: '/mockup_create.png'
  },
  {
    id: 'explore',
    title: 'Curated Marketplace',
    description: 'Explore expeditions planned by other riders in the community. Join upcoming adventures, view routes, and discover the best riding spots in the region.',
    icon: Compass,
    image: '/media__1783486356611.png'
  },
  {
    id: 'comms',
    title: 'Tactical Voice Channel',
    description: 'Crystal clear, latency-free voice comms. No need to mess with radio frequencies. Just pair your helmet bluetooth and talk to your squad as if they are right next to you.',
    icon: Mic,
    image: '/mockup_comms.png'
  }
];

function InteractivePhoneMockup({ src, alt }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);
  const sheenX = useSpring(useTransform(x, [-0.5, 0.5], [-200, 200]), springConfig);

  return (
    <div
      className="w-full md:w-1/2 flex items-center justify-center relative"
      style={{ perspective: '1200px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative cursor-pointer"
      >
        {/* Phone shell */}
        <div
          className="relative group"
          style={{
            width: '252px',
            height: '545px',
            borderRadius: '2.5rem',
            boxShadow: '0 40px 80px -15px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.06)',
            overflow: 'hidden',
          }}
        >
          {/* Screenshot */}
          <img
            src={src}
            alt={alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'top',
              display: 'block',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          />

          {/* Inset depth shadow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 20px rgba(0,0,0,0.45), inset 0 0 0 1px rgba(255,255,255,0.04)',
              borderRadius: '2.5rem',
            }}
          />

          {/* Hover sheen */}
          <motion.div
            style={{ x: sheenX, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.10), transparent)', transform: 'skewX(-20deg)', left: '-150%', width: '100%', mixBlendMode: 'overlay' }}
            className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Side buttons */}
        <div className="absolute bg-[#222] rounded-l-sm" style={{ right: '-9px', top: '76px', width: '3px', height: '32px' }} />
        <div className="absolute bg-[#222] rounded-r-sm" style={{ left: '-9px', top: '60px', width: '3px', height: '20px' }} />
        <div className="absolute bg-[#222] rounded-r-sm" style={{ left: '-9px', top: '94px', width: '3px', height: '48px' }} />

        {/* Reflection */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '-24px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '160px',
            height: '16px',
            background: 'rgba(255,255,255,0.04)',
            filter: 'blur(12px)',
            borderRadius: '50%',
          }}
        />
      </motion.div>

      {/* Orbit ring */}
      <motion.div
        animate={{ y: [0, -10, 0], scale: [1, 1.02, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none"
        style={{
          width: '360px',
          height: '360px',
          border: '1px dashed rgba(255,255,255,0.08)',
          borderRadius: '50%',
          opacity: 0.3,
        }}
      />
    </div>
  );
}

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
                <InteractivePhoneMockup src={slide.image} alt={slide.title} />

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
