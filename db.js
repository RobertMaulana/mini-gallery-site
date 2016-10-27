var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/yelpcamp');

var yelpSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model('Cat', yelpSchema);

Cat.create({
	name: 'Maulana',
	age: 12,
	temperament: 'hehe'
}, function(err, cat){
	if (err) {
		console.log('sepertinya ada masalah');
		console.log(err);
	}else{
		console.log('data berhasil disimpan');
		console.log(cat);
	}
});

Cat.find({},function(err, cats){
	if (err) {
		console.log('sepertinya ada yang salah');
		console.log(err);
	}else{
		console.log('list of data');
		console.log(cats);
	}
});

