<template>
  <div>
    <Header />
    <Popup />
    <nuxt />
  </div>
</template>

<script>
import Header from '@/components/blocks/Header';
import Popup from '@/components/Popup';
export default {
  components: {
    Header,
    Popup,
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
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
