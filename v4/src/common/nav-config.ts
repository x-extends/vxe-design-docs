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
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'form-design' } } },
        {
          i18nKey: 'app.aside.menu.formDesignUse',
          children: [
            {
              title: '基础配置',
              children: [
                { title: '内置控件配置', routerLink: { name: 'ComponentFormDesignBase' } },
                { title: '自定义控件分组', routerLink: { name: 'ComponentFormDesignCustomGroup' } }
              ]
            },
            {
              title: '多端配置',
              children: [
                { title: '仅移动端', routerLink: { name: 'ComponentFormDesignMobile' } },
                { title: '同时配置 PC 端和移动端', routerLink: { name: 'ComponentFormDesignPcAndMobile' } }
              ]
            },
            {
              title: '视图转换',
              children: [
                { title: '生成表单视图', routerLink: { name: 'ComponentFormDesignRenderView' } }
              ]
            },
            {
              title: '自定义插槽模板',
              children: [
                { title: '自定义标题模板', routerLink: { name: 'ComponentFormDesignTemplateTitle' } },
                { title: '自定义标题前缀模板', routerLink: { name: 'ComponentFormDesignTemplateTitlePrefix' } },
                { title: '自定义标题后缀模板', routerLink: { name: 'ComponentFormDesignTemplateTitleSuffix' } },
                { title: '自定义头部模板', routerLink: { name: 'ComponentFormDesignTemplateHeader' } }
              ]
            },
            { title: '集成第三方扩展插件', isPlugin: true, linkUrl: `${otherUrl}/#/plugin-render-element/form-design/renderView` }
          ]
        },
        {
          title: '设计器模板',
          children: [
            { title: '可视化设计器模板', isTemplate: true, linkUrl: 'https://vxeui.com/design-template/' },
            { title: '零代码平台模板', isEnterprise: true, linkUrl: 'https://vxeui.com/zero-code/' }
          ]
        },
        {
          i18nKey: 'app.aside.menu.formDesignGlobalRenderer',
          children: [
            { title: 'API', routerLink: { name: 'GlobalRendererFormDesignAPI' } },
            {
              title: '创建控件',
              children: [
                { title: '单行输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyInputWidget' } },
                { title: '多行输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyTextareaWidget' } },
                { title: '下拉框', routerLink: { name: 'GlobalRendererFormDesignWidgetMySelectWidget' } },
                { title: '日期选择', routerLink: { name: 'GlobalRendererFormDesignWidgetMyDatePickerWidget' } },
                { title: '数值输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyNumberInputWidget' } },
                { title: '金额输入', routerLink: { name: 'GlobalRendererFormDesignWidgetMyAmountInputWidget' } },
                { title: '上传附件', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadFileWidget' } },
                { title: '上传图片', routerLink: { name: 'GlobalRendererFormDesignWidgetMyUploadImageWidget' } }
              ]
            }
          ]
        }
      ]
    },
    {
      i18nKey: 'app.aside.menu.listDesignTitle',
      children: [
        { title: 'API', isSelfAPI: true, routerLink: { name: 'DocsApi', params: { name: 'list-design' } } },
        {
          i18nKey: 'app.aside.menu.listDesignUse',
          children: [
            { title: '基础功能', routerLink: { name: 'ComponentListDesignBase' } },
            { title: '移动端设计器', routerLink: { name: 'ComponentListDesignMobile' } },
            { title: 'PC 端和移动端设计器', routerLink: { name: 'ComponentListDesignPcAndMobile' } },
            { title: '集成表单设计器', routerLink: { name: 'ComponentListDesignFormAndList' } }
          ]
        }
      ]
    }
    // { title: 'FlowDesign 流程设计器' },
    // { title: 'PrintDesign 打印设计器' },
  ]
}

export const navConfigList: NavVO[] = [
  {
    i18nKey: 'app.aside.menu.guide',
    isExpand: true,
    children: [
      { i18nKey: 'app.aside.menu.globalInstall', routerLink: { name: 'StartInstall' } },
      { i18nKey: 'app.aside.menu.lazyUseGlobal', routerLink: { name: 'StartUseGlobal' } },
      { i18nKey: 'app.aside.menu.lazyUseImport', routerLink: { name: 'StartUseImport' } },
      { i18nKey: 'app.aside.menu.useCDN', routerLink: { name: 'StartCDN' } },
      { i18nKey: 'app.aside.menu.globalConfig', routerLink: { name: 'StartConfig' } },
      { i18nKey: 'app.aside.menu.globalTheme', routerLink: { name: 'StartTheme' } },
      { i18nKey: 'app.aside.menu.globalIcon', routerLink: { name: 'StartIcons' } },
      { i18nKey: 'app.aside.menu.globalZIndex', routerLink: { name: 'StartUseZIndex' } },
      { i18nKey: 'app.aside.menu.i18n', routerLink: { name: 'StartI18n' } },
      { i18nKey: 'app.aside.menu.globalPermission', routerLink: { name: 'StartPermission' } }
    ]
  },
  ...designNavConfig.children,
  {
    title: 'API',
    isExpand: true,
    children: []
  }
]
