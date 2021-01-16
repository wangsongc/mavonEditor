import { shallowMount, mount } from '@vue/test-utils'
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
    stubs:{
      "v-autoTextarea":autoTextarea
    }
  })
}

describe('测试语言切换', () => {
  it('initLanguage', async () => {
    const wrapper = new factory({ d_words: null })
    //默认语言为zh-CN
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('导航目录')
    await wrapper.setProps({ language: 'en' })
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('Navigation')
    await wrapper.setProps({ language: 'ja' })
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('ナビゲーション')
  })
})

describe('点击加粗按钮触发bold点击事件', () => {
  it('initLanguage', async () => {
    const wrapper = new factory({ d_words: null })
    wrapper.vm.$emit('toolbar_left_click','bold')
    expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])
  })
})

describe('触发bold点击事件2，测试', () => {
  it('点击工具栏触发事件', async() => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({ toolbars: { 'bold': true }, d_words: null })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(true)
    //点击字体加粗按钮触发$clicks
    wrapper.find('.op-icon.fa.fa-mavon-bold').trigger('click')
    expect(wrapper.findComponent(autoTextarea).exists()).toBe(true)
    expect(wrapper.findComponent(md_toolbar_left).exists()).toBe(true)
    expect(wrapper.findComponent(md_toolbar_right).exists()).toBe(true)
    wrapper.vm.$nextTick();
    //检查点击事件触发的emit事件
    // expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])
    wrapper.setProps({value:'默认值'})
    wrapper.vm.$nextTick();
    console.log(wrapper.find('.auto-textarea-block').text())

    console.log(wrapper.vm.$refs.vNoteTextarea.$refs.vTextarea)
    
    
  })
})
