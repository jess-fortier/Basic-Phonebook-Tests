describe('delete button', function() {
	var validName = require('./test-data.js').nameField.valid['is alpha only'];
	var validPhone = require('./test-data.js').phoneField.valid['contains 10 digits'];
	var entry;
	var confirmation;

	beforeEach(function() {
		var ui = require('../model/BasicPhonebookUI.js');
		entry = ui.go().clearFields();
	});

	it('does not appear if no data has been entered', function() {
		expect(entry.deleteIsVisible()).toBe(false);
	});

	it('does not appear if data has not been stored', function() {
		entry = entry.enterName(validName).enterPhone(validPhone);
		expect(entry.deleteIsVisible()).toBe(false);
	});

	it('appears when returning from save confirmation', function() {
		entry = entry
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave()
			.clickBack();
		expect(entry.deleteIsVisible()).toBe(true);
	});

	it('clears the fields when clicked', function() {
		entry = entry
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave() //now displaying confirmation view
			.clickBack() //now displaying entry view
			.clickDelete();

		expect(entry.readName()).toBe('');
		expect(entry.readPhone()).toBe('');
	});
})