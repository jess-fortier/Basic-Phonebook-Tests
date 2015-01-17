var EntryView = function() {
	this.nameField = element(by.model('entryName'));
	this.phoneField = element(by.model('phoneNumber'));
	this.saveButton = element(by.buttonText('Save'));
	this.deleteButton = element(by.id('delete-button'));

	this.enterName = function(input) {
		this.nameField.sendKeys(input);
		return this;
	};
	this.readName = function() {
		return this.nameField.getAttribute('value');
	};
	this.enterPhone = function(input) {
	this.phoneField.sendKeys(input);
	return this;
	};
	this.readPhone = function() {
		return this.phoneField.getAttribute('value');
	};
	this.clearFields = function() {
		this.nameField.clear();
		this.phoneField.clear();
		return this;
	};

	this.clickSave = function() {
		this.saveButton.click();
		return require('./ConfirmationView.js');
	};

	this.clickDelete = function() {
		if ( this.deleteButton.isPresent() ) {
			this.deleteButton.isDisplayed().then(function (isVisible) {
				if (isVisible) {
					//TODO figure out scoping on this to refer to original definition
					element(by.id('delete-button')).click();
				}

			});		
		};
		return this;
	};
	this.refreshDeleteState = function() {
		this.deleteButton = element(by.id('delete-button'));
	};
	this.deleteAvailable = function() {
		this.refreshDeleteState();
		return this.deleteButton.isPresent() && this.deleteButton.isDisplayed();
	};
	this.ensureNoSavedData = function() {
		this.clearFields();
		this.clickDelete();
		return this;
	};
};


module.exports = new EntryView();