// TODO: 1)Кнопки со стрелками??
<template>
  <div class="video">
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
          <button-arrow-left class="arrow_right" />
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
  </div>
</template>

<script>
import videoIframe from '@/components/UI/Iframe';
import Title from '@/components/UI/Title';
import Paragraph from '@/components/UI/QuoteParagraph';
import ButtonArrow from '@/components/UI/ButtonArrow';
import Banner from '@/components/UI/Banner';
import Panel from '@/components/Panel';
export default {
  components: {
    videoIframe,
    'quote-title': Title,
    'qoute-paragraph': Paragraph,
    'button-arrow-left': ButtonArrow,
    banner: Banner,
    panel: Panel,
  },
  data() {
    return {
      link: 'https://www.youtube.com/embed/coOppM34GtI',
    };
  },
};
</script>

<style scoped>
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

.arrow_right {
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
  text-decoration: underline;
  color: #666666
}
</style>
