<template>
  <input
    :class="['com-input', theme]"
    :type="type"
    :placeholder="placeholder"
  />
</template>

<script>
export default {
  props: {
    type: String,
    placeholder: String,
    theme: String,
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
