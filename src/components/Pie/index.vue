<script setup lang="ts">
  import * as echarts from 'echarts'
  import { onMounted } from 'vue'

  const initPie = () => {
    const charts = echarts.init(document.querySelector('#pie') as HTMLElement)
    charts.setOption({
      backgroundColor: 'rgba(34,54,81,0.66)',
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          itemStyle: {
            borderRadius: 4,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            show: true,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '15',
            },
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' },
          ],
        },
      ],
    })
    window.onresize = () => {
      charts.resize()
    }
  }
  onMounted(() => {
    initPie()
  })
</script>
<template>
  <div id="pie"></div>
</template>

<style scoped lang="scss">
  #pie {
    height: 100%;
  }
</style>
