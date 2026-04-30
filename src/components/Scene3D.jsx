import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, RoundedBox, Html, ContactShadows, Stars } from "@react-three/drei";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";
import { Compass, Navigation, Users, BarChart3, MapPin, Zap, Bell, Search, Activity, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ==========================================
// CONFIGURATION
// ==========================================
const CUSTOM_APP_IMAGE_URL = null; 
// ==========================================

import { Mic, ShieldAlert, Battery, Signal } from "lucide-react";

function ScreenHome() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col px-5"
    >
      <div className="flex justify-between items-center mt-2 mb-6">
        <div>
          <p className="text-white/50 text-xs">Welcome back,</p>
          <h2 className="text-xl font-bold font-display text-white">Commander</h2>
        </div>
        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center relative">
          <Bell className="w-4 h-4 text-white/70" />
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#4FA88A] rounded-full" />
        </div>
      </div>
      
      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6 group">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400" alt="Mountain Expedition" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
          <span className="bg-[#4FA88A] text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-2">Active Mission</span>
          <h3 className="font-bold text-white text-lg leading-tight">Northern Peaks<br/>Expedition</h3>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h4 className="font-semibold text-sm">Quick Actions</h4>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { icon: Search, label: "Explore" },
          { icon: MapPin, label: "Waypoints" },
          { icon: Activity, label: "Weather" },
          { icon: Settings, label: "Settings" },
        ].map((action, i) => (
          <div key={i} className="bg-white/5 rounded-xl p-3 flex flex-col items-center justify-center gap-2 border border-white/5">
            <action.icon className="w-5 h-5 text-[#4FA88A]" />
            <span className="text-[10px] text-white/70">{action.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ScreenMap() {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col relative"
    >
      {/* Fake Map Background */}
      <div className="absolute inset-0 bg-[#0a1411]">
         <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4FA88A 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
         {/* Map Path Line */}
         <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
           <path d="M20,180 Q40,140 30,100 T70,40" fill="none" stroke="#4FA88A" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
           <circle cx="20" cy="180" r="3" fill="#4FA88A" />
           <circle cx="70" cy="40" r="4" fill="#fff" className="animate-ping" />
           <circle cx="70" cy="40" r="2" fill="#4FA88A" />
         </svg>
      </div>
      
      <div className="relative z-10 px-5 pt-2 flex-1 flex flex-col justify-between pb-4">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
          <div className="bg-[#4FA88A]/20 p-2 rounded-lg">
            <Navigation className="w-4 h-4 text-[#4FA88A]" />
          </div>
          <div>
            <p className="text-[10px] text-white/50">Next Waypoint</p>
            <p className="text-sm font-bold">Basecamp Alpha</p>
          </div>
          <div className="ml-auto text-right">
             <p className="text-lg font-display font-bold text-[#4FA88A]">2.4<span className="text-[10px] text-white/50 ml-1">km</span></p>
          </div>
        </div>

        <div className="bg-black/80 backdrop-blur-xl border border-[#4FA88A]/30 rounded-2xl p-4">
           <div className="flex justify-between items-center mb-3">
             <h4 className="text-xs font-bold text-white/80">Convoy Status</h4>
             <span className="text-[9px] bg-[#4FA88A]/20 text-[#4FA88A] px-2 py-0.5 rounded-full">All Sync</span>
           </div>
           <div className="space-y-2">
             {['Lead Vehicle', 'Support Rover', 'Scout Drone'].map((v, i) => (
               <div key={i} className="flex items-center gap-2 text-xs">
                 <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#4FA88A] animate-pulse' : 'bg-white/40'}`} />
                 <span className="text-white/80">{v}</span>
                 <span className="ml-auto text-white/40 font-mono text-[10px]">OK</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </motion.div>
  );
}

function ScreenGroup() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col px-5"
    >
      <h2 className="text-lg font-bold font-display text-white mt-2 mb-4">Fleet Comms</h2>
      
      <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
        {[1,2,3,4].map((i) => (
          <div key={i} className="min-w-[60px] flex flex-col items-center gap-2">
            <div className={`w-14 h-14 rounded-full p-0.5 ${i===1 ? 'bg-gradient-to-tr from-[#4FA88A] to-emerald-300' : 'bg-white/10'}`}>
              <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="User" className="w-full h-full rounded-full object-cover border-2 border-black" />
            </div>
            <span className="text-[9px] text-white/60">User {i}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col gap-3">
        <h4 className="text-xs font-semibold text-white/50 mb-1">Recent Logs</h4>
        {[
          { text: "Vehicle 2 reported low fuel", time: "2m ago", type: "warn" },
          { text: "Reached checkpoint Bravo", time: "15m ago", type: "success" },
          { text: "Weather alert: Incoming storm", time: "1h ago", type: "danger" },
        ].map((log, i) => (
          <div key={i} className="flex gap-3 items-start pb-3 border-b border-white/5 last:border-0">
            <div className={`mt-0.5 w-2 h-2 rounded-full ${log.type === 'warn' ? 'bg-yellow-400' : log.type === 'success' ? 'bg-[#4FA88A]' : 'bg-red-500'}`} />
            <div>
              <p className="text-xs text-white/80 leading-tight">{log.text}</p>
              <p className="text-[9px] text-white/40 mt-1">{log.time}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function ScreenStats() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="w-full h-full flex flex-col px-5"
    >
      <h2 className="text-lg font-bold font-display text-white mt-2 mb-4">Trip Analytics</h2>
      
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-gradient-to-br from-[#4FA88A]/20 to-transparent p-3 rounded-xl border border-[#4FA88A]/30">
          <p className="text-[10px] text-[#4FA88A]">Total Distance</p>
          <p className="text-xl font-bold font-display mt-1">1,240 <span className="text-xs text-white/50 font-sans">km</span></p>
        </div>
        <div className="bg-white/5 p-3 rounded-xl border border-white/10">
          <p className="text-[10px] text-white/50">Avg Speed</p>
          <p className="text-xl font-bold font-display mt-1 text-white/90">64 <span className="text-xs text-white/50 font-sans">km/h</span></p>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex-1 mb-2">
         <div className="flex justify-between items-end h-24 gap-2 mb-3">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 bg-white/10 rounded-t-sm relative group">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`absolute bottom-0 w-full rounded-t-sm ${i === 3 ? 'bg-[#4FA88A]' : 'bg-white/30 group-hover:bg-white/50'} transition-colors`}
                />
              </div>
            ))}
         </div>
         <div className="flex justify-between text-[9px] text-white/40 font-mono">
           <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
         </div>

         <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
            <div>
              <p className="text-[10px] text-white/50">Efficiency Score</p>
              <p className="text-sm font-bold text-[#4FA88A]">94.2%</p>
            </div>
            <Activity className="w-5 h-5 text-[#4FA88A]" />
         </div>
      </div>
    </motion.div>
  );
}

function PhoneScreen({ scrollProgress }) {
  if (CUSTOM_APP_IMAGE_URL) {
    return (
      <div style={{ width: 300, height: 620 }} className="bg-black rounded-[2.5rem] overflow-hidden border-8 border-black">
         <img src={CUSTOM_APP_IMAGE_URL} alt="App Mockup" className="w-full h-full object-cover" />
      </div>
    );
  }

  const activeIndex = scrollProgress < 0.25 ? 0 : scrollProgress < 0.5 ? 1 : scrollProgress < 0.75 ? 2 : 3;

  return (
    <div style={{ width: 300, height: 620 }} className="bg-[#0a0f0d] rounded-[2.5rem] overflow-hidden flex flex-col pointer-events-none select-none border-8 border-black text-white relative shadow-2xl">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-50 flex items-center justify-center gap-2">
        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        <div className="w-10 h-1.5 rounded-full bg-white/10" />
      </div>

      {/* Top Status Bar */}
      <div className="absolute top-1 w-full px-5 flex justify-between items-center z-40 text-[10px] font-medium text-white/70">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
           <Zap className="w-3 h-3 text-[#4FA88A] fill-[#4FA88A]" />
           <div className="w-4 h-2.5 border border-white/50 rounded-[2px] relative">
             <div className="absolute inset-[1px] bg-white/80 rounded-[1px] w-[70%]" />
           </div>
        </div>
      </div>

      <div className="flex-1 relative overflow-hidden bg-gradient-to-b from-[#111915] to-[#0a0f0d] pt-10 pb-16">
        <AnimatePresence mode="wait">
          {activeIndex === 0 && <ScreenHome key="home" />}
          {activeIndex === 1 && <ScreenMap key="map" />}
          {activeIndex === 2 && <ScreenGroup key="group" />}
          {activeIndex === 3 && <ScreenStats key="stats" />}
        </AnimatePresence>
      </div>

      {/* App Bottom Nav */}
      <div className="absolute bottom-0 w-full h-16 bg-[#0a0f0d]/90 backdrop-blur-md border-t border-white/5 flex items-center justify-around z-50 px-2 pb-2">
         {[Compass, Navigation, Users, BarChart3].map((Icon, idx) => (
           <div key={idx} className={`flex flex-col items-center gap-1 transition-colors duration-300 ${activeIndex === idx ? 'text-[#4FA88A]' : 'text-white/30'}`}>
             <Icon className={`w-5 h-5 ${activeIndex === idx ? 'drop-shadow-[0_0_8px_rgba(79,168,138,0.5)]' : ''}`} />
             <div className={`w-1 h-1 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-[#4FA88A] scale-100' : 'bg-transparent scale-0'}`} />
           </div>
         ))}
      </div>
    </div>
  )
}

function PhoneModel() {
  const group = useRef();
  const { viewport } = useThree();
  const [scrollProgress, setScrollProgress] = useState(0);

  useFrame((state, delta) => {
    // We want the phone to only track the first 4 sections (Hero, Features, Offerings, Dashboard)
    // The user scrolls 1 innerHeight to get to the next section.
    // 0 = Hero, 1 = Features, 2 = Offerings, 3 = Dashboard.
    // At scrollY = 3.5 * innerHeight, Dashboard is scrolling out and WhoWeAre is scrolling in.
    const seqHeight = window.innerHeight * 3.5;
    const progress = Math.min(1, Math.max(0, window.scrollY / seqHeight));

    setScrollProgress(progress);

    if (group.current) {
      const floatY = Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      const isMobile = viewport.width < 5;
      const rX = isMobile ? 0 : viewport.width * 0.32;
      const lX = isMobile ? 0 : -viewport.width * 0.32;
      const cX = 0;

      // Waypoints mapped exactly to the 4 sections
      const waypoints = [
        // Hero Section (0 - 0.25)
        { t: 0.00, pos: [rX,  floatY,       -0.05, -0.15,  0.05] }, 
        { t: 0.20, pos: [rX,  floatY,       -0.05, -0.15,  0.05] }, 

        // Features Problem (0.25 - 0.50)
        { t: 0.28, pos: [lX,  floatY,        0.00,  0.15, -0.02] }, 
        { t: 0.45, pos: [lX,  floatY,        0.00,  0.15, -0.02] }, 

        // Offerings (0.50 - 0.75)
        { t: 0.55, pos: [rX,  floatY,       -0.05, -0.15,  0.05] }, 
        { t: 0.70, pos: [rX,  floatY,       -0.05, -0.15,  0.05] }, 

        // Dashboard (0.75 - 0.90)
        { t: 0.80, pos: [lX,  floatY,        0.00,  0.15, -0.02] }, 
        { t: 0.88, pos: [lX,  floatY,        0.00,  0.15, -0.02] }, 

        // Exit animation (flies up) when scrolling to WhoWeAre (0.95 - 1.0)
        { t: 0.95, pos: [lX,  floatY + 15,  -0.50,  0.00,  0.00] }, 
        { t: 1.00, pos: [lX,  floatY + 15,  -0.50,  0.00,  0.00] }, 
      ];

      let wp1 = waypoints[0];
      let wp2 = waypoints[waypoints.length - 1];
      
      for (let i = 0; i < waypoints.length - 1; i++) {
        if (progress >= waypoints[i].t && progress <= waypoints[i+1].t) {
          wp1 = waypoints[i];
          wp2 = waypoints[i+1];
          break;
        }
      }

      const segmentSpan = wp2.t - wp1.t;
      const localT = segmentSpan === 0 ? 0 : (progress - wp1.t) / segmentSpan;
      const easeT = localT < 0.5 ? 2 * localT * localT : 1 - Math.pow(-2 * localT + 2, 2) / 2;

      let targetX = THREE.MathUtils.lerp(wp1.pos[0], wp2.pos[0], easeT);
      let targetY = THREE.MathUtils.lerp(wp1.pos[1], wp2.pos[1], easeT);
      let targetRotX = THREE.MathUtils.lerp(wp1.pos[2], wp2.pos[2], easeT);
      let targetRotY = THREE.MathUtils.lerp(wp1.pos[3], wp2.pos[3], easeT);
      let targetRotZ = THREE.MathUtils.lerp(wp1.pos[4], wp2.pos[4], easeT);

      // Use damp for framerate-independent, fast, and buttery smooth easing
      group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta);
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 4, delta);
      
      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4, delta);
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4, delta);
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, targetRotZ, 4, delta);
    }
  });

  return (
    <group ref={group}>
      <RoundedBox args={[3.3, 6.6, 0.4]} radius={0.4} smoothness={12}>
        <meshStandardMaterial color="#0a0f0d" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      <RoundedBox args={[3.2, 6.5, 0.41]} radius={0.35} smoothness={12}>
        <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.5} />
      </RoundedBox>
      <mesh position={[0, 0, 0.21]}>
        <planeGeometry args={[3.0, 6.2]} />
        <meshBasicMaterial color="#000" opacity={0} transparent />
        <Html transform position={[0, 0, 0.01]} scale={0.01} zIndexRange={[100, 0]} className="rounded-[2.5rem]">
          <PhoneScreen scrollProgress={scrollProgress} />
        </Html>
      </mesh>
    </group>
  );
}

const AuroraMaterial = {
  uniforms: {
    time: { value: 0 },
    color1: { value: new THREE.Color("#4FA88A") },
    color2: { value: new THREE.Color("#111915") },
  },
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float time;
    void main() {
      vUv = uv;
      vec3 pos = position;
      // Wavy motion
      pos.y += sin(pos.x * 0.1 + time * 0.5) * 5.0;
      pos.z += cos(pos.x * 0.05 + time * 0.3) * 5.0;
      vPos = pos;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vPos;
    uniform float time;
    uniform vec3 color1;
    uniform vec3 color2;
    void main() {
      // Fade out at edges
      float alpha = sin(vUv.x * 3.14159) * sin(vUv.y * 3.14159);
      // Mix colors based on height and time
      float mixVal = sin(vUv.x * 5.0 + time) * 0.5 + 0.5;
      vec3 finalColor = mix(color1, color2, mixVal);
      
      // Add vertical streaks
      float streaks = sin(vUv.x * 50.0 + time * 2.0) * 0.5 + 0.5;
      alpha *= (0.5 + streaks * 0.5);

      gl_FragColor = vec4(finalColor, alpha * 0.4);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.DoubleSide
};

function Aurora() {
  const materialRef = useRef();
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh position={[0, 30, -60]}>
      {/* A very long, wide curved plane in the sky */}
      <cylinderGeometry args={[80, 80, 30, 64, 1, true, -Math.PI/2, Math.PI]} />
      <shaderMaterial ref={materialRef} args={[AuroraMaterial]} />
    </mesh>
  );
}

function MilkyWay() {
  const count = 5000;
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const color = new THREE.Color();
    
    for (let i = 0; i < count; i++) {
      // Spiral Galaxy Math
      const r = Math.pow(Math.random(), 0.5) * 80;
      const theta = 2 * Math.PI * Math.random();
      const spiral = r * 0.2; // tighter spiral
      const x = r * Math.cos(theta + spiral);
      const z = r * Math.sin(theta + spiral);
      const y = (Math.random() - 0.5) * (80 - r) * 0.1; // flat-ish disk

      pos[i * 3] = x;
      pos[i * 3 + 1] = y + 40; // High in the sky
      pos[i * 3 + 2] = z - 60; // Pushed back

      // Colors: cyan, green, white
      const mix = Math.random();
      if (mix < 0.6) color.set("#4FA88A");
      else if (mix < 0.8) color.set("#111915");
      else color.set("#ffffff");

      const intensity = 0.2 + Math.random() * 0.8;
      col[i * 3] = color.r * intensity;
      col[i * 3 + 1] = color.g * intensity;
      col[i * 3 + 2] = color.b * intensity;
    }
    return [pos, col];
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} sizeAttenuation={false} />
    </points>
  );
}

