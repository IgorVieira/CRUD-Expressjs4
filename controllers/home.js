module.exports = function(app){
	var homeControllers = {
		index: function(req, res){
			res.render('home/index',
			{
				title:'Home | Mr.Swift'
				
			});
		}
	}

	return  homeControllers;
}
