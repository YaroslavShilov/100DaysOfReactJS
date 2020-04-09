![Image of 100DaysOfCode](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/logo.jpg)

---
---
# List of themes
* [Типы данных в JS](#TypesJS)
* [Функции](#functions)
  + [Типы функций](#TypesFunctions)
  + [Замыкания](#closures)
* [Методы и Свойства](#methodsAndProperties)
* [Callback](#callback)
* [Регулярные выражения](#regularExpressions)
---
---
![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/11.jpg)
## Регулярные выражения <a name="regularExpressions"></a>
**Регулярные выражения** - средство для поиска и замены в строке 

> Регулярное выражение (оно же «регэксп», «регулярка» или просто «рег»), состоит из шаблона (также говорят «паттерн») и необязательных флагов.

### Создание
Короткий синтаксис, использующий слеши "/":
```
let re = /ab+c/;
```

«Длинный» синтаксис:
```
let re = new RegExp("ab+c");
```

Основная разница между этими двумя способами создания заключается в том, что слеши /.../ не допускают никаких вставок переменных (наподобие возможных в строках через ${...}). Они полностью статичны.
### Флаги
* i - С этим флагом поиск не зависит от регистра
* g - С этим флагом поиск ищет все совпадения, без него – только первое
* m - Многострочный режим
* s - Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n
* u - Включает полную поддержку юникода. Флаг разрешает корректную обработку суррогатных пар
* y - Режим поиска на конкретной позиции в тексте
```
let str = "Любо, братцы, любо!";

alert( str.match(/любо/gi) ); // Любо,любо (массив из 2х подстрок-совпадений)
```


## Callback-function <a name="callback"></a>
**callback** - это функция, которая должна быть выполнена после того, как другая функция завершила свое выполнение

```
function first(){
  // Как будто бы долгий запрос к API
  console.log(1);
}
function second(){
  console.log(2);
}
first();
second();

//result: 2 1
```
> т.к. после вызова функции *first* JavaScript не дожидается ответа от этой функции и идет дальше к функции *second*

> Нельзя просто вызывать функции в нужном порядке и надеяться, что они в любом случае выполнятся в том же порядке. Коллбэки же позволяют нам быть уверенными в том, что определенный код не начнет исполнение до того момента, пока другой код не завершит исполнение.

```
function sumNums(arg1, arg2, callback) {
    let result = arg1 - arg2;
    // теперь всё готово и  мы вызываем callback, куда передаём наш результат
    callback(result);
}

sumNums(5, 15, function (num) {
    console.log(num); //20
});
```


## Методы и Свойства<a name="methodsAndProperties"></a>
> Все значения в JavaScript, за исключением null и undefined, содержат набор вспомогательных функций и значений, доступных «через точку».

**Методы** - это вспомогательные **функции**
```
//toUpperCase() - это метод, который есть у строк
let message = 'method';
let upperMessage = message.toUpperCase();

//push() и unshift()  - это методы, которые есть у массивов (методы массивов)
let arr = [1,2,3]
arr.push(4) - добавляет в конец
arr.unshift(0) - добавляет в начало
```
**Свойства** - это вспомогательные **значения**
```
//length - это свойство, которое есть у строк
console.log('text'.length)//4
```



## Замыкания<a name="closures"></a>
**Замыкания** - это функции, ссылающиеся на независимые (свободные) переменные. Другими словами, функция, определённая в замыкании, "запоминает" окружение, в котором она была создана.
> Независимые переменные — это все переменные, которые не были переданы как параметры и не были объявлены как локальные.
```javascript
function createCounter() {
  let counter = 0;
  const myFunction = function() { // локальная функция
    counter = counter + 1; //counter - независимая переменная
    return counter
  };
  return myFunction
}
```
> Напоминаю, что Замыкание хранит переменные из своей области видимости. В нашем случае это переменная counter
```
const increment = createCounter(); //при выполнении этой функции, myFunction сохраняет переменную counter = 0 (доставшуюся ей как назависимая переменная);
/* increment = function() {
   //достался counter = 0;
   counter = counter + 1;
   return counter; 
*/
const c1 = increment(); 
/* c1 = function() {
		//counter = 0
   counter = 0 + 1;
   return counter;
}
c1 = 1
 */
const c2 = increment();
/* c2 = function() {
		//counter = 1
   counter = counter + 1;//теперь в функции лежит counter = 2
   return counter;
}
c2 = 2
 */
const c3 = increment();
/* c3 = function() {
   //counter = 2;
   counter = counter + 1;//теперь в функции лежит counter = 3
   return counter;
}
c2 = 3
 */
console.log(c1,c2,c3); //1,2,3
```

## Функции <a name="functions"></a>
**Функция** - нужна для вызова участка кода, который можно повторять несколько раз.
> JS функция - это объект, по этому функции могут принимать другие функции в качеству аргументов, а так же возвращать функции в качестве результата. (такие функции называются "функции высшего порядка")
```
console.log(Object); // -> ƒ Object() { [native code] }
console.log(Array); // -> ƒ Array() { [native code] }
console.log(Function); // -> ƒ Function() { [native code] }
```

> Имя функции как правило = глагол + то над чем должно выполняться действие

```javascript
let text = 'text'; //глобальная переменная 

function showTitle(title) { //title - параметр
	let text = 'local variable'; //локальная переменная, она не доступна вне функции
	console.log(title);
	console.log(text); //выведет 'local variable' т.к. поднимаясь на уровень выше, локальные переменные идут раньше глобальных
};

console.log(text); //выведет 'text' т.к. локальная переменная тут недоступна

showTitle('Заголовок'); //'Заголовок' - аргумент
```
> Параметры - это **локальные переменные**, которым присваивается значение в момент вызова функции

> Аргументы - это **значения передаваемые** в функцию при её вызове

```javascript
             //а,b - параметры
function calc(a+b) {
	console.log(a+b);
};
    //9,5 - аргументы
calc(9,5);
```

### Выполнение функции
1. JavaScript создаёт новую область выполнения — локальную область выполнения.
2. Локальная область выполнения имеет свой набор переменных, которые будут локальными для этой области выполнения.
3. Новая область выполнения передаётся в стек выполнения. Думайте о стеке выполнения, как о механизме слежения за ходом исполнения программы.
### Когда функция заканчивается
1. Локальные области выполнения выходят из стека выполнения.
2. Функция отправляет return-значение обратно в область вызова. Область вызова — это область, которая вызвала эту функцию. Это может быть другая локальная область выполнения или глобальная. Что делать со значением return будет разбираться вызвавшая область выполнения. Возвращаемым значением может быть объект, массив, функция, значение истинности, да и вообще что угодно. Если у функции отсутствует return, то вернётся undefined.
3. Локальная область выполнения разрушается. Это важно. Разрушается. Все переменные, которые были объявлены внутри локальной области выполнения стираются. Они больше не доступны. Поэтому они называются локальными переменными.



### Типы функций <a name="TypesFunctions"></a>
#### Function Declaration
```javascript
function name() {
  code...	
}
```
> Создается до начала выполнения скрипта, **можно вызвать перед объявлением.**

#### Function Expression (функциональное выражение)
```javascript
let name = function() {
  code...	
}
```
> Создается только тогда, **когда доходит поток** кода, **можно вызвать только после объявления.**

#### Arrow Function
```javascript
() => {
  code...
}
```
> Не имеет своего *this*


![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/10.jpg)

```
1. JavaScript
   1. Conditions
      1. while()
      2. for()
   2. Homework
``` 
```
2. React video course
   1. FLUX
   2. Observer
   3. store in state.js
   4. Refactoring
   
   * lesson 37 ready
   * progress: 13/52hrs
   
```

![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/9.jpg)

```
1. JavaScript
   1. Condition switch()
   2. Homework
``` 
```
2. React video course
   1. Props for messages
   2. BLL
   3. map()
   4. Mind map
   5. BLL to index.js
   6. Route props to component
   7. BLL to redux/state.js
   8. VirtualDOM
   9. createRef()
   10. Callback in props
   
   * lesson 32 ready
   
```
   

![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/8.jpg)

	* Video course. Lesson 22 ready
 - [x] Read about JavaScript fundamentals before learning React
 - [x] Read about ES6 object initializer
 - [x] Experiment with ES6 object initializer

 
![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/7.jpg)

	* Video course. Lesson 16 ready

 
![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/6.jpg)

 - [x] Read about ES6 classes
 
 
 
![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/5.jpg)


	* Video course. Lesson 13 ready
 - [x] read about React lists and keys
 - [x] recap the standard built-in array functionalities in JS
 - [x] Read about ES6 arrow functions

 

![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/4.jpg)

	* Video course. Lesson 10 ready
	* Start work on 'hackernews'
 - [x] define more variables and render them in your JSX (use a complex object to represent an user with a first name and last name)
 - [x] read more about JSX
 - [x] read more about React components, elements and instances


![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/3.jpg)

    * Finished a theme about tic-tac-toe game
    * Started my simple page
    
    
![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/2.jpg)

- [x] Prototypical Inheritance -> ES6 Class
    ```javascript
    console.log(Object); // -> ƒ Object() { [native code] }
    console.log(Array); // -> ƒ Array() { [native code] }
    console.log(Function); // -> ƒ Function() { [native code] }
    ```
    > You don’t know it, but every time you create an object literal, the JavaScript engine is effectively calling new Object(). An object literal is an object created by writing {}, as in var obj = {};. So an object literal is an implicit call to Object.
- [x] Callbacks and Promises

    ```javascript
    let promise = new Promise(function(resolve, reject) {
      // executor (the producing code, "singer")
    });
    resolve(value) — if the job finished successfully, with result value.
    reject(error) — if an error occurred, error is the error object.
    ```
- [x] Event Loop
- [x] Event Bubbling
- [x] Regular Expressions
    > A regular expression is a sequence of characters that forms a search pattern. When you search for data in a text, you can use this search pattern to describe what you are searching for.
- [x] Error Handling
- [x] JavaScript ES6 and beyond
- [x] Hoisting, Memoization
- [x] Declarative vs imperative programming
- [x] Functional vs object-oriented programming

    ## React documentation
    * install react project tic-tac-toe


![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/1.jpg)

 I've recalled:
- [x] Functions
- [x] bind()
- [x] call()
- [x] apply()

    ---                  | time of function execution | time of this binding
    ---                  | ---                        | ---
    function object f    | future                     | future
    function call f()    | now                        | now
    f.call() / f.apply() | now                        | now
    f.bind()             | future                     | now
    - [x] scopes and closures
    > If you define any inner function within another function, this inner function is called a closure. It retains access to the variables created in the outer function.
- [x] this
- [x] Object Methods
    > * JavaScript methods are actions that can be performed on 
    > * A JavaScript method is a property containing a function definition.
    > * Methods are functions stored as object properties.
- [x] Array Methods

	## Типы данных JavaScript <a name="TypesJS"></a>
	### Простые типы
	* Numbers 1,2,3
	* String 'name'
	* Логический тип (boolean)
	* true / false
	* null
	* undefined
	* Symbol
	### Объекты
	* Обычне объекты
	#### Спец. объекты
	* Array []
	* function
	* Объекты Дата
	* Регулярные выражения
	* Ошибки



![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/0.jpg)
 First of all, I need to recall JavaScript especially:
- [ ] Functions
- [ ] bind(), apply(), and call()
- [ ] scopes and closures
- [ ] this
- [ ] Object Methods
- [ ] Array Methods
- [ ] Prototypical Inheritance -> ES6 Class
- [ ] Callbacks and Promises
- [ ] Event Loop
- [ ] Event Bubbling
- [ ] Regular Expressions
- [ ] Error Handling
- [ ] JavaScript ES6 and beyond
- [ ] Hoisting, Memoization
- [ ] Declarative vs imperative programming
- [ ] Functional vs object-oriented programming