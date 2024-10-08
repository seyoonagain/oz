# JavaScript

---

### **함수 _function_**

<h4>함수란?</h4>

특정 작업을 실행하는 코드 블록  
반복되는 작업이 있는 경우, 코드를 반복해서 쓰지 않고 함수로 정의함으로써  
해당 코드의 재사용이 가능해지고, 코드의 가독성이 좋아진다.

<br>

- 함수 만드는 방법

  - 함수 선언식

    ```js
    function 함수명() {
      // 실행할 작업
    }
    ```

  - 함수 표현식
    ```js
    const 함수명 = function () {
      // 실행할 작업
    };
    ```

- 함수 실행하기  
  함수를 만들기만 해서는 아무런 일도 일어나지 않는다.  
   만든 함수를 호출해주는 코드 작성이 반드시 필요하다.

  ```js
  const sayHello = function () {
    console.log('Hello');
  };

  sayHello(); // 함수 호출
  ```

  위와 같이 함수명 뒤에 소괄호 `()`를 붙여 호출한다.

---

### **함수 선언식 vs 함수 표현식**

- 함수 선언식  
   호이스팅이 되어 함수 선언식 이전에 호출이 가능하다.

  ```js
  sayHello(); // Hello

  function sayHello() {
    console.log('Hello');
  }
  ```

- 함수 표현식
  호이스팅이 되지 않아 함수 표현식 이전에 호출이 불가하다.

  ```js
  sayBye(); // Error

  const sayBye() {
      console.log('Bye')
  }
  ```

---

### **인수/인자 _argument_**

함수 호출시 사용하는 소괄호 `()`안에는 함수에 전달할 데이터를 입력할 수 있다.  
인자를 전달받기 위해서는 함수 정의시 **매개변수 _parameter_**을 설정해야 한다.

```js
function sayHello(name) {
  console.log(`Hello, ${name}!`);
}

sayHello('Seyoon'); // Hello, Seyoon!
```

여러 개의 매개변수 설정 시, 콤마 `,`를 이용해 구분하며,  
호출 시에도 설정된 매개변수의 순서대로 데이터를 입력한다.

<br>

설정된 매개변수보다 적은 인자를 전달받은 경우,  
데이터를 전달받지 못한 매개변수는 `undefined`로 설정된다.

---

### **반환 _return_**

`return` 키워드 뒤에 반환할 값을 입력한다.  
`return` 사용 시, 데이터 반환과 동시에 함수는 종료된다.

```js
function sayHello(name) {
  return `Hello, ${name}!`;
}

console.log(sayHello('Seyoon')); // Hello, Seyoon!
```

---
