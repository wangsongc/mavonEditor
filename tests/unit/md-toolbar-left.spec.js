import { shallowMount } from '@vue/test-utils'
import MdToolbarLeft from '@/components/md-toolbar-left.vue'
import { CONFIG } from '@/lib/config.js'

/*eslint-disable */
const d_words_zh_cn = CONFIG[`words_zh-CN`]
const allToobar = CONFIG[`toolbars`]

const factory = (propsData) => {
  return shallowMount(MdToolbarLeft, {
    propsData: {
      ...propsData
    }
  })
}

let nonToobar = { // 工具栏
  'bold': false,
  'italic': false,
  'header': false,
  'underline': false,
  'strikethrough': false,
  'mark': false,
  'superscript': false,
  'subscript': false,
  'quote': false,
  'ol': false,
  'ul': false,
  'link': false,
  'imagelink': false,
  'code': false,
  'table': false,
  'undo': false,
  'redo': false,
  'trash': false,
  'save': false,
  'alignleft': false,
  'aligncenter': false,
  'alignright': false
}

let wrapper
function checkEvent(buttonClass, event) {
  expect(wrapper.find(buttonClass).exists()).toBe(true)
  wrapper.find(buttonClass).trigger('click')
  expect(wrapper.emitted().toolbar_left_click[0]).toEqual([event])
}

describe('测试left-toolbars', () => {
  let button, event
  beforeEach(() => {
    wrapper = new factory({
      toolbars: allToobar,
      d_words: d_words_zh_cn
    })
  })
  afterEach(() => {
    wrapper.destroy()
  })

  it('bold', () => {
    button = 'button.op-icon.fa.fa-mavon-bold'
    event = 'bold'
    checkEvent(button, event)
  })

  it('italic', () => {
    button = 'button.op-icon.fa.fa-mavon-italic'
    event = 'italic'
    checkEvent(button, event)
  })

  it('head', () => {
    button = 'div.op-icon.fa.fa-mavon-header.dropdown.dropdown-wrapper'
    //ToDo
  })

  it('underline', () => {
    button = 'button.op-icon.fa.fa-mavon-underline'
    event = 'underline'
    checkEvent(button, event)
  })

  it('strikethrough', () => {
    button = 'button.op-icon.fa.fa-mavon-strikethrough'
    event = 'strikethrough'
    checkEvent(button, event)
  })

  it('mark', () => {
    button = 'button.op-icon.fa.fa-mavon-thumb-tack'
    event = 'mark'
    checkEvent(button, event)
  })

  it('superscript', () => {
    button = 'button.op-icon.fa.fa-mavon-superscript'
    event = 'superscript'
    checkEvent(button, event)
  })

  it('subscript', () => {
    button = 'button.op-icon.fa.fa-mavon-subscript'
    event = 'subscript'
    checkEvent(button, event)
  })

  it('alignleft', () => {
    button = 'button.op-icon.fa.fa-mavon-align-left'
    event = 'alignleft'
    checkEvent(button, event)
  })

  it('aligncenter', () => {
    button = 'button.op-icon.fa.fa-mavon-align-center'
    event = 'aligncenter'
    checkEvent(button, event)
  })

  it('alignright', () => {
    button = 'button.op-icon.fa.fa-mavon-align-right'
    event = 'alignright'
    checkEvent(button, event)
  })

  it('quote', () => {
    button = 'button.op-icon.fa.fa-mavon-quote-left'
    event = 'quote'
    checkEvent(button, event)
  })

  it('ol', () => {
    button = 'button.op-icon.fa.fa-mavon-list-ol'
    event = 'ol'
    checkEvent(button, event)
  })

  it('ul', () => {
    button = 'button.op-icon.fa.fa-mavon-list-ul'
    event = 'ul'
    checkEvent(button, event)
  })

  it('link', () => {
    button = 'button.op-icon.fa.fa-mavon-link'
    //ToDo
  })

  it('image', () => {
    button = 'div.op-icon.fa.fa-mavon-picture-o.dropdown.dropdown-wrapper'
    //ToDo
  })

  it('code', () => {
    button = 'button.op-icon.fa.fa-mavon-code'
    event = 'code'
    checkEvent(button, event)
  })

  it('table', () => {
    button = 'button.op-icon.fa.fa-mavon-table'
    event = 'table'
    checkEvent(button, event)
  })

  it('undo', () => {
    button = 'button.op-icon.fa.fa-mavon-undo'
    event = 'undo'
    checkEvent(button, event)
  })

  it('redo', () => {
    button = 'button.op-icon.fa.fa-mavon-repeat'
    event = 'redo'
    checkEvent(button, event)
  })

  it('trash', () => {
    button = 'button.op-icon.fa.fa-mavon-trash-o'
    event = 'trash'
    checkEvent(button, event)
  })

  it('save', () => {
    button = 'button.op-icon.fa.fa-mavon-floppy-o'
    event = 'save'
    checkEvent(button, event)
  })

  it('通过props控制left-toolbars不显示', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({
      toolbars: nonToobar,
      d_words: d_words_zh_cn
    })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-italic').exists()).toBe(false)
    expect(wrapper.find('div.op-icon.fa.fa-mavon-header.dropdown.dropdown-wrapper').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-underline').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-strikethrough').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-thumb-tack').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-superscript').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-subscript').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-align-left').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-align-center').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-align-right').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-quote-left').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-list-ol').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-list-ul').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-link').exists()).toBe(false)
    expect(wrapper.find('div.op-icon.fa.fa-mavon-picture-o.dropdown.dropdown-wrapper').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-code').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-table').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-undo').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-repeat').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-trash-o').exists()).toBe(false)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-floppy-o').exists()).toBe(false)
  })
})

describe('snapshot', () => {
  it('snapshot', () => {
    const wrapper = new factory({ d_words: d_words_zh_cn, toolbars: allToobar })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
