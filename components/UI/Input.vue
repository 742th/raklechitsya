<template>
  <input :class="['com-input', theme]" :type="type" :placeholder="placeholder"
  <<<<<<< HEAD v-model="content" @input="handle" ======= >>>>>>>
  8b2420a46af0df72088aecb124b6badc61c2f001 />
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    theme: String,
<<<<<<< HEAD
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    handle(e) {
      this.$emit('input', this.content);
    },
=======
>>>>>>> 8b2420a46af0df72088aecb124b6badc61c2f001
  },
};
</script>

<style scoped>
.com-input {
  width: 840px;
  height: 24px;
  border: none;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
}

.bottom {
  border-bottom: 1px solid #e7e7e7;
  box-sizing: border-box;
  padding: 0 0 10px 0;
}
</style>
