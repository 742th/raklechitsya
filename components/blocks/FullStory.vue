<template>
  <panel>
    <section class="story">
      <div class="story__container">
        <span class="story__photo-container">
          <img
            src="https://www.sportsdaily.ru/s/image/92188.jpg"
            alt=""
            class="story__photo"
          />
        </span>
        <div class="story__brief-container">
          <h1 class="story__title">
            <span>Александр Тарханов:</span>
            «Я не могу победить свою пунктуальность в отличии от рака»
          </h1>
          <div class="story__footer">
            <button class="story__button_brief">Поделитесь ↗</button>
            <p class="story__date">20 апреля 2018</p>
          </div>
        </div>
      </div>
      <div class="content__container">
        <p class="story__text">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
          beatae hic inventore voluptates aliquam officia voluptas recusandae?
          Nihil perspiciatis veritatis odio iusto! Odio quo, vel sapiente eaque
          est, autem laborum ab quibusdam accusantium veritatis illum omnis
          facilis ducimus facere numquam neque odit unde! Est aut ex consequatur
          ad nihil facilis impedit voluptate totam, velit temporibus expedita
          consectetur molestias nam iste accusantium neque corporis illum non
          sunt modi suscipit, quam, quia nulla. Numquam, rem? Blanditiis aperiam
          adipisci nisi, eaque nulla, eveniet nam labore illum asperiores atque
          maxime aspernatur. Natus, aliquam sed aperiam eum nihil, explicabo
          distinctio cupiditate delectus eveniet laboriosam nemo! Necessitatibus
          tempora ipsam quis libero modi alias, dignissimos corporis, totam iste
          error, laudantium eius reiciendis! Distinctio, quia. Quas tempore
          commodi excepturi veniam dolore. Inventore hic explicabo sint tempore
          iusto sunt magni molestias, optio quo eos enim sapiente sed, itaque
          quod eum deleniti, veritatis libero debitis mollitia nemo vel cum eius
          repellat. Obcaecati modi aliquid, assumenda natus minima sapiente
          placeat atque cupiditate nostrum nulla quis odit molestiae sint a
          repudiandae sit? Incidunt non dolores consequuntur et aut nobis quia.
          Earum saepe et, dolorem odit quas, distinctio ullam optio at ea
          laudantium sit impedit dolor doloremque reprehenderit nesciunt, id
          soluta ipsam mollitia.
        </p>
        <button class="story__button">
          Поделитесь этой статьей в своих социальных сетях ↗
        </button>
      </div>
    </section>
  </panel>
</template>

<script>
import Panel from '@/components/Panel';
export default {
  components: {
    panel: Panel,
  },
};
</script>

<style scoped>
.story__container {
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.story__photo-container {
  width: 44.21%;
  padding-bottom: 44%;
  flex-shrink: 0;
  position: relative;
  object-fit: contain;
}

.story__photo {
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: center;
}

.story__brief-container {
  width: 51.65%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px 0;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

.content__container {
  margin: 0 auto;
  width: 59%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 0 160px 0;
}

.story__title {
  font-weight: normal;
  font-size: 38px;
  line-height: 1.263;
}

.story__title span {
  font-weight: 500;
}

.story__footer {
  display: flex;
  justify-content: space-between;
}

.story__date {
  font-size: 18px;
  line-height: 1.33;
}

.story__text {
  font-size: 22px;
  line-height: 1.363;
  padding-bottom: 70px;
}
</style>
