function analyzeArray(array) {
    if (array.length === 0) return null;

    const average = array.reduce((total, num) => total + num, 0) / array.length;
    const min = Math.min(...array);
    const max = Math.max(...array);
    const length = array.length;

    return {average, min, max, length}
}

export default analyzeArray;