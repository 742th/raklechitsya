// TODO: почему хедер лежит в /components/blocks, а футер просто в /components?
<template>
  <div>
    <mobile-menu v-if="isMobileMenuOpened" class="main-burger-menu" />
    <main-header />
    <nuxt />
    <main-footer />
  </div>
</template>

<script>
import MobileMenu from '@/components/blocks/MobileMenu';
import Header from '@/components/blocks/Header';
import Footer from '@/components/Footer';
export default {
  computed: {
    isMobileMenuOpened() {
      return this.$store.getters['mobile-menu/getMobileMenuState'];
    },
  },
  components: {
    'mobile-menu': MobileMenu,
    'main-header': Header,
    'main-footer': Footer,
  },
};
</script>

<style>
html {
  font-family: Inter, Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #ffffff;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.main-burger-menu {
  align-items: center;
  border-bottom: 1px solid #efefef;
}
</style>
