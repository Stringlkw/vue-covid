<script setup lang="ts">
  import * as echarts from 'echarts'
  import { onBeforeUnmount, onMounted, onUpdated, ref } from 'vue'

  import '@/assets/js/China'
  import '@/assets/js/geoMap'
  import { geoCoordMap } from '@/assets/js/geoMap'
  import { mapDataType } from '@/types'
  import useCovidStore from '@/store/useCovidStore'
  const props = defineProps<{
    mapData: mapDataType[]
  }>()

  const covidStore = useCovidStore()
  let charts: echarts.ECharts
  const setCharts = (data: mapDataType[]) => {
    charts.setOption({
      series: [
        {
          name: '地图',
          data: data,
        },
        {
          name: '确诊人数',
          data: data,
        },
      ],
    })
  }
  const initCharts = () => {
    if (charts != null && charts != undefined) {
      charts.dispose()
    }
    charts = echarts.init(document.querySelector('#china') as HTMLElement)
    charts.setOption({
      geo: {
        map: 'china',
        aspectScale: 0.8,
        layoutCenter: ['50%', '50%'],
        layoutSize: '100%',
        itemStyle: {
          areaColor: {
            type: 'linear-gradient',
            x: 0,
            y: 1200,
            x2: 1000,
            y2: 0,
            colorStops: [
              {
                offset: 0,
                color: '#152E6E', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#0673AD', // 50% 处的颜色
              },
            ],
            global: true, // 缺省为 false
          },
          shadowColor: '#0f5d9d',
          shadowOffsetX: 0,
          shadowOffsetY: 15,
          opacity: 0.5,
        },
        emphasis: {
          areaColor: '#0f5d9d',
        },
        regions: [
          {
            name: '南海诸岛',
            itemStyle: {
              areaColor: 'rgba(0, 10, 52, 1)',
              borderColor: 'rgba(0, 10, 52, 1)',
              opacity: 0,
              label: {
                show: false,
                color: '#009cc9',
              },
            },
            label: {
              show: false,
              color: '#FFFFFF',
              fontSize: 12,
            },
          },
        ],
      },
      series: [
        {
          name: '地图',
          type: 'map',
          map: 'china',
          aspectScale: 0.8,
          layoutCenter: ['50%', '50%'], //地图位置
          layoutSize: '100%',
          label: {
            show: true,
            color: '#fff',
            fontSize: 12,
          },
          itemStyle: {
            areaColor: '#1c3653',
            borderColor: '#1cccff',
            borderWidth: 1.0,
          },
          emphasis: {
            areaColor: '#56b1da',
            label: {
              show: true,
              color: '#fff',
            },
          },
          data: [],
        },
        {
          name: '确诊人数',
          type: 'scatter',
          coordinateSystem: 'geo',
          symbol: 'pin',
          symbolSize: [40, 40],
          label: {
            show: true,
            color: '#fff',
            formatter(value: any) {
              return value.data.value[2]
            },
          },
          itemStyle: {
            color: '#1E90FF', //标志颜色
          },
          data: [],
        },
      ],
    })
    charts.on('click', (e: any) => {
      covidStore.item = e.data.children
    })
    window.onresize = () => {
      charts.resize()
    }
  }
  onUpdated(() => {
    setCharts(props.mapData)
  })
  onMounted(() => {
    initCharts()
  })
  onBeforeUnmount(() => {
    window.removeEventListener('resize', function () {
      charts.resize()
    })
  })
</script>
<template>
  <div id="china"></div>
</template>

<style scoped lang="scss">
  #china {
    height: 100%;
    width: 100%;
  }
</style>
