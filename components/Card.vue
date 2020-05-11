<template>
  <div class="Card">
    <nuxt-link to="/" class="card__link">
      <img
        src="https://media.kg-portal.ru/images/gentlemen/gentlemen_11.jpg"
        alt="Фотография героя рассказа"
        class="card__photo"
      />
      <h3 class="card__title">Владимир Тен</h3>
      <p class="card__text">
        Я всегда читаю книги с конца, - и это не лечится, в отличие от рака.
      </p>
    </nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card__photo {
  background: #ededed;
  width: 100%;
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

@media screen and (max-width: 1295px) {
  .card__photo {
    height: 265px;
  }
}

@media screen and (max-width: 1200px) {
  .card__photo {
    height: 235px;
  }
}

@media screen and (max-width: 1100px) {
  .card__photo {
    height: 208px;
  }

  .card__title {
    font-size: 18px;
    line-height: 22px;
  }

  .card__text {
    font-size: 13px;
    line-height: 16px;
  }
}

@media screen and (max-width: 990px) {
  .card__photo {
    width: 216px;
    height: 216px;
  }

  .card__title {
    font-size: 18px;
    line-height: 22px;
  }

  .card__text {
    font-size: 13px;
    line-height: 16px;
  }
}
</style>
