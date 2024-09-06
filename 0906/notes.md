# JavaScript

---

### **문자열 _String_**

문자열 데이터 타입은 문자, 숫자, 특수문자를 조합한 형태이다.  
반드시 작은 따옴표 `''`나 큰 따옴표 `""` 사이에 입력한다.

<br>

<h4>문자열의 연산?</h4>
문자열을 대상으로 연산자 중 더하기 `+` 연산자를 이용해 여러 문자열을 이어 붙일 수 있다.

```js
console.log('Hello, ' + 'world!'); // Hello, world!
```

---

### **window.prompt()**

- `prompt()` 메소드를 이용하여 사용자로부터 데이터를 입력받을 수 있고,  
  해당 데이터는 문자열로 인식된다.

- `prompt()` 메소드는 사용자로부터 입력받은 문자열을 반환하기 때문에,  
  해당 데이터를 변수에 담아 사용할 수 있다.

```js
const name = prompt('What is your name?');

// prompt 창에 Séyoon이라고 입력했다고 가정

console.log(name); // Séyoon
```

---

### **템플릿 리터럴**

단독 문자열이 아닌, 반환값이 있는 자바스크립트 코드를 함께 작성할 수 있는 표현법으로,  
백틱 ` 사이에 데이터를 입력한다.

<br>

자바스크립트 코드는 백틱 내부에서 `${}`의 내부에 입력한다.

```js
let day = 'Thursady';
console.log(`Today is ${day}.`); // Today is Thursday.
```

---

### **null vs. undefined**

- `null`: 의도적으로 데이터가 없음을 명시
  ```js
  let number = null;
  console.log(number); // null
  ```
- `undefined`: 데이터가 정의되지 않음
  ```js
  let number;
  console.log(number); // undefined
  ```

---

### **논리형 데이터 불리언 _boolean_**

boolean 타입에 쓰일 수 있는 데이터는 두 가지로, 반드시 소문자로 써야 유효한 데이터로 인식된다.

- `true`: 참인 경우
- `false`: 거짓인 경우

<br>

- `prompt()` 입력 창에서 아무것도 입력하지 않은 상태로,
  1. `확인`을 누른 경우  
     공백의 데이터가 반환된다. (`null` 아님)
  2. `취소`를 누른 경우  
     `null`이 반환된다.

<br>

**window.confirm()**  
사용자로부터 확인(`true`)과 취소(`false`)를 입력받고 반환하는 브라우저 메소드

---

### **렌더링 _Rendering_**

**렌더링**이란?  
 HTML 코드를 해석하여 웹브라우저 화면에 보여주는 것

- 렌더링의 세부과정  
  `HTML 코드 해석 → 요소 간의 관계를 트리 형태로 구조화 → 화면에 렌더링`  
  HTML 코드를 트리 형태로 구조화한 것을 **DOM (Document Object Model)** 이라고 하며,
  DOM을 기반으로 화면에 콘텐츠가 렌더링됩니다.

---

### **DOM _Document Object Model_**

DOM은 **웹 콘텐츠를 추가, 수정, 삭제**하거나 **이벤트 처리**를 정의할 수 있도록 제공되는 프로그래밍 인터페이스 역할을 한다.  
처음에는 HTML 기반으로 DOM을 형성하고,  
형성 후에 HTML 코드를 바꾸지 않고 JavaScript를 이용해 DOM 구조를 바꿀 수 있다.

<h4>DOM 접근 방식</h4>
브라우저 객체인 `window`의 `document` 속성이 렌더링 되고 있는 페이지에 대한 문서를 참조하므로,
`window.document`를 이용하여 DOM에 접근할 수 있다.

- `window.document`로 가능한 작업

  - 페이지에 대한 정보 가져오기
  - 웹 요소 생성 및 조작

- `document`의 속성 예시

  - `querySelector()`  
    선택자를 인자로 받아 선택자와 일치하는 첫 번째 요소를 반환한다.  
    일치하는 요소가 없으면 `null`을 반환한다.  
    선택자는 CSS 선택자 유형과 똑같다.
    ```js
    const button = document.querySelector('button');
    const title = document.querySelector('#title');
    const menu = document.querySelector('.menu');
    ```

- `textContent`  
   선택한 요소의 텍스트 형태의 content를 읽거나 변경할 수 있다.
  ```js
  const title = document.querySelector('#title');
  title.textContent = 'Hello World';
  console.log(title.textContent); // Hello World
  ```

---
