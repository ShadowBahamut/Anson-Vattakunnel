<template>
  <div id="app">
    <header class="app-header">
      <nav class="main-nav">
        <div class="nav-brand">
          <router-link to="/" class="brand-link">AV</router-link>
        </div>
        <ul class="nav-links">
          <li><router-link to="/" class="nav-link">Home</router-link></li>
          <li><router-link to="/projects" class="nav-link">Projects</router-link></li>
          <li><router-link to="/cv" class="nav-link">CV</router-link></li>
          <li><router-link to="/about" class="nav-link">About</router-link></li>
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
          <div class="social-links">
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
    </header>

    <main class="app-main">
      <router-view />
    </main>

    <footer class="app-footer">
      <div class="footer-content">
        <p>&copy; 2025 Anson Vattakunnel. Built with Vue 3 & TypeScript.</p>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useDarkMode } from './composables/useDarkMode'

const { isDarkMode, toggleDarkMode } = useDarkMode()
</script>

<style scoped>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: hidden;
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
  padding: 0 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  box-sizing: border-box;
}

.nav-brand {
  font-size: 1.5rem;
  font-weight: 700;
}

.brand-link {
  text-decoration: none;
  color: #AC47BA;
  font-size: 2rem;
  font-weight: 800;
  transition: all 0.3s ease;
}

.brand-link:hover {
  color: #56BB47;
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
  color: #AC47BA;
  background: rgba(172, 71, 186, 0.1);
}

.nav-link.router-link-active {
  color: #56BB47;
  font-weight: 700;
  background: rgba(86, 187, 71, 0.1);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 1rem;
  right: 1rem;
  height: 2px;
  background: #56BB47;
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
  color: #56BB47;
  border: 2px solid #56BB47;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  background: #56BB47;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(86, 187, 71, 0.3);
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
  color: #AC47BA;
  transition: all 0.3s ease;
  text-decoration: none;
  border: 2px solid #AC47BA;
}

.social-btn:hover {
  background: #AC47BA;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(172, 71, 186, 0.3);
}

.social-btn svg {
  width: 20px;
  height: 20px;
}

.app-main {
  flex: 1;
  width: 100%;
  overflow-x: hidden;
  padding-top: 70px;
  /* Height of the navbar */
}

.app-footer {
  background: var(--color-background-soft);
  border-top: 1px solid var(--color-border);
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content p {
  color: var(--color-text);
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .main-nav {
    flex-direction: column;
    height: auto;
    padding: 1rem 2rem;
    gap: 1rem;
  }

  .nav-brand {
    margin-bottom: 0.5rem;
  }

  .nav-links {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 0.5rem;
  }

  .nav-link {
    font-size: 1rem;
    padding: 0.5rem 0.75rem;
  }

  .nav-actions {
    margin-bottom: 0.5rem;
  }
  
  .social-links {
    gap: 0.5rem;
  }

  .app-main {
    padding-top: 160px;
    /* Increased height for mobile nav with social links */
  }
}

@media (max-width: 480px) {
  .nav-links {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    text-align: center;
  }

  .nav-link {
    width: 100%;
  }
}
</style>
