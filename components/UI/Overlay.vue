<template>
  <div class="overlay" @click="$emit('LayClick')">
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
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}
</style>
