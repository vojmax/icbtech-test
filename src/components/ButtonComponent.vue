<template>
  <button class="button" @click="handleClick">{{ buttonText }}</button>
</template>

<script>
export default {
  name: 'ButtonComponent',

  setup() {
    const buttonText = 'Click me!'

    const handleClick = () => {
      console.log('Button clicked!')
    }

    return { buttonText, handleClick }
  }
}
</script>

<style scoped>
button {
  font-size: 24px;
  font-weight: 500;
  color: white;
  background-color: transparent;
  background: linear-gradient(
    273.22deg,
    rgba(60, 173, 255, 0.15) 0%,
    rgba(60, 173, 255, 0) 34.9%,
    rgba(249, 37, 101, 0) 63.54%,
    rgba(249, 37, 101, 0.3) 100%
  );
  border: 2px solid white;
  border-radius: 8px;
  padding: 0.6em 1.5em;
  cursor: pointer;
}
button:hover {
  padding: 0.65em 1.55em;
  border: 1px solid white;
  background: linear-gradient(
    273.22deg,
    rgba(60, 173, 255, 0.4) 7.29%,
    rgba(60, 173, 255, 0) 44.79%,
    rgba(249, 37, 101, 0) 50%,
    rgba(249, 37, 101, 0.8) 92.71%
  );
}
</style>
