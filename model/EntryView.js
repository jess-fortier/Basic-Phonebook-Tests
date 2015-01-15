EntryView.prototype = Object.create({}, {
	nameField: { get: function () { return element(by.model('entryName')); }},
	phoneField: { get: function() { return element(by.model('phoneNumber')); }},
	saveButton: { get: function() { return element(by.buttonText('Save')); }},
	deleteButton: { get: function() { return element(by.buttonText('Delete')); }},
	enterName: function(input) {
		nameField.sendKeys(input);
		alert('sending name input: '+input);
		return this;
	},
	enterPhone: function(input) {
		this.phoneField.sendKeys(input);
		alert('sending phone input: '+input);
		return this;
	}
});

module.exports = EntryView;