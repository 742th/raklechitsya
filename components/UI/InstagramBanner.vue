<template>
  <div class="instagram-banner">
    <slot></slot>
    <hash />
  </div>
</template>

<script>
import hash from '@/components/UI/hash';
export default {
  components: {
    hash,
  },
};
</script>

<style scoped>
.instagram-banner {
  font-size: 30px;
  line-height: 1.5;
  background-color: #613a93;
  color: white;
  width: 100%;
  margin: 100px 0 0 0;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  .instagram-banner {
    font-size: 28px;
    margin-top: 90px;
  }
}

@media (max-width: 1024px) {
  .instagram-banner {
    font-size: 24px;
    margin-top: 90px;
  }

  @media (max-width: 768px) {
    .instagram-banner {
      font-size: 22px;
      margin-top: 80px;
    }
  }
}
</style>
