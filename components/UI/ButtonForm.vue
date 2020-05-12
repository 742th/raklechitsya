<template>
  <button :class="['open', `open_theme_${theme}`]" @click="$emit('btnClick')">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    theme: String,
  },
};
</script>

<style scoped>
.open {
  width: 100%;
  font-family: Inter, Arial, sans-serif;
  max-width: 226px;
  height: 52px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  cursor: pointer;
  border: none;
  padding: 0;
}
.open_theme_default {
  background-color: #613a93;
  color: #ffffff;
}
.open_theme_default:hover {
  opacity: 0.9;
}
.open_theme_white {
  background-color: #ffffff;
  color: #121212;
}
.open_theme_grey {
  background-color: #f7f7f7;
  color: #121212;
}
</style>
