var EntryView = function() {
	this.nameField = element(by.model('entryName'));
	this.phoneField = element(by.model('phoneNumber'));
	this.saveButton = element(by.buttonText('Save'));
	this.deleteButton = element(by.buttonText('Delete'));

	this.enterName = function(input) {
		this.nameField.sendKeys(input);
		return this;
	};
	this.readName = function() {
		return this.nameField.getAttribute('value');
	}
	this.enterPhone = function(input) {
		this.phoneField.sendKeys(input);
		return this;
	};
	this.readPhone = function() {
		return this.phoneField.getAttribute('value');
	}
	this.clickSave = function() {
		this.saveButton.click();
		return require('./ConfirmationView.js');
	};
	this.deleteIsVisible = function() {
		return this.deleteButton.isDisplayed();
	};
	this.clickDelete = function() {
		this.deleteButton.click();
		return this;
	};
	this.clearFields = function() {
		this.nameField.clear();
		this.phoneField.clear();
		return this;
	}
};

module.exports = new EntryView();