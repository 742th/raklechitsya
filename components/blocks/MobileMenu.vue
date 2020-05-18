<template>
  <panel class="menu-panel">
    <nav class="menu">
      <navlist />
      <button-block
        @click="openPopup"
        :theme="'white'"
        class="menu__story-button"
        >Рассказать историю</button-block
      >
    </nav>
  </panel>
</template>

<script>
import Panel from '@/components/Panel';
import Navlist from '@/components/blocks/Navlist';
import ButtonForm from '@/components/UI/ButtonForm';
export default {
  components: {
    panel: Panel,
    navlist: Navlist,
    'button-block': ButtonForm,
  },
  methods: {
    openBurgerMenu() {
      this.$store.commit('mobile-menu/toggle');
    },
    openPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.menu-panel {
  padding: 0 50px;
}
.menu {
  display: flex;
  align-items: center;
  min-height: 60px;
}

.menu__story-button {
  font-weight: normal;
}
</style>
