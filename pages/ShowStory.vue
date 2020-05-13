<template>
  <div class="container">
    <full-story />
    <panel>
      <section class="stories-cards">
        <div class="stories-cards__container">
          <!-- <card />
          <card />
          <card />
          <card /> -->
        </div>
        <button-story class="stories-cards__button">Больше статей</button-story>
      </section>
    </panel>
  </div>
</template>

<script>
import ButtonForm from '@/components/UI/ButtonForm';
import Card from '@/components/Card';
import Panel from '@/components/Panel';
import FullStory from '@/components/blocks/FullStory';
export default {
  components: {
    'full-story': FullStory,
    panel: Panel,
    card: Card,
    'button-story': ButtonForm,
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

@media (max-width: 1280px) {
  .container {
    padding-bottom: 90px;
  }
}

@media (max-width: 1024px) {
  .container {
    padding-bottom: 80px;
  }
}

@media (max-width: 800px) {
  .container {
    padding: 80px 0;
  }
}

@media (max-width: 500px) {
  .container {
    padding: 50px 0;
  }
}
</style>
