var EntryView = function() {
	this.nameField = element(by.model('entryName'));
	this.phoneField = element(by.model('phoneNumber'));
	this.saveButton = element(by.buttonText('Save'));
	this.deleteButton = element(by.buttonText('Delete'));

	this.enterName = function(input) {
		this.nameField.sendKeys(input);
		return this;
	};
	this.enterPhone = function(input) {
		this.phoneField.sendKeys(input);
		return this;
	}
};

module.exports = new EntryView();