describe('delete button', function() {
	var validName = require('./test-data.js').nameField.valid['is alpha only'];
	var validPhone = require('./test-data.js').phoneField.valid['contains 10 digits'];
	var ui;
	var entry;
	var confirmation;

	beforeEach(function() {
		ui = require('../model/BasicPhonebookUI.js');
		entry = ui.go().ensureNoSavedData();
	});

	afterEach(function() {
		entry = ui.go().ensureNoSavedData();
	});

	it('does not appear if no data has been entered', function() {
		expect(entry.deleteAvailable()).not.toBeTruthy();
	});

	it('does not appear if data has not been stored', function() {
		entry = entry.enterName(validName).enterPhone(validPhone);
		expect(entry.deleteAvailable()).not.toBeTruthy();
	});

	it('appears when returning from save confirmation', function() {
		entry = entry
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave()
			.clickBack();
		expect(entry.deleteAvailable()).toBeTruthy();
	});

	it('clears the fields when clicked', function() {
		entry = entry
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave()
			.clickBack()
			.clickDelete();

		expect(entry.readName()).toBe('');
		expect(entry.readPhone()).toBe('');
	});
});