<template>
  <div class="container">
    <full-story />
    <panel>
      <section class="stories-cards">
        <div class="stories-cards__container">
          <card />
          <card />
          <card />
          <card />
        </div>
        <button class="stories-cards__button">Больше статей</button>
      </section>
    </panel>
  </div>
</template>

<script>
import Card from '@/components/Card';
import Panel from '@/components/Panel';
import FullStory from '@/components/blocks/FullStory';
export default {
  components: {
    'full-story': FullStory,
    panel: Panel,
    card: Card,
  },
};
</script>

<style scoped>
.container {
  padding: 100px 0;
}
.stories-cards {
  text-align: center;
}

.stories-cards__container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 40px;
  padding-bottom: 70px;
}
</style>
