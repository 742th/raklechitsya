<template>
  <header class="header">
    <h2 class="header__title">
      Проект Благотворительного Фонда Константина Хабенского
    </h2>
    <nav class="header__menu">
      <nuxt-link to="/" class="header__menu-link" href="">Главная</nuxt-link>
      <nuxt-link to="stories" class="header__menu-link" href="">Истроии</nuxt-link>
      <nuxt-link to="makeStory" class="header__menu-link" href="">Рассказать историю</nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
  width: 100%;
  min-height: 76px;
  background: #ffffff;
  align-items: center;
  margin: 0px;
}
.header__title {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  max-width: 340px;
  margin: 18px auto 18px 60px;
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
  margin-right: 60px;
}
</style>
