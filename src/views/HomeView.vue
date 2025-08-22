<template>
  <div class="home">
    <section class="hero animate-gradient">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="name animate-fade-in-up">Anson Vattakunnel</h1>
          <p class="title animate-fade-in-up" style="animation-delay: 0.3s;">Electrical & Computer Engineering Student</p>
          <p class="subtitle animate-fade-in-up" style="animation-delay: 0.6s;">UCT • FOSS Advocate • Linux Kernel Contributor</p>
          <p class="description animate-fade-in-up" style="animation-delay: 0.9s;">
            4th year ECE student passionate about open-source development, privacy-focused technologies,
            and innovative solutions at the intersection of hardware and software.
          </p>
          <div class="cta-buttons animate-fade-in-up" style="animation-delay: 1.2s;">
            <router-link to="/projects" class="cta-btn primary">View Projects</router-link>
            <router-link to="/cv" class="cta-btn secondary">Download CV</router-link>
          </div>
        </div>
        <div class="hero-photo animate-fade-in-up" style="animation-delay: 0.5s;">
          <div class="photo-placeholder animate-float">
            <img :src="profilePhoto" alt="Anson Vattakunnel" class="profile-image" @error="handleImageError" @load="handleImageLoad" />
            <div class="photo-fallback">
              <div class="fallback-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                <path d="M9 12l2 2 4-4"/>
                <circle cx="12" cy="18" r="2"/>
              </svg>
            </div>
              <p>Professional Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights stagger-children">
      <div class="highlight-card hover-lift">
        <h3>
          <svg class="highlight-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/>
            <rect x="2" y="14" width="20" height="8" rx="2" ry="2"/>
            <line x1="6" y1="6" x2="6.01" y2="6"/>
            <line x1="6" y1="18" x2="6.01" y2="18"/>
            <path d="m12 8-2 4 2 4"/>
          </svg>
          Hardware & Software
        </h3>
        <p>Bridging embedded systems with modern software development</p>
      </div>
      <div class="highlight-card hover-lift">
        <h3>
          <svg class="highlight-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3"/>
            <path d="M12 1v6m0 6v6"/>
            <path d="m17 7-3 3 3 3"/>
            <path d="m7 7 3 3-3 3"/>
            <path d="M12 8c2.76 0 5-2.24 5-5H7c0 2.76 2.24 5 5 5z"/>
            <path d="M12 16c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5z"/>
          </svg>
          Open Source
        </h3>
        <p>Contributing to FOSS projects and Linux kernel development</p>
      </div>
      <div class="highlight-card hover-lift">
        <h3>
          <svg class="highlight-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2L3 7l9 5 9-5-9-5z"/>
            <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
            <circle cx="12" cy="13" r="3"/>
          </svg>
          Privacy & Security
        </h3>
        <p>Building privacy-conscious and secure technologies</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import profilePhoto from '@/assets/profile-photo.jpg'

// Handle image loading error
const handleImageError = (event: Event) => {
  const img = event.target as HTMLImageElement
  img.style.display = 'none'
}

