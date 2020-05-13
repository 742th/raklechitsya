<template>
  <Panel>
    <section class="instagram">
      <banner class="instagram__banner"
        >РАССКАЗЫВАЙТЕ ВАШИ ИСТОРИИ В ИНСТАГРАМ</banner
      >
      <div class="instagram__content-container">
        <div class="instagram__brief">
          <a
            href="https://www.instagram.com/raklechitsa/"
            class="instagram__link"
            target="_blank"
            >Инстаграм</a
          >
          <quote-paragraph class="instagram__paragraph">
            Два раза в неделю мы просматриваем все посты по хештегу
            #этонелечится. Все истории, где нет нецензурных выражений и
            запрещенного контента попадают сюда. Следите за правильным
            написанием хештега, чтобы мы не пропустили вашу историю.
          </quote-paragraph>
        </div>
        <div class="instagram__cards-container">
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
          <instagram-card></instagram-card>
        </div>
      </div>
    </section>
  </Panel>
</template>

<script>
import Banner from '@/components/UI/Banner';
import Panel from '@/components/Panel';
import instagramCard from '@/components/UI/instagramCard';
import QuoteParagraph from '@/components/UI/QuoteParagraph';
export default {
  components: {
    banner: Banner,
    'instagram-card': instagramCard,
    'quote-paragraph': QuoteParagraph,
    Panel,
  },
};
</script>

<style scoped>
.instagram {
  width: 100%;
}

.instagram__banner {
  flex-direction: column;
  min-height: 130px;
}

.instagram__content-container {
  margin-top: 100px;
  display: flex;
}

.instagram__title {
  font-size: inherit;
  font-weight: normal;
}

.instagram__brief {
  flex-shrink: 0;
  width: 35%;
  padding: 10px 110px 10px 0;
}

.instagram__cards-container {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
}

.instagram__link {
  text-decoration: none;
  font-size: 32px;
  line-height: 1.16;
  font-weight: 600;
  color: #000;
  border-bottom: 3px solid #000;
}

@media (max-width: 1280px) {
  .instagram__content-container {
    margin-top: 90px;
  }

  .instagram__banner {
    flex-direction: column;
    min-height: 130px;
  }

  .instagram__cards-container {
    grid-gap: 26px;
  }

  .instagram__link {
    font-size: 28px;
  }
}

@media (max-width: 1024px) {
  .instagram__content-container {
    margin-top: 80px;
  }

  .instagram__brief {
    padding-right: 60px;
  }

  .instagram__banner {
    flex-direction: column;
    min-height: 117px;
  }

  .instagram__cards-container {
    grid-gap: 20px;
  }

  .instagram__link {
    font-size: 24px;
  }
}

@media (max-width: 800px) {
  .instagram__content-container {
    flex-direction: column;
    align-items: center;
  }

  .instagram__banner {
    flex-direction: column;
    min-height: 100px;
  }

  .instagram__brief {
    width: 50%;
    padding: 0;
  }

  .instagram-title {
    font-size: 22px;
  }

  .instagram__cards-container {
    margin-top: 59px;
  }

  .instagram__link {
    display: block;
    width: fit-content;
    margin: 0 auto;
  }
}
</style>
