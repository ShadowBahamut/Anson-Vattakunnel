<template>
  <div class="cv-view">
    <div class="container">
      <header class="cv-header">
        <h1>Curriculum Vitae</h1>
        <p class="subtitle">Professional resume and experience overview</p>
      </header>

      <section class="cv-content">
        <div class="cv-preview">
          <div class="preview-card">
            <div class="document-icon">📄</div>
            <h2>Anson Vattakunnel</h2>
            <p class="document-type">Professional Resume</p>
            <p class="document-description">
              Comprehensive overview of my professional experience, skills, 
              education, and achievements in software engineering.
            </p>
            <div class="document-meta">
              <span>📅 Updated: January 2025</span>
              <span>📄 Format: PDF</span>
              <span>📊 2 Pages</span>
            </div>
          </div>
        </div>

        <div class="cv-actions">
          <div class="action-buttons">
            <a href="/cv.pdf" download class="btn primary large">
              <span class="btn-icon">⬇️</span>
              Download PDF
            </a>
            <a href="/cv.pdf" target="_blank" class="btn secondary large">
              <span class="btn-icon">👁️</span>
              View Online
            </a>
          </div>
          
          <div class="quick-info">
            <h3>What's Inside</h3>
            <ul class="info-list">
              <li>
                <span class="info-icon">💼</span>
                Professional Experience
              </li>
              <li>
                <span class="info-icon">🎓</span>
                Education & Certifications
              </li>
              <li>
                <span class="info-icon">⚡</span>
                Technical Skills
              </li>
              <li>
                <span class="info-icon">🏆</span>
                Key Achievements
              </li>
              <li>
                <span class="info-icon">📞</span>
                Contact Information
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="alternative-actions">
        <div class="alt-content">
          <h2>Prefer Other Formats?</h2>
          <p>Explore different ways to learn about my background</p>
          <div class="alt-buttons">
            <router-link to="/about" class="btn outline">
              <span class="btn-icon">👤</span>
              About Me
            </router-link>
            <router-link to="/projects" class="btn outline">
              <span class="btn-icon">💻</span>
              View Projects
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.cv-view {
  padding: 2rem 0;
  min-height: 100vh;
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

.cv-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cv-header h1 {
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

.cv-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.cv-preview {
  display: flex;
  justify-content: center;
}

.preview-card {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 3rem 2rem;
  text-align: center;
  max-width: 350px;
  box-shadow: 0 8px 25px rgba(172, 71, 186, 0.1);
}

.document-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.preview-card h2 {
  font-size: 1.8rem;
  color: #AC47BA;
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.document-type {
  color: #56BB47;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.document-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.document-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
}

.cv-actions {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.action-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;
}

.btn.large {
  padding: 16px 32px;
  font-size: 1.1rem;
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

.btn.outline {
  background: transparent;
  color: #AC47BA;
  border: 2px solid #AC47BA;
}

.btn.outline:hover {
  background: #AC47BA;
  color: white;
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.2rem;
}

.quick-info h3 {
  color: #AC47BA;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.info-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--color-text);
  font-size: 1rem;
  padding: 0.75rem;
  background: var(--color-background-soft);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  transition: transform 0.2s ease;
}

.info-list li:hover {
  transform: translateX(4px);
}

.info-icon {
  font-size: 1.3rem;
  min-width: 24px;
}

.alternative-actions {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
}

.alt-content h2 {
  color: #AC47BA;
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.alt-content p {
  color: var(--color-text);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.alt-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .cv-header h1 {
    font-size: 2.5rem;
  }
  
  .cv-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .action-buttons {
    align-items: center;
  }
  
  .btn.large {
    width: 250px;
  }
  
  .alt-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn.outline {
    width: 200px;
  }
}
</style>
