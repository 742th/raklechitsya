<template>
  <div>
    <Panel class="stories__title">
      <Title>Истории неизлечимых привычек</Title>
      <form action="" class="stories__form">
        <div class="input-box">
          <Input />
        </div>
        <BtnSearch />
      </form>
    </Panel>
    <div class="cards-stories">
      <panel class="cards-stories__panel">
        <div class="cards-stories__container">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <BtnStory />
      </panel>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Title from '@/components/UI/Title';
import Input from '@/components/UI/Input';
import BtnSearch from '@/components/UI/BtnSearch';
import Card from '@/components/Card';
export default {
  components: {
    Panel,
    Title,
    Input,
    BtnSearch,
    Card,
  },
};
</script>

<style scoped>
.stories__block {
  margin-top: 100px;
  margin-bottom: 60px;
}

.stories__form {
  margin-top: 60px;
  margin-bottom: 70px;
  display: flex;
}

.stories__title {
  border-top: 1px solid #e8e8e8;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
}

.input-box {
  width: 100%;
}
</style>
