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

	it('clears the data store when clicked', function() {
		//symptom test, as we're not directly examining the data store

		entry = entry
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave()
			.clickBack()
			.clickDelete();

		entry = ui.go(); //reload the page, prompting prepopulation of fields

		expect(entry.readName()).toBe('');
		expect(entry.readPhone()).toBe('');

	});
});

describe('confirmation view', function() {
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

	it('replaces form fields on successful save', function() {
		var confirmation = entry
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave();

		expect(entry.nameFieldShown()).not.toBeTruthy();
		expect(entry.phoneFieldShown()).not.toBeTruthy();
	});
});

describe('entry view', function() {
	var validName = require('./test-data.js').nameField.valid['is alpha only'];
	var validPhone = require('./test-data.js').phoneField.valid['contains 10 digits'];
	var ui;
	var entry;
	var confirmation;

	beforeEach(function() {
		ui = require('../model/BasicPhonebookUI.js');
		entry = ui.go()
			.ensureNoSavedData()
			.enterName(validName)
			.enterPhone(validPhone)
			.clickSave()
			.clickBack();
	});

	afterEach(function() {
		entry = ui.go().ensureNoSavedData();
	});

	it('displays saved data when returning from the confirmation view', function() {
		expect(entry.readName()).toBe(validName);
		expect(entry.readPhone()).toBe(validPhone);
	});

	it('displays saved data when reloading the page', function() {
		entry.clearFields(); //clear the fields
		entry = ui.go(); //reload the page to hopefully force prepopulation

		expect(entry.readName()).toBe(validName);
		expect(entry.readPhone()).toBe(validPhone);
	});
});