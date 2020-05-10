<template>
  <div class="doublegraph">
    <div class="doublegraph-bar__first" :style="firstStyle"></div>
    <div class="doublegraph-bar__second" :style="secondStyle"></div>
  </div>
</template>

<script>
export default {
  props: {
    firstValue: Number,
    secondValue: Number,
  },
  computed: {
    firstStyle() {
      return `width: ${this.firstValue}%`;
    },
    secondStyle() {
      return `width: ${this.secondValue}%`;
    },
  },
};
</script>

<style scoped>
.doublegraph {
  width: 260px;
  height: 40px;
  position: relative;
}

.doublegraph-bar__first {
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  background: #f4f4f4;
}

.doublegraph-bar__second {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 50%;
  background: #613a93;
}
</style>
