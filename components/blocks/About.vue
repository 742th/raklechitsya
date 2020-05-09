<template>
  <section class="about">
    <panel>
      <h2 class="cover__title">#РАКЛЕЧИТСЯ</h2>
      <div class="content">
        <div class="about__paragraph">
          <block-title>О проекте</block-title>
          <Quote class="about__quote"
            >Этот проект был создан благотворительным фондом Константина Хабенского.
          </Quote>
        </div>
        <div class="about__buttons-block">
          <button-from class="buttons-block" @btnClick="oneVar" :theme="'default'"
            >Рак Лечится</button-from
          >
          <button-from class="buttons-block" @btnClick="twoVar" :theme="'default'"
            >Фонд Хабенского</button-from
          >
        </div>
        <div class="about__form">
          <Quote v-if="show" class="about__from-quote"
            >Благотворительный Фонд Константина Хабенского с 2008 года помогает детям
            с онкологическими и другими тяжелыми заболеваниями головного мозга.
            Фонд не только поддерживает семью заболевшего ребенка в самый сложный момент,
            оплачивая обследования, лечение и медицинские препараты, но и в целом меняет
            систему оказания помощи детям с опухолями мозга в России.
          </Quote>
          <div v-else>
            <Quote class="about__from-quote"
              >Есть вещи, которые не лечатся. Особенности характера, страстные увлечения,
              привычки, ставшие частью нашего «я», фобии, которые мы приобрели в детстве.
              Список можно продолжать до бесконечности, но одна болезнь в него точно не войдет.
              Эта болезнь — рак. Рак лечится, и лучшее доказательство — люди с их неизлечимыми
              особенностями, которые сумели победить рак.
            </Quote>
            <Quote  class="about__from-quote-add"
              >Рак лечится — проект Благотворительного Фонда Константина Хабенского и Leo Burnett
              Moscow. С его помощью мы надеемся изменить отношение людей к раку и заставить каждого
              поверить: онкологическое заболевание — это не приговор.
            </Quote>
          </div>
        </div>
      </div>
    </panel>
  </section>
</template>

<script>
  import Title from '@/components/UI/Title';
  import Quote from '@/components/UI/QuoteParagraph';
  import Panel from '@/components/Panel';
  import ButtonForm from '@/components/UI/ButtonForm';

  export default {
    components: {
      Quote,
      'block-title': Title,
      panel: Panel,
      'button-from': ButtonForm,
    },
    methods: {
      oneVar() {
        this.show = true;
        this.theme = '-active';
      },
      twoVar() {
        this.show = false;
      },
    },
    data() {
      return {
        show: true,
      };
    },
    }
</script>

<style scoped>
.about {
  margin: 100px auto 0;
  background-color: #613A93;
  padding: 100px 0;
  color: #FFFFFF;
}

.about__paragraph {
  margin: 70px 0 0 0;
}

.about__from-quote {
  max-width: 640px;
  margin: 0 auto 20px 0px;
  color: #DEDEDE;
}

.about__from-quote-add {
  max-width: 600px;
  margin: 0;
  color: #DEDEDE;
}

.about__quote {
  max-width: 340px;
  color: #DEDEDE;
}

.about__form {
  display: flex;
  flex-direction: column;
  margin: 138px 0 0 40px;
  min-height: 242px;
}

.about__button {
  max-width: 280px;
}

.about__buttons-block {
  display: flex;
  flex-direction: column;
  margin: 138px 0 0 123px;
}

.buttons-block {
  height: 22px;
  margin-bottom: 10px;
  max-width: 154px;
  text-align: right;
}
.cover__title {
  font-style: normal;
  font-weight: 800;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  margin: 90px auto 0px;
  text-transform: uppercase;
}

.content {
  display: flex;
  flex-direction: row;
}
.panel {
  flex-direction: column;
}
</style>
