interface registerType {
  account: string
  username: string
  password: string
  type: number
}

interface loginType {
  account: string
  password: string
  type: number
}

interface userInfoType {
  avatar: string
  email: string
  id: number
  username: string
}

interface geoMapType {
  province: string
  position: [number, number]
}

interface ChinaTotal {
  heal: number
  nowSevere: number
  dead: number
  localConfirm: number
  confirm: number
  nowConfirm: number
  suspect: number
  noInfect: number
  noInfectH5: number
  importedCase: number
  showLocalConfirm: number
  showlocalinfeciton: number
  localConfirmH5: number
  local_acc_confirm: number
}

interface ChinaAdd {
  noInfectH5: number
  localConfirmH5: number
  confirm: number
  dead: number
  suspect: number
  noInfect: number
  localConfirm: number
  heal: number
  nowConfirm: number
  nowSevere: number
  importedCase: number
}

interface ShowAddSwitch {
  suspect: boolean
  heal: boolean
  noInfect: boolean
  localConfirm: boolean
  all: boolean
  dead: boolean
  nowConfirm: boolean
  nowSevere: boolean
  importedCase: boolean
  localinfeciton: boolean
  confirm: boolean
}

interface Today {
  confirm: number
  confirmCuts: number
  isUpdated: boolean
  tip: string
  wzz_add: number
}

interface Total {
  confirm: number
  dead: number
  showRate: boolean
  heal: number
  showHeal: boolean
  wzz: number
  provinceLocalConfirm: number
  nowConfirm: number
}

interface Children {
  name: string
  today: Today
  total: Total
  children: Children[]
}

interface AreaTree {
  name: string
  today: Today
  total: Total
  children: Children[]
}

interface Diseaseh5Shelf {
  lastUpdateTime: string
  chinaTotal: ChinaTotal
  chinaAdd: ChinaAdd
  isShowAdd: boolean
  showAddSwitch: ShowAddSwitch
  areaTree: AreaTree[]
}

interface StatisGradeCityDetail {
  confirmAdd: number
  confirm: number
  grade: string
  syear: number
  province: string
  city: string
  nowConfirm: number
  dead: number
  heal: number
  date: string
  sdate: string
}

interface RootObject {
  diseaseh5Shelf: Diseaseh5Shelf
  statisGradeCityDetail: StatisGradeCityDetail[]
}

interface mapDataType {
  name: string
  value: number[] | undefined
  children: Children[]
}

interface pieDataType {
  name: string
  value: number
}

interface lineDataType {
  name: string
  value: number
}

export {
  registerType,
  loginType,
  userInfoType,
  mapDataType,
  geoMapType,
  pieDataType,
  lineDataType,
  ChinaTotal,
  ChinaAdd,
  ShowAddSwitch,
  Today,
  Total,
  Children,
  AreaTree,
  Diseaseh5Shelf,
  StatisGradeCityDetail,
  RootObject,
}
