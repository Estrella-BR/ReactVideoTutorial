import { expect, test, describe } from 'vitest'
import { add, multiply, substract } from './math.helpers'

describe('add', () => {
    test('should add two positive numbers', () => {
        const result = add(1, 1);
        console.log({ result })

        expect(result).toBe(2);
    })
})


describe('substract', () => {
    test('should substract two positive numbers', () => {
        const result = substract(3, 1);

        expect(result).toBe(2)
    })

    test('should substract one positive number and one negative', () => {
        const result = substract(-3, 1);

        expect(result).toBe(-4)
    })
})

describe('multiply', () => {
    test('should multiply two positive numbers', () => {
        const result = multiply(3, 2);

        expect(result).toBe(6)
    })

    test('should multiply one positive number and one negative', () => {
        const result = multiply(-3, 2);

        expect(result).toBe(-6)
    })
})