const handleImageLoad = (event: Event) => {
  const img = event.target as HTMLImageElement
  const fallback = img.nextElementSibling as HTMLElement
  if (fallback) {
    fallback.style.display = 'none'
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem;
  box-sizing: border-box;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hero {
  margin-bottom: 4rem;
  position: relative;
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

.hero-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-text {
  text-align: left;
}

.name {
  font-size: 3rem;
  color: var(--primary-purple);
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.1;
  white-space: nowrap;
  text-shadow: 0 0 20px rgba(191, 64, 255, 0.5);
}

.title {
  font-size: 1.5rem;
  color: var(--primary-purple);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.subtitle {
  font-size: 1rem;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-weight: 500;
  opacity: 0.8;
}

.description {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--color-text);
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.hero-photo {
  display: flex;
  justify-content: center;
}

.photo-placeholder {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid var(--primary-purple);
  box-shadow: 0 10px 30px rgba(147, 51, 234, 0.3);
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  z-index: 2;
  position: relative;
}

.photo-fallback {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--primary-purple), var(--primary-purple-light));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
}

.fallback-icon {
  margin-bottom: 0.5rem;
}

.fallback-icon svg {
  width: 64px;
  height: 64px;
  color: rgba(255, 255, 255, 0.9);
}

.photo-fallback p {
  font-size: 0.9rem;
  font-weight: 600;
  opacity: 0.9;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-btn {
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(191, 64, 255, 0.25);
}

.cta-btn.primary {
  background: var(--primary-purple);
  color: white;
}

.cta-btn.primary:hover {
  background: var(--primary-purple-light);
  transform: translateY(-2px);
  box-shadow: 0 0 45px rgba(191, 64, 255, 0.6), 0 8px 25px rgba(191, 64, 255, 0.4);
}

.cta-btn.secondary {
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
}

.cta-btn.secondary:hover {
  background: var(--primary-purple);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 0 45px rgba(191, 64, 255, 0.6), 0 8px 25px rgba(191, 64, 255, 0.4);
}

.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.highlight-card {
  padding: 2rem;
  background: var(--color-background-soft);
  border-radius: 20px;
  text-align: center;
  border: 1px solid rgba(191, 64, 255, 0.1);
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.highlight-card:hover {
  transform: translateY(-4px);
  border-color: rgba(191, 64, 255, 0.5);
  box-shadow: 0 0 50px rgba(191, 64, 255, 0.5), 0 8px 30px rgba(191, 64, 255, 0.35);
}

.highlight-card h3 {
  color: var(--primary-purple);
  margin-bottom: 1rem;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  justify-content: center;
}

.highlight-icon {
  color: var(--primary-purple);
  transition: transform 0.3s ease;
}

.highlight-card:hover .highlight-icon {
  transform: scale(1.1);
}

.highlight-card p {
  color: var(--color-text);
  line-height: 1.6;
  word-wrap: break-word;
  overflow-wrap: break-word;
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
  50% { transform: translateY(-15px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

@keyframes gradientShift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

.animate-fade-in-up {
  animation: fadeInUp 0.8s ease-out forwards;
  opacity: 0;
}

.animate-float {
  animation: float 4s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s ease-in-out infinite;
}

.animate-gradient {
  background: linear-gradient(-45deg, var(--color-background), var(--color-background-soft), var(--color-background), var(--color-background-mute));
  background-size: 400% 400%;
  animation: gradientShift 8s ease infinite;
}

.hover-lift:hover {
  transform: translateY(-8px);
  box-shadow: 0 0 60px rgba(191, 64, 255, 0.6), 0 15px 40px rgba(191, 64, 255, 0.4);
}

/* Animation delays for stagger effect */
.stagger-children > *:nth-child(1) { 
  animation: fadeInUp 0.8s ease-out forwards; 
  animation-delay: 0.2s; 
  opacity: 0;
}
.stagger-children > *:nth-child(2) { 
  animation: fadeInUp 0.8s ease-out forwards; 
  animation-delay: 0.4s; 
  opacity: 0;
}
.stagger-children > *:nth-child(3) { 
  animation: fadeInUp 0.8s ease-out forwards; 
  animation-delay: 0.6s; 
  opacity: 0;
}

@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }

  .hero {
    padding: 2rem;
    border-radius: 20px;
  }

  .pcb-circuit {
    opacity: 0.2;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .hero-text p {
    text-align: justify;
  }

  .name {
    font-size: 2.5rem;
  }

  .description {
    text-align: justify;
    max-width: 100%;
  }

  .photo-placeholder {
    width: 200px;
    height: 200px;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .cta-btn {
    width: 200px;
    max-width: 100%;
  }

  .highlight-card {
    max-width: 100%;
  }

  .highlight-card p {
    text-align: justify;
  }
}
</style>
