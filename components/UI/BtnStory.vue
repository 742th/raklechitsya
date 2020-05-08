<template>
  <button class="button-story">
    <nuxt-link to="/" class="button-story_link">Больше статей</nuxt-link>
  </button>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .button-story {
    width: calc(100vw - 60px*2);
    height: 82px;
    background: #FBFBFB;
    border: none;
    font-size: 16px;
    line-height: 20px;
  }

  .button-story:hover {
    background: #F8F8F8;
    cursor: pointer;
  }

  .button-story_link {
    text-decoration: none;
    color: black;
  }

</style>
