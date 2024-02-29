import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLangStore = defineStore('LangStore', () => {
  const language = ref('sr')

  const setLanguage = (lang) => {
    language.value = lang
  }
  return { language, setLanguage }
})
