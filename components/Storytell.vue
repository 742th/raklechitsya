<template>
  <div class="story">
    <panel>
      <div class="story__paragraph">
        <block-title>Расскажите свою историю</block-title>
        <Quote
          >Мы публикуем новые истории на сайте раз в неделю. Есть 2 варианта
          поделиться своей историей неизлечимых привычек, навязчивых идей и
          болезненных привязанностей.
        </Quote>
      </div>
      <div class="story__buttons-block">
        <button-from class="buttons-block" @btnClick="oneVar" :theme="'grey'"
          >1-й вариант</button-from
        >
        <button-from class="buttons-block" @btnClick="twoVar" :theme="'grey'"
          >2-й вариант</button-from
        >
      </div>
      <div class="story__form">
        <Quote v-if="show" class="story__from-quote"
          >Оставить контакт (почту или номер телефона) и мы свяжемся с вами,
          зададим вопросы, уточним детали вашей истории.
        </Quote>
        <Quote v-else class="story__from-quote"
          >Заполнить подробную форму прямо на сайте и мы опубликуем вашу историю
          после проверки. Пожалуйста, заполняйте все пункты корректно, если вы
          испытаете какие-то сложности, воспользуйтесь 2-м вариантом.
        </Quote>
        <button-from v-if="show" class="story__button" :theme="'default'"
          >Заполнить форму</button-from
        >
        <button-from v-else class="story__button" :theme="'default'"
          >Оставить контакт</button-from
        >
      </div>
    </panel>
  </div>
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
};
</script>

<style scoped>
.story {
  margin: 100px auto 0;
  background-color: #f7f7f7;
  padding-top: 100px;
}

.story__from-quote {
  max-width: 610px;
  margin: 105px auto 78px 0px;
}

.story__form {
  display: flex;
  flex-direction: column;
  margin: 0 0 0 40px;
}
.story__button {
  max-width: 280px;
}
.story__buttons-block {
  display: flex;
  flex-direction: column;
  margin: 105px 0 0 123px;
}

.buttons-block {
  height: 22px;
  margin-bottom: 10px;
  max-width: 104px;
}
</style>
