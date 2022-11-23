const stringLength = require('./stringLenth');

test ('check the string length', () => {
  //arrange
  const string= "mystring";

  //act

  let length = stringLength(string)

  //assert

  expect(length).toBe(8);
})