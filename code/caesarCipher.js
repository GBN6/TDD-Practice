function isLetter(char){
    return (/[a-zA-Z]/).test(char);
}

function caesarCipher(str, num){
    let stringArray = str.split('');
    let result = [];
    for (let i = 0; i < stringArray.length; i++) {
        if (isLetter(stringArray[i])) {
            let characterCode = stringArray[i].charCodeAt(0);
            let shiftedCode = (((characterCode - 97 + num) % 26) + 97);
            result.push(String.fromCharCode(shiftedCode))
        } else {
            result.push(stringArray[i]);
        }
    }
    return result.join('');
}

export default caesarCipher;