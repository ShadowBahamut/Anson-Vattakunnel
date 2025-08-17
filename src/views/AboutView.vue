<template>
  <div class="about">
    <div class="container">
      <header class="about-header">
        <h1>About Me</h1>
        <p class="subtitle">Getting to know Anson Vattakunnel</p>
      </header>

      <section class="about-content">
        <div class="profile-section">
          <div class="profile-text">
            <h2>Hello, I'm Anson! 👋</h2>
            <p>
              I'm a 4th year Electrical and Computer Engineering student at the University of Cape Town (UCT),
              passionate about building innovative solutions at the intersection of hardware and software.
              My journey in technology is driven by curiosity and a commitment to open-source principles.
            </p>
            <p>
              As a FOSS advocate and privacy-conscious developer, I believe in creating technology that
              respects user freedom and privacy. I enjoy tinkering with Linux systems and have contributed
              patches to the Linux kernel. Whether it's developing blockchain-based solutions, programming
              autonomous robots, or optimizing system-level code, I approach each challenge with enthusiasm
              and attention to detail.
            </p>
          </div>
        </div>

        <div class="skills-section">
          <h2>Skills & Expertise</h2>
          <div class="skills-grid">
            <div class="skill-category">
              <h3>Engineering & Hardware</h3>
              <ul>
                <li>Embedded Systems</li>
                <li>C/C++ Programming</li>
                <li>Microcontrollers</li>
                <li>Circuit Design</li>
                <li>Robotics (Micromouse)</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Software & Systems</h3>
              <ul>
                <li>Linux Kernel Development</li>
                <li>Python / JavaScript</li>
                <li>Blockchain (Algorand)</li>
                <li>System Programming</li>
                <li>FOSS Development</li>
              </ul>
            </div>
            <div class="skill-category">
              <h3>Tools & Technologies</h3>
              <ul>
                <li>Git & Version Control</li>
                <li>Linux Administration</li>
                <li>Privacy Tools</li>
                <li>Open Source Contribution</li>
                <li>Technical Documentation</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="values-section">
          <h2>What Drives Me</h2>
          <div class="values-grid">
            <div class="value-card">
              <span class="value-icon">🐧</span>
              <h3>Open Source</h3>
              <p>Contributing to FOSS projects and the Linux kernel, believing in the power of community-driven
                development.</p>
            </div>
            <div class="value-card">
              <span class="value-icon">🔒</span>
              <h3>Privacy & Security</h3>
              <p>Building technology that respects user privacy and implements security by design principles.</p>
            </div>
            <div class="value-card">
              <span class="value-icon">⚡</span>
              <h3>Innovation</h3>
              <p>From blockchain voting systems to autonomous robots, I love exploring cutting-edge technologies.</p>
            </div>
          </div>
        </div>
      </section>


      <footer class="about-footer">
        <div class="contact-section">
          <h2>Get In Touch</h2>
          <p>Have a project idea or want to collaborate? I'd love to hear from you!</p>

          <div class="email-container">
            <a href="mailto:anson.vattakunnel@gmail.com" class="email-link">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-10 5L2 7" />
              </svg>
              <span>anson.vattakunnel@gmail.com</span>
            </a>
          </div>

          <div class="contact-buttons">
            <router-link to="/projects" class="btn primary">View My Work</router-link>
            <router-link to="/cv" class="btn secondary">Get My Resume</router-link>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.about {
  min-height: 100vh;
  padding: 2rem 0;
  width: 100%;
  overflow-x: hidden;
}

.container {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 2rem;
  box-sizing: border-box;
}

.about-header {
  text-align: center;
  margin-bottom: 3rem;
}

.about-header h1 {
  font-size: 3rem;
  color: #AC47BA;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.subtitle {
  font-size: 1.2rem;
  color: #56BB47;
  font-weight: 500;
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 4rem;
}

.profile-section {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.profile-text h2 {
  color: #AC47BA;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.profile-text p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-size: 1.1rem;
}

.skills-section h2,
.values-section h2 {
  color: #AC47BA;
  font-size: 2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.skill-category h3 {
  color: #56BB47;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.skill-category ul {
  list-style: none;
  padding: 0;
}

.skill-category li {
  padding: 0.5rem 0;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
}

.skill-category li:last-child {
  border-bottom: none;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.value-card {
  background: var(--color-background-soft);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-4px);
}

.value-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 1rem;
}

.value-card h3 {
  color: #56BB47;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.value-card p {
  color: var(--color-text);
  line-height: 1.6;
}


.about-footer {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.contact-section {
  text-align: center;
}

.contact-section h2 {
  color: #AC47BA;
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-section p {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 2rem;
}

.email-container {
  margin: 2rem 0;
}

.email-link {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: var(--color-background-soft);
  border: 2px solid #AC47BA;
  border-radius: 50px;
  color: #AC47BA;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
}

.email-link:hover {
  background: #AC47BA;
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(172, 71, 186, 0.3);
}

.email-link svg {
  width: 24px;
  height: 24px;
}

.contact-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn.primary {
  background: #AC47BA;
  color: white;
}

.btn.primary:hover {
  background: #B85BC5;
  transform: translateY(-2px);
}

.btn.secondary {
  background: transparent;
  color: #56BB47;
  border: 2px solid #56BB47;
}

.btn.secondary:hover {
  background: #56BB47;
  color: white;
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .about-header h1 {
    font-size: 2.5rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .skills-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
  }

  .email-link {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
  }
}
</style>
