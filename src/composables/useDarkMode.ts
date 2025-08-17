import { ref, onMounted } from 'vue'

const isDarkMode = ref(true) // Default to dark mode

export function useDarkMode() {
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    updateDOMTheme()
    localStorage.setItem('darkMode', isDarkMode.value.toString())
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
    const savedMode = localStorage.getItem('darkMode')
    if (savedMode !== null) {
      isDarkMode.value = savedMode === 'true'
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