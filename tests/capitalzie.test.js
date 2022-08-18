import capitalize from "../code/capitalize";

test('Capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello')
})

test('First letter already capitalized', () => {
    expect(capitalize('Telephone')).toBe('Telephone')
})

test('First letter small, another letters big', () => {
    expect(capitalize('hi My Name Is Briana')).toBe('Hi my name is briana')
})

test(" '' to be '' ", () =>{
    expect(capitalize('')).toBe('');
})