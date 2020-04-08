let num = 50;

/*
while(num<50) {
	console.log(num);
	num++;
}*/

{
	do {
		console.log(num);
		num++;
	}
	while(num<53);
}

{
	for (let i=0; i<5; i++) {
		
		if(i===3) {
			continue
			//break
		}
		console.log(`i = ${i}`);
	}
}
