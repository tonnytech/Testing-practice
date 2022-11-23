const RevString = require('./RevString');

test ('check string reverse', () => {

    //arrange
    const string = 'kenya';

    //act
    let reverse = RevString('kenya');

    expect(reverse).toBe('aynek');
});