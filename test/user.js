
var app = require('../app')
, should = require('should')
, request = require('supertest')(app);


	describe('Test controller user:', function() {
		 var url = 'http://localhost:3000'
		it('Must perform GET in - "/user"', function(done){
				request.get('/user')
				.end(function(err, res){
				res.status.should.eql(200);
				done();
			});
		});
		it('Must perform GET in - "/user/create"', function(done){
				request.get('/user/create')
				.end(function(err, res){
				res.status.should.eql(200);
				done();
			});
		});
		it('Must perform POST to - "/user" and GO to "/user"',function(done){
				 request.post('/user')
				.end(function(err, res) {
				res.headers.location.should.eql('/user');
				done();
			});
		});
});