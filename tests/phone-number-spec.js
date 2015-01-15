/**
 * Confirm that the phone number field validation works as intended,
 * and that the form responds correctly to validation results.
 */
describe('phone number field', function() {

	/**
	 * Test data for all known negative cases.
	 * Credit for the implemented parameterization strategy:
	 * http://blog.freeside.co/2013/05/21/parameterized-specs-with-jasmine/
	 * TODO: Would be nice to centralize test data
	 */
	var negative_test_data = {
		// 'too few digits': '123456789',
		// 'leading zero': '0123456789',
		'too many digits': '123456789123'
	}//TODO programmatically add cases for unsupported punctuation and alphabetical characters

	var view;

	/**
	 * All tests should be conducted on the same environment,
	 * using a known-valid value for other fields to isolate
	 * cause of failure to the component under test.
	 */
	beforeEach(function() {
		var ui = require('../model/BasicPhonebookUI.js');
		view = ui.go();
		view = view.enterName('valid name');
	});
	
	/**
	 * All negative cases result in a disabled Save button
	 */
	for (datum in negative_test_data) {
		it('is not saved when input has ' + datum, function(){
			view = view.enterPhone(negative_test_data[datum]);
			expect(view.saveButton.getAttribute('disabled')).toBe('true');
		});
	}
});