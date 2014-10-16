var express = require("express"),
	app = express();
	bodyParser = require("body-parser");

	app.set('view engine', 'ejs');
	app.use (express.static(__dirname + '/public'));
	app.use (bodyParser.urlencoded({extended:true}));

	var articles = []; 
	// the array where articles will be stored
	var count = 1;

	// change username to article and password to title

// get /articles to display a summary of each article
// this takes us to the URL and runs the following function
app.get('/articles', function(req, res){
	
	
	res.render ('articles', {allMyArticles:  articles});

	
	// res.render: you always have to specify what that page is. on response, show this ejs file to the user.
});


// get /articles/new to get a form to save a new article
app.get('/new', function(req, res){

	res.render('new');
});

// app.post is a way to hide information. the way to trigger a post event is a form submission. app.get is standard way of receiving information
app.post('/articles', function(req, res){
	var newArticle = {};
	newArticle.id = count; 
	// the first article will have article one
	newArticle.title = req.body.article.title;
	console.log(req.body.article.title);
	console.log(articles);
	articles.push(newArticle);
	count++;
	res.redirect('/articles');
	// redirect will take you to this page without displaying any information
});

// get /articles/:id to find an article by id in the array of articles and display it.
app.get('/user/:id', function(req, res){
	var userID = Number(req.params.id);
	var foundUser;
	users.forEach(function(user){
		if(user.id === userID){
			foundUser = user;
		}
	});
	res.render('user', {user:foundUser});
});

app.listen (3000, function(){
	console.log("Server starting on port 3000");
});