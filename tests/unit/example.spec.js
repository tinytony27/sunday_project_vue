import { mount } from '@vue/test-utils'
import HelloWorld from '../../src/components/HelloWorld.vue'
import {nextTick} from 'vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', async() => {
    const msg = 'new message'
    const wrapper = mount(HelloWorld, {
      props: { msg: msg }
    })
    expect(wrapper.text()).toMatch('customize this project,')
    expect(wrapper.find('h1').text()).toBe(msg)

    const new_msg = '新しいメッセージ'
    wrapper.setProps({msg: new_msg})
    await nextTick
    expect(wrapper.find('h1').text()).toBe(new_msg)

  })
})
