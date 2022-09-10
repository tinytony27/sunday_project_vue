import { mount, flushPromises } from '@vue/test-utils'
import DetailView from '../../src/main/pages/DetailView/DetailView.vue'
import UpdateView from '../../src/main/pages/UpdateView/UpdateView.vue'

import axios from 'axios'
import {createRouter, createWebHistory} from 'vue-router' 
// import { routes } from "@/src/router"

describe('Unit Test for DetailView.vue.', () => {

  const mockRoute = {
    params: {
      id: 1
    }
  }
  const mockRouter = {
    push: jest.fn()
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

  const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/ticket/:id',
        name: 'DetailView',
        component: DetailView,
        meta: { requiresAuth: true }
      },
      {
        path: '/ticket/update/:id',
        name: 'UpdateView',
        component: UpdateView,
        meta: { requiresAuth: true }
      }
    ],
  })
  
  it('renders props.msg when passed', async() => {
    const wrapper = mount(DetailView,{
      global: {
        mocks: {
          $route: mockRoute,
          $router: mockRouter
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
