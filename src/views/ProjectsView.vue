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
            <h2>🗳️ Torquinox</h2>
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
                  <div class="block-content">🗳️</div>
                </div>
                <div class="chain-link">→</div>
                <div class="block">
                  <div class="block-header">Block 2</div>
                  <div class="block-content">🗳️</div>
                </div>
                <div class="chain-link">→</div>
                <div class="block">
                  <div class="block-header">Block 3</div>
                  <div class="block-content">🗳️</div>
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
              <h3>🤖 Micromouse Robot</h3>
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
              <h3>🐧 Linux Kernel Contributions</h3>
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
              <h3>💻 Portfolio Website</h3>
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
              <h3>🎨 Hyprlock Animated</h3>
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