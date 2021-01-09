import { shallowMount, mount } from '@vue/test-utils'
import MavonEditor from '@/mavon-editor.vue'
import autoTextarea from 'auto-textarea/auto-textarea.vue' 

//解决Error: Not implemented: window.alert
jest.spyOn(window, 'alert').mockReturnValue();

/*eslint-disable */
// jest.mock('auto-textarea', () => ({
//   render(h) {
//     h();
//   },
// }));

const factory = (propsData) => {
  return mount(MavonEditor, {
    // components: autoTextarea,
    propsData: {
      ...propsData
    },
    stubs:{
      "v-autoTextarea":autoTextarea
    }
    // mocks: {
    //   autoTextarea
    // }

  })
}

describe('测试语言切换', () => {
  it('initLanguage', async () => {
    const wrapper = new factory({ d_words: null })
    // wrapper.vm.$test()
    //默认语言为zh-CN
    // console.log(wrapper.vm.d_words.navigation_title)
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('导航目录')
    await wrapper.setProps({ language: 'en' })
    // console.log(wrapper.html())
    // console.log(wrapper.vm.d_words.navigation_title)
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('Navigation')
    // wrapper.vm.initLanguage()
    await wrapper.setProps({ language: 'ja' })
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('ナビゲーション')
    // console.log(wrapper.vm.loadExternalLink('markdown_css', 'css'))

    
  })
})

describe('触发bold点击事件，测试', () => {
  it('initLanguage', async () => {
    const wrapper = new factory({ d_words: null })

    wrapper.vm.$emit('toolbar_left_click','bold')
    expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])
       
  })
})

describe('触发bold点击事件2，测试', () => {
  it('点击工具栏触发事件', () => {
    //挂载左工具栏组件，传入props
    const wrapper = new factory({ toolbars: { 'bold': true }, d_words: null })
    //检查字体加粗元素是否渲染
    expect(wrapper.find('button.op-icon.fa.fa-mavon-bold').exists()).toBe(true)
    //点击字体加粗按钮触发$clicks
    wrapper.find('.op-icon.fa.fa-mavon-bold').trigger('click')
    //检查点击事件触发的emit事件
    // expect(wrapper.emitted().toolbar_left_click[0]).toEqual(['bold'])

    // console.log(wrapper.vm.getTextareaDom())
  })
})
