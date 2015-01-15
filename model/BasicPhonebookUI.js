var EntryView = require('./EntryView.js')

BasicPhonebookUI.prototype = Object.create({}, {
	root: 'http://jessfortier.com/tasters/phonebook/',
	go: function(){ return EntryView.prototype; }
});

module.exports = BasicPhonebookUI;