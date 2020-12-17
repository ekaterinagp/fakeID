import { sortUsers, users } from './sort'


describe('Sort by name', () => {
  test('sorting by name returns sorted users', () => {
    let sortedUsers = sortUsers('sortName')
    expect(sortedUsers[0]._id).toBe(2)
    expect(sortedUsers[1]._id).toBe(3)
  })
})

describe('Sort by age', () => {
  test('sorting by age returns sorted users', () => {
    let sortedUsers = sortUsers('sortAge')
    expect(sortedUsers[0]._id).toBe(3)
    expect(sortedUsers[1]._id).toBe(6)
    expect(sortedUsers[5]._id).toBe(5)
  })
})