import { mount, flushPromises } from '@vue/test-utils'
import CreateView from '../../src/main/pages/CreateView/CreateView.vue'
import axios from 'axios'

describe('Unit Test for DetailView.vue.', () => {

  it('Show guide message for description input.', async() => {
    const chars_length_31 = '1234567890123456789012345678890' 
    const wrapper = mount(CreateView)
    wrapper.find('[data-testid="ticket-description"]').setValue(chars_length_31)
    expect(wrapper.vm.maxLengthValidation).toBe('1 文字 長すぎます。')

    await flushPromises()
    expect(wrapper.find('[data-testid="maxLengthMessage"]').text()).toBe('1 文字 長すぎます。')


  })
})