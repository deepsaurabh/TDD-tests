var calculator = require("../calculator");  // we are accesing the calculator file

describe("multiplication",function() {
	it("should multiply 2 and 3",function() {
		var product = calculator.multiply(2,3);
		expect(product).toBe(6);
	});

	it("should multiply 3 and 5",function() {
		var product = calculator.multiply(3,5);
		expect(product).toBe(15);
	});
	it("should return 1 for less than two arguments",function(){
		var product = calculator.multiply(3);
		expect(product).toBe("undefined");
	});

	it("should return multiplication of frist two arguments if more than one argument is passed",function(){
		var product = calculator.multiply(3,3,3);
		expect(product).toBe(9);
	});

});