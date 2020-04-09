![Image of 100DaysOfCode](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/logo.jpg)
# List of themes
* [Типы данных в JS](#TypesJS)
* [Функции](#functions)

![Image of days](https://raw.githubusercontent.com/YaroslavShilov/100DaysOfCode/master/titles/11.jpg)
## Замыкания функций

## Функции <a name="funcitons">
**Функция** - нужна для вызова участка кода, который можно повторять несколько раз.
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

### Типы функций
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