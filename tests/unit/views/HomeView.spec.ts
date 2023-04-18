import { shallowMount } from "@vue/test-utils";
import { describe, expect, test, vi } from "vitest";
import { createTestingPinia } from '@pinia/testing'
import HomeView from '@/views/HomeView.vue'

describe('@/views/HomeVuew.vue', () => {
  test('displays message', () => {
    const wrapper = shallowMount(HomeView, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn
          })
        ],
      }
    })

    const message = wrapper.get('div')
    expect(message.text()).toBe('Hello, World!')
  })
})