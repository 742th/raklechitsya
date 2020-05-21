export const state = () => ({
  currentQuestion: 1,
  answers: {},
  questions: QUESTIONS,
});

export const mutations = {
  saveAnswer(state, { answer, currentQuestion }) {
    state.answers[currentQuestion] = answer;
  },
  setCurrentQuestion(state, { currentQuestion }) {
    state.currentQuestion = currentQuestion;
  },
};

export const actions = {
  SAVE_ANSWER({ commit }, { answer, currentQuestion }) {
    commit('saveAnswer', { answer, currentQuestion });
  },
  SET_QUESTION({ commit }, { currentQuestion }) {
    commit('setCurrentQuestion', { currentQuestion });
  },
  async NEXT_QUESTION({ commit, state }, { answer }) {
    const { currentQuestion } = state;
    await commit('saveAnswer', { answer, currentQuestion });
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion + 1,
    });
  },
  async PREV_QUESTION({ commit, state }) {
    const { currentQuestion } = state;
    await commit('setCurrentQuestion', {
      currentQuestion: currentQuestion - 1,
    });
  },
};

const QUESTIONS = {
  1: {
    title: 'Шаг 1 из 12 ',
    question: 'Как вас зовут?',
  },
  2: {
    title: 'Шаг 2 из 12',
    question: 'Было ли у вас онкологическое заболевание?',
    addQuestion:
      'Если да – расскажите, пожалуйста, кратко, какой диагноз и текущий статус. Если нет — приглашаем Вас поделиться своей историей неизлечимых привычек в Инстаграм с хештегами #раклечится и #этонелечится.',
  },
  3: {
    title: 'Шаг 3 из 12 ',
    question: 'Какие занятия приносят Вам наибольшее удовольствие? ',
    addQuestion:
      'Расскажите о ваших неизлечимых привычках, чего Вы боитесь или без чего не можете жить.',
  },
  4: {
    title: 'Шаг 4 из 12 ',
    question: 'На что, кроме семьи, быта и работы, Вы тратите свое время?',
  },
  5: {
    title: 'Шаг 5 из 12 ',
    question: 'Какие сильные увлечения у Вас есть?',
    addQuestion:
      'Расскажите о занятии, хобби или спорте, которые увлекают Вас с головой.',
  },
  6: {
    title: 'Шаг 6 из 12 ',
    question: 'Как вас зовут?',
  },
  7: {
    title: 'Шаг 7 из 12 ',
    question: 'Как вас зовут?',
  },
  8: {
    title: 'Шаг 8 из 12 ',
    question: 'Как вас зовут?',
  },
  9: {
    title: 'Шаг 9 из 12 ',
    question: 'Как вас зовут?',
  },
  10: {
    title: 'Шаг 10 из 12 ',
    question: 'Как вас зовут?',
  },
  11: {
    title: 'Шаг 11 из 12 ',
    question: 'Как вас зовут?',
  },
  12: {
    title: 'Шаг 12 из 12 ',
    question: 'Как вас зовут?',
  },
};
