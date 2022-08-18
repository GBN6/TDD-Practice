import caesarCipher from '../code/caesarCipher'

test('Wrapping from z to a', () => {
    expect(caesarCipher('zyxwvutsrqponmlkjihgfedcba', 5)).toBe('edcbazyxwvutsrqponmlkjihgf');
  });

test('Caesar Cipher "abcde" to be "bcdef"', () => {
    expect(caesarCipher('abcde', 1)).toBe('bcdef');
})

test('Test punctuation', () => {
    expect(caesarCipher('Hey, how are you?', 3)).toBe('Khb, krz duh brx?');
  });