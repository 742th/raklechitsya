// Заголовок, как самостоятельно используется, так и с QuoteParagaph
<template>
  <div class="title">
    <h3 class="title-text">
      <slot></slot>
    </h3>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  display: flex;
  max-width: 413px;
  text-align: left;
}

.title-text {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
</style>
