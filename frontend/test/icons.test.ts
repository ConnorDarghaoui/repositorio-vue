import { expect, test } from 'vitest'
import { ICONS } from '../src/utils/icons'

test('ICONS should contain book icon', () => {
  expect(ICONS.book).toBe('book')
})

test('all ICONS entries are defined', () => {
  for (const key in ICONS) {
    const value = ICONS[key as keyof typeof ICONS]
    expect(value).toBeTruthy()
  }
})
