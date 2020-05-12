export const state = () => ({
  popupOpen: false,
});

export const mutations = {
  togglePopup(state) {
    return (state.popupOpen = !state.popupOpen);
  },
};

export const getters = {
  getPopupQuiz(state) {
    return state.popupOpen;
  },
};
