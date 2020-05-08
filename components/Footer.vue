<template>

  <footer class="footer">
    <panel>
    <div class="footer__links">
      <h3 class="footer__title">
        Спасибо всем, кто
        помог состояться этому проекту
      </h3>
      <nav class="footer__menu">
        <nuxt-link to="/" class="footer__menu-link">Главная</nuxt-link>
        <nuxt-link to="stories" class="footer__menu-link">Истроии</nuxt-link>
      </nav>
      <div class="footer__social-links">
        <p class="footer__text">Мы в</p>
        <a href="#" class="footer__social-link" >Инстаграме</a>
        <p class="footer__text">и</p>
        <a href="#" class="footer__social-link">Youtube</a>
        <p class="footer__add">Поделитесь</p>
        
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
export default {
  components: {
    panel: Panel,
  },
};
</script>

<style  scoped>

.footer__menu-link {
  text-decoration: none;
  font-size: 18px;
  color:black;
  margin-right: 40px;
}
.footer{
    margin-top:360px;
    
}
.panel {
  display: flex;
  flex-direction: column;
  }

.footer__title {
  display: block;
  max-width: 340px;
  font-weight: 600;
  font-size: 32px;
}
.footer__links {
  width:100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.copyright {
  margin-top: 126px;
  margin-bottom: 60px;
  width:100%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: #898989;
}

.copyright__name{
  display: block;
  
}
.copyrigth__author{
  
  display: block;
}

.footer__text{
  display: inline-block;
  font-size: 18px;
}

.footer__social-link{
  text-decoration: none;
  color:black;

}

.footer__social-link:hover{
  color:blue;
}

.footer__add{
  margin-top:44px;
  
}
.footer__add::after{
  content: ' ';
  border:0.5px solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    margin-left: 5px;
    transform: rotate(-90deg);

}
</style>