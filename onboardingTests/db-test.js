var mongoose = require('mongoose');

mongoose.connect('mongodb://botty:password@ds141128.mlab.com:41128/meetup_db');

var test = mongoose.model('cars', {name: String});

var test1 = new test({ name: 'honda civic'});
test1.save(function(err) {
	if(err) {
		console.log('oh shit fuck');
	} else {
		console.log('done');
	}
});
