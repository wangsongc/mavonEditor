import { mount } from '@vue/test-utils'
import MavonEditor from '@/mavon-editor.vue'
import autoTextarea from 'auto-textarea/auto-textarea.vue'

/*eslint-disable */
// 解决Error: Not implemented: window.alert
jest.spyOn(window, 'alert').mockReturnValue();
const factory = (propsData) => {
  return mount(MavonEditor, {
    propsData: {
      ...propsData
    },
    stubs: {
      "v-autoTextarea": autoTextarea
    }
  })
}

describe('测试bold点击事件', () => {
  it('测试bold点击事件', async () => {
    const wrapper = new factory({ d_words: null })
    wrapper.vm.$emit('toolbar_left_click', 'bold')
    expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])
  })
})

describe('点击工具栏触发bold点击事件', () => {
  it('点击工具栏触发事件', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({ toolbars: { 'bold': true }, d_words: null })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(true)
    //点击字体加粗按钮触发$clicks
    wrapper.find('.op-icon.fa.fa-mavon-bold').trigger('click')
    // expect(wrapper.findComponent(md_toolbar_left).exists()).toBe(true)
    // expect(wrapper.findComponent(md_toolbar_right).exists()).toBe(true)
    //检查点击事件触发的emit事件
    // wrapper.vm.$emit('toolbar_left_click','bold')
    console.log(wrapper.emitted())
    // expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])
    wrapper.setProps({ value: '默认值' })
    // wrapper.vm.$nextTick();
    // console.log(wrapper.find('.auto-textarea-block').text())
    expect(wrapper.findComponent(autoTextarea).exists()).toBe(true)
    // expect(wrapper.findComponent(mdToolbarLeft).exists()).toBe(true)
    expect(wrapper.findComponent(autoTextarea).exists()).toBe(true)

    // console.log(wrapper.vm.$refs.vNoteTextarea.$refs.vTextarea)  
  })
})

describe('snapshot', () => {
  it('snapshot', () => {
    const wrapper = new factory()
    expect(wrapper.html()).toMatchSnapshot()
  })
})

