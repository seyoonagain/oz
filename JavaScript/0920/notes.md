# JavaScript

---

### **객체 _Object_**

자바스크립트는 **입력 → 처리 → 출력**의 절차대로 작업이 이루어진다.  
이 때, 자바스크립트에서 명령을 입력하여 어떤 처리를 지시하고자 하는 대상을 **객체**라고 한다.

<br>

**객체**는 속성에 대한 값과 동작을 수행하는 기능을 가지고 있는 데이터이다.

---

### **객체 접근 방식**

- 객체의 속성에 접근하는 방식

  - 객체의 속성명이 동적인 경우
    1. `객체[속성명]`
  - 객체의 속성명이 동적이지 않은 경우
    1. `객체.속성명`
    2. `객체.['속성명']`

- 객체의 메소드에 접근하는 방식
  - `객체.메소드()`

---

### **생성자 함수**

객체를 정의할 때 사용하는 함수로,
생성자 함수 내에서 `this.`를 이용하여 해당 객체의 속성이나 메소드를 정의할 수 있다.  
생성자 함수의 첫 글자는 대문자로 작성하는 것이 일반적이다.

<br>

만들어진 생성자와 `new` 키워드를 이용하여 객체를 생성할 수 있다.

```js
// 생성자 함수 정의
function Person() {
  this.nationality = 'Korea';
  this.gender = 'female';
}

// 객체 생성
const seyoon = new Person();

console.log(seyoon.nationality); // Korea
console.log(seyoon.gender); // female
```

생성자 함수에도 매개변수를 설정할 수 있다.

```js
// 생성자 함수 정의
function Person(nationality, gender) {
  this.nationality = nationality;
  this.gender = gender;
  this.sayHello = function () {
    console.log('Hello, world!');
  };
}

// 객체 생성
const meghan = new Person('Singapore', 'female');
const ilja = new Person('Canada', 'male');

console.log(meghan.nationality); // Singapore
console.log(meghan.gender); // female
console.log(meghan.sayHello()); // Hello, world!
console.log(ilja.nationality); // Canada
console.log(ilja.gender); // male
console.log(ilja.sayHello()); // Hello, world!
```

---

### **빌트인 생성자 / 빌트인 객체**

자바스크립트 내에 탑재되어 있는 기본 생성자 및 객체들이 있고,  
이를 각각 빌트인 생성자, 빌트인 객체라고 부른다.

- 빌트인 생성자 `Date`  
  날짜와 시간을 처리하는 다양한 메소드가 정의되어있다.
  - `new Date()`  
    코드가 실행되는 시점의 날짜와 시간 정보를 담는 객체를 생성한다.
  - `new Date(년, 월, 일, 시, 분, 초, 밀리초)`  
    특정 날짜 및 시간대의 객체를 생성한다.  
    월은 월의 인덱스 값으로 실제 월에서 -1 한 값을 입력한다.  
    최소 두 개의 파라미터를 반드시 전달해야 한다. (년, 월)
  - `Date`
    객체끼리의 연산은 밀리초 _ms_ 단위로 연산된다.
  - `Date`의 주요 메소드
    |메소드|기능|특이사항|
    |:---:|:---:|:---:|
    |getFullYear| 연도를 숫자로 반환||
    |getMonth|월을 숫자로 반환|0부터 1월을 뜻한다.|
    |getDate|일자를 숫자로 반환||
    |getDay|요일을 숫자로 반환|0부터 일요일을 뜻한다|
    |getHOurs|시를 숫자로 반환||
    |getMinutes|분을 숫자로 반환||
    |getSeconds|초를 숫자로 반환||
    |toLocaleString|지역 날짜 및 시간을 문자열로 반환|'2024/09/14 13:07:37'|

---

### **setTimeout()**

설정한 만큼의 시간이 지나고 나면 특정한 함수를 1회 실행하는 메소드

`setTimeout(실행할 함수, 밀리초 단위 시간)`

```js
// 5초 후 time over이 콘솔에 출력
setTimeout(function () {
  console.log('time over');
}, 5000);
```

---

### **setInterval()**

설정한 만큼의 시간이 지날 때마다 특정한 함수를 반복하여 실행하는 메소드

`setInterval(실행할 함수, 밀리초 단위의 시간)`

```js
// 1초마다 time is passing을 콘솔에 출력
setInterval(function () {
  console.log('time is passing');
}, 1000);
```

### **clearInterval()**

`setInterval()`에 의해 반복되는 함수를 멈추는 메소드  
`setInterval()`의 반환 값(`setInterval`의 id)을 담고 있는 변수를 `clearInterval()`의 매개변수로 전달한다.

```js
const timer = setInterval(function () {
  console.log('time is passing');
}, 1000);

// 함수 반복 멈추기
clearInterval(timer);
```

---
