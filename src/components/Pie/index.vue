<script setup lang="ts">
  import { pieDataType } from '@/types'
  import * as echarts from 'echarts'
  import { onMounted, onBeforeUnmount, onUpdated } from 'vue'
  const props = defineProps<{
    pieData: pieDataType[]
  }>()
  let charts: echarts.ECharts
  const initPie = () => {
    if (charts != null && charts != undefined) {
      charts.dispose()
    }
    charts = echarts.init(document.querySelector('#pie') as HTMLElement)
    charts.setOption({
      backgroundColor: 'rgba(34,54,81,0.66)',
      tooltip: {
        trigger: 'item',
      },
      series: [
        {
          name: 'PieForm',
          type: 'pie',
          radius: ['40%', '70%'],
          itemStyle: {
            borderRadius: 4,
            borderColor: '#fff',
            borderWidth: 2,
          },
          label: {
            color: '#fff',
            show: true,
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '15',
            },
          },
          data: [],
        },
      ],
    })
    window.addEventListener('resize', function () {
      charts.resize()
    })
  }
  const setPie = (data: pieDataType[]) => {
    charts.setOption({
      series: [
        {
          name: 'PieForm',
          data: data,
        },
      ],
    })
  }
  onUpdated(() => {
    setPie(props.pieData)
  })
  onMounted(() => {
    initPie()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', function () {
      charts.resize()
    })
  })
</script>
<template>
  <div id="pie"></div>
</template>

<style scoped lang="scss">
  #pie {
    height: 100%;
    width: 100%;
  }
</style>
