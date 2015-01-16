/**
 * Confirm that the phone number field validation works as intended,
 * and that the form responds correctly to validation results.
 */
describe('phone number field', function() {
	var phoneValues = require('./test-data.js').phoneField;
	var validName = require('./test-data.js').nameField.valid[0];
	var view;

	/**
	 * All tests should be conducted on the same environment,
	 * using a known-valid value for other fields to isolate
	 * cause of failure to the component under test.
	 */
	beforeEach(function() {
		var ui = require('../model/BasicPhonebookUI.js');
		view = ui.go();
		view = view.enterName(validName);
	});
	
	/**
	 * All negative cases result in a disabled Save button
	 */
	for (value in phoneValues.invalid) {
		it('does not enable save when input ' + value, function(){
			view = view.enterPhone(phoneValues.invalid[value]);
			expect(view.saveButton.getAttribute('disabled')).toBe('true');
		});
	}
});