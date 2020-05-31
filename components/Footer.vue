<template>
  <footer class="footer">
    <panel>
      <div class="footer__links">
        <h3 class="footer__title">
          Спасибо всем, кто помог состояться этому проекту
        </h3>
        <div class="box-links">
          <nav class="footer__menu">
            <nuxt-link to="/" class="footer__menu-link">Главная</nuxt-link>
            <nuxt-link to="stories" class="footer__menu-link"
              >Истроии</nuxt-link
            >
          </nav>
          <div class="footer__social-links">
            <p class="footer__text">Мы в</p>
            <a href="#" class="footer__social-link">Инстаграме</a>
            <p class="footer__text">и</p>
            <a href="#" class="footer__social-link">Youtube</a>
            <ButtonForm class="footer__add" :theme="'light-grey'"
              >Поделитесь ↗</ButtonForm
            >
          </div>
        </div>
      </div>
      <div class="copyright">
        <p class="copyright__name">Рак Лечится 2020</p>
        <p class="copyrigth__author">Сделано студентами Яндекс Практикум</p>
      </div>
    </panel>
  </footer>
</template>

<script>
import Panel from '@/components/Panel';
import ButtonForm from '@/components/UI/ButtonForm';

export default {
  components: {
    panel: Panel,
    ButtonForm,
  },
};
</script>

<style scoped>
.footer__menu {
  margin-right: 379px;
}
.footer__menu-link {
  text-decoration: none;
  font-size: 18px;
  color: black;
}
.footer__menu-link:first-of-type {
  margin-right: 40px;
}
.footer {
  padding-top: 60px;
  background: #fbfbfb;
}
.panel {
  display: flex;
  flex-direction: column;
}
.footer__title {
  display: block;
  width: 400px;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__links {
  width: 100%;
  display: flex;
  align-items: flex-start;
}
.box-links {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.copyright {
  margin-top: 110px;
  margin-bottom: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #898989;
}
.copyright__name {
  display: block;
}
.copyrigth__author {
  display: block;
}
.footer__text {
  display: inline-block;
  font-size: 18px;
}
.footer__social-link {
  text-decoration: none;
  color: black;
}
.footer__social-link:hover {
  color: blue;
}
.footer__add {
  margin-top: 44px;
  height: 24px;
  color: #121212;
  text-align: left;
}
</style>
