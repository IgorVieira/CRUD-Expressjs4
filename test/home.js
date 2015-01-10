
var app = require('../app')
, should = require('should')
, request = require('supertest')(app);


	describe('Test controller home:', function() {
		it('Must perform GET in - "/"', function(done){
			request.get('/')
			.end(function(err, res){
			res.status.should.eql(200);
			done();
		});
	});
});