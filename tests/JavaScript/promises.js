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
const p = new Promise((resolve, reject) => {
	//resolve - срабатывет тогда, когда асинхронная операция завершена успешно
	//reject - не успешно
	setTimeout(()=>{
		
		console.log('Preparing data...');
		const backendData = {
			server: 'local',
			port: 2000
		};
		resolve(backendData);//передаём объект в случае успешного завершения операции
	}, 2000)
});

p.then((data)=>{ //then означает "затем" (после успешного выполнения)

//.then(callback) - по сути просто функция, но вызывается через resolve(callback)
	
	const p2 = new Promise((resolve, reject) => {
		setTimeout(() => {
			data.modified = true; //меняем свойство объекта полученного из 36строчки
			resolve(data) //передаём результат в случае успешного завершения операции
		}, 2000);
	});
	p2.then(clientData => {
		console.log('Data received', clientData)  //возвращаем результат
	})
	
});