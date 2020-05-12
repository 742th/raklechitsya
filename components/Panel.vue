// Обертка для компонентов, добавляет отступы внутри и не дает тянуться дальше
1440px
<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.panel {
  display: flex;
  max-width: 1440px;
  padding: 0 60px;
  margin: 0 auto;
}
</style>
