<template>
  <div class="overlay">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000000;
  opacity: 0.5;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
</style>
