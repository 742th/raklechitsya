<template>
  <div class="container">
    <Cover />
    <Video />
    <cardsStories />
  </div>
</template>

<script>
import Cover from '@/components/Cover';
import Video from '@/components/Video';
import cardsStories from '@/components/cardsStories';
export default {
  components: {
    Cover,
    Video,
    cardsStories
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
