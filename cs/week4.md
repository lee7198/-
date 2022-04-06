### 4주차 과제물

- var, let, const 의 차이점

var은 중복 선언이 가능하여 예기치 못한 값을 반환할 수 있습니다.

```jsx
var v = 'Hello'
console.log(v) // Hello

var v = 'World'
console.log(v) // World
```

- let과 const의 차이점은 재할당 차이 입니다.

let은 변수에 재할당이 가능합니다. 하지만 재선언은 불가합니다.

```jsx
let a = 'Hello'
console.log(a) // Hello

let a = 'World'
console.log(a) 
// Uncaught SyntaxError: Identifier 'a' has already been declared

a = 'Hello World'
console.log(a) //Hello World
```

const는 변수의 재선언, 재할당 모두 불가능합니다.

```javascript
const c = 'Hello'
console.log(c) // Hello

const c = 'World'
console.log(c) 
// Uncaught SyntaxError: Identifier 'c' has already been declared

c = 'Hello World'
//Uncaught TypeError: Assignment to constant variable.
```

- 호이스팅이란, var 선언, 함수 선언 등 해당 스코프(접근 범위)우선으로 읽어 동작하는 특성을 의미합니다.

```javascript
console.log(abc) // undefined (선언은 된 것.)
var abc = 123 

console.log(cba)
let cba // Error: Uncaught ReferenceError: cba is not defined

console.log(hh)
const hh // Error: Uncaught ReferenceError: cba is not defined
```

var의 서언문과 달리 let과 const로 선언문은 참조에러 (Refernce Error)가 발생합니다.

이는 변수는 선언 단계 > 초기화 단계 > 할당 단계에 걸쳐 생성되는데

var로 선언된 변수는 선언과 초기화가 동시에 이루어진다.

```javascript
console.log(v); // undefined

var v;
console.log(v); // undefined

v = 1; // 할당문에서 할당 단계가 실행된다.
console.log(v); // 1
```

let으로 선언된 변수는 선언과 초기화가 분리되어 진행된다.

```javascript
console.log(l); // ReferenceError: l is not defined

let l; // 변수 선언문에서 초기화 단계가 실행된다.
console.log(l); // undefined

foo = 1; // 할당문에서 할당 단계가 실행된다.
console.log(l); // 1
```

기본적으로 변수 선언은 const를 사용하고, 재할당이 필요한 경우 let을 사용하는 것이 좋다.

객체를 재할당하는 경우는 생각보다 흔하지 않다. const를 사용하면 의도치 않은 재할당을 방지해 주기 때문에 보다 안전하다.
