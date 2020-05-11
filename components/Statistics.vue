<template>
  <Panel class="statistics">
    <Title>Статистика по онкозаболеваниям</Title>
    <div class="statistics-box">
      <div v-for="card in statisticCard" :key="card.id" class="statistic__card">
        <p class="statistic__info">{{ card.info }}</p>
        <div>
          <!-- здесь должна быть логика, что если есть card.value то выводит первый график, если нет такого значения, то второй -->
          <Graph
            v-if="card.value"
            :value="card.value"
            :maxValue="card.maxValue"
          />
          <DoubleGraph
            v-if="card.firstValue"
            :firstValue="card.firstValue"
            :secondValue="card.secondValue"
          />
          <p class="statistic__numbers">{{ card.numbers }}</p>
          <p class="statistic__resource">{{ card.resourse }}</p>
        </div>
      </div>
    </div>
  </Panel>
</template>

<script>
import Graph from '@/components/UI/Graph';
import DoubleGraph from '@/components/UI/DoubleGraph';
import Panel from '@/components/Panel';
import Title from '@/components/UI/Title';

export default {
  components: {
    Graph,
    DoubleGraph,
    Panel,
    Title,
  },
  data() {
    return {
      statisticCard: [
        {
          id: '0',
          info:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          numbers: '1 из 3',
          resourse: 'Левада-Центр 2018',
          value: 1,
          maxValue: 4,
        },
        {
          id: '1',
          info: '2,6% Россиян имеют онкозаболевания.',
          numbers: '3 700 000',
          resourse: 'Росстат 2018',
          value: 2.6,
          maxValue: 100,
        },
        {
          id: '2',
          info:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          numbers: '↑28%',
          resourse: 'МНИОИ Герцена 2018',
          firstValue: 61,
          secondValue: 89,
        },
        {
          id: '3',
          info:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          numbers: '↓25%',
          resourse: 'МНИОИ Герцена 2018',
          firstValue: 73,
          secondValue: 48,
        },
      ],
    };
  },
};
</script>

<style>
.statistics.statistics {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.statistics-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 70px;
}

.statistic__card {
  width: 300px;
  height: 300px;
  border: 1px solid #efefef;
  box-sizing: border-box;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.statistic__info {
  font-size: 12px;
  line-height: 16px;
  text-align: left;
}

.statistic__numbers {
  font-weight: 600;
  font-size: 38px;
  line-height: 40px;
  text-align: right;
  margin-top: 20px;
}

.statistic__resource {
  color: #666666;
  text-align: right;
  font-size: 12px;
  line-height: 16px;
  margin-top: 20px;
}

@media screen and (max-width: 1300px) {
  .statistic__card {
    width: 265px;
    height: 265px;
    padding: 18px;
  }
}

@media screen and (max-width: 1200px) {
  .statistic__card {
    width: 235px;
    height: 235px;
    padding: 13px;
  }

  .statistic__numbers {
    font-size: 26px;
    line-height: 30px;
  }

  .statistic__info {
    font-size: 10px;
    line-height: 14px;
  }

  .statistic__resource {
    font-size: 10px;
    line-height: 14px;
  }
}

@media screen and (max-width: 1100px) {
  .statistic__card {
    width: 208px;
    height: 208px;
    padding: 10px;
  }
  .statistics.statistics {
    margin-top: 80px;
  }
}

@media screen and (max-width: 990px) {
  .statistic__card {
  }
  .statistics.statistics {
    margin-top: 80px;
  }
}
</style>
