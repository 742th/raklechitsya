<template>
  <panel>
    <section class="story">
      <div class="story__title-container">
        <span class="story__photo-container">
          <img
            src="https://www.sportsdaily.ru/s/image/92188.jpg"
            alt=""
            class="story__photo"
          />
        </span>
        <h1 class="story__title">
          <span>Александр Тарханов:</span>
          «Я не могу победить свою пунктуальность в отличии от рака»
        </h1>
        <div class="story__footer">
          <button-share class="story__button_brief" :theme="'white'"
            >Поделитесь &#8599;</button-share
          >
          <p class="story__date">20 апреля 2018</p>
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
        <button-share class="story__button" :theme="'white'">
          Поделитесь этой статьей в своих социальных сетях &#8599;
        </button-share>
      </div>
    </section>
  </panel>
</template>

<script>
import ButtonForm from '@/components/UI/ButtonForm';
import Panel from '@/components/Panel';
export default {
  components: {
    panel: Panel,
    'button-share': ButtonForm,
  },
};
</script>

<style scoped>
.story__title-container {
  display: grid;
  grid-template-columns: 44.21% 4.29% 51.5%;
  grid-template-rows: 2fr 1fr;
  width: 100%;
}

.story__photo-container {
  grid-row: 1 / 3;
  width: 100%;
  padding-bottom: 100%;
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

.content__container {
  margin: 0 auto;
  width: 59%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 130px 0 160px 0;
}

.story__title {
  grid-area: 1 / 3 / 1 / 3;
  font-weight: normal;
  font-size: 38px;
  line-height: 1.263;
  border-top: 1px solid #efefef;
  padding-top: 30px;
}

.story__title span {
  font-weight: 500;
}

.story__footer {
  display: flex;
  justify-content: space-between;
  grid-area: 2 / 3 / 2 / 3;
  align-self: end;
  border-bottom: 1px solid #efefef;
  padding-bottom: 30px;
}

.story__date {
  font-size: 18px;
  line-height: 1.33;
}

.story__text {
  font-size: 22px;
  line-height: 1.363;
  padding-bottom: 66px;
}

.story__button_brief {
  height: fit-content;
  width: fit-content;
}

.story__button {
  max-width: 100%;
  height: 85px;
  border-top: 1px solid #efefef;
  border-bottom: 1px solid #efefef;
}

@media (max-width: 1280px) {
  .content__container {
    width: 61%;
    padding: 120px 0 150px 0;
  }

  .story__title {
    font-size: 34px;
  }

  .story__text {
    font-size: 20px;
    padding-bottom: 57px;
  }
}

@media (max-width: 1024px) {
  .story__title {
    padding-top: 20px;
  }

  .story__footer {
    padding-bottom: 20px;
  }

  .content__container {
    width: 69%;
    padding: 90px 0 120px 0;
  }

  .story__title {
    font-size: 30px;
  }

  .story__date {
    font-size: 16px;
  }

  .story__text {
    font-size: 18px;
    padding-bottom: 40px;
  }
  .story__button {
    height: 70px;
  }
}

@media (max-width: 800px) {
  .story__title-container {
    grid-template-columns: 1fr;
    grid-template-rows: auto 2fr auto;
    width: 100%;
  }

  .story__photo-container {
    grid-row: 2 / 3;
    width: 65.6%;
    margin: 0 auto;
    padding-bottom: 65.6%;
  }

  .content__container {
    width: 100%;
    padding: 100px 0 120px 0;
  }

  .story__title {
    text-align: center;
    grid-area: 1 / 1 / 1 / 1;
    padding-top: 16px;
    padding-bottom: 56px;
  }

  .story__footer {
    grid-area: 3 / 1 / 3 / 1;
    padding-bottom: 16px;
    padding-top: 56px;
  }

  .story__date {
    font-size: 18px;
  }

  .story__text {
    font-size: 18px;
  }

  @media (max-width: 600px) {
    .story__title {
      font-size: 22px;
      padding-bottom: 42px;
    }

    .content__container {
      padding: 60px 0;
    }

    .story__footer {
      padding-top: 42px;
    }
  }

  @media (max-width: 550px) {
    .story__photo-container {
      width: 100%;
      padding-bottom: 100%;
    }
  }

  @media (max-width: 500px) {
    .content__container {
      padding: 40px 0;
    }

    .story__title {
      font-size: 18px;
      padding-bottom: 28px;
    }

    .story__footer {
      padding-top: 29px;
    }

    .story__date {
      font-size: 13px;
    }

    .story__text {
      font-size: 13px;
    }
  }
}
</style>
