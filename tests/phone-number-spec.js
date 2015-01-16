/**
 * Confirm that the phone number field validation works as intended,
 * and that the form responds correctly to validation results.
 */
describe('phone number field', function() {
	var phoneValues = require('./test-data.js').phoneField;
	var validName = require('./test-data.js').nameField.valid['is alpha only'];
	var view;

	/**
	 * All tests should be conducted on the same environment,
	 * using consistent known-valid values for other fields to
	 * isolate cause of failure to the component under test.
	 */
	beforeEach(function() {
		var ui = require('../model/BasicPhonebookUI.js');
		view = ui.go();
		view = view.enterName(validName);
	});
	
	/**
	 * All negative cases result in a disabled Save button
	 */
	for (entry in phoneValues.invalid) {
		var input = phoneValues.invalid[entry];

		(function(desc, val){
			it('does not enable save when input ' + desc + ': ' + val, function(){
				view = view.enterPhone(val);
				expect(view.saveButton.getAttribute('disabled')).toBe('true');
			});
		}) (entry, input);
	};
});