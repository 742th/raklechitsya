// TODO: Добавить резины!
<template>
  <div class="video-iframe">
    <iframe
      :src="url"
      allowfullscreen
      allow="accelerometer; autoplay; ecrypted-media; gyroscope; picture-in-picture"
    >
    </iframe>
  </div>
</template>

<script>
export default {
  props: ['url'],
};
</script>

<style scoped>
.video-iframe {
  width: 100%;
  /* min-height: 450px;
  height: 100%; */
  height: 0;
  position: relative;
  padding-bottom: 56.25%;
}

iframe {
  position: absolute;
  left: 0;
  top: 0;
  border: none;
  /* display: block; */
  width: 100%;
  height: 100%;
}
</style>
