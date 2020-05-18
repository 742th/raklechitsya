// TODO: 1)Проверить роутинг! 2)Сделать подчеркиваемость у активной ссылки
<template>
  <header class="header">
    <panel>
      <h2 class="header__title">
        Проект Благотворительного Фонда Константина Хабенского
      </h2>
      <nav class="header__menu">
        <navlist />
        <button-block
          @btnClick="openPopup"
          :theme="'white'"
          class="header__story-button"
          >Рассказать историю</button-block
        >
      </nav>
      <burger-button class="header__burger-button" />
    </panel>
  </header>
</template>

<script>
import Panel from '@/components/Panel';
import Navlist from '@/components/blocks/Navlist';
import ButtonForm from '@/components/UI/ButtonForm';
import BurgerButton from '@/components/UI/BurgerButton';
export default {
  components: {
    panel: Panel,
    navlist: Navlist,
    'button-block': ButtonForm,
    'burger-button': BurgerButton,
  },

  methods: {
    openPopup() {
      this.$store.commit('popup/togglePopup');
    },
  },
};
</script>

<style scoped>
.panel {
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.header {
  display: flex;
  width: 100%;
  min-height: 76px;
  background: #ffffff;
  margin: 0px auto;
  align-items: center;
  border-bottom: 1px solid #e8e8e8;
}

.header__title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 340px;
  text-align: left;
}

.header__menu {
  display: flex;
  align-items: center;
}

.header__story-button {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  text-decoration: none;
  margin: 0;
}

.header__burger-button {
  display: none;
}

@media screen and (max-width: 1280px) {
  .panel {
    padding: 0 50px;
  }

  .header__title {
    line-height: 18px;
  }

  .header__story-button {
    font-size: 16px;
  }
}

@media screen and (max-width: 768px) {
  .header__menu {
    display: none;
  }

  .header__burger-button {
    display: block;
  }
}
</style>
