import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, RoundedBox, Html, ContactShadows, Stars, useTexture } from "@react-three/drei";
import { useRef, useState, useMemo, useEffect, useCallback, Suspense } from "react";
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
          <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
        </div>
      </div>

      <div className="relative w-full h-40 rounded-2xl overflow-hidden mb-6 group">
        <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=400" alt="Mountain Expedition" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-4">
          <span className="bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider w-max mb-2">Active Mission</span>
          <h3 className="font-bold text-white text-lg leading-tight">Northern Peaks<br />Expedition</h3>
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
            <action.icon className="w-5 h-5 text-white" />
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
      <div className="absolute inset-0 bg-[#0c0c0c]">
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(white 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
        {/* Map Path Line */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 200" preserveAspectRatio="none">
          <path d="M20,180 Q40,140 30,100 T70,40" fill="none" stroke="white" strokeWidth="2" strokeDasharray="4 4" className="animate-pulse" />
          <circle cx="20" cy="180" r="3" fill="white" />
          <circle cx="70" cy="40" r="4" fill="#fff" className="animate-ping" />
          <circle cx="70" cy="40" r="2" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 px-5 pt-2 flex-1 flex flex-col justify-between pb-4">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-3 flex items-center gap-3">
          <div className="bg-white/10 p-2 rounded-lg">
            <Navigation className="w-4 h-4 text-white" />
          </div>
          <div>
            <p className="text-[10px] text-white/50">Next Waypoint</p>
            <p className="text-sm font-bold">Basecamp Alpha</p>
          </div>
          <div className="ml-auto text-right">
            <p className="text-lg font-display font-bold text-white">2.4<span className="text-[10px] text-white/50 ml-1">km</span></p>
          </div>
        </div>

        <div className="bg-black/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-xs font-bold text-white/80">Convoy Status</h4>
            <span className="text-[9px] bg-white/10 text-white px-2 py-0.5 rounded-full">All Sync</span>
          </div>
          <div className="space-y-2">
            {['Lead Vehicle', 'Support Rover', 'Scout Drone'].map((v, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-white animate-pulse shadow-[0_0_8px_#ffffff]' : 'bg-white/40'}`} />
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
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="min-w-[60px] flex flex-col items-center gap-2">
            <div className={`w-14 h-14 rounded-full p-0.5 ${i === 1 ? 'bg-gradient-to-tr from-white to-neutral-400' : 'bg-white/10'}`}>
              <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="User" className="w-full h-full rounded-full object-cover border-2 border-black" />
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
            <div className={`mt-0.5 w-2 h-2 rounded-full ${log.type === 'warn' ? 'bg-yellow-400' : log.type === 'success' ? 'bg-white shadow-[0_0_6px_#ffffff]' : 'bg-red-500'}`} />
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
        <div className="bg-gradient-to-br from-white/10 to-transparent p-3 rounded-xl border border-white/15">
          <p className="text-[10px] text-white/70">Total Distance</p>
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
                className={`absolute bottom-0 w-full rounded-t-sm ${i === 3 ? 'bg-white' : 'bg-white/30 group-hover:bg-white/50'} transition-colors`}
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
            <p className="text-sm font-bold text-white">94.2%</p>
          </div>
          <Activity className="w-5 h-5 text-white" />
        </div>
      </div>
    </motion.div>
  );
}

// Load all screen textures safely — no Suspense throw, no crash on error
const SCREEN_IMAGES = [
  '/media__1785208211546.jpg',
  '/media__1785208228383.jpg',
  '/media__1785208232164.jpg',
  '/media__1785208232173.jpg'
];

// Preload to ensure they are available immediately
useTexture.preload(SCREEN_IMAGES);

function PhoneScreenMaterial({ activeIndex }) {
  const textures = useTexture(SCREEN_IMAGES);
  const tex = textures[activeIndex];
  const { gl } = useThree();
  
  if (tex) {
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.anisotropy = gl.capabilities.getMaxAnisotropy();
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
  }

  return <meshBasicMaterial map={tex} color="#ffffff" toneMapped={false} />;
}

function PhoneModel({ thresholds, scrollStateRef }) {
  const group = useRef();
  const { viewport } = useThree();
  const [activeIndex, setActiveIndex] = useState(0);

  // Rounded screen geometry matching the image aspect ratio exactly
  const screenGeo = useMemo(() => {
    // New mockup images are 460x1024, so aspect ratio is 460/1024 = 0.44921875
    // Maintain height of 6.8, so width = 6.8 * 0.44921875 = 3.0546875
    const W = 3.0546875;
    const H = 6.8;
    const r = 0.15; // smaller corner radius to prevent cutting UI edges
    const w = W / 2;
    const h = H / 2;

    const shape = new THREE.Shape();
    shape.moveTo(-w + r, -h);
    shape.lineTo(w - r, -h);
    shape.quadraticCurveTo(w, -h, w, -h + r);
    shape.lineTo(w, h - r);
    shape.quadraticCurveTo(w, h, w - r, h);
    shape.lineTo(-w + r, h);
    shape.quadraticCurveTo(-w, h, -w, h - r);
    shape.lineTo(-w, -h + r);

    const geo = new THREE.ShapeGeometry(shape, 16);

    // Remap UVs so texture fills the shape perfectly without any border stretching/cropping
    const pos = geo.attributes.position;
    const uvArr = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uvArr[i * 2] = (pos.getX(i) + w) / W;
      uvArr[i * 2 + 1] = (pos.getY(i) + h) / H;
    }
    geo.setAttribute('uv', new THREE.BufferAttribute(uvArr, 2));
    return geo;
  }, []);

  useFrame((state, delta) => {
    const { progress } = scrollStateRef.current;

    // Calculate active screen index - 5 screens spread across 4 sections
    const newIdx = progress < thresholds.features ? 0
      : progress < thresholds.offerings ? 1
        : progress < thresholds.dashboard ? 2
          : 3;
    if (newIdx !== activeIndex) {
      setActiveIndex(newIdx);
    }

    if (group.current) {
      const floatY = Math.sin(state.clock.elapsedTime * 2) * 0.1;

      const isMobile = viewport.width < 5;
      const rX = isMobile ? 0 : viewport.width * 0.35;
      const lX = isMobile ? 0 : -viewport.width * 0.35;

      const tFeatures = thresholds.features;
      const tOfferings = thresholds.offerings;
      const tDashboard = thresholds.dashboard;
      const tWhoWeAre = thresholds.whoweare;

      const transitionDuration = 0.04;
      const tHeroEnd = Math.max(0.01, tFeatures - transitionDuration);
      const tFeaturesStart = tFeatures;
      const tFeaturesEnd = Math.max(tFeaturesStart + 0.02, tOfferings - transitionDuration);
      const tOfferingsStart = tOfferings;
      const tOfferingsEnd = Math.max(tOfferingsStart + 0.02, tDashboard - transitionDuration);
      const tDashboardStart = tDashboard;
      const tDashboardEnd = Math.max(tDashboardStart + 0.02, tWhoWeAre - transitionDuration);
      const tWhoWeAreStart = tWhoWeAre;

      // Waypoints mapped dynamically across all sections of the landing page
      const waypoints = [
        // Hero Section (0.00 to tHeroEnd) - phone on right
        { t: 0.00, pos: [rX, floatY, -0.05, -0.15, 0.05] },
        { t: tHeroEnd, pos: [rX, floatY, -0.05, -0.15, 0.05] },

        // Hero to Features transition - phone slides left
        { t: tFeaturesStart, pos: [lX, floatY, 0.00, 0.15, -0.02] },

        // Features Section - phone on left (opposite text)
        { t: tFeaturesEnd, pos: [lX, floatY, 0.00, 0.15, -0.02] },

        // Features to Offerings transition - phone slides right
        { t: tOfferingsStart, pos: [rX, floatY, -0.05, -0.15, 0.05] },

        // Offerings Section - phone on right (opposite text)
        { t: tOfferingsEnd, pos: [rX, floatY, -0.05, -0.15, 0.05] },

        // Offerings to Dashboard transition - phone slides left
        { t: tDashboardStart, pos: [lX, floatY, 0.00, 0.15, -0.02] },

        // Dashboard Section - phone on left (opposite text)
        { t: tDashboardEnd, pos: [lX, floatY, 0.00, 0.15, -0.02] },

        // Dashboard to WhoWeAre transition - phone exits downwards
        { t: tWhoWeAreStart, pos: [lX, floatY - 15, 0.00, 0.15, -0.02] },

        // Rest of the page - phone remains exited
        { t: 1.00, pos: [lX, floatY - 15, 0.00, 0.15, -0.02] },
      ];

      let wp1 = waypoints[0];
      let wp2 = waypoints[waypoints.length - 1];

      for (let i = 0; i < waypoints.length - 1; i++) {
        if (progress >= waypoints[i].t && progress <= waypoints[i + 1].t) {
          wp1 = waypoints[i];
          wp2 = waypoints[i + 1];
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

      // Damp position and rotation updates
      group.current.position.x = THREE.MathUtils.damp(group.current.position.x, targetX, 4, delta);
      group.current.position.y = THREE.MathUtils.damp(group.current.position.y, targetY, 4, delta);

      group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, targetRotX, 4, delta);
      group.current.rotation.y = THREE.MathUtils.damp(group.current.rotation.y, targetRotY, 4, delta);
      group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, targetRotZ, 4, delta);

      // Scale down on mobile so phone fits narrow viewports
      const targetScale = isMobile ? 0.72 : 1.0;
      const cs = group.current.scale.x;
      const ns = THREE.MathUtils.damp(cs, targetScale, 4, delta);
      group.current.scale.set(ns, ns, ns);
    }
  });

  // The 3D phone mockup will scale down on mobile screens to fit the view
  const isMobile = viewport.width < 5;

  return (
    <group ref={group}>
      {/* Outer metallic frame */}
      <RoundedBox args={[3.2, 6.96, 0.4]} radius={0.25} smoothness={12}>
        <meshStandardMaterial color="#1f1f1f" metalness={0.9} roughness={0.1} />
      </RoundedBox>
      {/* Inner black bezel */}
      <RoundedBox args={[3.1, 6.86, 0.41]} radius={0.20} smoothness={12}>
        <meshStandardMaterial color="#000000" metalness={0.5} roughness={0.5} />
      </RoundedBox>
      {/* Screen sits in front of the inner bezel (bezel front face is at z=0.205) */}
      <mesh position={[0, 0, 0.206]} geometry={screenGeo}>
        <Suspense fallback={<meshBasicMaterial color="#000000" />}>
          <PhoneScreenMaterial activeIndex={activeIndex} />
        </Suspense>
      </mesh>
    </group>
  );
}

const AuroraMaterial = {
  uniforms: {
    time: { value: 0 },
    color1: { value: new THREE.Color("#ffffff") },
    color2: { value: new THREE.Color("#161616") },
    darkness: { value: 1.0 },
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
    uniform float darkness;
    void main() {
      // Fade out at edges
      float alpha = sin(vUv.x * 3.14159) * sin(vUv.y * 3.14159);
      // Mix colors based on height and time
      float mixVal = sin(vUv.x * 5.0 + time) * 0.5 + 0.5;
      vec3 finalColor = mix(color1, color2, mixVal);
      
      // Add vertical streaks
      float streaks = sin(vUv.x * 50.0 + time * 2.0) * 0.5 + 0.5;
      alpha *= (0.5 + streaks * 0.5);

      gl_FragColor = vec4(finalColor, alpha * 0.4 * darkness);
    }
  `,
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  side: THREE.DoubleSide
};

function Aurora({ scrollStateRef }) {
  const materialRef = useRef();
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
      materialRef.current.uniforms.darkness.value = scrollStateRef.current.darkness;
      materialRef.current.visible = scrollStateRef.current.darkness > 0.01;
    }
  });

  return (
    <mesh position={[0, 30, -60]}>
      {/* A very long, wide curved plane in the sky */}
      <cylinderGeometry args={[80, 80, 30, 64, 1, true, -Math.PI / 2, Math.PI]} />
      <shaderMaterial
        ref={materialRef}
        uniforms={AuroraMaterial.uniforms}
        vertexShader={AuroraMaterial.vertexShader}
        fragmentShader={AuroraMaterial.fragmentShader}
        transparent={true}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function MilkyWay({ scrollStateRef }) {
  const count = 5000;
  const matRef = useRef();
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

      // Colors: white, grey, black
      const mix = Math.random();
      if (mix < 0.6) color.set("#ffffff");
      else if (mix < 0.8) color.set("#333333");
      else color.set("#888888");

      const intensity = 0.2 + Math.random() * 0.8;
      col[i * 3] = color.r * intensity;
      col[i * 3 + 1] = color.g * intensity;
      col[i * 3 + 2] = color.b * intensity;
    }
    return [pos, col];
  }, []);

  useFrame(() => {
    if (matRef.current) {
      matRef.current.opacity = 0.6 * scrollStateRef.current.darkness;
      matRef.current.visible = scrollStateRef.current.darkness > 0.01;
    }
  });

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial ref={matRef} size={0.05} vertexColors transparent opacity={0.6} blending={THREE.AdditiveBlending} sizeAttenuation={false} />
    </points>
  );
}

function ShootingStar({ scrollStateRef, resetKey }) {
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
  }, [reset, resetKey]);

  const matRef = useRef();

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.addScaledVector(initialState.velocity, delta);
      if (ref.current.position.y < -30 || ref.current.position.z > 20) {
        setReset(prev => prev + 1);
        ref.current.position.set(initialState.x, initialState.y, initialState.z);
      }
    }
    if (matRef.current) {
      matRef.current.opacity = 0.6 * scrollStateRef.current.darkness;
      matRef.current.visible = scrollStateRef.current.darkness > 0.01;
    }
  });

  return (
    <group ref={ref} position={[initialState.x, initialState.y, initialState.z]}>
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <cylinderGeometry args={[0.05, 0, 8, 8]} />
        <meshBasicMaterial ref={matRef} color="#ffffff" transparent opacity={0.6} />
      </mesh>
    </group>
  );
}

function ShootingStars({ scrollStateRef }) {
  return (
    <group>
      {Array.from({ length: 8 }).map((_, i) => (
        <ShootingStar key={i} scrollStateRef={scrollStateRef} resetKey={i} />
      ))}
    </group>
  );
}

function VideoBackground({ scrollStateRef }) {
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

  const matRef = useRef();

  useFrame(() => {
    if (matRef.current) {
      matRef.current.opacity = 0.4 * scrollStateRef.current.darkness;
      matRef.current.visible = scrollStateRef.current.darkness > 0.01;
    }
  });

  return (
    <mesh position={[0, 0, -120]}>
      <planeGeometry args={[400, 250]} />
      <meshBasicMaterial ref={matRef} toneMapped={false} transparent opacity={0.4}>
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
    </mesh>
  );
}

function MovingRoad({ scrollStateRef }) {
  const gridRef = useRef();
  const scrollY = useRef(0);
  const scrollVelocity = useRef(0);

  const gridMatRef = useRef();
  const groundMatRef = useRef();
  const fogMatRef = useRef();

  const lightColor = useMemo(() => new THREE.Color("#8e9196"), []);
  const darkColor = useMemo(() => new THREE.Color("#0a0a0a"), []);

  useFrame((state, delta) => {
    const currentScrollY = window.scrollY;
    const velocity = Math.abs(currentScrollY - scrollY.current);

    scrollVelocity.current = THREE.MathUtils.lerp(scrollVelocity.current, velocity, 0.1);
    scrollY.current = currentScrollY;

    const speed = 2 + scrollVelocity.current * 0.2;

    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * speed) % 1;
    }

    const darkness = scrollStateRef.current.darkness;

    if (gridMatRef.current) {
      gridMatRef.current.opacity = 0.25 * darkness;
      gridMatRef.current.visible = darkness > 0.01;
    }

    if (groundMatRef.current) {
      groundMatRef.current.color.copy(lightColor).lerp(darkColor, darkness);
    }

    if (fogMatRef.current) {
      fogMatRef.current.color.copy(lightColor).lerp(darkColor, darkness);
    }
  });

  return (
    <group position={[0, -3.5, 0]}>
      <gridHelper ref={gridRef} args={[100, 100, '#555555', '#222222']} position={[0, 0, 0]}>
        <material ref={gridMatRef} attach="material" transparent opacity={0.25} depthWrite={false} />
      </gridHelper>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial ref={groundMatRef} color="#0A0A0A" />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -30]}>
        <planeGeometry args={[100, 60]} />
        <meshBasicMaterial ref={fogMatRef} color="#0A0A0A" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

function Mountains({ scrollStateRef }) {
  const m1MatRef1 = useRef();
  const m1MatRef2 = useRef();
  const m1MatRef3 = useRef();
  const m1MatRef4 = useRef();

  const lightColor1 = useMemo(() => new THREE.Color("#8e9196"), []);
  const darkColor1 = useMemo(() => new THREE.Color("#111111"), []);
  const darkColor2 = useMemo(() => new THREE.Color("#161616"), []);
  const darkColor3 = useMemo(() => new THREE.Color("#0c0c0c"), []);

  useFrame(() => {
    const darkness = scrollStateRef.current.darkness;

    if (m1MatRef1.current) m1MatRef1.current.color.copy(lightColor1).lerp(darkColor1, darkness);
    if (m1MatRef2.current) m1MatRef2.current.color.copy(lightColor1).lerp(darkColor2, darkness);
    if (m1MatRef3.current) m1MatRef3.current.color.copy(lightColor1).lerp(darkColor3, darkness);
    if (m1MatRef4.current) m1MatRef4.current.color.copy(lightColor1).lerp(darkColor1, darkness);
  });

  return (
    <group position={[0, -3.5, -30]}>
      <mesh position={[-15, 4, 0]}>
        <coneGeometry args={[12, 10, 32]} />
        <meshStandardMaterial ref={m1MatRef1} roughness={0.9} flatShading />
      </mesh>
      <mesh position={[18, 6, -5]}>
        <coneGeometry args={[16, 15, 32]} />
        <meshStandardMaterial ref={m1MatRef2} roughness={0.9} flatShading />
      </mesh>
      <mesh position={[-5, 8, -15]}>
        <coneGeometry args={[15, 20, 32]} />
        <meshStandardMaterial ref={m1MatRef3} roughness={0.9} flatShading />
      </mesh>
      <mesh position={[28, 5, -8]}>
        <coneGeometry args={[10, 12, 32]} />
        <meshStandardMaterial ref={m1MatRef4} roughness={0.9} flatShading />
      </mesh>
    </group>
  );
}

function DynamicStars({ scrollStateRef }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current && ref.current.material) {
      ref.current.material.opacity = scrollStateRef.current.darkness;
      ref.current.visible = scrollStateRef.current.darkness > 0.01;
    }
  });

  return <Stars ref={ref} radius={150} depth={50} count={10000} factor={1.5} saturation={0} fade speed={2} />;
}

function ScrollHandler({ thresholds, containerRef, scrollStateRef }) {
  const { scene } = useThree();

  useFrame(() => {
    const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalScroll <= 0 ? 0 : Math.min(1, Math.max(0, window.scrollY / totalScroll));

    // Update shared ref
    scrollStateRef.current.progress = progress;
    scrollStateRef.current.darkness = 1.0;

    // Update container background color directly (no React re-render!)
    if (containerRef.current) {
      containerRef.current.style.backgroundColor = 'rgb(10, 10, 10)';

      // Update fog color directly
      if (scene.fog) {
        scene.fog.color.setRGB(10 / 255, 10 / 255, 10 / 255);
      }
    }
  });

  return null;
}

export default function Scene3D() {
  const containerRef = useRef();
  const scrollStateRef = useRef({ progress: 0, darkness: 1.0 });

  const [thresholds, setThresholds] = useState({
    features: 0.14,
    offerings: 0.32,
    dashboard: 0.44,
    whoweare: 0.55,
  });

  useEffect(() => {
    const handleResize = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const featuresEl = document.getElementById('features');
      const offeringsEl = document.getElementById('offerings');
      const dashboardEl = document.getElementById('dashboard');
      const whoweareEl = document.getElementById('whoweare');

      const getPct = (el, fallback) => {
        if (!el) return fallback;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return Math.min(0.95, Math.max(0.01, top / totalScroll));
      };

      setThresholds({
        features: getPct(featuresEl, 0.14),
        offerings: getPct(offeringsEl, 0.32),
        dashboard: getPct(dashboardEl, 0.44),
        whoweare: getPct(whoweareEl, 0.55),
      });
    };

    const timer = setTimeout(handleResize, 500);

    window.addEventListener('load', handleResize);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', handleResize);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full bg-[#0A0A0A] transition-colors duration-200">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        {/* Deep immersive fog */}
        <fog attach="fog" args={['#0A0A0A', 5, 40]} />

        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" />
        <Environment preset="city" />

        <DynamicStars scrollStateRef={scrollStateRef} />
        <MilkyWay scrollStateRef={scrollStateRef} />
        <Aurora scrollStateRef={scrollStateRef} />
        <ShootingStars scrollStateRef={scrollStateRef} />
        <VideoBackground scrollStateRef={scrollStateRef} />

        <MovingRoad scrollStateRef={scrollStateRef} />
        <Mountains scrollStateRef={scrollStateRef} />

        <Suspense fallback={null}>
          <PhoneModel thresholds={thresholds} scrollStateRef={scrollStateRef} />
        </Suspense>
        <ScrollHandler thresholds={thresholds} containerRef={containerRef} scrollStateRef={scrollStateRef} />

        <ContactShadows position={[0, -3.4, 0]} opacity={0.8} scale={20} blur={2.5} far={10} color="#000000" />
      </Canvas>
    </div>
  );
}
