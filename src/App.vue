<template>
  <div id="app">
    <!-- Global PCB Background -->
    <div class="pcb-background">
      <svg class="pcb-circuit" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="12" result="coloredBlur"/>
            <feFlood flood-color="#bf40ff" flood-opacity="1"/>
            <feComposite in2="coloredBlur" operator="in"/>
            <feMerge>
              <feMergeNode/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="dot-gradient">
            <stop offset="0%" style="stop-color:#fff;stop-opacity:1" />
            <stop offset="20%" style="stop-color:#f0b3ff;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#bf40ff;stop-opacity:0.8" />
            <stop offset="100%" style="stop-color:#bf40ff;stop-opacity:0.2" />
          </radialGradient>
          <linearGradient id="trace-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:#bf40ff;stop-opacity:0.1" />
            <stop offset="100%" style="stop-color:#bf40ff;stop-opacity:0.4" />
          </linearGradient>
        </defs>
        
        <!-- Realistic PCB Trace 1 with 45-degree angles -->
        <g class="trace-group">
          <path id="trace1" d="M 200,0 L 200,300 L 250,350 L 400,350 L 450,400 L 450,600 L 500,650 L 700,650 L 750,700 L 750,900 L 800,950 L 1000,950 L 1050,1000 L 1050,1080" 
                stroke="url(#trace-gradient)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
          <!-- Vias at key points -->
          <circle cx="200" cy="300" r="6" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.6"/>
          <circle cx="200" cy="300" r="3" fill="#bf40ff" opacity="0.8"/>
          <circle cx="450" cy="600" r="6" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.6"/>
          <circle cx="450" cy="600" r="3" fill="#bf40ff" opacity="0.8"/>
          <circle cx="750" cy="900" r="6" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.6"/>
          <circle cx="750" cy="900" r="3" fill="#bf40ff" opacity="0.8"/>
          <circle cx="1050" cy="1080" r="8" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.8"/>
          <circle cx="1050" cy="1080" r="4" fill="#bf40ff" opacity="1"/>
          
          <circle r="10" fill="url(#dot-gradient)" filter="url(#neon-glow)">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath href="#trace1"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        <!-- Realistic PCB Trace 2 -->
        <g class="trace-group">
          <path id="trace2" d="M 1600,0 L 1600,200 L 1550,250 L 1400,250 L 1350,300 L 1350,500 L 1300,550 L 1100,550 L 1050,600 L 1050,800 L 1000,850 L 800,850 L 750,900 L 750,1080" 
                stroke="url(#trace-gradient)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
          <!-- Vias -->
          <circle cx="1600" cy="200" r="6" fill="none" stroke="#d966ff" stroke-width="2" opacity="0.6"/>
          <circle cx="1600" cy="200" r="3" fill="#d966ff" opacity="0.8"/>
          <circle cx="1350" cy="500" r="6" fill="none" stroke="#d966ff" stroke-width="2" opacity="0.6"/>
          <circle cx="1350" cy="500" r="3" fill="#d966ff" opacity="0.8"/>
          <circle cx="1050" cy="800" r="6" fill="none" stroke="#d966ff" stroke-width="2" opacity="0.6"/>
          <circle cx="1050" cy="800" r="3" fill="#d966ff" opacity="0.8"/>
          <circle cx="750" cy="1080" r="8" fill="none" stroke="#d966ff" stroke-width="2" opacity="0.8"/>
          <circle cx="750" cy="1080" r="4" fill="#d966ff" opacity="1"/>
          
          <circle r="10" fill="url(#dot-gradient)" filter="url(#neon-glow)">
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#trace2"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        <!-- Realistic PCB Trace 3 -->
        <g class="trace-group">
          <path id="trace3" d="M 900,0 L 900,150 L 850,200 L 700,200 L 650,250 L 650,450 L 600,500 L 400,500 L 350,550 L 350,750 L 300,800 L 150,800 L 100,850 L 100,1080" 
                stroke="url(#trace-gradient)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
          <!-- Vias -->
          <circle cx="900" cy="150" r="6" fill="none" stroke="#e699ff" stroke-width="2" opacity="0.6"/>
          <circle cx="900" cy="150" r="3" fill="#e699ff" opacity="0.8"/>
          <circle cx="650" cy="450" r="6" fill="none" stroke="#e699ff" stroke-width="2" opacity="0.6"/>
          <circle cx="650" cy="450" r="3" fill="#e699ff" opacity="0.8"/>
          <circle cx="350" cy="750" r="6" fill="none" stroke="#e699ff" stroke-width="2" opacity="0.6"/>
          <circle cx="350" cy="750" r="3" fill="#e699ff" opacity="0.8"/>
          <circle cx="100" cy="1080" r="8" fill="none" stroke="#e699ff" stroke-width="2" opacity="0.8"/>
          <circle cx="100" cy="1080" r="4" fill="#e699ff" opacity="1"/>
          
          <circle r="10" fill="url(#dot-gradient)" filter="url(#neon-glow)">
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href="#trace3"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        <!-- Additional PCB Trace 4 -->
        <g class="trace-group">
          <path id="trace4" d="M 1300,0 L 1300,250 L 1250,300 L 1100,300 L 1050,350 L 1050,550 L 1100,600 L 1250,600 L 1300,650 L 1300,850 L 1350,900 L 1500,900 L 1550,950 L 1550,1080" 
                stroke="url(#trace-gradient)" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
          <!-- Vias -->
          <circle cx="1300" cy="250" r="6" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.6"/>
          <circle cx="1300" cy="250" r="3" fill="#bf40ff" opacity="0.8"/>
          <circle cx="1300" cy="850" r="6" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.6"/>
          <circle cx="1300" cy="850" r="3" fill="#bf40ff" opacity="0.8"/>
          <circle cx="1550" cy="1080" r="8" fill="none" stroke="#bf40ff" stroke-width="2" opacity="0.8"/>
          <circle cx="1550" cy="1080" r="4" fill="#bf40ff" opacity="1"/>
          
          <circle r="10" fill="url(#dot-gradient)" filter="url(#neon-glow)">
            <animateMotion dur="7s" repeatCount="indefinite">
              <mpath href="#trace4"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
      
      <!-- Mobile-optimized PCB traces (portrait mode) -->
      <svg class="pcb-circuit pcb-circuit-mobile" viewBox="0 0 400 2000" preserveAspectRatio="xMinYMin slice" style="display: none;">
        <defs>
          <filter id="mobile-glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <radialGradient id="mobile-dot-gradient">
            <stop offset="0%" style="stop-color:#bf40ff;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#bf40ff;stop-opacity:0.3" />
          </radialGradient>
        </defs>
        
        <!-- Mobile Trace 1 - Primary vertical path -->
        <g class="trace-group">
          <path id="mobile-trace1" d="M 50,0 L 50,200 L 100,250 L 150,250 L 200,300 L 200,500 L 150,550 L 100,550 L 50,600 L 50,800 L 100,850 L 150,850 L 200,900 L 200,1100 L 150,1150 L 100,1150 L 50,1200 L 50,1400 L 100,1450 L 150,1450 L 200,1500 L 200,1700 L 150,1750 L 100,1750 L 50,1800 L 50,2000" 
                stroke="#bf40ff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.4" filter="url(#mobile-glow)"/>
          <!-- Vias at junctions -->
          <circle cx="50" cy="200" r="4" fill="none" stroke="#bf40ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="50" cy="200" r="2" fill="#bf40ff" opacity="0.7"/>
          <circle cx="200" cy="500" r="4" fill="none" stroke="#bf40ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="200" cy="500" r="2" fill="#bf40ff" opacity="0.7"/>
          <circle cx="50" cy="800" r="4" fill="none" stroke="#bf40ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="50" cy="800" r="2" fill="#bf40ff" opacity="0.7"/>
          <circle cx="200" cy="1100" r="4" fill="none" stroke="#bf40ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="200" cy="1100" r="2" fill="#bf40ff" opacity="0.7"/>
          <circle cx="50" cy="1400" r="4" fill="none" stroke="#bf40ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="50" cy="1400" r="2" fill="#bf40ff" opacity="0.7"/>
          <circle cx="200" cy="1700" r="4" fill="none" stroke="#bf40ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="200" cy="1700" r="2" fill="#bf40ff" opacity="0.7"/>
          
          <circle r="6" fill="url(#mobile-dot-gradient)" filter="url(#mobile-glow)">
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#mobile-trace1"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        <!-- Mobile Trace 2 - Secondary path -->
        <g class="trace-group">
          <path id="mobile-trace2" d="M 350,0 L 350,150 L 300,200 L 250,200 L 200,250 L 200,450 L 250,500 L 300,500 L 350,550 L 350,750 L 300,800 L 250,800 L 200,850 L 200,1050 L 250,1100 L 300,1100 L 350,1150 L 350,1350 L 300,1400 L 250,1400 L 200,1450 L 200,1650 L 250,1700 L 300,1700 L 350,1750 L 350,1950 L 300,2000" 
                stroke="#d966ff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.3" filter="url(#mobile-glow)"/>
          <!-- Vias -->
          <circle cx="350" cy="100" r="4" fill="none" stroke="#d966ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="350" cy="100" r="2" fill="#d966ff" opacity="0.7"/>
          <circle cx="200" cy="350" r="4" fill="none" stroke="#d966ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="200" cy="350" r="2" fill="#d966ff" opacity="0.7"/>
          <circle cx="350" cy="600" r="4" fill="none" stroke="#d966ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="350" cy="600" r="2" fill="#d966ff" opacity="0.7"/>
          
          <circle r="6" fill="url(#mobile-dot-gradient)" filter="url(#mobile-glow)">
            <animateMotion dur="10s" repeatCount="indefinite">
              <mpath href="#mobile-trace2"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        <!-- Mobile Trace 3 - Zigzag path -->
        <g class="trace-group">
          <path id="mobile-trace3" d="M 150,0 L 150,180 L 200,230 L 250,230 L 300,280 L 300,480 L 250,530 L 200,530 L 150,580 L 150,780 L 100,830 L 50,830 L 0,880 L 0,1080 L 50,1130 L 100,1130 L 150,1180 L 150,1380 L 200,1430 L 250,1430 L 300,1480 L 300,1680 L 250,1730 L 200,1730 L 150,1780 L 150,1980 L 100,2000" 
                stroke="#e699ff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.25" filter="url(#mobile-glow)"/>
          <!-- Vias -->
          <circle cx="150" cy="120" r="4" fill="none" stroke="#e699ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="150" cy="120" r="2" fill="#e699ff" opacity="0.7"/>
          <circle cx="300" cy="320" r="4" fill="none" stroke="#e699ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="300" cy="320" r="2" fill="#e699ff" opacity="0.7"/>
          <circle cx="150" cy="520" r="4" fill="none" stroke="#e699ff" stroke-width="1.5" opacity="0.5"/>
          <circle cx="150" cy="520" r="2" fill="#e699ff" opacity="0.7"/>
          
          <circle r="6" fill="url(#mobile-dot-gradient)" filter="url(#mobile-glow)">
            <animateMotion dur="12s" repeatCount="indefinite">
              <mpath href="#mobile-trace3"/>
            </animateMotion>
            <animate attributeName="opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </div>
    <header class="app-header">
      <nav class="main-nav">
        <div class="nav-brand">
          <router-link to="/" class="brand-link animate-float">AV</router-link>
        </div>
        
        <!-- Desktop Navigation -->
        <ul class="nav-links desktop-only">
          <li><router-link to="/" class="nav-link hover-glow">Home</router-link></li>
          <li><router-link to="/projects" class="nav-link hover-glow">Projects</router-link></li>
          <li><router-link to="/cv" class="nav-link hover-glow">CV</router-link></li>
          <li><router-link to="/about" class="nav-link hover-glow">About</router-link></li>
        </ul>
        
        <div class="nav-actions">
          <button @click="toggleDarkMode" class="theme-toggle" :aria-label="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'">
            <svg v-if="isDarkMode" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          </button>
          
          <!-- Mobile Menu Button -->
          <button @click="toggleMobileMenu" class="mobile-menu-btn mobile-only" aria-label="Toggle menu">
            <svg v-if="!isMobileMenuOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 12h18M3 6h18M3 18h18"/>
            </svg>
            <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
          
          <div class="social-links desktop-only">
            <a href="https://github.com/ShadowBahamut" target="_blank" rel="noopener noreferrer" class="social-btn"
              aria-label="GitHub">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/anson-vattakunnel-337755241/" target="_blank" rel="noopener noreferrer"
              class="social-btn" aria-label="LinkedIn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      
      <!-- Mobile Dropdown Menu -->
      <div v-if="isMobileMenuOpen" class="mobile-menu animate-fade-in-down">
        <ul class="mobile-nav-links stagger-children">
          <li><router-link to="/" class="mobile-nav-link" @click="closeMobileMenu">Home</router-link></li>
          <li><router-link to="/projects" class="mobile-nav-link" @click="closeMobileMenu">Projects</router-link></li>
          <li><router-link to="/cv" class="mobile-nav-link" @click="closeMobileMenu">CV</router-link></li>
          <li><router-link to="/about" class="mobile-nav-link" @click="closeMobileMenu">About</router-link></li>
        </ul>
        <div class="mobile-social-links">
          <a href="https://github.com/ShadowBahamut" target="_blank" rel="noopener noreferrer" class="mobile-social-btn"
            aria-label="GitHub">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/anson-vattakunnel-337755241/" target="_blank" rel="noopener noreferrer"
            class="mobile-social-btn" aria-label="LinkedIn">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </header>

    <main class="app-main">
      <router-view />
    </main>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from './composables/useDarkMode'

