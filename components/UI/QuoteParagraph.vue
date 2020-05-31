<template>
  <div class="paragraph">
    <p class="quote__paragraph">
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.paragraph {
  max-width: 340px;
  text-align: left;
  margin: 32px auto 0 0;
  color: #666666;
}
.quote__paragraph {
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 22px;
}
</style>
