<template>
  <div class="СardsStories">
    <h2 class="cardsStories__title">Истории неизлечимых привычек</h2>
    <div class="cards__container">
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
      <card />
    </div>
    <BtnStory />
  </div>
</template>

<script>
  import Card from './Card';
  import BtnStory from './BtnStory';

  export default {
    components: {
      Card,
      BtnStory
    }
  }
</script>

<style scoped>
.CardsStories {
  display: flex;
}

.cardsStories__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  text-align: left;
  margin: 0 0 70px 60px;
}

.cards__container {
  display: inline-grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(2, auto);
  grid-gap: 70px 40px;
  margin-bottom: 70px;
}

</style>