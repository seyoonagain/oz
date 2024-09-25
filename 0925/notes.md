# JavaScript

---

### **객체 Object**

- 객체 생성 방법: 객체 리터럴 표기법  
   중괄호 `{}` 안에 속성명(key)와 속성에 대한 값(value)을 담아 생성한다.

  ```js
  const person = {
    name: 'Seyoon Jeong',
    nationality: 'South Korea',
    greet: function () {
      console.log('Hello, world');
    },
  };
  ```

  여러 `key: value`의 쌍을 담을 수 있으며, 각각 콤마 `,`로 구분한다.  
  `value`에 함수를 입력하면 해당 속성은 메소드로 구분된다.  
  `key`는 중복될 수 없다.

- 객체의 value 접근 방법

  - 정적인 속성명

    - `객체명.key`
    - `객체명['key']`

  - 동적인 속성명

    - `객체명[key]`

  - 메소드
    - `객체명.key()`

- **스프레드 연산자(...)**

  - 객체 요소를 펼친다.  
    `...객체명`으로 표시하며, 해당 객체의 모든 요소(`key: value`)를 펼치는 것을 줄여쓴 것이다.
  - 기존 속성 수정 및 새로운 속성 추가  
    스프레드 연산 뒤 추가 요소를 입력했을 때,  
    객체 내 같은 `key`가 있으면 해당 `value`를 덮어쓰고,  
    없으면 새로운 `key: value`를 추가한다.

---

### **JSON**

_JavaScript Object Notation_

자바스크립트 객체를 다른 프로그래밍 언어에서도 사용하기 위해 문자열로 표기한 데이터 포맷

<br>

기본적으로 자바스크립트 객체를 표현하기 위한 포맷이기 때문에 객체 리터럴 표기법과 비슷하다.  
다만 객체 key와 value를 큰따옴표로 묶어서 표기한다.

- 자바스크립트 객체

  ```js
  const person = {
    name: 'Seyoon Jeong',
    nationality: 'South Korea',
    skills: ['JavaScript', 'HTML', 'CSS'],
  };
  ```

- JSON

  ```json
  const person = `{
  "name": "Seyoon Jeong",
  "nationality": "South Korea",
  "skills": ["JavaScript", "HTML", "CSS"],
  }`
  ```

**JSON 메소드**

JSON의 메소드를 이용하여 자바스크립트 객체 ↔ JSON 형식 간의 변환을 쉽게 할 수 있다.

|   메소드    |    기능     |                     특이사항                     |
| :---------: | :---------: | :----------------------------------------------: |
| stringify() | 객체 → JSON | `undefined`나 함수 등은 생략되거나 `null`로 변환 |
|   parse()   | JSON → 객체 |         작은따옴표나 후행 쉼표 파싱 불가         |

---

### **window.localStorage**

웹 브라우저에서 각 도메인에게 할당해주는 저장공간을 사용함으로써  
페이지를 새로고침하거나 브라우저를 껐다 켜도 저장된 데이터를 이용하여 브라우저를 렌더링 할 수 있다.

<br>

데이터 보관 시, 데이터의 명칭을 지정하고 실제 데이터를 함께 전달한다.  
이 때 데이터 타입은 문자열만 가능하다.

**localStorage 메소드**

|    메소드    |                  기능                  |             예시              |
| :----------: | :------------------------------------: | :---------------------------: |
|  setItem()   |     데이터를 로컬 스토리지에 저장      | setItem('데이터명', '데이터') |
|  getItem()   | 로컬 스토리지에서 데이터를 가져와 반환 |      getItem('데이터명')      |
| removeItem() |   로컬 스토리지에서 특정 데이터 삭제   |    removeItem('데이터명')     |
|   clear()    |   로컬 스토리지 내 모든 데이터 삭제    |            clear()            |

---

### 배열 메소드

|  메소드  |                                      기능                                       |
| :------: | :-----------------------------------------------------------------------------: |
|  map()   |       배열의 각각의 요소에 콜백함수를 실행한 결과를 담은 새로운 배열 반환       |
| filter() | 배열의 각각의 요소에 콜백함수를 실행한 결과가 true인 값만 담은 새로운 배열 반환 |

두 메소드 모두 원본 배열에는 영향을 끼치지 않고, 새로운 배열을 만들어낸다.

```js
const numbers = [1, 2, 3, 4, 5];
const mapNumbers = numbers.map(function (number) {
  return number + 1;
});
console.log(mapNumbers); // [2, 3, 4, 5, 6]

const filterNumbers = numbers.filter(function (number) {
  return number > 3;
});
console.log(filterNumbers); // [4, 5]
```

---
