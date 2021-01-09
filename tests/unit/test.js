import { shallowMount, mount } from '@vue/test-utils'
import MavonEditor from '@/mavon-editor.vue'
import autoTextarea from 'auto-textarea/auto-textarea.vue' 


describe('xxxx', () => {
  test("xxxxxtest",()=>{
    // console.log(autoTextarea);
    // console.log(autoTextarea1);
    let w =  mount(MavonEditor,{
      stubs:{
        // "v-autoTextarea":autoTextarea
      }
    })
  })
  
});