const { isDarkMode, toggleDarkMode } = useDarkMode()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
  position: relative;
}

/* Global PCB Background */
.pcb-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  pointer-events: none;
}

.pcb-circuit {
  width: 100%;
  height: 100%;
  opacity: 0.4;
  animation: pulse-circuit 20s ease-in-out infinite;
}

.pcb-circuit-mobile {
  display: none;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

@keyframes pulse-circuit {
  0%, 100% { 
    opacity: 0.2;
  }
  50% { 
    opacity: 0.5;
  }
}

.trace-group {
  animation: trace-glow 15s ease-in-out infinite;
}

.trace-group:nth-child(2) {
  animation-delay: 5s;
}

.trace-group:nth-child(3) {
  animation-delay: 10s;
}

@keyframes trace-glow {
  0%, 100% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(1.5) drop-shadow(0 0 30px rgba(191, 64, 255, 0.8));
  }
}

.app-header {
  background: var(--color-background-soft);
  border-bottom: 1px solid var(--color-border);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
  width: 100vw;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.main-nav {
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
  max-width: 100%;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
}

.brand-link {
  text-decoration: none;
  color: var(--primary-purple);
  font-size: 2rem;
  font-weight: 800;
  transition: all 0.3s ease;
}

.brand-link:hover {
  color: var(--primary-purple-light);
  transform: scale(1.05);
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text);
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  color: var(--primary-purple);
  background: rgba(147, 51, 234, 0.1);
}

