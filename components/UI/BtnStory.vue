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
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
  line-height: 20px;
  padding: 0;
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
