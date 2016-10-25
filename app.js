var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var gal = [
	{name: 'pegunungan', img: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature-medium.jpg'},
	{name: 'rel', img: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails-medium.jpg'},
	{name: 'pegunungan', img: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature-medium.jpg'},
	{name: 'rel', img: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails-medium.jpg'},
	{name: 'pegunungan', img: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature-medium.jpg'},
	{name: 'rel', img: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails-medium.jpg'},
	{name: 'pegunungan', img: 'https://static.pexels.com/photos/1562/italian-landscape-mountains-nature-medium.jpg'},
	{name: 'rel', img: 'https://static.pexels.com/photos/3247/nature-forest-industry-rails-medium.jpg'},
	{name: 'japon', img: 'https://static.pexels.com/photos/33109/fall-autumn-red-season-medium.jpg'}
	];

app.get('/', function(req, res){
	res.render('home');
});

app.get('/gallery', function(req, res){
	res.render('gallery', {gallery: gal});
});

app.post('/gallery', function(req, res){
	var name = req.body.name;
	var img = req.body.img;
	var objData = {
		name: name,
		img: img
	}

	gal.push(objData);

	res.redirect('/gallery');
});

app.get('/gallery/new', function(req, res){
	res.render('galleryNew');
});

app.listen(3000, function(){
	console.log('Server has listening at port 3000');
});