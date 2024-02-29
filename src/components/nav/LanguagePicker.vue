<template>
  <div>
    <span :class="{ active: selectedLanguage === 'sr' }" @click="selectLanguage('sr')">SR</span>
    <span :class="{ active: selectedLanguage === 'hu' }" @click="selectLanguage('hu')">HU</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useLangStore } from '@/store/LangStore'

export default {
  name: 'LanguagePicker',
  setup() {
    const { language, setLanguage } = useLangStore()

    const selectedLanguage = ref(language)

    const selectLanguage = (lang) => {
      selectedLanguage.value = lang
      setLanguage(lang)
    }

    return {
      selectedLanguage,
      selectLanguage
    }
  }
}
</script>

<style scoped>
span {
  padding-left: 1.6em;
}
span:hover {
  cursor: pointer;
  color: #3cadff;
}
span.active {
  color: #3cadff;
  font-weight: bold;
  cursor: default;
}
</style>
