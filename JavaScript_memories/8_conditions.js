let num = 50;

(num === 50) ? console.log('true') : console.log('false');

switch (num) {
	case num < 49: 
		console.log(true);
		break;
	case num > 100:
		console.log('too much');
		break;
	case num > 80:
		console.log('so too much');
		break;
	case 50: //num === 50
		console.log(50);
		break;
	default:
		console.log('error');
		break;
}

function doHomework(callback) {
	let result = false;
	setTimeout( function(){
		result = true
	}, 500 );
	callback(result);
}

doHomework(function(result) {
	console.log(result);
});
