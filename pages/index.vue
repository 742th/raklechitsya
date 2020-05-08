<template>
  <div class="container">
    <section class="cover">
      <h2 class="cover__title">#РАКЛЕЧИТСЯ</h2>
      <button class="cover__arrow"></button>
    </section>
    <section class="video">
      <panel>
        <div class="quote">
          <quote-title class="quote__title"
            >Истории людей, победивших рак, но не свои привычки</quote-title
          >
          <qoute-paragraph>
            Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
            страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди
            с их историями.
          </qoute-paragraph>
          <div class="buttons">
            <button-arrow-left />
            <button-arrow-left class="arrow-right" />
          </div>
        </div>
        <div class="video_container">
          <videoIframe class="video-iframe" :url="link" />
          <span class="video-frame_subtitle"
            >Все видео вы можете найте на нашем
            <a class="video-frame_link" href="https://www.youtube.com/channel/UCcxMSzN1R4JfW1vLu3swCaQ">YouTube канале.</a>
          </span>
        </div>
        <banner>И В ОТЛИЧИЕ ОТ РАКА,</banner>
      </panel>
    </section>
    <section class="cards-stories">
      <panel>
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
  </div>
</template>

<script>

import videoIframe from '@/components/UI/Iframe';
import Title from '@/components/UI/Title';
import Paragraph from '@/components/UI/QuoteParagraph';
import ButtonArrow from '@/components/UI/ButtonArrow';
import Banner from '@/components/UI/Banner';
import Panel from '@/components/Panel';

import Card from '@/components/Card';
import BtnStory from '@/components/UI/BtnStory';

export default {
  components: {
    videoIframe,
    'quote-title': Title,
    'qoute-paragraph': Paragraph,
    'button-arrow-left': ButtonArrow,
    'banner': Banner,
    'panel': Panel,
    Card,
    BtnStory,
  },
  data() {
    return {
      link: 'https://www.youtube.com/embed/coOppM34GtI?controls=0',
    };
  },
};
</script>

<style>
.container {
  margin: 0 auto;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #FFFFFF;
}

/* блок стилей для #раклечится */
.cover {
  width: 100%;
  min-height: 689px;
  display: flex;
  flex-direction: column;
  background-color: #613a93;
  align-items: center;
}

.cover__title {
  font-family: Inter, Arial, sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 92px;
  line-height: 111px;
  text-align: center;
  color: #ffffff;
  margin: 290px auto 0px;
  text-transform: uppercase;
}

.cover__arrow {
  border: none;
  outline: none;
  min-width: 36px;
  min-height: 12px;
  background-color: inherit;
  background-image: url("data:image/svg+xml,%3Csvg width='38' height='15' viewBox='0 0 38 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M37 1L19 13L1 1' stroke='white' stroke-width='2'/%3E%3C/svg%3E%0A");
  background-position: center;
  background-size: cover;
  margin: 237px auto 0px;
}
/* Конец блока стилей для #раклечится */

/* Блок с видео */
.panel {
  flex-wrap: wrap;
}
.video {
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.video-iframe {
  margin: 100px 0px 0px auto;
}

.quote {
  display: flex;
  flex-direction: column;
  max-width: 413px;
  margin: 110px auto 0px 0px;
  height: 50%;
}

.buttons {
  display: flex;
  margin-top: 150px;
}

.arrow-right {
  transform: rotate(180deg);
}

.video_container {
  display: flex;
  flex-direction: column;
  height: 50%;
}
.video-frame_subtitle {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #666666;
  max-width: 867px;
  margin: 10px 0 0 0;
  text-align: left;
}

.video-frame_link {
  color: #666666;
  text-decoration: underline;
}
/* Конец блока с видео */

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
/* Конец блока карточки с историями */

</style>
