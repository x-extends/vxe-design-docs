import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import './styles/index.scss'

import PreCode from './components/PreCode.vue'
import CodeLight from './components/CodeLight.vue'
import CodeList from './components/CodeList.vue'
import CodeRender from './components/CodeRender.vue'
import CodeUseVersion from './components/CodeUseVersion.vue'
import ApiLink from './components/ApiLink.vue'

import axios from 'axios'
import XEUtils from 'xe-utils'

import VxeUIAll, { VxeUI } from 'vxe-pc-ui'
import 'vxe-pc-ui/es/style.css'

import VxeUITable from 'vxe-table'
import 'vxe-table/es/style.css'

import VxeUIDesign from 'vxe-design'
import 'vxe-design/lib/style.css'

import enUS from 'vxe-pc-ui/es/language/en-US'

import '@/views/global/formats/form/base/demo1.form.formats'
import '@/views/global/formats/table/base/demo1.table.formats'

import '@/views/global/commands/date-picker/base/demo1.date-picker.commands'
import '@/views/global/commands/date-range-picker/base/demo1.date-range-picker.commands'
import '@/views/global/commands/table/base/demo1.table.commands'

import '@/views/global/menus/table/base/demo1.table.menus'

import '@/views/global/validators/form/base/demo1.form.validators'
import '@/views/global/validators/table/base/demo1.table.validators'

import '@/views/global/renderer/table/default/myCellLink/demo1.table.renderer'
import '@/views/global/renderer/table/default/myCellImg/demo1.table.renderer'
import '@/views/global/renderer/table/default/myCellAmount/demo1.table.renderer'
import '@/views/global/renderer/table/default/myHeaderLink/demo1.table.renderer'
import '@/views/global/renderer/table/default/myFooterAmount/demo1.table.renderer'
import '@/views/global/renderer/table/default/myFullAmount/demo1.table.renderer'

import '@/views/global/renderer/table/edit/myEditAmount/demo1.table.renderer'
import '@/views/global/renderer/table/edit/myEditPulldown/demo1.table.renderer'

import '@/views/global/renderer/table/expand/myExpandList/demo1.table.renderer'
import '@/views/global/renderer/table/expand/myExpandTable/demo1.table.renderer'

import '@/views/global/renderer/table/toolbar/button/demo1.table.renderer'
import '@/views/global/renderer/table/toolbar/tool/demo1.table.renderer'

import '@/views/global/renderer/table/filter/myFilterInput/demo1.table.renderer'
import '@/views/global/renderer/table/filter/myFilterComplex/demo1.table.renderer'
import '@/views/global/renderer/table/filter/myFilterContent/demo1.table.renderer'

import '@/views/global/renderer/table/empty/myEmptyImg/demo1.table.renderer'
import '@/views/global/renderer/table/empty/myEmptyText/demo1.table.renderer'

import '@/views/global/renderer/form/item/myItemAmount/demo1.form.renderer'
import '@/views/global/renderer/form/item/myItemUpload/demo1.form.renderer'

import '@/views/global/renderer/form-design/widget/myInputWidget/demo1.form-design.renderer'
import '@/views/global/renderer/form-design/widget/myTextareaWidget/demo1.form-design.renderer'

declare global {
  interface Window {
    XEUtils: typeof XEUtils;
    hljs: any
  }
}

window.XEUtils = XEUtils

axios.defaults.baseURL = process.env.VUE_APP_SERVE_API_URL

VxeUI.setI18n('en-US', enUS)

const app = createApp(App)

app.component('PreCode', PreCode)
app.component('CodeLight', CodeLight)
app.component('CodeList', CodeList)
app.component('CodeRender', CodeRender)
app.component('CodeUseVersion', CodeUseVersion)
app.component('ApiLink', ApiLink)

app.use(VxeUIAll)
app.use(VxeUITable)
app.use(VxeUIDesign)

app.use(store)
app.use(router)
app.use(i18n)

app.config.globalProperties.$t = i18n.global.t

axios.get(`${process.env.VUE_APP_SITE_BASE_URL}/i18n/${i18n.global.locale}.json?v=${process.env.VUE_APP_DATE_NOW}`).then(res => {
  i18n.global.setLocaleMessage(i18n.global.locale, res.data)
}).catch(e => e).then(() => {
  app.mount('#app')
})
