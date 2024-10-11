# **React & Redux**

---

### **JSX (_JavaScript XML_)**

HTML과 유사한 형태로, JavaScript 코드를 작성할 수 있는 확장 문법

- 작성 규칙

  - `return` 문 안에 HTML 문법처럼 작성
  - 두 줄 이상 작성할 경우, `return` 문을 소괄호`()`로 묶기
  - 최상위 요소는 단 하나만 존재
    - 최상위 요소로 가상 태그인 `<fragment></fragment>` 또는 빈 태그인 `<></>` 사용 가능  
       위 방식은 DOM에 불필요한 요소를 삽입하지 않음
  - JavaScript 코드 작성 시, 중괄호`{}`로 묶기

- 작성 예시

  ```jsx
  function Fruits() {
    const fruits = [
      { name: 'apple', color: 'red' },
      { name: 'grape', color: 'purple' },
      { name: 'banana', color: 'yellow' },
      { name: 'blueberry', color: 'blue' },
      { name: 'orange', color: 'orange' },
    ];
    return (
      <>
        {fruits.map((fruit) => (
          <div key={fruit.name}>
            과일: {fruit.name}, 색상: {fruit.color}
          </div>
        ))}
      </>
    );
  }
  ```

---
