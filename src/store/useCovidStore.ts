import { defineStore } from 'pinia'
import { getCovidList } from '@/api/sys'

import type { Children, ChinaAdd, ChinaTotal, RootObject } from '@/types'

const useCovidStore = defineStore({
  id: 'covid',
  state: () => ({
    list: <RootObject>{},
    item: <Children[]>[],
    chinaAdd: <ChinaAdd>{},
    chinaTotal: <ChinaTotal>{},
  }),

  actions: {
    /*
     *   获取疫情数据
     * */
    async getCovidList() {
      const res = await getCovidList()
      this.list = res.data
      this.chinaAdd = res.data.diseaseh5Shelf.chinaAdd
      this.chinaTotal = res.data.diseaseh5Shelf.chinaTotal
    },
  },
})

export default useCovidStore
