import { motion } from "framer-motion";

export default function Logo({ className = "", animate = false, layout = "vertical" }) {
  // Animations for the new logo elements
  const suitcaseVariants = animate ? {
    y: [0, -3, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  } : {};

  const planeVariants = animate ? {
    y: [0, -2, 2, 0],
    x: [0, 2, -2, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
  } : {};

  const isHorizontal = layout === "horizontal";

  return (
    <div className={`flex ${isHorizontal ? 'flex-row' : 'flex-col'} items-center justify-center ${className}`}>
      {/* Icon Part */}
      <div className={`relative ${isHorizontal ? 'w-12 h-12' : 'w-24 h-24 mb-3'}`}>
        <motion.svg 
          animate={suitcaseVariants}
          viewBox="0 0 100 100" 
          className="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Suitcase Handle */}
          <path d="M38,32 V20 C38,17 41,15 45,15 H55 C59,15 62,17 62,20 V32" strokeWidth="2.5" />
          <path d="M44,22 H56" strokeWidth="2" />

          {/* Suitcase Body */}
          <rect x="28" y="32" width="44" height="48" rx="8" fill="#0A0A0A" strokeWidth="2.5" />
          
          {/* Suitcase Wheels */}
          <rect x="34" y="80" width="8" height="5" rx="2" fill="currentColor" stroke="none" />
          <rect x="58" y="80" width="8" height="5" rx="2" fill="currentColor" stroke="none" />
          
          {/* Vertical stripes on Suitcase for visual depth */}
          <line x1="43" y1="38" x2="43" y2="76" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />
          <line x1="57" y1="38" x2="57" y2="76" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.2" />

          {/* Shield on the left */}
          <g>
            {/* Mask to hide suitcase lines under shield */}
            <path d="M12,46 C12,43 24,42 24,42 C24,42 36,43 36,46 C36,58 24,67 24,67 C24,67 12,58 12,46 Z" fill="#0A0A0A" stroke="none" />
            {/* Shield Outer Outline */}
            <path d="M12,46 C12,43 24,42 24,42 C24,42 36,43 36,46 C36,58 24,67 24,67 C24,67 12,58 12,46 Z" strokeWidth="2.5" />
            {/* Shield Inner Outline */}
            <path d="M15,48 C15,46 24,45 24,45 C24,45 33,46 33,48 C33,57 24,64 24,64 C24,64 15,57 15,48 Z" strokeWidth="1.2" strokeOpacity="0.4" />
            {/* Checkmark */}
            <path d="M19,53 L22,56 L29,49" strokeWidth="2.5" />
          </g>

          {/* Airplane on the right, tilted and flying */}
          <motion.g animate={planeVariants} transform="translate(68, 48) rotate(-15)">
            {/* Mask to hide suitcase lines under airplane */}
            <path d="M-10,0 L-5,-2 L2,-2 L10,-7 L13,-7 L7,-2 L12,-2 L15,-4 L17,-4 L15,0 L17,4 L15,4 L12,2 L7,2 L13,7 L10,7 L2,2 L-5,2 Z" fill="#0A0A0A" stroke="none" />
            {/* Airplane Outline */}
            <path d="M-10,0 L-5,-2 L2,-2 L10,-7 L13,-7 L7,-2 L12,-2 L15,-4 L17,-4 L15,0 L17,4 L15,4 L12,2 L7,2 L13,7 L10,7 L2,2 L-5,2 Z" strokeWidth="2.5" />
            {/* Speed trails/motion lines */}
            <line x1="-16" y1="-4" x2="-12" y2="-4" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="-18" y1="1" x2="-13" y2="1" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
            <line x1="-15" y1="5" x2="-11" y2="5" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          </motion.g>
        </motion.svg>
      </div>

      {/* Text Part */}
      <h2 className={`font-display font-black tracking-[0.15em] text-white ${isHorizontal ? 'text-2xl ml-3' : 'text-3xl'}`} style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}>
        TRIP<span className="text-white/80">SYNC</span>
      </h2>
    </div>
  );
}
