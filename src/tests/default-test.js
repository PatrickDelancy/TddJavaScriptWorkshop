var testobject = require('../js/testobject');

describe('default tests', function(){

	it('can run tests', function(){
		expect(true).toBe(true);
	});

	it('can reference test object', function(){
		var test = new testobject();
		expect(test.testvar).toBe(true);
	});
});
