<template>
  <div class="projects">
    <div class="container">
      <header class="projects-header">
        <h1>My Projects</h1>
        <p class="subtitle">A collection of work that showcases my skills and passion</p>
      </header>

      <section class="featured-project">
        <div class="project-showcase">
          <div class="project-info">
            <span class="project-label">Featured Project</span>
            <h2>
              <svg class="project-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                <polyline points="7.5,4.21 12,6.81 16.5,4.21"/>
                <polyline points="7.5,19.79 7.5,14.6 3,12"/>
                <polyline points="21,12 16.5,14.6 16.5,19.79"/>
                <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
                <line x1="12" y1="22.08" x2="12" y2="12"/>
              </svg>
              Torquinox
            </h2>
            <p class="project-description">
              A secure, decentralized blockchain-based voting system built on the Algorand network. 
              Torquinox ensures transparent, tamper-proof elections with cryptographic verification 
              and immutable vote recording. The system provides real-time vote tracking while 
              maintaining voter privacy through advanced cryptographic techniques.
            </p>
            <div class="tech-stack">
              <span class="tech-tag">Algorand</span>
              <span class="tech-tag">Blockchain</span>
              <span class="tech-tag">Python</span>
              <span class="tech-tag">Smart Contracts</span>
              <span class="tech-tag">Cryptography</span>
            </div>
            <div class="project-links">
              <a href="#" class="btn primary">View Demo</a>
              <a href="#" class="btn secondary">Source Code</a>
            </div>
          </div>
          <div class="project-visual">
            <div class="blockchain-mockup">
              <div class="blockchain-visual">
                <div class="block">
                  <div class="block-header">Block 1</div>
                  <div class="block-content">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
                <div class="chain-link">→</div>
                <div class="block">
                  <div class="block-header">Block 2</div>
                  <div class="block-content">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
                <div class="chain-link">→</div>
                <div class="block">
                  <div class="block-header">Block 3</div>
                  <div class="block-content">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="projects-grid">
        <h2 class="section-title">Other Projects</h2>
        
        <div class="grid">
          <div class="project-card">
            <div class="card-header">
              <h3>
                <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="5" r="2"/>
                  <path d="M12 7v4"/>
                  <line x1="8" y1="16" x2="16" y2="16"/>
                  <line x1="8" y1="20" x2="16" y2="20"/>
                  <circle cx="9" cy="14" r="1"/>
                  <circle cx="15" cy="14" r="1"/>
                </svg>
                Micromouse Robot
              </h3>
              <span class="project-type">Robotics</span>
            </div>
            <p class="card-description">
              An autonomous maze-solving robot featuring custom pathfinding algorithms, 
              real-time sensor processing, and optimized navigation. Complete with 
              working code and demonstration video.
            </p>
            <div class="tech-stack">
              <span class="tech-tag">C++</span>
              <span class="tech-tag">Embedded Systems</span>
              <span class="tech-tag">Sensors</span>
              <span class="tech-tag">Pathfinding</span>
            </div>
            <div class="card-footer">
              <a href="#" class="btn small">View Demo Video</a>
            </div>
          </div>

          <div class="project-card">
            <div class="card-header">
              <h3>
                <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v12"/>
                  <path d="M6 12h12"/>
                  <path d="M8 8l8 8"/>
                  <path d="M16 8l-8 8"/>
                </svg>
                Linux Kernel Contributions
              </h3>
              <span class="project-type">Open Source</span>
            </div>
            <p class="card-description">
              Contributing patches and improvements to the Linux kernel, focusing on 
              system optimization and bug fixes. Part of my commitment to FOSS development.
            </p>
            <div class="tech-stack">
              <span class="tech-tag">C</span>
              <span class="tech-tag">Linux Kernel</span>
              <span class="tech-tag">System Programming</span>
              <span class="tech-tag">Git</span>
            </div>
            <div class="card-footer">
              <a href="#" class="btn small">View Patches</a>
            </div>
          </div>

          <div class="project-card">
            <div class="card-header">
              <h3>
                <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M6 8l4 4-4 4"/>
                  <path d="M12 12h6"/>
                </svg>
                Portfolio Website
              </h3>
              <span class="project-type">Frontend</span>
            </div>
            <p class="card-description">
              This responsive portfolio website built with Vue 3 and TypeScript. 
              Features custom purple/green theming, smooth animations, and 
              modern web development practices.
            </p>
            <div class="tech-stack">
              <span class="tech-tag">Vue 3</span>
              <span class="tech-tag">TypeScript</span>
              <span class="tech-tag">Vite</span>
              <span class="tech-tag">CSS3</span>
            </div>
            <div class="card-footer">
              <a href="#" class="btn small">Source Code</a>
            </div>
          </div>

          <div class="project-card">
            <div class="card-header">
              <h3>
                <svg class="project-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                  <circle cx="12" cy="16" r="1"/>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  <path d="M8 2l2 2 2-2 2 2"/>
                </svg>
                Hyprlock Animated
              </h3>
              <span class="project-type">Open Source</span>
            </div>
            <p class="card-description">
              Forked and enhanced Hyprlock with custom animations support, enabling live wallpapers as lock screens. Features smooth transitions, video backgrounds, and dynamic effects for a modern lock screen experience on Hyprland.
            </p>
            <div class="tech-stack">
              <span class="tech-tag">C++</span>
              <span class="tech-tag">Wayland</span>
              <span class="tech-tag">Hyprland</span>
              <span class="tech-tag">Animation</span>
            </div>
            <div class="card-footer">
              <a href="#" class="btn small">View Fork</a>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="cta-content">
          <h2>Interested in My Work?</h2>
          <p>Let's discuss how we can work together on your next project</p>
          <div class="cta-buttons">
            <router-link to="/about" class="btn primary">Learn More About Me</router-link>
            <router-link to="/cv" class="btn secondary">Download Resume</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.projects {
  padding: 2rem 0;
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.projects-header {
  text-align: center;
  margin-bottom: 4rem;
}

.projects-header h1 {
  font-size: 3rem;
  color: var(--primary-purple);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: var(--primary-purple);
  font-weight: 500;
}

.featured-project {
  margin-bottom: 5rem;
}

.project-showcase {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  background: var(--color-background-soft);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.project-label {
  display: inline-block;
  background: var(--primary-purple);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.project-info h2 {
  font-size: 2.5rem;
  color: var(--primary-purple);
  margin-bottom: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
}

.tech-tag {
  background: var(--primary-purple);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-links {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-visual {
  display: flex;
  justify-content: center;
}

.blockchain-mockup {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 200px;
}

.blockchain-visual {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.block {
  width: 80px;
  height: 80px;
  background: var(--color-background);
  border: 2px solid var(--primary-purple);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 12px rgba(147, 51, 234, 0.2);
}

.block-header {
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--primary-purple);
  margin-bottom: 0.25rem;
}

.block-content {
  font-size: 1.5rem;
}

.chain-link {
  color: var(--primary-purple);
  font-size: 1.5rem;
  font-weight: bold;
}

.project-icon {
  color: var(--primary-purple);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.project-card:hover .project-icon {
  transform: scale(1.1);
}

.block-content svg {
  color: var(--primary-purple);
}

.section-title {
  font-size: 2rem;
  color: var(--primary-purple);
  text-align: center;
  margin-bottom: 3rem;
  font-weight: 700;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.project-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(147, 51, 234, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.card-header h3 {
  color: var(--primary-purple);
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.project-type {
  background: var(--primary-purple-light);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
}

.card-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.card-footer {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  border: none;
  cursor: pointer;
}

.btn.primary {
  background: var(--primary-purple);
  color: white;
}

.btn.primary:hover {
  background: var(--primary-purple-light);
  transform: translateY(-2px);
}

.btn.secondary {
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
}

.btn.secondary:hover {
  background: var(--primary-purple);
  color: white;
  transform: translateY(-2px);
}

.btn.small {
  padding: 8px 16px;
  font-size: 0.9rem;
  background: transparent;
  color: var(--primary-purple);
  border: 1px solid var(--primary-purple);
}

.btn.small:hover {
  background: var(--primary-purple);
  color: white;
}

.cta-section {
  text-align: center;
  background: var(--color-background-soft);
  padding: 3rem;
  border-radius: 16px;
  border: 1px solid var(--color-border);
}

.cta-content h2 {
  font-size: 2rem;
  color: var(--primary-purple);
  margin-bottom: 1rem;
  font-weight: 700;
}

.cta-content p {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 1024px) {
  .project-showcase {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .project-visual {
    order: -1;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .projects-header h1 {
    font-size: 2.5rem;
  }
  
  .project-info h2 {
    font-size: 2rem;
  }

  .project-description {
    text-align: justify;
  }
  
  .grid {
    grid-template-columns: 1fr;
  }

  .project-card {
    max-width: 100%;
  }

  .card-description {
    text-align: justify;
  }
  
  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn {
    width: 200px;
    max-width: 100%;
  }

  .cta-content p {
    text-align: justify;
  }
}
</style>