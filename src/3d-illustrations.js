/**
 * AI EXPLORER // 3D ILLUSTRATION & SPATIAL ASSET ENGINE (LIGHT THEME)
 * Pure vector 3D illustrations, isometric emblems & holographic visual assets.
 * 100% offline-compatible, high-DPI crisp, lightweight, and zero external asset lag.
 */

export const TOOL_3D_ASSETS = {
  // 1. ElevenLabs: 3D Neural Soundwave Synthesizer & Floating Studio Mic
  elevenlabs: `
    <svg class="tool-3d-svg-art" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="elMicGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6E44FF" stop-opacity="0.2"/>
          <stop offset="70%" stop-color="#4C78A8" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="elMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="35%" stop-color="#E2E6EF"/>
          <stop offset="75%" stop-color="#94A3B8"/>
          <stop offset="100%" stop-color="#64748B"/>
        </linearGradient>
        <linearGradient id="elWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#4C78A8"/>
          <stop offset="50%" stop-color="#6E44FF"/>
          <stop offset="100%" stop-color="#4C78A8"/>
        </linearGradient>
        <filter id="elDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#6E44FF" flood-opacity="0.2"/>
        </filter>
      </defs>
      <!-- Background Ambient Glow Disc -->
      <circle cx="90" cy="90" r="70" fill="url(#elMicGlow)"/>
      
      <!-- 3D Holographic Soundwave Concentric Arcs -->
      <path d="M 30 90 A 60 60 0 0 1 150 90" stroke="url(#elWaveGrad)" stroke-width="2.5" stroke-dasharray="6 4" opacity="0.6"/>
      <path d="M 42 90 A 48 48 0 0 1 138 90" stroke="#4C78A8" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
      <path d="M 54 90 A 36 36 0 0 1 126 90" stroke="#6E44FF" stroke-width="3" stroke-linecap="round" opacity="0.9"/>
      
      <!-- Floating Frequency Spectrum Bars -->
      <rect x="22" y="80" width="4" height="20" rx="2" fill="#4C78A8" opacity="0.75"/>
      <rect x="30" y="70" width="4" height="40" rx="2" fill="#6E44FF" opacity="0.85"/>
      <rect x="146" y="70" width="4" height="40" rx="2" fill="#6E44FF" opacity="0.85"/>
      <rect x="154" y="80" width="4" height="20" rx="2" fill="#4C78A8" opacity="0.75"/>

      <!-- 3D Studio Condenser Microphone Capsule -->
      <g filter="url(#elDrop)">
        <!-- Mic Body Cylindrical Stand -->
        <rect x="85" y="115" width="10" height="32" rx="4" fill="url(#elMetal)"/>
        <ellipse cx="90" cy="148" rx="26" ry="7" fill="url(#elMetal)"/>
        
        <!-- Shockmount Ring -->
        <circle cx="90" cy="85" r="30" stroke="#6E44FF" stroke-width="2" fill="none" opacity="0.6"/>
        <line x1="68" y1="85" x2="112" y2="85" stroke="#6E44FF" stroke-width="1.5" stroke-dasharray="3 3"/>
        
        <!-- Microphone Head Dome -->
        <rect x="75" y="55" width="30" height="45" rx="15" fill="url(#elMetal)"/>
        <!-- Acoustic Metal Grille Texture -->
        <rect x="77" y="58" width="26" height="24" rx="12" fill="#1E293B" opacity="0.75"/>
        <line x1="81" y1="64" x2="99" y2="64" stroke="#6E44FF" stroke-width="1.5"/>
        <line x1="80" y1="70" x2="100" y2="70" stroke="#6E44FF" stroke-width="1.5"/>
        <line x1="81" y1="76" x2="99" y2="76" stroke="#6E44FF" stroke-width="1.5"/>
        <!-- Glowing LED Core Indicator -->
        <circle cx="90" cy="92" r="3" fill="#6E44FF"/>
      </g>
    </svg>
  `,

  // 2. NotebookLM: 3D Holographic Knowledge Tome & Audio Podcast Resonance Prism
  notebooklm: `
    <svg class="tool-3d-svg-art" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="nbGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6E44FF" stop-opacity="0.25"/>
          <stop offset="65%" stop-color="#4C78A8" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="nbCover" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#6E44FF"/>
          <stop offset="50%" stop-color="#4F46E5"/>
          <stop offset="100%" stop-color="#3730A3"/>
        </linearGradient>
        <linearGradient id="nbPage" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="50%" stop-color="#F8FAFC"/>
          <stop offset="100%" stop-color="#F1F5F9"/>
        </linearGradient>
        <filter id="nbDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#6E44FF" flood-opacity="0.25"/>
        </filter>
      </defs>
      <!-- Background Ambient Glow -->
      <circle cx="90" cy="90" r="70" fill="url(#nbGlow)"/>

      <!-- Floating Holographic Data Nodes -->
      <circle cx="34" cy="52" r="4" fill="#4C78A8" opacity="0.8"/>
      <circle cx="148" cy="56" r="3" fill="#6E44FF" opacity="0.8"/>
      <path d="M 38 52 Q 70 30 90 40 Q 120 50 145 56" stroke="#4C78A8" stroke-width="1.5" stroke-dasharray="4 3" opacity="0.5"/>

      <!-- 3D Open Holographic Knowledge Tome -->
      <g filter="url(#nbDrop)">
        <!-- Back Hardcover Spreading in Isometric Perspective -->
        <path d="M 24 116 L 86 136 L 90 138 L 94 136 L 156 116 L 150 72 L 90 92 L 30 72 Z" fill="url(#nbCover)" stroke="#4F46E5" stroke-width="2"/>
        
        <!-- Left Hologram Glass Page -->
        <path d="M 32 76 L 88 94 L 88 132 L 28 112 Z" fill="url(#nbPage)" opacity="0.95"/>
        <line x1="42" y1="88" x2="76" y2="98" stroke="#6E44FF" stroke-width="2" stroke-linecap="round"/>
        <line x1="42" y1="96" x2="78" y2="106" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="42" y1="104" x2="72" y2="114" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>

        <!-- Right Hologram Glass Page -->
        <path d="M 92 94 L 148 76 L 152 112 L 92 132 Z" fill="url(#nbPage)" opacity="0.95"/>
        <line x1="104" y1="98" x2="138" y2="88" stroke="#4C78A8" stroke-width="2" stroke-linecap="round"/>
        <line x1="102" y1="106" x2="138" y2="96" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
        <line x1="104" y1="114" x2="134" y2="104" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>

        <!-- Floating Audio Overview Podcast Prism -->
        <g transform="translate(0, -6)">
          <circle cx="90" cy="54" r="18" fill="#F3EEFD" stroke="#6E44FF" stroke-width="2"/>
          <path d="M 85 46 L 98 54 L 85 62 Z" fill="#6E44FF"/>
          <!-- Expanding Audio Wave Rings -->
          <circle cx="90" cy="54" r="24" stroke="#6E44FF" stroke-width="1.5" stroke-dasharray="3 3" opacity="0.6"/>
          <circle cx="90" cy="54" r="30" stroke="#4C78A8" stroke-width="1" opacity="0.4"/>
        </g>
      </g>
    </svg>
  `,

  // 3. Grammarly: 3D Precision Syntax Feather & Holographic Lexicon Compass
  grammarly: `
    <svg class="tool-3d-svg-art" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="gmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#10B981" stop-opacity="0.25"/>
          <stop offset="70%" stop-color="#4C78A8" stop-opacity="0.08"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="gmQuill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="40%" stop-color="#34D399"/>
          <stop offset="80%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
        <filter id="gmDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#10B981" flood-opacity="0.25"/>
        </filter>
      </defs>
      <!-- Background Ambient Glow -->
      <circle cx="90" cy="90" r="70" fill="url(#gmGlow)"/>

      <!-- Circular Precision Grammar Ring Calibration -->
      <circle cx="90" cy="90" r="52" stroke="#10B981" stroke-width="2" stroke-dasharray="8 6" opacity="0.5"/>
      <circle cx="90" cy="90" r="62" stroke="#4C78A8" stroke-width="1.5" opacity="0.35"/>

      <!-- Floating Punctuation & Checkmark Orbs -->
      <circle cx="44" cy="62" r="10" fill="#FFFFFF" stroke="#059669" stroke-width="2"/>
      <text x="40" y="66" fill="#059669" font-family="monospace" font-weight="bold" font-size="12">“</text>

      <circle cx="138" cy="118" r="10" fill="#FFFFFF" stroke="#2563EB" stroke-width="2"/>
      <text x="135" y="122" fill="#2563EB" font-family="monospace" font-weight="bold" font-size="12">;</text>

      <!-- 3D Crystalline Precision Quill Stylus -->
      <g filter="url(#gmDrop)" transform="rotate(-30 90 90)">
        <!-- Quill Vane / Blade Structure -->
        <path d="M 90 24 C 112 50 116 95 90 126 C 64 95 68 50 90 24 Z" fill="url(#gmQuill)"/>
        <!-- Central Spine / Shaft -->
        <line x1="90" y1="24" x2="90" y2="155" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <!-- Gold Stylus Nib -->
        <polygon points="90,165 85,145 95,145" fill="#FBBF24"/>
        <line x1="90" y1="145" x2="90" y2="160" stroke="#000000" stroke-width="1.2"/>
        <!-- Glowing Green Correction Checkmark Emblem -->
        <circle cx="90" cy="85" r="14" fill="#FFFFFF" stroke="#059669" stroke-width="2"/>
        <path d="M 84 85 L 88 89 L 97 80" stroke="#059669" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  `,

  // 4. Consensus: 3D Quantum Research Telescope & Molecular Evidence Sphere
  consensus: `
    <svg class="tool-3d-svg-art" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="csGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4C78A8" stop-opacity="0.25"/>
          <stop offset="60%" stop-color="#6E44FF" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="csMetal" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#DCD3FC"/>
          <stop offset="100%" stop-color="#6E44FF"/>
        </linearGradient>
        <filter id="csDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#4C78A8" flood-opacity="0.25"/>
        </filter>
      </defs>
      <!-- Background Ambient Glow -->
      <circle cx="90" cy="90" r="70" fill="url(#csGlow)"/>

      <!-- Orbiting Scientific Atom Rings -->
      <ellipse cx="90" cy="90" rx="60" ry="22" stroke="#4C78A8" stroke-width="1.8" stroke-dasharray="6 4" transform="rotate(30 90 90)" opacity="0.6"/>
      <ellipse cx="90" cy="90" rx="60" ry="22" stroke="#6E44FF" stroke-width="1.8" stroke-dasharray="6 4" transform="rotate(-30 90 90)" opacity="0.6"/>
      <circle cx="138" cy="62" r="5" fill="#4C78A8"/>
      <circle cx="42" cy="118" r="4" fill="#6E44FF"/>

      <!-- 3D Scientific Research Core & Lens Focus Prism -->
      <g filter="url(#csDrop)">
        <!-- Research Telescope Eyepiece & Body -->
        <rect x="52" y="98" width="55" height="18" rx="6" transform="rotate(-35 52 98)" fill="url(#csMetal)"/>
        <rect x="74" y="82" width="60" height="26" rx="8" transform="rotate(-35 74 82)" fill="url(#csMetal)"/>
        
        <!-- Large Objective Lens Aperture -->
        <ellipse cx="125" cy="52" rx="14" ry="24" transform="rotate(-35 125 52)" fill="#1E293B" stroke="#4C78A8" stroke-width="2.5"/>
        <ellipse cx="125" cy="52" rx="8" ry="16" transform="rotate(-35 125 52)" fill="#38BDF8" opacity="0.8"/>

        <!-- Tripod Base Supports -->
        <line x1="68" y1="120" x2="45" y2="152" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>
        <line x1="72" y1="120" x2="72" y2="156" stroke="#64748B" stroke-width="3" stroke-linecap="round"/>
        <line x1="76" y1="120" x2="100" y2="152" stroke="#94A3B8" stroke-width="3" stroke-linecap="round"/>

        <!-- Floating Verified Paper Citation Hologram -->
        <g transform="translate(112, 105)">
          <rect x="0" y="0" width="36" height="28" rx="4" fill="#FFFFFF" stroke="#059669" stroke-width="1.5"/>
          <line x1="6" y1="8" x2="28" y2="8" stroke="#059669" stroke-width="1.5"/>
          <line x1="6" y1="14" x2="24" y2="14" stroke="#94A3B8" stroke-width="1.2"/>
          <line x1="6" y1="20" x2="20" y2="20" stroke="#94A3B8" stroke-width="1.2"/>
          <circle cx="30" cy="20" r="3" fill="#059669"/>
        </g>
      </g>
    </svg>
  `,

  // 5. Google Antigravity: 3D Autonomous AI Agent Rocket & Quantum Compiler
  antigravity: `
    <svg class="tool-3d-svg-art" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="agGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#6E44FF" stop-opacity="0.25"/>
          <stop offset="60%" stop-color="#4C78A8" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="agRocket" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#F1F4FA"/>
          <stop offset="85%" stop-color="#DCD3FC"/>
          <stop offset="100%" stop-color="#6E44FF"/>
        </linearGradient>
        <linearGradient id="agFlame" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4C78A8"/>
          <stop offset="60%" stop-color="#6E44FF"/>
          <stop offset="100%" stop-color="#F43F5E"/>
        </linearGradient>
        <filter id="agDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#6E44FF" flood-opacity="0.25"/>
        </filter>
      </defs>
      <!-- Background Ambient Glow -->
      <circle cx="90" cy="90" r="70" fill="url(#agGlow)"/>

      <!-- Orbiting Autonomous Agent Co-pilots -->
      <ellipse cx="90" cy="90" rx="65" ry="32" stroke="#4C78A8" stroke-width="1.5" stroke-dasharray="5 5" transform="rotate(-25 90 90)" opacity="0.5"/>
      <circle cx="35" cy="80" r="7" fill="#4C78A8"/>
      <circle cx="145" cy="100" r="6" fill="#6E44FF"/>

      <!-- 3D Autonomous AI Agent Rocket Spacecraft -->
      <g filter="url(#agDrop)">
        <!-- Ion Thruster Exhaust Flame -->
        <polygon points="90,165 78,135 102,135" fill="url(#agFlame)"/>
        <polygon points="90,152 83,135 97,135" fill="#FFFFFF"/>

        <!-- Aerodynamic Rocket Body -->
        <path d="M 90 28 C 72 65 70 115 76 135 L 104 135 C 110 115 108 65 90 28 Z" fill="url(#agRocket)"/>
        
        <!-- Left & Right Wing Stabilizers -->
        <path d="M 76 112 L 54 136 L 76 132 Z" fill="#6E44FF"/>
        <path d="M 104 112 L 126 136 L 104 132 Z" fill="#6E44FF"/>

        <!-- Cockpit Glass Bubble with Agent Logic Core -->
        <ellipse cx="90" cy="68" rx="8" ry="12" fill="#E0F2FE" stroke="#2563EB" stroke-width="2"/>
        <circle cx="90" cy="68" r="4" fill="#2563EB"/>

        <!-- Center Code Bracket Decal -->
        <text x="85" y="104" fill="#6E44FF" font-family="monospace" font-weight="bold" font-size="13">&lt;/&gt;</text>
      </g>
    </svg>
  `,

  // 6. Teachable Machine: 3D Cyber-Vision Scanner Camera & Neural Classifier
  teachablemachine: `
    <svg class="tool-3d-svg-art" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="tmGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.25"/>
          <stop offset="65%" stop-color="#6E44FF" stop-opacity="0.1"/>
          <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="tmBody" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#FFFFFF"/>
          <stop offset="45%" stop-color="#F8FAFC"/>
          <stop offset="85%" stop-color="#E2E8F0"/>
          <stop offset="100%" stop-color="#CBD5E1"/>
        </linearGradient>
        <linearGradient id="tmBeam" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#4C78A8" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#F59E0B" stop-opacity="0.05"/>
        </linearGradient>
        <filter id="tmDrop" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.2"/>
        </filter>
      </defs>
      <!-- Background Ambient Glow -->
      <circle cx="90" cy="90" r="70" fill="url(#tmGlow)"/>

      <!-- Holographic Neural Vision Scanning Frustum / Cone -->
      <polygon points="90,75 35,160 145,160" fill="url(#tmBeam)" opacity="0.6"/>
      <line x1="45" y1="145" x2="135" y2="145" stroke="#4C78A8" stroke-width="2" stroke-dasharray="6 4"/>
      <line x1="60" y1="120" x2="120" y2="120" stroke="#F59E0B" stroke-width="2" stroke-dasharray="4 4"/>

      <!-- 3D Biometric AI Vision Camera Device -->
      <g filter="url(#tmDrop)">
        <!-- Camera Chassis -->
        <rect x="52" y="52" width="76" height="50" rx="14" fill="url(#tmBody)" stroke="#CBD5E1" stroke-width="2"/>
        <rect x="65" y="42" width="26" height="12" rx="4" fill="#94A3B8"/>
        <!-- Flash Light Unit -->
        <circle cx="114" cy="62" r="5" fill="#F59E0B"/>

        <!-- Multi-layer Optical Lens -->
        <circle cx="90" cy="77" r="18" fill="#1E293B" stroke="#4C78A8" stroke-width="3"/>
        <circle cx="90" cy="77" r="12" fill="#334155" stroke="#6E44FF" stroke-width="2"/>
        <circle cx="90" cy="77" r="6" fill="#4C78A8"/>
        <circle cx="88" cy="75" r="2.5" fill="#FFFFFF"/>

        <!-- Classification Tags Detected Below -->
        <g transform="translate(42, 148)">
          <rect x="0" y="0" width="44" height="18" rx="6" fill="#FFFFFF" stroke="#2563EB" stroke-width="1.5"/>
          <text x="6" y="13" fill="#2563EB" font-family="monospace" font-weight="bold" font-size="9">Class A ✓</text>
        </g>
        <g transform="translate(94, 148)">
          <rect x="0" y="0" width="44" height="18" rx="6" fill="#FFFFFF" stroke="#D97706" stroke-width="1.5"/>
          <text x="6" y="13" fill="#D97706" font-family="monospace" font-weight="bold" font-size="9">Class B ✓</text>
        </g>
      </g>
    </svg>
  `
};

