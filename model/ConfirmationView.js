var ConfirmationView = function() {
	this.storedName = element(by.id('stored-name'));
	this.backButton = element(by.buttonText('Back'));

	this.reaName = function() {
		return this.storedName.getText();
	};
	this.clickBack = function(input) {
		this.backButton.click();
		return require('./EntryView.js');
	};
};

module.exports = new ConfirmationView();