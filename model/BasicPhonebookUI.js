
var BasicPhonebookUI = function() {
	this.root = 'http://jessfortier.com/tasters/phonebook/';
	this.go = function() { return require('./EntryView.js'); };
};

module.exports = new BasicPhonebookUI();