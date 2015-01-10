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
		},
		edit:function(req,res){
			User.findById(req.params.id, function(err, data){
				if(err){
				console.log(err);
				}else{
					res.render('user/edit', {value: data});
				}
			});
		},
		update: function(req,res){
			User.findById(req.params.id, function(err, data){
				if(err){
				  console.log('Error about req id'+err);
				}else{
					var model = data;
					model.nome = req.body.nome;
					model.email = req.body.email;
					model.save(function(err){
						if(err){
							console.log('Don´t save this user'+ere);
						}else{
							res.redirect('/user');
						}

					});
				}	
			})
		}

	}
	return userControllers;
}
