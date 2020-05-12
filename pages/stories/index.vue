<template>
  <div>
    <Panel class="stories__title">
      <Title>Истории неизлечимых привычек</Title>
      <form action="" class="stories__form">
        <div class="input-box">
          <Input />
        </div>
        <ButtonForm class="button_search" :theme="'default'">Поиск</ButtonForm>
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
      </panel>
      <panel>
        <ButtonForm class="stories_active stories_inactive">1</ButtonForm>
        <ButtonForm class="stories_inactive">2</ButtonForm>
        <ButtonForm class="stories_inactive">3</ButtonForm>
        <ButtonForm class="stories_inactive">4</ButtonForm>
        <ButtonForm class="stories_inactive">5</ButtonForm>
        <ButtonForm class="stories_inactive">6</ButtonForm>
        <ButtonForm class="stories_inactive">7</ButtonForm>
      </panel>
    </div>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import Title from '@/components/UI/Title';
import Input from '@/components/UI/Input';
import ButtonForm from '@/components/UI/ButtonForm';
import Card from '@/components/Card';
export default {
  components: {
    Panel,
    Title,
    Input,
    ButtonForm,
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

.stories_inactive.stories_inactive {
  width: 58px;
  height: 58px;
  background: #fbfbfb;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: black;
  margin-right: 10px;
}
/* попозже подставлять этот клас по клику на кнопку */
.stories_active.stories_active {
  background: #f4f4f4;
  margin-bottom: 90px;
}

.button_search {
  width: 226px;
  height: 52px;
  background: #613a93;
  color: white;
  font-size: 16px;
  line-height: 19px;
  font-weight: 500;
  margin-left: 20px;
}
</style>
