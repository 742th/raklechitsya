<template>
  <form class="main__form" @submit.prevent>
    <form-title class="form__title">{{ Quiz[current].steps }}</form-title>
    <h3 class="form__subtitle">{{ Quiz[current].question }}</h3>
    <input-block
      :theme="'bottom'"
      :placeholder="'Напишите тут'"
      class="form__input"
    />
    <button-block
      class="prev"
      :unactiveWhite="!current"
      :theme="'white'"
      @btnClick="prevQuest"
      >Назад</button-block
    >
    <button-block class="next" :theme="'default'" @btnClick="nextQuest"
      >Далее</button-block
    >
  </form>
</template>

<script>
import Title from '@/components/UI/Title';
import ButtonForm from '@/components/UI/ButtonForm';
import InputBlock from '@/components/UI/Input';

export default {
  components: {
    'form-title': Title,
    'button-block': ButtonForm,
    'input-block': InputBlock,
  },
  data() {
    return {
      current: 0,
      Quiz: [
        {
          id: 1,
          steps: 'Шаг 1 из 12',
          question: 'Как вас зовут?',
        },
        {
          id: 2,
          steps: 'Шаг 2 из 12',
          question:
            'Было ли у вас онкологическое заболевание? Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
        },
        {
          id: 3,
          steps: 'Шаг 3 из 12',
          question:
            'Какие занятия приносят Вам наибольшее удовольствие? Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
        },
      ],
    };
  },
  methods: {
    nextQuest() {
      this.current++;
    },
    prevQuest() {
      this.current--;
    },
  },
};
</script>

<style scoped>
.form__title {
  margin-bottom: 40px;
}
.form__subtitle {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 86px;
  min-height: 72px;
}

.form__input {
  margin-bottom: 200px;
}

.prev {
  width: 48px;
  margin-right: 48px;
}
</style>
