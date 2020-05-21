// TODO: переиспользовать в футере
<template>
  <ul class="navlist">
    <li class="navlist__item">
      <nuxt-link to="/" class="menu-link">Главная</nuxt-link>
    </li>
    <li class="navlist__item">
      <nuxt-link to="/stories" class="menu-link">Истории</nuxt-link>
    </li>
  </ul>
</template>

<style scoped>
.navlist {
  display: flex;
  list-style: none;
  padding: 0;
}

.menu-link {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #121212;
  text-decoration: none;
  margin-right: 40px;
}

@media screen and (max-width: 1280px) {
  .menu-link {
    font-size: 16px;
  }
}

@media screen and (max-width: 1024px) {
  .menu-link {
    margin-right: 30px;
  }
}
</style>
