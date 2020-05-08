<template>
  <div class="Card">
    <nuxt-link to="/" class="card__link">
    <img src="https://media.kg-portal.ru/images/gentlemen/gentlemen_11.jpg" alt="Фотография героя рассказа" class="card__photo">
    <h3 class="card__title">Владимир Тен</h3>
    <p class="card__text">Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.</p>
    </nuxt-link>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .card__photo {
    background: #EDEDED;
    width: 300px;
    height: 300px;
    object-fit: cover;
  }

  .card__title {
    font-weight: 600;
    font-size: 22px;
    line-height: 22px;
    margin: 20px 0 14px 0;
    text-align: left;
    color: black;
  }

  .card__text {
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #666666;
    text-align: left;
    margin: 0;
  }

  .card__link {
    text-decoration: none;
    cursor: pointer;
  }
</style>
