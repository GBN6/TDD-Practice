import {add, sub, multi, div } from '../code/calculatorObject';

test(' 3 + 5 to be 8', () => {
    expect(add(3, 5)).toBe(8);
})

test(' 5 - 3 to be 2', () => {
    expect(sub(5, 3)).toBe(2);
})

test(' 3 * 5 to be 15', () => {
    expect(multi(3, 5)).toBe(15);
})

test(' 10 / 2 to be 5', () => {
    expect(div(10, 2)).toBe(5);
})