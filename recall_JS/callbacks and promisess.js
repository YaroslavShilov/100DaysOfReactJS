function greeting(name) {
	console.log(`Hello ${name}`);
}
function user(callback) {
	let text = console.log('please enter your name');
	let name = 'John';
	callback(name);
}

user(greeting);


function loadScript(src, callback) {
	let script = document.createElement('script');
	
	script.src = src;
	script.onload = () => callback(script);
	
	document.head.append(script);
}

loadScript('/my/burger.js', function() {
	console.log('burger time');
});


let promise = new Promis(function(resolve, reject) {
	// executor (the producing code, "singer")
});




