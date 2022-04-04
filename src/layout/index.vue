<script lang="ts" setup>
  import useCovidStore from '@/store/useCovidStore'
  import China from '@/components/China/index.vue'
  import 'animate.css'

  const covidStore = useCovidStore()
</script>
<template>
  <div class="container">
    <div class="container-left">
      <div class="left-card">
        <section>
          <div>较上日+ {{ covidStore.chinaAdd.localConfirmH5 }}</div>
          <div>{{ covidStore.chinaTotal.localConfirm }}</div>
          <div>本土现有确诊</div>
        </section>
        <section>
          <div>较上日+ {{ covidStore.chinaAdd.nowConfirm }}</div>
          <div>{{ covidStore.chinaTotal.nowConfirm }}</div>
          <div>现有确诊</div>
        </section>
        <section>
          <div>较上日+ {{ covidStore.chinaAdd.confirm }}</div>
          <div>{{ covidStore.chinaTotal.confirm }}</div>
          <div>累计确诊</div>
        </section>
        <section>
          <div>较上日+ {{ covidStore.chinaAdd.noInfect }}</div>
          <div>{{ covidStore.chinaTotal.noInfect }}</div>
          <div>无症状感染者</div>
        </section>
        <section>
          <div>较上日+ {{ covidStore.chinaAdd.importedCase }}</div>
          <div>{{ covidStore.chinaTotal.importedCase }}</div>
          <div>境外输入</div>
        </section>
        <section>
          <div>较上日+ {{ covidStore.chinaAdd.dead }}</div>
          <div>{{ covidStore.chinaTotal.dead }}</div>
          <div>累计死亡</div>
        </section>
      </div>
      <div class="left-pie"><Pie></Pie></div>
    </div>
    <div class="container-center"><China></China></div>
    <div class="container-right">
      <table>
        <thead>
          <tr>
            <th>地区</th>
            <th>新增确诊</th>
            <th>累计确诊</th>
            <th>治愈</th>
            <th>死亡</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in covidStore.item" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.today.confirm }}</td>
            <td>{{ item.total.confirm }}</td>
            <td>{{ item.total.heal }}</td>
            <td>{{ item.total.dead }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style scoped lang="scss">
  .container {
    display: flex;
    background-position: center;
    background-size: cover;
    background-image: url(http://127.0.0.1:5000/image/background-3.png);
    height: 100%;

    .container-left {
      flex-basis: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .left-card {
        color: white;
        display: grid;
        grid-template-columns: auto auto auto;
        grid-template-rows: auto auto;

        section {
          background: rgba(34, 54, 81, 0.8);
          border: 1px solid #212028;
          padding: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;

          div:nth-child(2) {
            color: #41b0db;
            padding: 10px 0;
            font-size: 20px;
            font-weight: bold;
          }
        }
      }

      .left-pie {
        height: inherit;
        margin-top: 20px;
      }
    }

    .container-center {
      flex: 1;
    }

    .container-right {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 450px;

      table {
        color: white;
        width: 100%;
        background: rgba(33, 32, 40, 0.66);

        text-align: center;

        tr {
          th {
            padding: 5px;
            white-space: nowrap;
          }

          td {
            padding: 5px 10px;
            width: 100px;
            white-space: nowrap;
          }
        }
      }
    }
  }
</style>
