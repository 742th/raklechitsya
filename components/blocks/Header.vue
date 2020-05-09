// TODO: 1)Проверить роутинг! 2)Сделать подчеркиваемость у активной ссылки
<template>
  <header class="header">
    <panel>
      <h2 class="header__title">
        Проект Благотворительного Фонда Константина Хабенского
      </h2>
      <nav class="header__menu">
        <nuxt-link to="/" class="header__menu-link">Главная</nuxt-link>
        <nuxt-link to="stories" class="header__menu-link">Истроии</nuxt-link>
        <nuxt-link to="makeStory" class="header__menu-link"
          >Рассказать историю</nuxt-link
        >
      </nav>
    </panel>
  </header>
</template>

<script>
import Panel from '@/components/Panel';
export default {
  components: {
    panel: Panel,
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
}
.header__title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 340px;
  margin: 18px auto 18px 0px;
  text-align: left;
}
.header__menu-link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
  margin: 26px 40px 26px auto;
}
.header__menu-link:last-child {
  margin-right: 0px;
}
</style>
