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

describe('通过按钮点击调用$clicks方法，检查emit事件', () => {
  it('点击工具栏触发事件', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory(props)
    //检查字体加粗元素是否渲染
    expect(wrapper.find('.op-icon.fa.fa-mavon-columns').exists()).toBe(true)
    //点击字体加粗按钮触发$clicks
    wrapper.find('.op-icon.fa.fa-mavon-columns').trigger('click')
    //检查点击事件触发的emit事件
    expect(wrapper.emitted().toolbar_right_click[0]).toEqual(['subfield'])
  })
})
describe('Snapshot', () => {
  it('Snapshot', () => {
    const wrapper = new factory(props)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
