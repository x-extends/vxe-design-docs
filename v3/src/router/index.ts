import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import RouteLayout from '@/components/RouteLayout.vue'
import PageLayout from '@/components/PageLayout.vue'

import StartInstall from '@/views/start/install/CodeExample.vue'
import FreeDonation from '@/views/start/FreeDonation.vue'
import JoinSponsor from '@/views/start/JoinSponsor.vue'
import EnterprisePreview from '@/views/start/EnterprisePreview.vue'

Vue.use(VueRouter)

const formDesignRouteConfig: RouteConfig = {
  path: 'form-design',
  component: RouteLayout,
  children: [
    // {
    //   path: 'base',
    //   name: 'ComponentFormDesignBase',
    //   component: () => import('@/views/form-design/base/CodeExample.vue')
    // },
    // {
    //   path: 'customGroup',
    //   name: 'ComponentFormDesignCustomGroup',
    //   component: () => import('@/views/form-design/customGroup/CodeExample.vue')
    // },
    // {
    //   path: 'mobile',
    //   name: 'ComponentFormDesignMobile',
    //   component: () => import('@/views/form-design/mobile/CodeExample.vue')
    // },
    // {
    //   path: 'pcAndMobile',
    //   name: 'ComponentFormDesignPcAndMobile',
    //   component: () => import('@/views/form-design/pcAndMobile/CodeExample.vue')
    // },
    // {
    //   path: 'renderView',
    //   name: 'ComponentFormDesignRenderView',
    //   component: () => import('@/views/form-design/renderView/CodeExample.vue')
    // }
  ]
}

const listDesignRouteConfig: RouteConfig = {
  path: 'list-design',
  component: RouteLayout,
  children: [
    // {
    //   path: 'base',
    //   name: 'ComponentListDesignBase',
    //   component: () => import('@/views/list-design/base/CodeExample.vue')
    // },
    // {
    //   path: 'mobile',
    //   name: 'ComponentListDesignMobile',
    //   component: () => import('@/views/list-design/mobile/CodeExample.vue')
    // },
    // {
    //   path: 'pcAndMobile',
    //   name: 'ComponentListDesignPcAndMobile',
    //   component: () => import('@/views/list-design/pcAndMobile/CodeExample.vue')
    // },
    // {
    //   path: 'formAndList',
    //   name: 'ComponentListDesignFormAndList',
    //   component: () => import('@/views/list-design/formAndList/CodeExample.vue')
    // }
  ]
}

