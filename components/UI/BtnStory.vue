<template>
  <button class="button-story">
    <nuxt-link to="/" class="button-story_link">Больше статей</nuxt-link>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button-story {
  width: 100%;
  height: 82px;
  background: #fbfbfb;
  border: none;
  font-size: 16px;
  line-height: 20px;
}

.button-story:hover {
  background: #f8f8f8;
  cursor: pointer;
}

.button-story_link {
  text-decoration: none;
  color: black;
}
</style>
