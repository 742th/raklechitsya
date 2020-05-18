<template>
  <button
    :class="['burger-button', { 'burger-button_type_close': isMenuOpened }]"
    @click="toggleMobile"
  ></button>
</template>

<script>
export default {
  computed: {
    isMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  methods: {
    toggleMobile() {
      this.$store.commit('mobile-menu/toggleMobileMenu');
    },
  },
};
</script>

<style scoped>
.burger-button {
  /* background-image: url("data:image/svg+xml,%3Csvg width='32' height='27' viewBox='0 0 32 27' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='1.5' x2='32' y2='1.5' stroke='black' stroke-width='3'/%3E%3Cline y1='13.5' x2='32' y2='13.5' stroke='black' stroke-width='3'/%3E%3Cline y1='25.5' x2='32' y2='25.5' stroke='black' stroke-width='3'/%3E%3C/svg%3E"); */
  background-image: url('../../static/burger-menu.svg');
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  padding: 0;
  width: 32px;
  height: 27px;
  display: none;
}

.burger-button.burger-button_type_close {
  background-image: url("data:image/svg+xml,%3Csvg width='26' height='26' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='1.62684' y1='24.2528' x2='24.2543' y2='1.6254' stroke='black' stroke-width='3'/%3E%3Cline x1='24.2557' y1='24.3741' x2='1.62833' y2='1.74672' stroke='black' stroke-width='3'/%3E%3C/svg%3E%0A");
}
</style>
