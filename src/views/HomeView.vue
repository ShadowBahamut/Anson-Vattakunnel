<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1 class="name">Anson Vattakunnel</h1>
          <p class="title">Electrical & Computer Engineering Student</p>
          <p class="subtitle">UCT • FOSS Advocate • Linux Kernel Contributor</p>
          <p class="description">
            4th year ECE student passionate about open-source development, privacy-focused technologies,
            and innovative solutions at the intersection of hardware and software.
          </p>
          <div class="cta-buttons">
            <router-link to="/projects" class="cta-btn primary">View Projects</router-link>
            <router-link to="/cv" class="cta-btn secondary">Download CV</router-link>
          </div>
        </div>
        <div class="hero-photo">
          <div class="photo-placeholder">
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

    <section class="highlights">
      <div class="highlight-card">
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
      <div class="highlight-card">
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
      <div class="highlight-card">
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
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  text-align: left;
}

.name {
  font-size: 3.5rem;
  color: var(--primary-purple);
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.1;
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
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
}

.cta-btn.primary {
  background: var(--primary-purple);
  color: white;
}

.cta-btn.primary:hover {
  background: var(--primary-purple-light);
  transform: translateY(-2px);
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
  border-radius: 12px;
  text-align: center;
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
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

@media (max-width: 768px) {
  .home {
    padding: 1rem;
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
