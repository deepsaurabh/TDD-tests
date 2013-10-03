var bank = require("../bank");  // we are accesing the bank file


describe("Bank Account", function() {
var deep 

// (before each)  code which need to be executed after each test spec 
beforeEach(function() {
deep = new bank.bankaccount('deep');
});
describe("Bank account",function() {
	it("Bank account initial balance is zero",function() {
		
		var balance = deep.getBalance();
		expect(balance).toBe(0);
	});
	it("Bank's account Balance cannot be negative",function() {
		
		var balance = deep.setBalance(-10);
		expect(balance).toBe("balance cannot be negative");
	});
	it("cannot withdraw money if you have insufficient fund",function() {
		
		var balance = deep.withDraw(500);
		expect(balance).toBe("insufficient fund");
	});
	it("cannot deposit money in negative",function() {
		var deep = new bank.bankaccount('deep');
		var balance = deep.deposit(-20);
		expect(balance).toBe("irrelevant value");
	});

});

});






