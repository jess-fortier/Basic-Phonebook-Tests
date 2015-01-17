exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['tests/phone-number-spec.js','tests/name-spec.js'],
	rootElement: 'body'
};