export const RESISTANT_3D_EMBLEMS = {
  // IT Fields
  cybersecurity: "🛡️",
  robotics: "🤖",
  cloud: "☁️",
  ai_ml: "🧠",
  embedded: "⚡",
  devops: "🔄",
  data_eng: "🗄️",
  blockchain: "⛓️",
  game_dev: "🎮",
  // Non-IT Fields
  biomedical: "🧬",
  aerospace: "🚀",
  renewable: "🌱",
  civil: "🏗️",
  mechanical: "⚙️",
  electrical: "⚡",
  healthcare: "🩺",
  law: "⚖️",
  marine: "⚓",
  chemical: "⚗️",
  agriculture: "🌾",
  materials: "💎"
};

/**
 * 3D Holographic Explorer Trophy & Champion Medallion
 */
export const TROPHY_3D_SVG = `
  <svg class="trophy-svg-model" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="trGlow" cx="50%" cy="45%" r="50%">
        <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.4"/>
        <stop offset="65%" stop-color="#6E44FF" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="#FFFFFF" stop-opacity="0"/>
      </radialGradient>
      <linearGradient id="trGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFDF5"/>
        <stop offset="30%" stop-color="#FCD34D"/>
        <stop offset="70%" stop-color="#F59E0B"/>
        <stop offset="100%" stop-color="#D97706"/>
      </linearGradient>
      <linearGradient id="trPedestal" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFFFFF"/>
        <stop offset="50%" stop-color="#F1F4FA"/>
        <stop offset="100%" stop-color="#E2E8F0"/>
      </linearGradient>
      <filter id="trFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#F59E0B" flood-opacity="0.3"/>
      </filter>
    </defs>

    <!-- Halo Glow Aura -->
    <circle cx="80" cy="72" r="62" fill="url(#trGlow)"/>

    <!-- Concentric Cyber Wreath -->
    <circle cx="80" cy="65" r="50" stroke="#4C78A8" stroke-width="2" stroke-dasharray="6 4" opacity="0.6"/>
    <circle cx="80" cy="65" r="58" stroke="#6E44FF" stroke-width="1.5" opacity="0.4"/>

    <!-- 3D Gold Sculpted Trophy Cup -->
    <g filter="url(#trFilter)">
      <!-- Left & Right Sculpted Handles -->
      <path d="M 52 46 C 30 46 30 84 54 90" stroke="url(#trGold)" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M 108 46 C 130 46 130 84 106 90" stroke="url(#trGold)" stroke-width="6" stroke-linecap="round" fill="none"/>

      <!-- Trophy Cup Bowl -->
      <path d="M 50 36 L 110 36 C 110 74 98 94 80 98 C 62 94 50 74 50 36 Z" fill="url(#trGold)"/>
      <ellipse cx="80" cy="36" rx="30" ry="8" fill="#FFFDF5"/>

      <!-- Center Champion Star Medallion -->
      <polygon points="80,50 83,60 93,60 85,67 88,77 80,71 72,77 75,67 67,60 77,60" fill="#B45309"/>
      <circle cx="80" cy="65" r="13" stroke="#FFFDF5" stroke-width="1.5" fill="none"/>

      <!-- Stem & Neck Column -->
      <path d="M 74 98 L 86 98 L 88 116 L 72 116 Z" fill="url(#trGold)"/>
      <circle cx="80" cy="116" r="6" fill="#B45309"/>

      <!-- Multi-Tier Titanium / Marble Pedestal Base -->
      <rect x="62" y="116" width="36" height="8" rx="2" fill="url(#trGold)"/>
      <path d="M 54 124 L 106 124 L 112 142 L 48 142 Z" fill="url(#trPedestal)" stroke="#E2E8F0" stroke-width="1.5"/>
      <rect x="42" y="142" width="76" height="10" rx="3" fill="#E2E8F0" stroke="#CBD5E1" stroke-width="1.5"/>

      <!-- Plaque Label: AI 2026 -->
      <rect x="60" y="128" width="40" height="9" rx="2" fill="#FFFFFF" stroke="#F59E0B" stroke-width="1"/>
      <text x="64" y="135" fill="#B45309" font-family="monospace" font-weight="bold" font-size="7">SSMIET CSE</text>
    </g>
  </svg>
`;

/**
 * 3D Career Compass Gyroscope HUD
 */
export const CAREER_COMPASS_3D_SVG = `
  <div class="career-compass-3d-wrap">
    <div class="career-3d-compass" aria-hidden="true">
      <div class="compass-gyro-outer"></div>
      <div class="compass-gyro-inner"></div>
      <div class="compass-core-sphere">🧭</div>
      <!-- Floating Cardinal Domain Indicators -->
      <div style="position: absolute; top: -6px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: #2563EB;">[ AI 🧠 ]</div>
      <div style="position: absolute; bottom: -6px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: #6E44FF;">[ BIO 🧬 ]</div>
      <div style="position: absolute; left: -14px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: #059669;">[ ROBOTICS 🤖 ]</div>
      <div style="position: absolute; right: -14px; font-family: var(--font-mono); font-size: 0.72rem; font-weight: 800; color: #D97706;">[ CYBER 🛡️ ]</div>
    </div>
  </div>
`;

if (typeof window !== "undefined") {
  window.TOOL_3D_ASSETS = TOOL_3D_ASSETS;
  window.TROPHY_3D_SVG = TROPHY_3D_SVG;
  window.CAREER_COMPASS_3D_SVG = CAREER_COMPASS_3D_SVG;
}
