import { ref, onMounted } from 'vue'

const isDarkMode = ref(true)

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    updateDOMTheme()
    try {
      localStorage.setItem('darkMode', isDarkMode.value.toString())
    } catch {
      /* localStorage may be unavailable (private mode, cookies blocked) */
    }
  }

  const updateDOMTheme = () => {
    const root = document.documentElement
    if (isDarkMode.value) {
      root.classList.remove('light')
    } else {
      root.classList.add('light')
    }
  }

  const initDarkMode = () => {
    try {
      const savedMode = localStorage.getItem('darkMode')
      if (savedMode !== null) {
        isDarkMode.value = savedMode === 'true'
      }
    } catch {
      /* localStorage unavailable — keep default dark mode */
    }
    updateDOMTheme()
  }

  onMounted(() => {
    initDarkMode()
  })

  return {
    isDarkMode,
    toggleDarkMode
  }
}