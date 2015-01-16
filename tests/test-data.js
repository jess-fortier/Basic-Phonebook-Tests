/**
 * Object literals to represent the various test data needed to fully exercise the app.
 */

var testData = {

	// Values to submit to the name field
	nameField: {
		invalid: {
			'is the empty string': '',
			'is whitespace only': '\n \t'			
		},
		valid: {
			'is alpha only': 'foo',
			'is alphanumeric': '1337h4x',
			'contains spaces and symbols': 'John O\'Connor (M.D.)'
		}
	},

	// Values to submit to the phone number field
	phoneField: {
		invalid: {
			'is the empty string': '',
			'begins with zero': '0123456789',
			'contains alpha': '1234567890x',
			'contains < 10 digits': '123456789',
			'contains > 11 digits': '112344567789',
			'contains invalid symbols': '(123) 456-7890'
		},
		valid: {
			'contains 10 digits': '1234567890',
			'contains 11 digits': '12345678900',
			'contains spaces, dashes, and dots': ' 1-234 567.8900 '
		}
	}
}


module.exports = testData;