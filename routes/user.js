module.exports = function(app){
	var user = app.controllers.user;

	app.get('/user', user.index);
	app.get('/user/create', user.create);
	app.post('/user',user.insert);
	app.get('/user/edit/:id',user.edit);
	app.post('/user/edit/:id', user.update);


}
