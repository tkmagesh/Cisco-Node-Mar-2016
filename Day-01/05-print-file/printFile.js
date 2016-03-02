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

fs.readFile(filename, {encoding : 'utf8'}, function(err, fileContents){
	if (err){
		console.log('something went wrong -> ', err);
		return;
	}
	console.log(fileContents);	
	console.log('====== End Of File ======');
});

//process.argv