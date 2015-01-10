var mongoose = require('mongoose')
   ,bcrypt = require('bcrypt')


  module.exports = function(){
  	var user  =  mongoose.Schema({
  		nome     : {type:String, trim: true},
  		email    : {type:String},
  		password : {type:String},
  		data_cad : {type: Date, default: Date.now},

  	});

  	user.methods.generateHash =function(password){
  		return bcrypt.hashSync(password,bcrypt.genSaltSync(8),null)
  	}

  	return mongoose.model('User', user);
  } 