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
              <div class="fallback-icon">👨‍💻</div>
              <p>Professional Photo</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="highlights">
      <div class="highlight-card">
        <h3>⚡ Hardware & Software</h3>
        <p>Bridging embedded systems with modern software development</p>
      </div>
      <div class="highlight-card">
        <h3>🐧 Open Source</h3>
        <p>Contributing to FOSS projects and Linux kernel development</p>
      </div>
      <div class="highlight-card">
        <h3>🔒 Privacy & Security</h3>
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
  color: #AC47BA;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.1;
}

.title {
  font-size: 1.5rem;
  color: #56BB47;
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
  border: 4px solid #AC47BA;
  box-shadow: 0 10px 30px rgba(172, 71, 186, 0.3);
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
  background: linear-gradient(135deg, #AC47BA, #56BB47);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;
}

.fallback-icon {
  font-size: 4rem;
  margin-bottom: 0.5rem;
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
  background: #AC47BA;
  color: white;
}

.cta-btn.primary:hover {
  background: #B85BC5;
  transform: translateY(-2px);
}

.cta-btn.secondary {
  background: transparent;
  color: #56BB47;
  border: 2px solid #56BB47;
}

.cta-btn.secondary:hover {
  background: #56BB47;
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
  color: #AC47BA;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.highlight-card p {
  color: var(--color-text);
  line-height: 1.6;
}

@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-text {
    text-align: center;
  }

  .name {
    font-size: 2.5rem;
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
  }
}
</style>
