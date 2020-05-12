<template>
  <div class="container">
    <panel>
      <full-story />
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import FullStory from '@/components/blocks/FullStory';
export default {
  components: {
    'full-story': FullStory,
    panel: Panel,
  },
};
</script>

<style scoped>
.container {
  max-width: 1440px;
}
</style>
