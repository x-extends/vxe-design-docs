export interface NavVO {
  title?: string
  name?: string
  i18nKey?: string
  isAllAPI?: boolean
  isSelfAPI?: boolean
  isExpand?: boolean
  isNew?: boolean
  isUnpublished?: boolean
  isEnterprise?: boolean
  isPlugin?: boolean
  isTemplate?: boolean
  routerLink?: {
    name: string
    params?: Record<string, string | number>
    query?: Record<string, string | number>
  }
  linkUrl?: string
  linkTarget?: '_self' | '_blank'
  linkStatus?: 'warning' | 'success' | 'error'
  isBack?: boolean
  keywords?: string
  children?: NavVO[]
}

export const otherUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/other${process.env.VUE_APP_VXE_VERSION}`
export const tablePluginDocsUrl = `${process.env.VUE_APP_SITE_PLUGIN_URL}/pluginDocs/table${process.env.VUE_APP_VXE_VERSION}`

const designNavConfig: NavVO & { children: NavVO[] } = {
  i18nKey: 'app.aside.menu.designTitle',
  children: [
    {
      i18nKey: 'app.aside.menu.formDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } } }
        // {
        //   i18nKey: 'app.aside.menu.formDesignUse',
        //   children: [
        //     { title: '基础功能', routerLink: { name: 'ComponentFormDesignBase' } },
        //     { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } },
        //     { title: '移动端设计器', routerLink: { name: 'ComponentFormDesignMobile' } },
        //     { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentFormDesignPcAndMobile' } },
        //     { title: '渲染视图', routerLink: { name: 'ComponentFormDesignRenderView' } },
        //     { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` }
        //   ]
        // },
        // {
        //   i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
        //   children: [
        //     { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
        //     {
        //       title: '控件',
        //       children: [
        //         { title: '实现一个单行输入控件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
        //         { title: '实现一个多行输入控件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } }
        //       ]
        //     }
        //   ]
        // }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } }
        // {
        //   i18nKey: 'app.aside.menu.listDesignUse',
        //   children: [
        //     { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
        //     { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
        //     { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
        //     { title: '集成表单设计器', routerLink: { name: 'ComponentListDesignFormAndList' } }
        //   ]
        // }
      ]
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
    // { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
    // { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
  ]
}

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      {
        i18nKey: 'app.aside.menu.fullInsrall',
        isExpand: true,
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartUIInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUIUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUIUseImport' } },
          { i18nKey: 'app.aside.menu.useCDN', routerLink: { name: 'StartUICDN' } },
          { title: '后台管理系统模板', isTemplate: true, linkUrl: 'https://vxeui.com/admin-template/' }
        ]
      },
      {
        i18nKey: 'app.aside.menu.useTableInsrall',
        children: [
          { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartTableInstall' } },
          { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartTableUseGlobal' } },
          { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartTableUseImport' } },
          { i18nKey: 'app.aside.menu.useCDN', routerLink: { name: 'StartTableCDN' } }
        ]
      },
      // {
      //   i18nKey: 'app.aside.menu.useDesignInsrall',
      //   children: [
      //     { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartDesignInstall' } },
      //     { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartDesignUseGlobal' } },
      //     { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartDesignUseImport' } },
      //     { i18nKey: 'app.aside.menu.useCDN', routerLink: { name: 'StartDesignCDN' } },
      //     { title: '使用第三方 UI 库', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` },
      //     { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' }
      //   ]
      // },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  {
    i18nKey: 'app.aside.menu.tools',
    children: [
      { i18nKey: 'app.aside.menu.clipboard', routerLink: { name: 'ToolClipboard' } },
      { i18nKey: 'app.aside.menu.functions', linkUrl: 'https://vxeui.com/xe-utils/' }
    ]
  },
  ...designNavConfig.children,
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
