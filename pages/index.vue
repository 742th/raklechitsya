<template>
  <div class="container">
    <Cover />
    <Video />
    <section class="cards-stories">
      <panel class="cards-stories__panel">
        <h2 class="cards-stories__title">Истории неизлечимых привычек</h2>
        <div class="cards-stories__container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <BtnStory />
      </panel>
    </section>
    <InstagramSection />
    <Story />
    <Statistics />
    <About />
    <Popup v-if="popupShow">
      <Quiz />
    </Popup>
    <Footer />
  </div>
</template>

<script>
import Cover from '@/components/blocks/Cover';
import Card from '@/components/Card';
import BtnStory from '@/components/UI/BtnStory';
import Panel from '@/components/Panel';
import Video from '@/components/blocks/Video';
import Story from '@/components/blocks/Storytell';
import InstagramSection from '@/components/blocks/InstagramSection';
import About from '@/components/blocks/About';
import Statistics from '@/components/blocks/Statistics';
import Popup from '@/components/Popup';
import Quiz from '@/components/UI/FormQuiz';

export default {
  components: {
    panel: Panel,
    Card,
    BtnStory,
    Video,
    Cover,
    Story,
    InstagramSection,
    About,
    Statistics,
    Popup,
    Quiz,
  },
  computed: {
    popupShow() {
      return this.$store.getters['popup/getPopupQuiz'];
    },
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
}

/* Блок карточки с историями */
.cards-stories {
  display: flex;
  flex-direction: column;
}

.cards-stories__title {
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  max-width: 413px;
  text-align: left;
  margin: 100px 0 70px 0px;
}

.cards-stories__container {
  display: inline-grid;
  grid-template-columns: repeat(4, 300px);
  grid-template-rows: repeat(2, auto);
  grid-gap: 70px 40px;
  margin-bottom: 70px;
}

.cards-stories__panel {
  flex-direction: column;
}
/* Конец блока карточки с историями */
</style>
