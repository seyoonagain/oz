# JavaScript

---

**HTML**은 *Markup Language*로, 웹페이지의 구조와 내용을 정의하여 정적인 웹페이지를 만든다.  
**CSS**는 *Style Sheet Language*로, 웹페이지의 디자인과 레이아웃을 꾸며준다.  
**JavaScript**는 *Programming Language*로, 웹페이지에 동적인 기능과 사용자와의 상호작용을 가능하게 한다.

---

### **자바스크립트 코드 작성법**

1. HTML 문서 내부  
   `<script>` 태그 내부에 작성

2. 별도의 `.js` 파일 생성 후 HTML 파일과 연결

---

### **자바스크립트 동작 순서**

자바스크립트 코드를 통해 웹 브라우저, 웹 요소, 웹 스타일 등과 같은 소프트웨어적 대상 즉, 객체에게 명령을 전달하면 **입력** ➡ **처리** ➡ **출력** 순으로 작업이 이루어진다.

- **입력**  
   사용자로부터 입력을 받거나, 이벤트(클릭, 키 입력 등)가 발생

- **처리**  
   자바스크립트 코드가 입력을 처리하고, 필요한 연산을 수행하거나 DOM을 조작

- **출력**  
   처리된 결과를 사용자에게 표시

---

### **객체 접근법**

1. `객체.데이터`: 객체가 가지고 있는 속성에 대한 명령을 하고자 할 때

   ```js
   let person = {
     name: 'Séyoon',
     nationality: 'Korea',
   };

   console.log(person.name); // Séyoon
   person.nationality = 'South Korea';
   console.log(person.nationality); // South Korea
   ```

2. `객체.기능()`: 객체가 가지고 있는 기능을 *메소드 method*라고 하며, 해당 메소드를 수행하고자 할 때

   ```js
   let calculator = {
     add: function (a, b) {
       return a + b;
     },
     subtract: function (a, b) {
       return a - b;
     },
   };

   console.log(calculator.add(1, 1)); // 2
   console.log(calculator.subtract(10, 1)); // 9
   ```

---

### **주석 작성법**

1. `// 한 줄 주석`
2. `/* 여러 줄 주석 */`

---

### **콘솔 _console_**

콘솔은 자바스크립트 디버깅 및 로그 출력을 위해 사용되는 브라우저 객체이다.

- 접근 방법

  1. `window.console`

  2. `console`: 편의상 요렇게 많이 쓴다.

<br>

콘솔도 하나의 객체로서, 콘솔에게 명령을 전달할 수 있다.

- **콘솔의 주요 메소드**

  1. `console.log()`: 일반적인 메세지나 데이터 출력
  2. `console.error()`: 빨간색 경고 표시
  3. `console.warn()`: 노란색 경고 표시
  4. `console.clear()`: 콘솔에 출력된 모든 로그 지우기

`()` 사이에는 자바스크립트에서 정의된 형식의 자료형이 들어가야 한다.

---

### **자바스크립트 자료형**

1. **숫자 _number_**  
   정수 및 소수와 같은 숫자 데이터  
   e.g. `3.14`, `2024`
2. **문자열 _string_**  
   하나 이상의 문자로, 반드시 작은 따옴표 `''` 또는 큰 따옴표 `""` 안에 입력  
   e.g. `'Hello'`, `"World"`
3. **불리언 _boolean_**  
   참(`true`)과 거짓(`false`)을 나타내는 논리적 데이터
4. **객체 _object_**  
   여러 속성을 가지는 복합적 데이터 구조로, 배열, 함수도 객체의 일종
5. `null`  
   '값이 없음'을 명시
6. `undefined`  
   값이 할당되지 않은 상태

<br>

- 데이터의 자료형을 알고자 할 때, 데이터 앞에 `typeof`만 붙이면 된다.

  ```js
  console.log(typeof 200); // number
  console.log(typeof 'JavaScript'); // string
  console.log(typeof true); // boolean
  ```

- **주의할 것**  
  따옴표와 함께 작성하면 문자열로 간주되므로,  
   숫자나 불리언 타입의 데이터는 따옴표 없이 작성한다.

---

### **연산자**

1. a `+` b: a와 b를 더한다.
2. a `-` b: a에서 b를 뺀다.
3. a `*` b: a와 b를 곱한다.
4. a `/` b: a를 b로 나눈다.
5. a `%` b: a를 b로 나눈 나머지를 계산한다.
6. a `**` b: a의 b 제곱을 계산한다.

```js
let a = 10;
let b = 4;

console.log(a + b); // 14
console.log(a - b); // 6
console.log(a * b); // 40
console.log(a / b); // 2.5
console.log(a % b); // 2
console.log(a ** b); // 10000
```

---

### **변수 _variable_**

- 변수 선언 방법

  ```js
  let 변수; // 변수 선언
  변수 = 변수에 담을 데이터 // 변수 초기화

  let 변수2 = 변수2에 담을 데이터 // 변수 선언 및 초기화

  변수2 = 새로운 데이터 // 데이터 변경
  ```

- **변수 _variable_ vs. 상수 _constant_**

  - 변수는 데이터를 계속 바꿀 수 있다.
  - 상수는 데이터를 바꿀 수 없으므로, 선언과 동시에 데이터 초기화 작업이 이루어져야 한다.

- 변수명 제약사항

  1. 오직 문자와 숫자, 기호 `$`, `_`만 포함될 수 있다.
  2. 변수명은 숫자로 시작할 수 없다.
  3. 자바스크립트 키워드는 변수명으로 사용할 수 없다.

- 변수에 값을 대입하는 방법

  자바스크립트에서 하나의 등호 `=`는 **_같다는 의미가 아니다_**.  
  `=`를 기준으로 **오른쪽항의 데이터를 왼쪽항의 변수에 담는다**는 의미를 갖는다.

  ```js
  let day = 'Thursday';
  day = 'Friday'; // day라는 변수에 'Friday'라는 데이터를 담는다.
  ```

  - 연산자와 함께 사용하기

    - `a = a + 1`은 `a += 1`과 같다.  
       해당 수식은 `a`라는 변수에 해당 변수의 데이터에 1을 더한 값을 대입한다는 뜻이다.
      나머지 연산자에 대해서도 같은 규칙이 적용된다.

---
