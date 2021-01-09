import { shallowMount } from '@vue/test-utils'
import MdToolbarLeft from '@/components/md-toolbar-left.vue'
import { CONFIG } from '@/lib/config.js'

/*eslint-disable */
const d_words_zh_cn = CONFIG[`words_zh-CN`]

const factory = (propsData) => {
  return shallowMount(MdToolbarLeft, {
    propsData: {
      ...propsData
    }
  })
}

describe('通过props控制left-toolbars显示', () => {
  it('left-toolbars show', () => {
    // 挂载左工具栏组件，传入props
    const wrapper = new factory({
      toolbars: { // 工具栏
        'bold': true,
        'italic': true,
        'header': true,
        'underline': true,
        'strikethrough': true,
        'mark': true,
        'superscript': true,
        'subscript': true,
        'quote': true,
        'ol': true,
        'ul': true,
        'link': true,
        'imagelink': true,
        'code': true,
        'table': true,
        'undo': true,
        'redo': true,
        'trash': true,
        'save': true,
        'alignleft': true,
        'aligncenter': true,
        'alignright': true
      },
      d_words: d_words_zh_cn
    })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-italic').exists()).toBe(true)
    expect(wrapper.find('div.op-icon.fa.fa-mavon-header.dropdown.dropdown-wrapper').exists()).toBe(true)

    expect(wrapper.find('button.op-icon.fa.fa-mavon-underline').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-strikethrough').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-thumb-tack').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-superscript').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-subscript').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-align-left').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-align-center').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-align-right').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-quote-left').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-list-ol').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-list-ul').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-link').exists()).toBe(true)

    expect(wrapper.find('div.op-icon.fa.fa-mavon-picture-o.dropdown.dropdown-wrapper').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-code').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-table').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-undo').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-repeat').exists()).toBe(true)

    expect(wrapper.find('button.op-icon.fa.fa-mavon-trash-o').exists()).toBe(true)
    expect(wrapper.find('button.op-icon.fa.fa-mavon-floppy-o').exists()).toBe(true)

  })

  it('left-toolbars unshow', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({
      toolbars: { // 工具栏
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
      },
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

describe('prop test: editable', () => {
  it('', () => {

  })
})

describe('通过按钮点击调用$clicks方法，检查emit事件', () => {
  it('点击工具栏触发事件', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({ toolbars: { 'bold': true }, d_words: d_words_zh_cn })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(true)
    //点击字体加粗按钮触发$clicks
    wrapper.find('.op-icon.fa.fa-mavon-bold').trigger('click')
    //检查点击事件触发的emit事件
    expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])
  })

  it('不可编辑状态下，点击工具栏不触发事件', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({ toolbars: { 'bold': true }, editable: false, d_words: d_words_zh_cn })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(true)
    //点击字体加粗按钮触发$clicks
    wrapper.find('.op-icon.fa.fa-mavon-bold').trigger('click')
    //检查点击事件触发的emit事件
    // console.log(wrapper.emitted().toolbar_left_click)
    expect(wrapper.emitted()).toBeNull
  })
})


describe('直接调用method测试', () => {
  it('', () => {
    const wrapper = new factory({ toolbars: { 'bold': true }, editable: false, d_words: d_words_zh_cn })
    wrapper.vm.handleClose('bold')
    console.log(wrapper.vm.s_img_dropdown_open)
  })
})
