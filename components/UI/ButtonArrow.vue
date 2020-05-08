<template>
  <button class="button__arrow">
    <div class="arrow"></div>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button__arrow {
  width: 40px;
  height: 40px;
  background-color: #fbfbfb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  border: none;
  outline: none;
}

.button__arrow:hover {
  cursor: pointer;
  background-color: #F4F4F4;
}

.arrow {
  width: 20px;
  height: 20px;
  background-position: center;
  background-size: cover;
  background-image: url("data:image/svg+xml,%3Csvg width='10' height='18' viewBox='0 0 10 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L1 9L9 17' stroke='%23BFBFBF'/%3E%3C/svg%3E%0A");
}
</style>
