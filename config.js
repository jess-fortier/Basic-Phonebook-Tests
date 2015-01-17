exports.config = {
	seleniumAddress: 'http://localhost:4444/wd/hub',
	specs: ['tests/name-spec.js', 'tests/phone-number-spec.js', 'tests/flow-spec.js'], 
	rootElement: 'body'
};