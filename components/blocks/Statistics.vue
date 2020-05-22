<template>
  <Panel class="statistics">
    <Title>Статистика по онкозаболеваниям</Title>
    <div class="statistics-box">
      <div v-for="card in statisticCard" :key="card.id" class="statistic__card">
        <p class="statistic__info">{{ card.description }}</p>
        <div>
          <!-- здесь должна быть логика, что если есть card.value то выводит первый график, если нет такого значения, то второй -->
          <Graph
            v-if="!card.oldValue"
            :value="card.currentValue"
            :maxValue="card.maxValue"
          />
          <DoubleGraph
            v-if="card.oldValue"
            :firstValue="card.oldValue"
            :secondValue="card.currentValue"
          />
          <p class="statistic__numbers">{{ card.summary }}</p>
          <p class="statistic__resource">{{ card.source }}</p>
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
          description:
            'Каждый 3-й в стране уверен, что рак неизлечим. А это примерно 48 918 000 человек.',
          summary: '1 из 3',
          source: 'Левада-Центр 2018',
          oldValue: null,
          currentValue: 1,
          maxValue: 4,
        },
        {
          id: '1',
          description: '2,6% Россиян имеют онкозаболевания.',
          summary: '3 700 000',
          source: 'Росстат 2018',
          oldValue: null,
          currentValue: 2.6,
          maxValue: 100,
        },
        {
          id: '2',
          description:
            'На 28% выросла доля выявления заболеваний на ранней стадии за 10 лет.',
          summary: '↑28%',
          source: 'МНИОИ Герцена 2018',
          oldValue: 61,
          currentValue: 89,
          maxValue: 100,
        },
        {
          id: '3',
          description:
            'На 25% снизилась смертность в течение первого года после постановки диагноза.',
          summary: '↓25%',
          source: 'МНИОИ Герцена 2018',
          oldValue: 73,
          currentValue: 48,
          maxValue: 100,
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
</style>
