export const state = () => ({
  mobileMenuOpened: false,
});

export const mutations = {
  toggleMobileMenu(state) {
    return (state.mobileMenuOpened = !state.mobileMenuOpened);
  },
};

export const getters = {
  getMobileMenuState(state) {
    return state.mobileMenuOpened;
  },
};
