module.exports = function(app){
	var moment = require('moment');
	var User = app.models.user;


	var userControllers = {
		index:function(req,res){
			User.find(function(err,data){
				if(err){
					 console.error('Erro in find user'+err);
				}else{
					 res.render('user/index', {title:'User | Mr.Swift', database:data, moment:moment});
				} 
			});
			
		},
		create:function(req,res){
			res.render('user/create',
				{
					title:'User Create | Mr.Swift'
				});
		},
		insert:function(req,res){
			var model = new User(req.body)
			model.save(function(err){
				if (err){
					console.error('Error about save this user'+err);
				}
				res.redirect('/user');
			});
		}
	}
	return userControllers;
}