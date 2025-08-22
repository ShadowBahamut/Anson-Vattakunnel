<template>
  <div class="about">
    <div class="container">
      <header class="about-header">
        <h1 class="animate-fade-in-up">About Me</h1>
        <p class="subtitle animate-fade-in-up" style="animation-delay: 0.3s;">Getting to know Anson Vattakunnel</p>
      </header>

      <section class="about-content">
        <div class="profile-section animate-fade-in-up" style="animation-delay: 0.6s;">
          <div class="profile-text">
            <h2>
              Hello, I'm Anson!
              <svg class="greeting-icon animate-wave" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/>
                <path d="M15 5l4 4"/>
              </svg>
            </h2>
            <p class="animate-fade-in-up" style="animation-delay: 0.9s;">
              I'm a 4th year Electrical and Computer Engineering student at the University of Cape Town (UCT),
              passionate about building innovative solutions at the intersection of hardware and software.
              My journey in technology is driven by curiosity and a commitment to open-source principles.
            </p>
            <p class="animate-fade-in-up" style="animation-delay: 1.2s;">
              As a FOSS advocate and privacy-conscious developer, I believe in creating technology that
              respects user freedom and privacy. I enjoy tinkering with Linux systems and have contributed
              patches to the Linux kernel. Whether it's developing blockchain-based solutions, programming
              autonomous robots, or optimizing system-level code, I approach each challenge with enthusiasm
              and attention to detail.
            </p>
          </div>
        </div>

        <div class="skills-section animate-fade-in-up" style="animation-delay: 1.5s;">
          <h2>Skills & Expertise</h2>
          <div class="skills-grid stagger-children">
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

        <div class="values-section animate-fade-in-up" style="animation-delay: 1.8s;">
          <h2>What Drives Me</h2>
          <div class="values-grid stagger-children">
            <div class="value-card animate-float hover-lift">
              <svg class="value-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v12"/>
                <path d="M6 12h12"/>
                <path d="M8 8l8 8"/>
                <path d="M16 8l-8 8"/>
              </svg>
              <h3>Open Source</h3>
              <p>Contributing to FOSS projects and the Linux kernel, believing in the power of community-driven
                development.</p>
            </div>
            <div class="value-card animate-float hover-lift">
              <svg class="value-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L3 7l9 5 9-5-9-5z"/>
                <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
                <circle cx="12" cy="13" r="3"/>
              </svg>
              <h3>Privacy & Security</h3>
              <p>Building technology that respects user privacy and implements security by design principles.</p>
            </div>
            <div class="value-card animate-float hover-lift">
              <svg class="value-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
              </svg>
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
  word-wrap: break-word;
  overflow-wrap: break-word;
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
  padding: 3rem;
  border-radius: 24px;
  background: linear-gradient(135deg, 
    rgba(191, 64, 255, 0.03) 0%, 
    rgba(217, 102, 255, 0.05) 50%, 
    rgba(191, 64, 255, 0.03) 100%);
  border: 1px solid rgba(191, 64, 255, 0.1);
  box-shadow: 0 10px 40px rgba(191, 64, 255, 0.05);
  backdrop-filter: blur(10px);
}

.about-header h1 {
  font-size: 3rem;
  color: var(--primary-purple);
  margin-bottom: 0.5rem;
  font-weight: 700;
  text-shadow: 0 0 20px rgba(191, 64, 255, 0.5);
}

.subtitle {
  font-size: 1.2rem;
  color: var(--primary-purple);
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
  padding: 3rem;
  border-radius: 24px;
  background: linear-gradient(135deg, 
    rgba(191, 64, 255, 0.02) 0%, 
    rgba(217, 102, 255, 0.04) 50%, 
    rgba(191, 64, 255, 0.02) 100%);
  border: 1px solid rgba(191, 64, 255, 0.08);
  box-shadow: 0 8px 30px rgba(191, 64, 255, 0.04);
  backdrop-filter: blur(8px);
}

.profile-text h2 {
  color: var(--primary-purple);
  font-size: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.greeting-icon {
  color: var(--primary-purple);
}

.animate-wave {
  animation: wave 2s ease-in-out infinite;
}

@keyframes wave {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(20deg); }
  75% { transform: rotate(-10deg); }
}

.profile-text p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: var(--color-text);
  font-size: 1.1rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.skills-section h2,
