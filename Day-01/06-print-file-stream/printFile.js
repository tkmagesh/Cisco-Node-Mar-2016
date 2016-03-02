var fs = require('fs');
var filename = process.argv[2];
if (!filename){
	console.log('filename is mandatory');
	process.exit(1);
}
if (!fs.existsSync(filename)){
	console.log('file doesnot exist');
	process.exit(1);
}

var stream = fs.createReadStream(filename, {encoding : 'utf8'});
var readCount = 0;
stream.on('data', function(chunk){
	//console.log(chunk);
	++readCount;
});

stream.pipe(process.stdout);

stream.on('end', function(){
	console.log('====== End Of File ====== {with readCounts = ' + readCount + '}');
});
stream.on('error', function(err){
	console.log('something went wrong -> ', err);
})
