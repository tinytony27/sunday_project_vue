import { mount, flushPromises } from '@vue/test-utils'
import DetailView from '../../src/main/pages/DetailView/DetailView.vue'

import axios from 'axios'
import {nextTick} from 'vue'

describe('Unit Test for DetailView.vue.', () => {

  const mockRoute = {
    params: {
      id: 1
    }
  }

  const mockDetailApi = {
    data: { 
      title:'チケットの新規投稿に失敗する。',
      created_date:'2000-00-00',
      category:'3',
      description:'チケットの新規投稿に失敗します。',
      status:'4',
      deadlinedate:'2000-00-00',
      lastupdatedate:'2000-00-00'
    },
  }

  jest.spyOn(axios, 'get').mockResolvedValue(mockDetailApi)

  it('renders props.msg when passed', async() => {
    const wrapper = mount(DetailView,{
      global: {
        mocks: {
          $route: mockRoute,
        }
      }
    })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('/ticket/api/ticket/1')

    // Wait until the DOM updates.
    await flushPromises()
    //await nextTick
    expect(wrapper.find('[data-testid="ticket-title"]').text()).toBe('チケットの新規投稿に失敗する。')
    expect(wrapper.find('[data-testid="ticket-created_date"]').text()).toBe('2000-00-00')
    expect(wrapper.find('[data-testid="ticket-category"]').text()).toBe('3')
  })
})
