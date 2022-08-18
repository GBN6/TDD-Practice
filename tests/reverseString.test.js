import reverseString from "../code/reverseString"; 

test(" '' to be '' ", () =>{
    expect(reverseString('')).toBe('');
})

test('Reverse string. Hello to olleH', () => {
    expect(reverseString('Hello')).toBe('olleH');
})

test('abcdefg to gfedcba', () => {
    expect(reverseString('abcdefg')).toBe('gfedcba');
})

test('redivider to redivider', () => {
    expect(reverseString('redivider')).toBe('redivider')
})