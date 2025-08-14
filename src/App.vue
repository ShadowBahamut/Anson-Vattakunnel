<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/projects">Projects</router-link> |
      <router-link to="/cv">CV</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style scoped>
nav {
  padding: 1rem;
  background: #f0f0f0;
}

nav a {
  margin: 0 10px;
}

.router-link-active {
  font-weight: bold;
  color: #42b983;
}
</style>
