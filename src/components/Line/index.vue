<script setup lang="ts">
  import { lineDataType } from '@/types'
  import * as echarts from 'echarts'
  import { onMounted, onBeforeUnmount, onUpdated } from 'vue'
  const props = defineProps<{
    lineData: lineDataType[]
  }>()
  let charts: echarts.ECharts
  const initLine = () => {
    if (charts != null && charts != undefined) {
      charts.dispose()
    }
    charts = echarts.init(document.querySelector('#line') as HTMLElement)
    charts.setOption({
      backgroundColor: 'rgba(34,54,81,0.66)',
      xAxis: {
        type: 'category',
        data: [],
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
      },
      yAxis: {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: '#fff',
          },
        },
      },
      label: {
        color: '#fff',
        show: true,
      },
      series: [
        {
          data: [],
          type: 'line',
          smooth: true,
        },
      ],
    })
    window.addEventListener('resize', function () {
      charts.resize()
    })
  }
  const setLine = (data: lineDataType[]) => {
    charts.setOption({
      xAxis: {
        data: props.lineData.map((item) => item.name),
      },
      series: [
        {
          name: 'PieForm',
          data: props.lineData.map((item) => item.value),
        },
      ],
    })
  }
  onUpdated(() => {
    setLine(props.lineData)
  })
  onMounted(() => {
    initLine()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', function () {
      charts.resize()
    })
  })
</script>
<template>
  <div id="line"></div>
</template>

<style scoped lang="scss">
  #line {
    height: 100%;
    width: 100%;
  }
</style>