const routes: Array<RouteConfig> = [
  {
    path: '*',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/',
    redirect: {
      name: 'StartInstall'
    }
  },
  {
    path: '/start',
    component: PageLayout,
    children: [
      {
        path: 'install',
        name: 'StartInstall',
        component: StartInstall
      },
      {
        path: 'useGlobal',
        name: 'StartUseGlobal',
        component: () => import('@/views/start/useGlobal/CodeExample.vue')
      },
      {
        path: 'useImport',
        name: 'StartUseImport',
        component: () => import('@/views/start/useImport/CodeExample.vue')
      },
      {
        path: 'cdn',
        name: 'StartCDN',
        component: () => import('@/views/start/cdn/CodeExample.vue')
      },
      {
        path: 'globalConfig',
        name: 'StartConfig',
        component: () => import('@/views/start/config/CodeExample.vue')
      },
      {
        path: 'icons',
        name: 'StartIcons',
        component: () => import('@/views/start/icon/CodeExample.vue')
      },
      {
        path: 'theme',
        name: 'StartTheme',
        component: () => import('@/views/start/theme/CodeExample.vue')
      },
      {
        path: 'i18n',
        name: 'StartI18n',
        component: () => import('@/views/start/i18n/CodeExample.vue')
      },
      {
        path: 'z-index',
        name: 'StartUseZIndex',
        component: () => import('@/views/start/z-index/CodeExample.vue')
      },
      {
        path: 'permission',
        name: 'StartPermission',
        component: () => import('@/views/start/permission/CodeExample.vue')
      },
      {
        path: 'freeDonation',
        name: 'FreeDonation',
        component: FreeDonation
      },
      {
        path: 'joinSponsor',
        name: 'JoinSponsor',
        component: JoinSponsor
      }
    ]
  },
  {
    path: '/enterprise',
    component: PageLayout,
    children: [
      {
        path: 'preview/:previewCode',
        name: 'EnterprisePreview',
        component: EnterprisePreview
      }
    ]
  },
  {
    path: '/global',
    component: PageLayout,
    children: [
      {
        path: 'formats',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              { path: 'api', name: 'GlobalFormatsFormAPI', component: () => import('@/views/global/formats/form/api/CodeExample.vue') },
              { path: 'base', name: 'GlobalFormatsFormBase', component: () => import('@/views/global/formats/form/base/CodeExample.vue') }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              { path: 'api', name: 'GlobalFormatsTableAPI', component: () => import('@/views/global/formats/table/api/CodeExample.vue') },
              { path: 'base', name: 'GlobalFormatsTableBase', component: () => import('@/views/global/formats/table/base/CodeExample.vue') }
            ]
          }
        ]
      },
      {
        path: 'menus',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalMenusTableAPI',
                component: () => import('@/views/global/menus/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalMenusTableBase',
                component: () => import('@/views/global/menus/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'commands',
        component: RouteLayout,
        children: [
          {
            path: 'date-picker',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsDatePickerAPI',
                component: () => import('@/views/global/commands/date-picker/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsDatePickerBase',
                component: () => import('@/views/global/commands/date-picker/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'date-range-picker',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsDateRangePickerAPI',
                component: () => import('@/views/global/commands/date-range-picker/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsDateRangePickerBase',
                component: () => import('@/views/global/commands/date-range-picker/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalCommandsTableAPI',
                component: () => import('@/views/global/commands/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalCommandsTableBase',
                component: () => import('@/views/global/commands/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'validators',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsFormAPI',
                component: () => import('@/views/global/validators/form/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsFormBase',
                component: () => import('@/views/global/validators/form/base/CodeExample.vue')
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalValidatorsTableAPI',
                component: () => import('@/views/global/validators/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalValidatorsTableBase',
                component: () => import('@/views/global/validators/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'interceptor',
        component: RouteLayout,
        children: [
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalInterceptorTableAPI',
                component: () => import('@/views/global/interceptor/table/api/CodeExample.vue')
              },
              {
                path: 'base',
                name: 'GlobalInterceptorTableBase',
                component: () => import('@/views/global/interceptor/table/base/CodeExample.vue')
              }
            ]
          }
        ]
      },
      {
        path: 'renderer',
        component: RouteLayout,
        children: [
          {
            path: 'form',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormAPI',
                component: () => import('@/views/global/renderer/form/api/CodeExample.vue')
              },
              {
                path: 'item',
                component: RouteLayout,
                children: [
                  {
                    path: 'myItemAmount',
                    name: 'GlobalRendererFormItemMyItemAmount',
                    component: () => import('@/views/global/renderer/form/item/myItemAmount/CodeExample.vue')
                  },
                  {
                    path: 'myItemUpload',
                    name: 'GlobalRendererFormItemMyItemUpload',
                    component: () => import('@/views/global/renderer/form/item/myItemUpload/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'table',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererTableAPI',
                component: () => import('@/views/global/renderer/table/api/CodeExample.vue')
              },
              {
                path: 'default',
                component: RouteLayout,
                children: [
                  {
                    path: 'myCellLink',
                    name: 'GlobalRendererTableDefaultMyLink',
                    component: () => import('@/views/global/renderer/table/default/myCellLink/CodeExample.vue')
                  },
                  {
                    path: 'myCellImg',
                    name: 'GlobalRendererTableDefaultMyImg',
                    component: () => import('@/views/global/renderer/table/default/myCellImg/CodeExample.vue')
                  },
                  {
                    path: 'myCellAmount',
                    name: 'GlobalRendererTableDefaultMyAmount',
                    component: () => import('@/views/global/renderer/table/default/myCellAmount/CodeExample.vue')
                  },
                  {
                    path: 'myHeaderLink',
                    name: 'GlobalRendererTableDefaultMyHeaderLink',
                    component: () => import('@/views/global/renderer/table/default/myHeaderLink/CodeExample.vue')
                  },
                  {
                    path: 'myFooterAmount',
                    name: 'GlobalRendererTableDefaultMyFooterAmount',
                    component: () => import('@/views/global/renderer/table/default/myFooterAmount/CodeExample.vue')
                  },
                  {
                    path: 'myFullAmount',
                    name: 'GlobalRendererTableDefaultMyFullAmount',
                    component: () => import('@/views/global/renderer/table/default/myFullAmount/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'edit',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEditAmount',
                    name: 'GlobalRendererTableEditMyEditAmount',
                    component: () => import('@/views/global/renderer/table/edit/myEditAmount/CodeExample.vue')
                  },
                  {
                    path: 'myEditPulldown',
                    name: 'GlobalRendererTableEditMyEditPulldown',
                    component: () => import('@/views/global/renderer/table/edit/myEditPulldown/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'expand',
                component: RouteLayout,
                children: [
                  {
                    path: 'myExpandList',
                    name: 'GlobalRendererTableExpandMyExpandList',
                    component: () => import('@/views/global/renderer/table/expand/myExpandList/CodeExample.vue')
                  },
                  {
                    path: 'myExpandTable',
                    name: 'GlobalRendererTableExpandMyExpandTable',
                    component: () => import('@/views/global/renderer/table/expand/myExpandTable/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'toolbar',
                component: RouteLayout,
                children: [
                  {
                    path: 'btn',
                    name: 'GlobalRendererTableToolbarBtn',
                    component: () => import('@/views/global/renderer/table/toolbar/button/CodeExample.vue')
                  },
                  {
                    path: 'tool',
                    name: 'GlobalRendererTableToolbarTool',
                    component: () => import('@/views/global/renderer/table/toolbar/tool/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'filter',
                component: RouteLayout,
                children: [
                  {
                    path: 'myFilterInput',
                    name: 'GlobalRendererTableFilterMyFilterInput',
                    component: () => import('@/views/global/renderer/table/filter/myFilterInput/CodeExample.vue')
                  },
                  {
                    path: 'myFilterComplex',
                    name: 'GlobalRendererTableFilterMyFilterComplex',
                    component: () => import('@/views/global/renderer/table/filter/myFilterComplex/CodeExample.vue')
                  },
                  {
                    path: 'myFilterContent',
                    name: 'GlobalRendererTableFilterMyFilterContent',
                    component: () => import('@/views/global/renderer/table/filter/myFilterContent/CodeExample.vue')
                  }
                ]
              },
              {
                path: 'empty',
                component: RouteLayout,
                children: [
                  {
                    path: 'myEmptyImg',
                    name: 'GlobalRendererTableMyEmptyImg',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyImg/CodeExample.vue')
                  },
                  {
                    path: 'myEmptyText',
                    name: 'GlobalRendererTableMyEmptyText',
                    component: () => import('@/views/global/renderer/table/empty/myEmptyText/CodeExample.vue')
                  }
                ]
              }
            ]
          },
          {
            path: 'form-design',
            component: RouteLayout,
            children: [
              {
                path: 'api',
                name: 'GlobalRendererFormDesignAPI',
                component: () => import('@/views/global/renderer/form-design/api/CodeExample.vue')
              },
              {
                path: 'widget',
                component: RouteLayout,
                children: [
                  {
                    path: 'myInputWidget',
                    name: 'GlobalRendererFormDesignWidgetMyInputWidget',
                    component: () => import('@/views/global/renderer/form-design/widget/myInputWidget/CodeExample.vue')
                  },
                  {
                    path: 'myTextareaWidget',
                    name: 'GlobalRendererFormDesignWidgetMyTextareaWidget',
                    component: () => import('@/views/global/renderer/form-design/widget/myTextareaWidget/CodeExample.vue')
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/cssVar',
    component: PageLayout,
    children: [
      {
        path: 'table',
        component: RouteLayout,
        children: [
          { path: 'fontSize', name: 'CssVarTableFontSize', component: () => import('@/views/vars/table/fontSize/CodeExample.vue') },
          { path: 'fontColor', name: 'CssVarTableFontColor', component: () => import('@/views/vars/table/fontColor/CodeExample.vue') },
          { path: 'border', name: 'CssVarTableBorder', component: () => import('@/views/vars/table/border/CodeExample.vue') },
          { path: 'background', name: 'CssVarTableBackground', component: () => import('@/views/vars/table/background/CodeExample.vue') },
          { path: 'rowColHover', name: 'CssVarTableRowColHover', component: () => import('@/views/vars/table/rowColHover/CodeExample.vue') },
          { path: 'rowColCurrent', name: 'CssVarTableRowColCurrent', component: () => import('@/views/vars/table/rowColCurrent/CodeExample.vue') },
          { path: 'rowHeight', name: 'CssVarTableRowHeight', component: () => import('@/views/vars/table/rowHeight/CodeExample.vue') }
        ]
      }
    ]
  },
  {
    path: '/component',
    component: PageLayout,
    children: [
      formDesignRouteConfig,
      listDesignRouteConfig
    ]
  },
  {
    path: '/',
    component: PageLayout,
    children: [
      {
        path: ':name/api',
        name: 'DocsApi',
        component: () => import('@/views/api/DocsApi.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
