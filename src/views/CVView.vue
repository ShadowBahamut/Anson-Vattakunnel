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
            <div class="document-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10,9 9,9 8,9"/>
              </svg>
            </div>
            <h2>Anson Vattakunnel</h2>
            <p class="document-type">Professional Resume</p>
            <p class="document-description">
              Comprehensive overview of my professional experience, skills, 
              education, and achievements in software engineering.
            </p>
            <div class="document-meta">
              <span>
                <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Updated: January 2025
              </span>
              <span>
                <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
                Format: PDF
              </span>
              <span>
                <svg class="meta-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14,2 14,8 20,8"/>
                  <path d="M6 12h8"/>
                  <path d="M6 16h8"/>
                </svg>
                2 Pages
              </span>
            </div>
          </div>
        </div>

        <div class="cv-actions">
          <div class="action-buttons">
            <a href="/cv.pdf" download class="btn primary large">
              <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7,10 12,15 17,10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download PDF
            </a>
            <a href="/cv.pdf" target="_blank" class="btn secondary large">
              <svg class="btn-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              View Online
            </a>
          </div>
          
          <div class="quick-info">
            <h3>What's Inside</h3>
            <ul class="info-list">
              <li>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                  <path d="M8 7h8"/>
                  <path d="M8 11h8"/>
                </svg>
                Professional Experience
              </li>
              <li>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
                Education & Certifications
              </li>
              <li>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
                </svg>
                Technical Skills
              </li>
              <li>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55.47.98.97 1.21C14.18 18.64 16 18.2 16 17v-2.34"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>
                </svg>
                Key Achievements
              </li>
              <li>
                <svg class="info-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
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
              <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              About Me
            </router-link>
            <router-link to="/projects" class="btn outline">
              <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <path d="M6 8l4 4-4 4"/>
                <path d="M12 12h6"/>
              </svg>
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

.cv-header {
  text-align: center;
  margin-bottom: 3rem;
}

.cv-header h1 {
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
  box-shadow: 0 8px 25px rgba(147, 51, 234, 0.1);
}

.document-icon {
  margin-bottom: 1rem;
}

.document-icon svg {
  width: 64px;
  height: 64px;
  color: var(--primary-purple);
}

.preview-card h2 {
  font-size: 1.8rem;
  color: var(--primary-purple);
  margin-bottom: 0.5rem;
  font-weight: 700;
}

.document-type {
  color: var(--primary-purple);
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.document-description {
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.document-meta {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--color-text);
}

.document-meta span {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.meta-icon {
  color: var(--primary-purple);
  flex-shrink: 0;
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

.btn.outline {
  background: transparent;
  color: var(--primary-purple);
  border: 2px solid var(--primary-purple);
}

.btn.outline:hover {
  background: var(--primary-purple);
  color: white;
  transform: translateY(-2px);
}

.btn-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.quick-info h3 {
  color: var(--primary-purple);
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
  width: 20px;
  height: 20px;
  min-width: 20px;
  color: var(--primary-purple);
  flex-shrink: 0;
}

.alternative-actions {
  background: var(--color-background-soft);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 3rem;
  text-align: center;
}

.alt-content h2 {
  color: var(--primary-purple);
  font-size: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.alt-content p {
  color: var(--color-text);
  font-size: 1.1rem;
  margin-bottom: 2rem;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.alt-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .container {
    padding: 0 1rem;
  }

  .cv-header h1 {
    font-size: 2.5rem;
  }
  
  .cv-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .preview-card {
    max-width: 100%;
  }

  .document-description {
    text-align: justify;
  }
  
  .action-buttons {
    align-items: center;
  }
  
  .btn.large {
    width: 250px;
    max-width: 100%;
  }
  
  .alt-buttons {
    flex-direction: column;
    align-items: center;
  }
  
  .btn.outline {
    width: 200px;
    max-width: 100%;
  }

  .alt-content p {
    text-align: justify;
  }
}
</style>
