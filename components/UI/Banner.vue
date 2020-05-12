<template>
  <div class="banner">
    <span class="banner_title"><slot></slot> </span>
    <p class="banner_hash">#ЭТОНЕЛЕЧИТСЯ</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.banner {
  width: 100%;
  max-width: 1320px;
  min-height: 86px;
  background: #613a93;
  border: 1px solid #000000;
  box-sizing: border-box;
  text-transform: uppercase;
  margin: 74px auto 0px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.banner_title {
  display: flex;
  text-transform: uppercase;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 46px;
  color: #ffffff;
  margin: 0px;
}

.banner_hash {
  font-style: bold;
  font-weight: bold;
  font-size: 30px;
  line-height: 46px;
  text-transform: uppercase;
  color: #ffffff;
  margin-left: 5px;
}
</style>
