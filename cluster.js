var cluster = require('cluster')
, cpus = require('os').cpus();


if (cluster.isMaster) {
	cpus.forEach(function(cpu) {
		cluster.fork();
	});
		cluster.on('listening', function(worker) {
		console.log("Cluster process:%d - status:[ON]", worker.process.pid);
	});
		cluster.on('disconnect', function(worker) {
		console.log("Cluster process:%d - status:[Off]", worker.process.pid);
	});
		cluster.on('exit', function(worker) {
		console.log("Cluster process:%d - status:[DOWN]", worker.process.pid);
	});
} else {
	require('./app');
}