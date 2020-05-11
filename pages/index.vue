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
    <Story />
    <Statistics />
    <About />
  </div>
</template>

<script>
import Cover from '@/components/blocks/Cover';
import Card from '@/components/Card';
import BtnStory from '@/components/UI/BtnStory';
import Panel from '@/components/Panel';
import Video from '@/components/blocks/Video';
import Story from '@/components/blocks/Storytell';
import About from '@/components/blocks/About';
import Statistics from '@/components/Statistics';

export default {
  components: {
    panel: Panel,
    Card,
    BtnStory,
    Video,
    Cover,
    Story,
    About,
    Statistics,
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  align-items: center;
  text-align: center;
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
  grid-template-columns: repeat(4, minmax(280px, 300px));
  grid-template-rows: repeat(2, auto);
  grid-gap: 70px 40px;
  justify-content: space-between;
}

.cards-stories__panel {
  flex-direction: column;
}
/* Конец блока карточки с историями */

/* адаптация */
@media screen and (max-width: 1425px) {
  .cards-stories__container {
    grid-gap: 60px 40px;
  }
}

@media screen and (max-width: 1350px) {
  .cards-stories__container {
    grid-template-columns: repeat(4, minmax(240px, 265px));
    margin-bottom: 60px;
  }
  .cards-stories__title {
    margin: 90px 0 60px 0px;
  }
}

@media screen and (max-width: 1200px) {
  .cards-stories__container {
    grid-template-columns: repeat(4, minmax(208px, 238px));
    grid-template-rows: repeat(2, auto);
    grid-gap: 46px 30px;
  }

  .cards-stories__title {
    margin: 80px 0 46px 0px;
  }
}

@media screen and (max-width: 1100px) {
  .cards-stories__container {
    grid-template-columns: repeat(4, 208px);
    grid-template-rows: repeat(2, auto);
  }
}

@media screen and (max-width: 990px) {
  .cards-stories__container {
    grid-template-columns: repeat(3, 216px);
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 40px;
  }
  .cards-stories__title {
    margin: 80px auto 60px auto;
    text-align: center;
  }
}
</style>