function ShootingStar() {
  const ref = useRef();
  const [reset, setReset] = useState(0);
  
  const initialState = useMemo(() => {
    const x = (Math.random() - 0.5) * 100;
    const y = 20 + Math.random() * 30;
    const z = -40 - Math.random() * 60;
    const velocity = new THREE.Vector3(
      (Math.random() - 0.5) * 40,
      -20 - Math.random() * 20,
      10 + Math.random() * 10
    );
    return { x, y, z, velocity };
  }, [reset]);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.addScaledVector(initialState.velocity, delta);
      if (ref.current.position.y < -30 || ref.current.position.z > 20) {
        setReset(prev => prev + 1);
        ref.current.position.set(initialState.x, initialState.y, initialState.z);
      }
    }
  });

  return (
    <group ref={ref} position={[initialState.x, initialState.y, initialState.z]}>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <cylinderGeometry args={[0.05, 0, 8, 8]} />
        <meshBasicMaterial color="#4FA88A" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function ShootingStars() {
  return (
    <group>
      {Array.from({ length: 8 }).map((_, i) => (
        <ShootingStar key={i} />
      ))}
    </group>
  );
}

function VideoBackground() {
  const [video] = useState(() => {
    const vid = document.createElement("video");
    vid.src = "https://cdn.pixabay.com/video/2019/11/12/29031-373323565_tiny.mp4";
    vid.crossOrigin = "Anonymous";
    vid.loop = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.play();
    return vid;
  });

  return (
    <mesh position={[0, 0, -120]}>
      <planeGeometry args={[400, 250]} />
      <meshBasicMaterial toneMapped={false} transparent opacity={0.4}>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}function MovingRoad() {
  const gridRef = useRef();
  const scrollY = useRef(0);
  const scrollVelocity = useRef(0);

  useFrame((state, delta) => {
    const currentScrollY = window.scrollY;
    // Calculate scroll velocity (pixels per frame basically)
    const velocity = Math.abs(currentScrollY - scrollY.current);
    
    // Smooth the velocity
    scrollVelocity.current = THREE.MathUtils.lerp(scrollVelocity.current, velocity, 0.1);
    scrollY.current = currentScrollY;

    // Base speed + extra speed from scrolling fast
    const speed = 2 + scrollVelocity.current * 0.2;

    if (gridRef.current) {
      // Move grid towards camera. Modulo 1 keeps it seamlessly infinite (grid step is 1)
      gridRef.current.position.z = (state.clock.elapsedTime * speed) % 1;
    }
  });

  return (
    <group position={[0, -3.5, 0]}>
      {/* Neon Cyberpunk Grid */}
      <gridHelper ref={gridRef} args={[100, 100, '#4FA88A', '#4FA88A']} position={[0, 0, 0]}>
         {/* Slightly fade the grid lines to not overpower the screen */}
         <material attach="material" transparent opacity={0.15} depthWrite={false} />
      </gridHelper>
      
      {/* Ground plane with a gradient fade out into the distance */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#0D1B17" />
      </mesh>
      
      {/* Fog effect on the grid specifically using a transparent overlay */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -30]}>
        <planeGeometry args={[100, 60]} />
        <meshBasicMaterial color="#0D1B17" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function Mountains() {
  return (
    <group position={[0, -3.5, -30]}>
      <mesh position={[-15, 4, 0]}>
        <coneGeometry args={[12, 10, 32]} />
        <meshStandardMaterial color="#070f0c" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[18, 6, -5]}>
        <coneGeometry args={[16, 15, 32]} />
        <meshStandardMaterial color="#0a1411" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[-5, 8, -15]}>
        <coneGeometry args={[15, 20, 32]} />
        <meshStandardMaterial color="#050a08" roughness={0.9} flatShading />
      </mesh>
      <mesh position={[28, 5, -8]}>
        <coneGeometry args={[10, 12, 32]} />
        <meshStandardMaterial color="#070f0c" roughness={0.9} flatShading />
      </mesh>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="w-full h-full bg-[#0D1B17]">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Deep immersive fog */}
        <fog attach="fog" args={['#0D1B17', 5, 40]} />
        
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <Environment preset="city" />
        
        <Stars radius={150} depth={50} count={10000} factor={1.5} saturation={0} fade speed={2} />
        <MilkyWay />
        <Aurora />
        <ShootingStars />
        <VideoBackground />
        
        <MovingRoad />
        <Mountains />

        

        
        <PhoneModel />
        
        <ContactShadows position={[0, -3.4, 0]} opacity={0.8} scale={20} blur={2.5} far={10} color="#000000" />
      </Canvas>
    </div>
  );
}
