<template>
  <form class="main__form" @submit.prevent>
    <form-title class="form__title">{{ currentQuestion.title }}</form-title>
    <h3 class="form__subtitle">
      {{ currentQuestion.question }}
      <p v-if="currentQuestion.addQuestion" class="form__addtext">
        {{ currentQuestion.addQuestion }}
      </p>
    </h3>

    <input-block
      :theme="'bottom'"
      :placeholder="'Напишите тут'"
      :type="'text'"
      class="form__input"
      @input="answer"
    />
    <button-block
      class="prev"
      :unactiveWhite="!currentQuestion"
      :theme="'white'"
      @btnClick="prev"
      >Назад</button-block
    >
    <button-block class="next" :theme="'default'" @btnClick="next"
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
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { quiz } = this.$store.state;
      const { currentQuestion, questions } = quiz;
      return questions[currentQuestion];
    },
    initA() {
      const { quiz } = this.$store.state;
      const { currentQuestion, answers } = quiz;
      return answers[currentQuestion];
    },
  },
  methods: {
    async next() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initA || '';
    },
    async prev() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initA || '';
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
  min-height: 90px;
}

.form__input {
  margin-bottom: 200px;
}
.form__addtext {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  color: #666666;
}
.prev {
  width: 48px;
  margin-right: 48px;
}
</style>
