//Unit tests for the helloWorld function know it is parameter name in describe parenthesis\
describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('to be', function () {
        expect(test).toBe(true);
    });
    it('not to be', function () {
        expect(test).not.toBe(false);
    });

});










//  describe('helloWorld', function() {
//     it('should be a defined function', function() {
//       expect(typeof helloWorld).toBe('function');
//     });
//     it('should return a string when called', function() {
//       expect(typeof helloWorld()).toBe("string");
//     });
//     it('should return the string "Hello, World!" when executed', function() {
//       expect(helloWorld()).toBe("Hello, World!");
//     });
//     it("should never return 'undefined' when called", function() {
//       expect(helloWorld()).not.toBe(undefined);
//     });
//     expect(typeof sayHello()).toBe("string")
// });