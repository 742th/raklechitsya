<template>
  <div class="container">
    <Header/>
    <Cover/>
    <Video/>
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Cover from '@/components/Cover';
  import Video from '@/components/Video';
  export default {
    components: {
      Header,
      Cover,
      Video,
    }
  };

</script>

<style>
.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
</style>
