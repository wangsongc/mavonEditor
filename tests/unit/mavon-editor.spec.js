import { shallowMount, mount } from '@vue/test-utils'
import MavonEditor from '@/mavon-editor.vue'
/*eslint-disable */

const factory = (propsData) => {
  return shallowMount(MavonEditor, {
    propsData: {
      ...propsData
    }
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
    // console.log(wrapper.vm.d_words.navigation_title)
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('Navigation')
    // wrapper.vm.initLanguage()
    await wrapper.setProps({ language: 'ja' })
    expect(wrapper.find('.v-note-navigation-title').text()).toContain('ナビゲーション')
    
    // console.log(wrapper.vm.d_words.navigation_title)
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
