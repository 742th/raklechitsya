<template>
  <div class="statistics-box">
    <div v-for="card in statisticCard" :key="card.id" class="statistic__card">
      <p class="statistic__info">{{ card.info }}</p>
      <div>
        <Graph :value="card.value" :maxValue="card.maxValue" />
        <p class="statistic__numbers">{{ card.numbers }}</p>
        <p class="statistic__resource">{{ card.resourse }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Graph from '@/components/UI/Graph';

export default {
  components: {
    Graph,
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
        },
        {
          id: '3',
          info:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          numbers: '↓25%',
          resourse: 'МНИОИ Герцена 2018',
        },
      ],
    };
  },
};
</script>

<style>
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
</style>
