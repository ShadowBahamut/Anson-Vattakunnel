<template>
  <div class="not-found">
    <div class="container">
      <h1 class="animate-fade-in-up">404</h1>
      <p class="subtitle animate-fade-in-up" style="animation-delay: 0.2s;">Page Not Found</p>
      <p class="description animate-fade-in-up" style="animation-delay: 0.4s;">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div class="cta-buttons animate-fade-in-up" style="animation-delay: 0.6s;">
        <router-link to="/" class="btn primary">Back Home</router-link>
        <router-link to="/projects" class="btn secondary">View Projects</router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.not-found {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.container {
  text-align: center;
  max-width: 500px;
}

h1 {
  font-size: 5rem;
  color: var(--primary-purple);
  font-weight: 800;
  text-shadow: 0 0 30px rgba(191, 64, 255, 0.5);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.5rem;
  color: var(--primary-purple);
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.description {
  font-size: 1.1rem;
  color: var(--color-text);
  line-height: 1.8;
  margin-bottom: 2.5rem;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  padding: 14px 28px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  display: inline-block;
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

@media (max-width: 480px) {
  h1 {
    font-size: 3.5rem;
  }

  .subtitle {
    font-size: 1.2rem;
  }

  .description {
    font-size: 1rem;
  }

  .cta-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn {
    width: 100%;
    max-width: 280px;
  }
}
</style>
