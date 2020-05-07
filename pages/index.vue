<template>
  <div class="container">
    <Cover />
    <Video />
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Video from '@/components/Video';
export default {
  components: {
    Cover,
    Video,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