.hover-glow:hover {
  animation: glow 0.5s ease-in-out;
  text-shadow: 0 0 20px rgba(191, 64, 255, 0.8), 0 0 30px rgba(191, 64, 255, 0.6);
}

.nav-link.router-link-active {
  color: var(--primary-purple-light);
  font-weight: 700;
  background: rgba(168, 85, 247, 0.1);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: var(--primary-purple-light);
  border-radius: 1px;
}

.nav-actions {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: var(--primary-purple);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

.theme-toggle svg {
  width: 20px;
  height: 20px;
}

.social-links {
  display: flex;
  gap: 0.75rem;
  align-items: center;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  color: var(--primary-purple);
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid var(--primary-purple);
}

.social-btn:hover {
  background: var(--primary-purple);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.3);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  background: transparent;
  border: 2px solid var(--primary-purple);
  color: var(--primary-purple);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.mobile-menu-btn:hover {
  background: var(--primary-purple);
  color: white;
}

/* Mobile dropdown menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: var(--color-background);
  border-bottom: 2px solid var(--primary-purple);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  transform-origin: top;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.mobile-nav-links {
  list-style: none;
  padding: 1rem;
  margin: 0;
}

.mobile-nav-links li {
  margin: 0.5rem 0;
}

.mobile-nav-link {
  display: block;
  padding: 1rem;
  color: var(--color-text);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.3s ease;
  text-align: center;
}

.mobile-nav-link:hover {
  background: rgba(147, 51, 234, 0.1);
  color: var(--primary-purple);
}

.mobile-nav-link.router-link-active {
  background: rgba(168, 85, 247, 0.1);
  color: var(--primary-purple-light);
  font-weight: 700;
}

.mobile-social-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-top: 1px solid var(--color-border);
}

.mobile-social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
  transition: all 0.3s ease;
}

.mobile-social-btn:hover {
  background: var(--primary-purple);
  color: white;
}

/* Utility classes for responsive display */
.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

.app-main {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  padding-top: 70px;
}


@media (max-width: 768px) {
  .main-nav {
    padding: 0 1rem;
    height: 60px;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: flex;
  }

  .app-main {
    padding-top: 60px;
  }

  .brand-link {
    font-size: 1.5rem;
  }

  .pcb-circuit {
    opacity: 0.2;
    display: none;
  }

  .pcb-circuit-mobile {
    display: block;
    opacity: 0.25;
  }

  .nav-actions {
    gap: 0.5rem;
  }

  .theme-toggle {
    width: 36px;
    height: 36px;
  }

  .mobile-menu-btn {
    width: 36px;
    height: 36px;
  }
}

/* Custom Animations */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  0% { text-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
  50% { text-shadow: 0 0 20px rgba(147, 51, 234, 0.8), 0 0 30px rgba(147, 51, 234, 0.6); }
  100% { text-shadow: 0 0 5px rgba(147, 51, 234, 0.5); }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-fade-in-down {
  animation: fadeInDown 0.4s ease-out;
}

/* Stagger animation for mobile menu items */
.stagger-children > li:nth-child(1) {
  animation: slideInLeft 0.4s ease-out;
  animation-delay: 0.1s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.stagger-children > li:nth-child(2) {
  animation: slideInLeft 0.4s ease-out;
  animation-delay: 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.stagger-children > li:nth-child(3) {
  animation: slideInLeft 0.4s ease-out;
  animation-delay: 0.3s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.stagger-children > li:nth-child(4) {
  animation: slideInLeft 0.4s ease-out;
  animation-delay: 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@media (max-width: 480px) {
  .pcb-circuit {
    display: none !important;
  }

  .pcb-circuit-mobile {
    display: block !important;
    opacity: 0.2;
  }

  .main-nav {
    padding: 0 0.75rem;
    height: 56px;
  }

  .app-main {
    padding-top: 56px;
  }

  .nav-brand {
    font-size: 1rem;
  }

  .brand-link {
    font-size: 1.3rem;
  }

  .theme-toggle {
    width: 32px;
    height: 32px;
  }

  .mobile-menu-btn {
    width: 32px;
    height: 32px;
  }

  .theme-toggle svg {
    width: 16px;
    height: 16px;
  }

  .mobile-nav-link {
    font-size: 1rem;
    padding: 0.75rem;
  }

  .mobile-social-btn {
    width: 40px;
    height: 40px;
  }
}
</style>