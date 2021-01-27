import { mount } from '@vue/test-utils'
import MavonEditor from '@/mavon-editor.vue'
import autoTextarea from 'auto-textarea/auto-textarea.vue'

/*eslint-disable */
// 解决Error: Not implemented: window.alert
jest.spyOn(window, 'alert').mockReturnValue();
const factory = (propsData, mocks) => {
  return mount(MavonEditor, {
    propsData: {
      ...propsData
    },
    mocks: {
      ...mocks
    },
    stubs: {
      "v-autoTextarea": autoTextarea
    }
  })
}
//language
describe('测试语言切换', () => {
  it('initLanguage', async () => {
    let wrapper = new factory({ d_words: null })
    //默认语言为zh-CN
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('导航目录')
    //切换语言为en
    await wrapper.setProps({ language: 'en' })
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('Navigation')
    //切换语言为ja
    await wrapper.setProps({ language: 'ja' })
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('ナビゲーション')
  })
})
//value
describe('初始值', () => {
  it('value is string', () => {
    let wrapper = new factory({ value: "hello" })
    expect(wrapper.vm.d_value).toEqual("hello")
  })
  it('value is null', () => {
    let wrapper = new factory({ value: null })
    expect(wrapper.vm.d_value).toEqual("")
  })
})

//fontSize
describe('fontSize,编辑区字体大小', () => {
  it('编辑区域文字大小默认14px', async () => {
    let wrapper = new factory()
    let elA = wrapper.find('.auto-textarea-wrapper.content-input')
    let elB = wrapper.find('.auto-textarea-block')
    let elC = wrapper.find('.auto-textarea-input.no-border.no-resize')
    //默认fontSize为14px
    expect(wrapper.props('fontSize')).toBe('14px')
    expect(elA.attributes().style).toContain('font-size: 14px;')
    expect(elB.attributes().style).toContain('font-size: 14px;')
    expect(elC.attributes().style).toContain('font-size: 14px;')
  })
  it('编辑区域文字大小切换', async () => {
    let wrapper = new factory({ fontSize: '10px' })
    let elA = wrapper.find('.auto-textarea-wrapper.content-input')
    let elB = wrapper.find('.auto-textarea-block')
    let elC = wrapper.find('.auto-textarea-input.no-border.no-resize')
    //props传入fontSize为10px
    expect(wrapper.props('fontSize')).toBe('10px')
    //断言编辑区样式fontSize为10px
    expect(elA.attributes().style).toContain('font-size: 10px;')
    expect(elB.attributes().style).toContain('font-size: 10px;')
    expect(elC.attributes().style).toContain('font-size: 10px;')
    //修改fontSize为20px
    await wrapper.setProps({ fontSize: '20px' })
    //断言编辑区样式fontSize为20px
    expect(elA.attributes().style).toContain('font-size: 20px;')
    expect(elB.attributes().style).toContain('font-size: 20px;')
    expect(elC.attributes().style).toContain('font-size: 20px;')
  })
})
describe('scrollStyle,开启滚动条样式', () => {
  it('默认渲染滚动条样式', async () => {
    let wrapper = new factory()
    console.log(wrapper.props('scrollStyle'))
    expect(wrapper.props('scrollStyle')).toBe(true)
    expect(wrapper.vm.s_scrollStyle).toBe(true)
  })
  it('取消渲染滚动条样式', () => {
    let wrapper = new factory({ scrollStyle: false })
    console.log(wrapper.props('scrollStyle'))
    expect(wrapper.props('scrollStyle')).toBe(false)
    expect(wrapper.vm.s_scrollStyle).toBe(false)
  })
})

describe('toolbarsBackground,工具栏背景颜色', () => {
  it('工具栏背景颜色', async () => {
    let wrapper = new factory()
    //默认工具栏背景色为#ffffff
    expect(wrapper.props('toolbarsBackground')).toBe('#ffffff')
    expect(wrapper.find('.v-note-op').attributes().style).toContain('background: rgb(255, 255, 255);')
    //修改工具栏背景色为#000000
    await wrapper.setProps({ toolbarsBackground: '#000000' })
    expect(wrapper.find('.v-note-op').attributes().style).toContain('background: rgb(0, 0, 0);')
  })
})

