# JavaScript

---

### **DOM 관련 메소드**

|              메소드               |                          역할                           |
| :-------------------------------: | :-----------------------------------------------------: |
|     document.querySelector()      |     CSS 선택자를 이용해 일치하는 첫 번째 요소 선택      |
|    document.querySelectorAll()    |       CSS 선택자를 이용해 일치하는 모든 요소 선택       |
|     document.getElementById()     |                 id가 일치하는 요소 선택                 |
| document.getElementsByClassName() |            class명이 일치하는 모든 요소 선택            |
|         document.write()          |                   content에 내용 추가                   |
|        element.textContent        | 요소의 모든 공백을 포함한 텍스트 content에 반환 및 접근 |
|         element.innerText         |          요소의 텍스트 content에 반환 및 접근           |
|         element.innerHTML         |        요소 내 HTML을 텍스트 형태로 반환 및 접근        |
|         element.className         |               요소의 class명 반환 및 접근               |
|           element.style           |            요소의 스타일 속성값 반환 및 접근            |
|           element.title           |             요소의 title 속성 반환 및 접근              |

<br>

<h4> textContent vs. inner Text </h4>

```html
<div class="test">
  <span>test</span>
</div>
```

```js
const test = document.querySelector('.test');

console.log(test.textContent); //    test
console.log(test.innerText); // test
```

위의 보기와 같이, `textContent`은 `<span>` 태그 앞 공백까지 모두 포함하여 반환한다.

---

### **비교연산자**

- 자바스크립트에는 두 가지의 비교가 있다.

  - 대소 비교
  - 등가 비교

- 비교연산자의 종류와 의미

  | 연산자  |                  의미                   |
  | :-----: | :-------------------------------------: |
  |  a > b  |             a가 b보다 크다              |
  |  a < b  |             a가 b보다 작다              |
  | a >= b  |          a가 b보다 크거나 같다          |
  | a <= b  |          a가 b보다 작거나 같다          |
  | a == b  |            a가 b와 값이 같다            |
  | a != b  |         a와 b의 값이 같지 않다          |
  | a === b |     a와 b의 값과 데이터 타입이 같다     |
  | a !== b | a와 b의 값 또는 데이터 타입이 같지 않다 |

  ```js
  console.log(3 == '3'); // 데이터 타입은 각각 숫자와 문자열이지만 값이 같으므로 true
  console.log(3 === '3'); // 값은 같지만 데이터 타입이 다르므로 false
  console.log(3 != '3'); // 데이터 타입은 다르지만 값이 같으므로 false
  console.log(3 !== '3'); // 데이터 타입이 다르므로  true
  console.log(3 !== 5); // 데이터 타입은 같지만 값이 다르므로 true
  ```

---

### **window.parseInt()**

데이터 타입이 문자열인 숫자를 숫자 타입으로 변환한다.

<br>

`prompt()`를 이용하여 받아온 값은 숫자여도 문자열 형태로 저장된다.  
이 때 `parseInt(prompt('How old are you?'))`과 같이 `prompt()`를 `parseInt()`로 감싸줌으로써  
데이터가 숫자인 경우, 데이터 타입을 숫자로 바꾼다.

<br>

단, `parseInt()`는 정수 변환하기 때문에 소수점까지 반환하고자 한다면 `Number()`를 이용할 수 있다.  
꼼수같은 방법으론 데이터 앞에 `+` 표시만 해도 숫자 타입으로 바뀐다... 🫣

---

### **조건문**

주어진 조건에 대한 참/거짓 여부에 따라 프로그램 흐름을 결정하는 구문

```js
if(first condition) {
    // when the condition is true
} else if(second condition) {
    // when the first condition is false
    // and when the second condition is true
} else {
    // when all the conditions above are false
}
```

조건문은 첫 번째 조건부터 확인하고 충족하지 않으면 다음 조건으로 넘어가는 형식이므로,  
조건문 작성의 순서에 유의한다.

---
