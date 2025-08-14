<template>
  <div class="cv-view">
    <h1>Curriculum Vitae</h1>
    <p>Download my CV:</p>
    <a href="/cv.pdf" download class="download-btn">
      Download PDF
    </a>

    <div class="back-link">
      <router-link to="/">← Back to Home</router-link>
    </div>
  </div>
</template>

<style scoped>
.download-btn {
  display: inline-block;
  padding: 12px 24px;
  background: #42b983;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  margin: 20px 0;
}

.back-link {
  margin-top: 30px;
}
</style>
