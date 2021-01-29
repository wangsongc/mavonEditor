import { shallowMount } from '@vue/test-utils'
import MdToolbarRight from '@/components/md-toolbar-right.vue'
import { CONFIG } from '@/lib/config.js'

/*eslint-disable */
const d_words_zh_cn = CONFIG[`words_zh-CN`]

const factory = (propsData) => {
  return shallowMount(MdToolbarRight, {
    propsData: {
      ...propsData
    }
  })
}
const props = {
  s_subfield: true,
  toolbars: {
    'navigation': true,
    'subfield': true,
    'fullscreen': true,
    'readmodel': true,
    'htmlcode': true,
    'help': true,
    'preview': true
  },
  s_preview_switch: true,
  s_fullScreen: true,
  s_html_code: true,
  s_navigation: true,
  d_words: d_words_zh_cn
}

let wrapper
function checkEvent(buttonClass, event) {
  expect(wrapper.find(buttonClass).exists()).toBe(true)
  wrapper.find(buttonClass).trigger('click')
  expect(wrapper.emitted().toolbar_right_click[0]).toEqual([event])
}

describe('通过按钮点击调用$clicks方法，检查emit事件', () => {
  beforeEach(() => {
    wrapper = new factory(props)
  })
  afterEach(() => {
    wrapper.destroy()
  })
  it('点击导航栏触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-bars'
    let event = 'navigation'
    checkEvent(buttonClass, event)

    buttonClass = '.op-icon.fa.fa-mavon-bars.selected'
    checkEvent(buttonClass, event)
  })
  it('点击编辑/预览触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-eye-slash.selected'
    let event = 'preview'
    checkEvent(buttonClass, event)

    buttonClass = '.op-icon.fa.fa-mavon-eye'
    checkEvent(buttonClass, event)
  })

  it('点击全屏编辑触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-arrows-alt'
    let event = 'fullscreen'
    checkEvent(buttonClass, event)

    buttonClass = '.op-icon.fa.fa-mavon-compress.selected'
    checkEvent(buttonClass, event)
  })

  it('点击沉浸式阅读触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-window-maximize'
    let event = 'read'
    checkEvent(buttonClass, event)
  })

  it('点击单双栏触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-bars'
    let event = 'navigation'
    checkEvent(buttonClass, event)
  })

  it('点击查看文本触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-code'
    let event = 'html'
    checkEvent(buttonClass, event)

    buttonClass = '.op-icon.fa.fa-mavon-code.selected'
    checkEvent(buttonClass, event)
  })

  it('点击帮助触发事件', () => {
    let buttonClass = '.op-icon.fa.fa-mavon-question-circle'
    let event = 'help'
    checkEvent(buttonClass, event)
  })
})

describe('snapshot', () => {
  it('snapshot', () => {
    const wrapper = new factory(props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
