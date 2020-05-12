<template>
  <overlay>
    <div class="popup">
      <button class="button__close" @click="popupClose">
        <div class="img_close"></div>
      </button>
      <slot></slot>
    </div>
  </overlay>
</template>

<script>
import ButtonForm from '@/components/UI/ButtonForm';
import Overlay from '@/components/UI/Overlay';
import FormQuiz from '@/components/UI/FormQuiz';
export default {
  components: {
    'button-block': ButtonForm,
    overlay: Overlay,
    'form-quiz': FormQuiz,
  },
  methods: {
    popupClose() {
      this.$store.commit('popup/togglePopup');
    },
  },
  data() {
    return {
      close: true,
    };
  },
};
</script>

<style scoped>
.popup {
  width: 920px;
  height: 600px;
  display: block;
  background-color: #ffffff;
  position: absolute;
  z-index: 2;
  padding: 40px;
}

.button__close {
  width: 20px;
  height: 20px;
  background-color: #fff;
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
  position: absolute;
  right: 42px;
  top: 44px;
}

.button__close:hover {
  cursor: pointer;
}

.img_close {
  width: 100%;
  height: 20px;
  background-position: center;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='7.92879' y1='7.92912' x2='22.0709' y2='22.0713' stroke='black' stroke-width='2'/%3E%3Cline x1='7.92912' y1='22.0712' x2='22.0713' y2='7.92908' stroke='black' stroke-width='2'/%3E%3C/svg%3E");
}
</style>
