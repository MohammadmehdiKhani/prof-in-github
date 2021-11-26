const sum = require('./sum');

test('WHEN_adding_1_and_2_THEN_result_must_be_3', () => {
    //arrange

    //act
    var result = sum(1, 2);

    //assert
    expect(result).toBe(3);
});