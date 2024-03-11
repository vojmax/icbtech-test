<template>
  <div class="background">
    <div class="circle-red"></div>
    <div class="circle-red two"></div>
    <div class="circle-red three"></div>
    <div class="circle-blue"></div>
    <div class="circle-blue two"></div>
    <div class="circle-blue three"></div>
  </div>
</template>

<script>
export default {
  name: 'BackgroundComponent'
  // Your component options here
}
</script>

<style scoped>
/* backgorund size and position */
.background {
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #02020f;
  overflow: hidden;
  z-index: -1;
}

/* referent red circle */
.circle-red {
  position: absolute;
  width: 1200px;
  height: 1200px;
  top: -17%;
  left: -44%;
  background-image: radial-gradient(circle, #e8054d86 8em, transparent 30rem);
}

.circle-red.two {
  top: 34%;
  left: -42%;
  background-image: radial-gradient(circle, #e8054db2 8em, transparent 34rem);
}

.circle-red.three {
  top: 88%;
  left: 56%;
  background-image: radial-gradient(circle, #e8054d77, transparent 30rem);
}

/* referent blue circle */
.circle-blue {
  position: absolute;
  width: 1500px;
  height: 1500px;
  top: 7%;
  left: 70%;
  background-image: radial-gradient(circle, #3badff 10rem, transparent 45rem);
}
.circle-blue.two {
  top: 48%;
  left: 84%;
  background-image: radial-gradient(circle, #3badff 4rem, transparent 46rem);
}
.circle-blue.three {
  top: 80%;
  left: -64%;
  background-image: radial-gradient(circle, #3badff49, transparent 45rem);
}
</style>
