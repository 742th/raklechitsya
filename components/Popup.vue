<template>
  <overlay>
    <div class="popup">
      <img alt="" class="popup__close">
      <h3 class="popup__title">Шаг 1 из 12</h3>
      <form class="popup__form" name="" novalidate>
      </form>
    </div>
  </overlay>
</template>

<script>
  import ButtonForm from '@/components/UI/ButtonForm';
  import Overlay from '@/components/UI/Overlay';
  export default {
    components: {
      'button-block': ButtonForm,
      'overlay': Overlay
    }
  }
</script>

<style scoped>
  .popup {
    width: 920px;
    height: 600px;
    background-color: #ffffff;
    position: relative;
    z-index: 2;
  }


</style>
