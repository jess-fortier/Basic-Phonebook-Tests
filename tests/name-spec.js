/**
 * Confirm that the name field validation works as intended,
 * and that the form responds correctly to validation results.
 */
describe('phone number field', function() {
	var nameValues = require('./test-data.js').nameField;
	var validPhone = require('./test-data.js').phoneField.valid['contains 10 digits'];
	var view;

	/**
	 * All tests should be conducted on the same environment,
	 * using consistent known-valid values for other fields to
	 * isolate cause of failure to the component under test.
	 */
	beforeEach(function() {
		var ui = require('../model/BasicPhonebookUI.js');
		view = ui.go();
		view = view.enterPhone(validPhone);
	});
	
	/**
	 * All negative cases result in a disabled Save button
	 */
	for (entry in nameValues.invalid) {
		var input = nameValues.invalid[entry];

		(function(desc, val){
			it('does not enable save when input ' + desc + ': ' + val, function(){
				view = view.enterName(val);
				expect(view.saveButton.getAttribute('disabled')).toBe('true');
			});
		}) (entry, input);
	};
	
	/**
	 * All positive cases result in an enabled Save button
	 */
	for (entry in nameValues.valid) {
		var input = nameValues.valid[entry];

		(function(desc, val){
			it('enables save when input ' + desc + ': ' + val, function(){
				view = view.enterName(val);
				expect(view.saveButton.getAttribute('disabled')).not.toBe('true');
			});
		}) (entry, input);
	};
});