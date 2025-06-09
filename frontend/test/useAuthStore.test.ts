import { setActivePinia, createPinia } from 'pinia'
import { describe, it, expect, beforeEach, vi } from 'vitest'
import { useAuthStore } from '../src/store/useAuthStore'

vi.mock('../src/services/dao/AuthDao', () => ({
  default: {
    login: vi.fn().mockResolvedValue({
      token: 'abc123',
      user: { user_id: 1, username: 'test', email: 'test@example.com', name: 'Test', last_name: 'User', profile_photo_url: null, user_type: 'student', user_status: 'active' }
    })
  }
}))

describe('useAuthStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('login sets token and user', async () => {
    const store = useAuthStore()
    await store.login({ email: 'test@example.com', password: 'pass' })
    expect(store.token).toBe('abc123')
    expect(store.user?.username).toBe('test')
  })
})
