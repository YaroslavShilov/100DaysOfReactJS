function learnJS(lang, callback) {
	
	console.log("I learn "+lang);
	callback();
	
}

function done() {
	console.log('lesson 10 ready')

}

learnJS('React', done);