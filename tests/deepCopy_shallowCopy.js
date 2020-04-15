//shallowCopy (Мелкая копия) - означает только ссылку на исходную сущность
/*let a = {
	name: 'name - a',
	age: 20,
};

let b = a; //объект не копируется, а просто получает ссылку на объект
b.name = 'name - b';

console.log(a); //name - b, т.к. мы переназначили
console.log(b);*/


//deepCopy (Глубокая копия) - клонирует исходную сущность и создаёт новую несвязанную копию

let a = {
	name: 'name - a',
	protocol: 'https',
	maxPeople: 10,
	isOnline: true,
	people: ['alesha', 'andrey', 'dimich'],
	classroom: {
		teacher: {
			name: 'dimich',
			age: 32,
		}
	}
};

let b = {...a};//используя "spret operator (...), раскладываем объект на список независимых свойст в {}" копируется объект, но вложенные в него объекты остаются ССЫЛКАМИ

b.name = 'name - b';
b.isOnline = false;
b.people.push('Marry'); //изменит и в оригинале (object a) т.к. массив это тоже объект, а b.people является просто ссылкой, по этому нужно делать через spret
b.people = [...a.people]; //копируется объект (используем spret)
b.people.push('Aleshenka'); //не изменит в оригинале (object a) т.к. это уже не ссылка на оригинал

console.log(a); 
console.log(b);


let arr = [1,2,3,4];
let myArr = {...arr};
console.log(myArr);