.values-section h2 {
  color: var(--primary-purple);
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
  border-radius: 20px;
  border: 1px solid rgba(191, 64, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.skill-category:hover {
  transform: translateY(-4px);
  border-color: rgba(191, 64, 255, 0.5);
  box-shadow: 0 0 40px rgba(191, 64, 255, 0.4), 0 8px 30px rgba(191, 64, 255, 0.3);
}

.skill-category h3 {
  color: var(--primary-purple);
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
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(191, 64, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.value-card:hover {
  transform: translateY(-4px);
  border-color: rgba(191, 64, 255, 0.5);
  box-shadow: 0 0 50px rgba(191, 64, 255, 0.5), 0 8px 30px rgba(191, 64, 255, 0.35);
}

.value-icon {
  width: 48px;
  height: 48px;
  color: var(--primary-purple);
  margin-bottom: 1rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.value-card:hover .value-icon {
  transform: scale(1.15);
  color: var(--primary-purple-light);
}

.value-card h3 {
  color: var(--primary-purple-light);
  font-size: 1.3rem;
  margin-bottom: 1rem;
}

.value-card p {
  color: var(--color-text);
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
}


.about-footer {
  margin-top: 4rem;
  padding-top: 3rem;
  border-top: 1px solid var(--color-border);
}

.contact-section {
  text-align: center;
  padding: 3rem;
  border-radius: 24px;
  background: linear-gradient(135deg, 
    rgba(191, 64, 255, 0.02) 0%, 
    rgba(217, 102, 255, 0.04) 50%, 
    rgba(191, 64, 255, 0.02) 100%);
  border: 1px solid rgba(191, 64, 255, 0.08);
  box-shadow: 0 8px 30px rgba(191, 64, 255, 0.04);
  backdrop-filter: blur(8px);
}

.contact-section h2 {
  color: var(--primary-purple);
  font-size: 2rem;
  margin-bottom: 1rem;
}

.contact-section p {
  font-size: 1.1rem;
  color: var(--color-text);
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
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
  border: 2px solid var(--primary-purple);
  border-radius: 50px;
  color: var(--primary-purple);
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(191, 64, 255, 0.2);
}

.email-link:hover {
  background: var(--primary-purple);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 0 40px rgba(191, 64, 255, 0.6), 0 6px 20px rgba(191, 64, 255, 0.4);
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
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(191, 64, 255, 0.25);
}

.btn.primary {
  background: var(--primary-purple);
  color: white;
}

.btn.primary:hover {
  background: var(--primary-purple-light);
  transform: translateY(-2px);
  box-shadow: 0 0 45px rgba(191, 64, 255, 0.6), 0 8px 25px rgba(191, 64, 255, 0.4);
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
  box-shadow: 0 0 45px rgba(191, 64, 255, 0.6), 0 8px 25px rgba(191, 64, 255, 0.4);
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .about-header h1 {
    font-size: 2.5rem;
  }

  .profile-section {
    flex-direction: column;
    text-align: center;
  }

  .profile-text p {
    text-align: justify;
  }

  .skills-grid,
  .values-grid {
    grid-template-columns: 1fr;
  }

  .skill-category,
  .value-card {
    max-width: 100%;
  }

  .value-card p {
    text-align: justify;
  }

  .contact-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 200px;
    max-width: 100%;
  }

  .email-link {
    font-size: 1rem;
    padding: 0.75rem 1.5rem;
    max-width: 100%;
    box-sizing: border-box;
  }

  .contact-section p {
    text-align: justify;
  }
}

/* Enhanced animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-12px); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-gradient {
  background: linear-gradient(-45deg, var(--color-background), var(--color-background-soft), var(--color-background-mute), var(--color-background));
  background-size: 400% 400%;
  animation: gradientShift 10s ease infinite;
}

.hover-lift:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 0 60px rgba(191, 64, 255, 0.6), 0 15px 40px rgba(191, 64, 255, 0.4);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Enhanced stagger animations */
.stagger-children > *:nth-child(1) {
  animation: slideInLeft 0.8s ease-out forwards;
  animation-delay: 0.2s;
  opacity: 0;
}

.stagger-children > *:nth-child(2) {
  animation: slideInLeft 0.8s ease-out forwards;
  animation-delay: 0.4s;
  opacity: 0;
}

.stagger-children > *:nth-child(3) {
  animation: slideInLeft 0.8s ease-out forwards;
  animation-delay: 0.6s;
  opacity: 0;
}

/* Floating animation with different delays for value cards */
.value-card:nth-child(1) .animate-float {
  animation-delay: 0s;
}

.value-card:nth-child(2) .animate-float {
  animation-delay: 2s;
}

.value-card:nth-child(3) .animate-float {
  animation-delay: 4s;
}
</style>
