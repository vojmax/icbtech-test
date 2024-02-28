<template>
  <div>
    <span class="active">SR</span>
    <span>HU</span>
  </div>
</template>

<script>
import { ref } from 'vue'
import { emit } from 'vue'

export default {
  name: 'LanguagePicker',
  setup() {
    const lang = ref('sr')

    emit('change', lang.value)

    return { lang }
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