describe('previewBackground，预览框背景颜色', () => {
  it('预览框背景颜色', async () => {
    let wrapper = new factory()
    let elA = wrapper.find('.v-show-content.scroll-style.scroll-style-border-radius')
    let elB = wrapper.find('.v-show-content-html.scroll-style.scroll-style-border-radius')
    //默认预览框背景颜色
    expect(wrapper.props('previewBackground')).toBe('#fbfbfb')
    expect(elA.attributes().style).toContain('background-color: rgb(251, 251, 251);')
    expect(elB.attributes().style).toContain('background-color: rgb(251, 251, 251);')
    //调整预览框背景颜色
    await wrapper.setProps({ previewBackground: '#000000' })
    expect(elA.attributes().style).toContain('background-color: rgb(0, 0, 0);')
    expect(elB.attributes().style).toContain('background-color: rgb(0, 0, 0);')
  })
})
describe('subfield，分屏切换', () => {
  //subfield，true：双栏(编辑预览同屏)，false：单栏(编辑预览分屏)
  it('编辑预览分屏默认值', async () => {
    let wrapper = new factory()
    let elB = wrapper.find('.v-note-edit.divarea-wrapper.scroll-style.transition')
    expect(wrapper.props('subfield')).toBe(true)
    expect(wrapper.vm.s_subfield).toBe(true)
    expect(wrapper.vm.s_preview_switch).toBe(true)
    //双栏(编辑预览同屏)
    expect(elB.exists()).toBe(true)
  })
  it('单双屏切换', async () => {
    let wrapper = new factory({ subfield: false })
    let elA = wrapper.find('.v-note-edit.divarea-wrapper.scroll-style.scroll-style-border-radius.single-edit.transition')
    let elB = wrapper.find('.v-note-edit.divarea-wrapper.scroll-style.transition')
    expect(wrapper.props('subfield')).toBe(false)
    expect(wrapper.vm.s_subfield).toBe(false)
    expect(wrapper.vm.s_preview_switch).toBe(false)
    //单栏(编辑)
    expect(elA.exists()).toBe(true)
    await wrapper.setProps({ subfield: true })
    expect(wrapper.vm.s_subfield).toBe(true)
    expect(wrapper.vm.s_preview_switch).toBe(false)
    //双栏(编辑预览同屏)
    expect(elB.exists()).toBe(true)
  })
})
describe('defaultOpen，控制编辑区与预览区显示', () => {
  //defaultOpen,edit： 默认展示编辑区域 ， preview： 默认展示预览区域 , 其他 = edit
  it('默认展示编辑区域', async () => {
    let wrapper = new factory({ subfield: false })
    let elA = wrapper.find('.v-note-edit.divarea-wrapper.scroll-style.scroll-style-border-radius.single-edit.transition')
    expect(wrapper.props('defaultOpen')).toBe(null)
    expect(wrapper.vm.s_subfield).toBe(false)
    //单栏(编辑)，默认展示编辑区域
    expect(elA.exists()).toBe(true)
  })
  it('切换展示编辑区域', async () => {
    let wrapper = new factory({ subfield: false,  defaultOpen: "edit"})
    expect(wrapper.props('defaultOpen')).toBe('edit')
    expect(wrapper.vm.s_subfield).toBe(false)
    //单栏(编辑)，默认展示编辑区域
    let elA = wrapper.find('.v-note-edit.divarea-wrapper.scroll-style.scroll-style-border-radius.single-edit.transition')
    expect(elA.exists()).toBe(true)

    await wrapper.setProps({ defaultOpen: 'preview' })
    expect(wrapper.vm.s_subfield).toBe(false)
    //单栏(预览)，preview： 默认展示预览区域
    let elB = wrapper.find('.v-note-edit.divarea-wrapper.scroll-style.single-show.transition')
    expect(elB.exists()).toBe(true)

    await wrapper.setProps({ defaultOpen: 'edit' })
    expect(wrapper.vm.s_subfield).toBe(false)
    //单栏(编辑)，非preview = edit
    expect(elA.exists()).toBe(true)
  })
})
describe('editable，是否允许编辑', () => {
  it('editable', async () => {
    let wrapper = new factory()
    let elA = wrapper.find('.auto-textarea-input.no-border.no-resize')
    //默认可编辑
    expect(wrapper.props('editable')).toBe(true)
    expect(elA.attributes().disabled).toBe(undefined)
    //切换不可编辑
    await wrapper.setProps({ editable: false })
    expect(elA.attributes().disabled).toBe('disabled')
    //切回可编辑
    await wrapper.setProps({ editable: true })
    expect(elA.attributes().disabled).toBe(undefined)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
describe('codeStyle，切换代码风格样式', () => {
  //codeStyle,markdown样式： 默认github, 可选配色方案
  it('样式默认加载cdn', async () => {
    let origin_src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/github.min.css'
    let new_src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/vs2015.min.css'
    let wrapper = new factory()
    let check = document.querySelectorAll("link#" + "md-code-style")
    //codestyle默认是github
    expect(check[0].href).toEqual(origin_src)
    await wrapper.setProps({ codeStyle: 'vs2015' })
    //codestyle改为vs2015
    expect(check[0].href).toEqual(new_src)
    await wrapper.setProps({ codeStyle: 'github' })
    //codestyle改回github
    expect(check[0].href).toEqual(origin_src)
    expect(wrapper.html()).toMatchSnapshot()
  })
  //externalLink，样式接管,本地加载
  it('样式本地加载', async () => {
    let origin_src = 'http://localhost/lib/core/hightlightjs/stylesgithub.min.css'
    let new_src = 'http://localhost/lib/core/hightlightjs/stylesvs2015.min.css'
    let externalLink = {
      hljs_css: function (css) {
        // 这是你的代码高亮配色文件路径
        return '../../lib/core/hightlightjs/styles' + css + '.min.css';
      }
    }

    let wrapper = new factory({ externalLink: externalLink })
    //加载本地的样式
    expect(wrapper.vm.p_external_link.hljs_css).toEqual(externalLink.hljs_css)
    let check = document.querySelectorAll("link#" + "md-code-style")
    //codestyle默认是github
    expect(check[0].href).toEqual(origin_src)
    await wrapper.setProps({ codeStyle: 'vs2015' })
    //codestyle改为vs2015
    expect(check[0].href).toEqual(new_src)
    await wrapper.setProps({ codeStyle: 'github' })
    //codestyle改回github
    expect(check[0].href).toEqual(origin_src)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
