# JavaScript

---

### **document.createElement()**

괄호 안에 HTML요소를 적으면 해당 요소를 만들어 반환한다.  
만들어진 HTML 요소는 브라우저에 바로 표시되지 않고 자바스크립트 코드에만 존재한다.

_e.g._

```js
const div = document.createElement('div');
```

---

### **appendChild()**

DOM 내의 특정 요소(노드)에 자식 요소를 추가하고자 할 때 사용한다.

_e.g._

```js
const div = document.createElement('div');
document.body.appendChild(div);
```

<br>

- `append()` 와의 차이점
  - `appendChild()`는 노드 객체(HTML 요소)만을 자식 요소로 추가할 수 있지만,  
     `append()`는 노드 객체뿐만 아니라 문자열을 자식 요소로 추가할 수 있다.
  - `appendChild()`는 추가한 자식 노드를 리턴하지만,  
     `append()`는 리턴 값이 없다.

---
