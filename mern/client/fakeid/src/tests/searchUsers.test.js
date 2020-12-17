import  searchUsers  from './search'
import {  users } from './sort'


describe('search users', () => {
    test('search by letter f returns Friðrik', () => {
        let result = searchUsers('F')
        expect(result).toStrictEqual([users[4]])
    })
})
describe('search users error', () => {
    test('search by sdff returns no users', () => {
        let result = searchUsers('sdff')
        expect(result).toStrictEqual('No users found')
    })
})
describe('search users return many', () => {
    test('search by a returns no users', () => {
        let result = searchUsers('a')
        expect(result.length).toBe(4)
        expect(result[0]).toStrictEqual(users[0])
        expect(result[1]).toStrictEqual(users[1])
        expect(result[2]).toStrictEqual(users[2])
        expect(result[3]).toStrictEqual(users[3])
    })
})