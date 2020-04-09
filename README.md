# #100DaysOfCode

# Day 11

# Day 10
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

# Day 9
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
   

# Day 8
	* Video course. Lesson 22 ready
 - [x] Read about JavaScript fundamentals before learning React
 - [x] Read about ES6 object initializer
 - [x] Experiment with ES6 object initializer

 
# Day 7
	* Video course. Lesson 16 ready

 
# Day 6
 - [x] Read about ES6 classes
 
 
 
# Day 5

	* Video course. Lesson 13 ready
 - [x] read about React lists and keys
 - [x] recap the standard built-in array functionalities in JS
 - [x] Read about ES6 arrow functions

 

# Day 4
	* Video course. Lesson 10 ready
	* Start work on 'hackernews'
 - [x] define more variables and render them in your JSX (use a complex object to represent an user with a first name and last name)
 - [x] read more about JSX
 - [x] read more about React components, elements and instances


# Day 3
    * Finished a theme about tic-tac-toe game
    * Started my simple page
    
    
# Day 2
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


# Day 1
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

	## Типы данных JavaScript
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
	
	## Функции
	**Функция** - нужна для вызова участка кода, который можно повторять несколько раз.
	
	### Function Declaration
	```javascript
	function name() {
		code...	
	}
	```
	> Создается до начала выполнения скрипта, **можно вызвать перед объявлением.**
	
	### Function Expression (функциональное выражение)
	```javascript
  	let name = function() {
  		code...	
  	}
  ```
  > Создается только тогда, **когда доходит поток** кода, **можно вызвать только после объявления.**




# Day 0
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