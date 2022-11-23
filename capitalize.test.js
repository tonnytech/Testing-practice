const capitalize = require('./capitalize');

test ('check capitalization', () => {
    //arrange
    let string = capitalize('kenya');

    //act 
     expect(string).toBe('Kenya');
    
})