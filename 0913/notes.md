# JavaScript

---

### **이벤트 _Event_**

DOM에서 발생하는 다양한 상호작용 동작을 일컫는 프로그래밍 인터페이스

- 이벤트 예시

  - 마우스 이벤트

    - `click`  
       사용자가 요소를 클릭할 때
    - `dbclick`  
       사용자가 요소를 더블 클릭할 때
    - `mousedown`  
      마우스 버튼을 누를 때
    - `mouseup`  
      마우스 버튼을 뗄 때
    - `mousemove`  
      마우스를 움직일 때
    - `mouseover`  
      마우스가 요소 위로 올라갔을 때
    - `mouseout`  
      마우스가 요소 밖으로 나갔을 때
    - `contextmenu`  
      마우스 오른쪽 버튼을 클릭할 때

  - 키보드 이벤트

    - `keydown`  
       키를 눌렀을 때
    - `keypress`  
      키를 누르고 있을 때 (권장되지 않음)
    - `keyup`  
      키를 뗄 때

  - 포커스 이벤트

    - `focus`  
       입력 요소에 포커스 되었을 때
    - `blur`  
       입력 요소에서 포커스가 빠질 때

  - 폼 이벤트

    - `submit`  
       폼이 제출될 때
    - `change`  
       입력 요소의 값이 변경될 때
    - `input`  
       사용자가 입력을 할 때
    - `reset`  
       폼이 초기화될 때

  - 터치 이벤트 (모바일 기기에서 주로 사용)

    - `touchstart`  
      화면에 손가락이 닿을 때
    - `touchmove`  
      화면에서 손가락이 움직일 때
    - `touchend`  
      화면에서 손가락을 뗄 때

  - 스크롤 이벤트

    - `scroll`  
      사용자가 페이지나 요소를 스크롤할 때

  - 드래그 이벤트

    - `dragstart`  
       드래그를 시작할 때
    - `drag`  
      드래그하는 동안
    - `dragend`  
      드래그가 끝날 때
    - `dragenter`  
      드래그된 요소가 대상 요소에 진입할 때
    - `dragleave`  
      드래그된 요소가 대상 요소에서 벗어날 때
    - `drop`  
      드래그된 요소가 대상 요소에 놓일 때

---

### **이벤트 핸들러 _Event Handler_**

이벤트가 발생하였을 때 수행되도록 설정한 특정 동작을 **이벤트 핸들러**라고 한다.  
이벤트 핸들러는 주로 함수 형태로 만든다.

- 이벤트 속성을 이용한 이벤트 핸들러

  - 이벤트 속성: `on + 이벤트명`
  - `target.이벤트 속성 = 이벤트 핸들러`

  ```js
  const button = document.querySelector('#button');
  function handleClick() {
    console.log('clicked button');
  }
  button.onclick = handleClick; // clicked button
  ```

  함수를 `()`와 함께 쓰면 바로 실행되기 때문에 `()`없이 함수명만 이벤트 속성에 대입해주면, 이벤트 발생 시 함수가 실행된다.

<br>

- `addEventListener(이벤트명, 이벤트 핸들러)`
  - `removeEventListener()`을 통해 이벤트를 삭제할 수 있다.  
    (이 때, 이벤트명, 이벤트 핸들러가 정확히 일치해야 한다.)
  - 같은 타겟에 대한 여러 이벤트 핸들러를 등록할 수 있다.
  - 이벤트 객체
    - `target.addEventListener('이벤트명', function(이벤트객체){이벤트 핸들러 동작})`
    - 이벤트 객체는 이벤트 핸들러에 매개변수로 전달된다.
    - 이벤트 객체는 이벤트가 발생한 요소(target), 이벤트 유형(type), 좌표(clientX, clientY) 등의 정보를 포함하며, 이를 이용해 추가적인 기능을 구현할 수 있다.

---

### **value**

사용자가 요소에 직접 입력한 값에 접근하고자 할 때 쓰는 속성

- `<form>`요소로부터 입력받은 여러 `value`에 접근하고자 할 때,  
   `name` 속성을 이용하여 접근한다.

```html
<form>
  <input name="이름" />
  <input name="나이" />
  <input type="submit" />
</form>
```

```js
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  console.log(e.target.이름.value);
  console.log(e.target.나이.value);
});
```
