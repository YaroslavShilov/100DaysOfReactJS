# #100DaysOfCode

# day 4
	* Video course. Lesson 10 ready

# day 3
    * Finished a theme about tic-tac-toe game
    * Started my simple page
# day 2
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

# day 1
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

# day 0
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