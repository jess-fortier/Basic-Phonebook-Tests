var ConfirmationView = function() {
	this.storedName = element(by.id('saved-name'));
	this.backButton = element(by.buttonText('Go Back'));

	this.readName = function() {
		return this.storedName.getText();
	};
	this.clickBack = function(input) {
		this.backButton.click();
		return require('./EntryView.js');
	};
};

module.exports = new ConfirmationView();