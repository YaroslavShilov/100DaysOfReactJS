# #100DaysOfCode

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
- [ ] Prototypical Inheritance -> ES6 Class
    ```javascript
    console.log(Object); // -> ƒ Object() { [native code] }
    console.log(Array); // -> ƒ Array() { [native code] }
    console.log(Function); // -> ƒ Function() { [native code] }
    ```
    > You don’t know it, but every time you create an object literal, the JavaScript engine is effectively calling new Object(). An object literal is an object created by writing {}, as in var obj = {};. So an object literal is an implicit call to Object.
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