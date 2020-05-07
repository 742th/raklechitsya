<template>
  <div class="video-iframe">
    <iframe
      :src="url"
      allowfullscreen
      allow="accelerometer; autoplay; ecrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.video-iframe {
  width: 867px;
  height: 450px;
}

iframe {
  border: none;
  display: block;
  width: 100%;
  height: 100%;
}
</style>
