import { beforeEach, describe, expect, test } from 'vitest'
import { createPinia, setActivePinia, storeToRefs } from 'pinia'
import { useStore } from '@/stores'

describe('@/stres/index.ts', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('checks message', () => {
    const store = useStore()
    const { message } = storeToRefs(store)

    expect(message.value).toBe('Hello, World!')
  })
})