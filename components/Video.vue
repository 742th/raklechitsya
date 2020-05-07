<template>
  <div class="video">
    <videoIframe class="video-iframe" :url="link" />
    <div class="quote">
      <quote-title
        >Истории людей, победивших рак, но не свои привычки</quote-title
      >
      <qoute-paragraph
        >Есть вещи, которые не лечатся. Вещи ставшие частью нашего «я», фобии,
        страхи. Но это точно не рак. Рак лечится. Лучшее доказательство — люди с
        их историями.
      </qoute-paragraph>
    </div>
  </div>
</template>

<script>
import videoIframe from '@/components/UI/Iframe';
import Title from '@/components/UI/Title';
import Paragraph from '@/components/UI/QuoteParagraph';
export default {
  components: {
    videoIframe,
    'quote-title': Title,
    'qoute-paragraph': Paragraph,
  },
  data() {
    return {
      link: 'https://www.youtube.com/embed/I6ScxmFRU74',
    };
  },
};
</script>

<style scoped>
.video {
  background-color: #ffffff;
  width: 100%;
  min-height: 836px;
  position: relative;
}

.video-iframe {
  left: 513px;
  top: 100px;
}

.quote {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 110px;
  left: 60px;
}
</style>
