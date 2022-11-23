const RevString =(string) => {
    let reversed = string.split('').reverse().join('');
    return reversed;
}

module.exports = RevString;