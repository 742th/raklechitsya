.<template>
    <button class="BtnStory">
      <nuxt-link to="/" class="BtnStory__link">Больше статей</nuxt-link>
      </button>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  .BtnStory {
    width: calc(100vw - 60px*2);
    height: 82px;
    background: #FBFBFB;
    border: none;
    font-size: 16px;
    line-height: 20px;
  }

  .BtnStory:hover {
    background: #F8F8F8;
    cursor: pointer;
  }

  .BtnStory__link {
    text-decoration: none;
    color: black;
  }
  
</style>