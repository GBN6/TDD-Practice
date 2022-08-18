import analyzeArray from '../code/analyzeArray';

test('Analyze array average = 4, min = 1, max = 8, length = 6', () => {
    const object = analyzeArray([1,8,3,4,2,6])
    expect(object).toEqual({average: 4, min: 1, max: 8, length: 6})
})

test('Empty array to be null', () => {
    const object = analyzeArray([])
    expect(object).toBeNull();
})

test('[0,1,2,3,4] to be', () => {
    const expected = {
        average: 2,
        min: 0,
        max: 4,
        length: 5
    }
    const data = [0,1,2,3,4];
    expect(analyzeArray(data)).toEqual(expected);
})