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
  height: 435%;
  background-color: #02020f;
  overflow: hidden;
}

/* referent red circle */
.circle-red {
  position: absolute;
  width: 1200px;
  height: 1200px;
  top: -600px;
  left: -840px;
  background-image: radial-gradient(circle, #e8054ca1 8em, transparent 30rem);
}

.circle-red.two {
  top: 1600px;
  left: -740px;
}

.circle-red.three {
  top: 3750px;
  left: 1100px;
  background-image: radial-gradient(circle, #e8054d81, transparent 30rem);
}

/* referent blue circle */
.circle-blue {
  position: absolute;
  width: 1600px;
  height: 1600px;
  top: 200px;
  right: -1000px;
  background-image: radial-gradient(circle, #3badff 12rem, transparent 45rem);
}
.circle-blue.two {
  top: 2200px;
  right: -1200px;
  background-image: radial-gradient(circle, #3badffe1, transparent 45rem);
}
.circle-blue.three {
  top: 3600px;
  left: -1200px;
  background-image: radial-gradient(circle, #3badff5d, transparent 45rem);
}
</style>
