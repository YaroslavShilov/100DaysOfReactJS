//симулятор загрузки данных с сервера

console.log('Request data....'); //срабатывает сразу

/*
//не верный путь
setTimeout(()=>{ //срабатывает через 2сек (типо загрузка)
	console.log('Preparing data...');
	
	const backendData = {
		server: 'local',
		port: 2000
	};
	
	setTimeout(() => { //срабатывает ещё через 2сек (типо загрузилось)
		backendData.modified = true;
		console.log('Data received', backendData)
	}, 2000);
	
	console.log(backendData.modified) //undefined т.к. вызов произошел до завершения сетТаймаута выше
	
}, 2000);
*/

//верный вариант используя промисы
/*
const p = new Promise((resolve, reject) => {
	setTimeout(()=>{ 
		console.log('Preparing data...');
		const backendData = {
			server: 'local',
			port: 2000
		};
		resolve(backendData);
		
	}, 2000)
});

p.then((data)=>{

	return new Promise((resolve, reject) => {
		setTimeout(() => { 
			
			data.modified = true;
			resolve(data)
			/!*
			reject(data) //передаём как ошибку
			 *!/
		}, 2000);
	});
	
}).then(clientData => {
		console.log(clientData)
	})
	.catch(err => console.error('error: ', err)) //выводим ошибку
	.finally(() => console.log('finally'))//будет вызван в любом случае (даже если была ошибка)*/


const sleep = ms => new Promise(resolve => { //в resolve прийдёт аргумент из .then()
	setTimeout(() => resolve(), ms)
});

Promise.all([sleep(2000), sleep(3000)])
/*
в данный метод передаётся массив промисов, так же вернёт промис, который выполнится только
тогда, когда завершатся все промисы переданные в этот метод (all())

передали sleep() т.к. он возвращает промис 
(сокращенно написано стрелочной функцией по этому return не написали)
 */
.then(() => console.log('finish all promises')); //выполнится через 3сек.


Promise.race([sleep(2000), sleep(3000)])
	/*
в данный метод передаётся массив промисов, так же вернёт промис, 
который выполнится сразу, как только выполнится самый быстрый промис
 */
	.then(() => console.log('race promises')); //выполнится через 2сек. , не ждёт следующий