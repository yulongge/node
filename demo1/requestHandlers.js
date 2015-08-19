function start(){
	console.log("Request handler 'start' was called.");
	return "hello start";
}
function upload(){
	console.log("Request handler 'upload' was called.");
	return "hello Upload";
}
exports.start = start;
exports.upload = upload;
