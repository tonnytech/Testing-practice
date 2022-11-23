const Calculator = require('./calculator');

describe('calculator functionality', () => {
    //Arrange
    let calculateVals = new Calculator();
     test ('correct sum', () => {
    
        //act and assert
        expect(calculateVals.add(1,1)).toBe(2);
        expect(calculateVals.add(2,3)).toBe(5);
        expect(calculateVals.add(4,4)).toBe(8);
     });
     test('correct multiplication', () => {
        
        //act and assert
        expect(calculateVals.multiply(1,1)).toBe(1);
        expect(calculateVals.multiply(2,3)).toBe(6);
        expect(calculateVals.multiply(4,4)).toBe(16);
     })
     test('correct division', () => {

        //act and assert
        expect(calculateVals.divide(4,2)).toBe(2);
        expect(calculateVals.divide(8,4)).toBe(2);
        expect(calculateVals.divide(10,5)).toBe(2);
     })
})