# Drag and Drop

---

HTML의 전역속성 중 하나인 `draggable`을 이용하여 특정 요소의 드래그 가능 여부를 결정할 수 있다.  
`draggable`에 대한 값으로는 `true` 또는 `false`를 전달한다. (`auto`도 가능)  
CSS에서 설정할 수 있는 `-webkit-user-drag`의 경우, 크롬과 사파리와 같은 특정 브라우저에서만 작동하지만,  
HTML에서 설정하는 `draggable`의 경우, 더 폭넓은 브라우저에서의 사용이 가능하다.

---

### 다양한 drag and drop 이벤트

자바스크립트에서 `draggable='true'`로 설정된 요소를 불러와,  
`addEventListener()`의 첫 번째 인자로 발생하는 이벤트명을 전달하고,  
두 번째 인자로 해당 이벤트가 밣생했을 때 이벤트를 핸들링하는 함수를 전달한다.

<br>

**drag** 되는 요소와 **drop** 되는 요소에 발생하는 이벤트는 각각 다르다.

- 드래그 요소의 이벤트

  - `dragstart`: 해당 요소가 드래그 되기 시작했을 때
  - `dragend`: 해당 요소의 드래그가 끝났을 때
  - `drag`: 해당 요소의 드래그가 지속되는 동안

- 드롭 대상 요소의 이벤트

  - `dragenter`: 드래그된 요소가 대상 영역에 진입할 때
  - `dragleave`: 드래그된 요소가 대상 영역을 떠날 때
  - `dragover`: 드래그된 요소가 대상 영역 위를 지나갈 때
  - `drop`: 드래그된 요소가 대상 영역에 drop 될 때
  - 주의할 점  
    `dragover`과 `drop`의 경우,  
    `preventDefault()`를 호출해야 해당 영역에 drop이 가능하다.

---

### 리스트 항목을 드래그 앤 드랍으로 순서 바꾸기

다음과 같은 HTML 코드를 예시로 들어보자.  
예시에서는 드롭 대상 요소와 드래그 요소를 각각 `<ul>`, `<li>`로 지정되어 있지만,  
`<ul>` 태그 특성상 `<ul>` 자체에 이벤트 핸들링을 하면서,  
자식 요소인 `<li>`의 이벤트 핸들링도 가능하다는 점을 숙지하고 코드를 지켜보자아.

```html
<ul id="draggable-list">
  <li draggable="true">list 1</li>
  <li draggable="true">list 2</li>
  <li draggable="true">list 3</li>
  <li draggable="true">list 4</li>
  <li draggable="true">list 5</li>
</ul>
```

자바스크립트에서 드롭 대상 요소인 `<ul>` 태그를 가져온당.  
그리고 `dragstart` 이벤트가 발생할 때 드래그 되는 요소를 담아줄 변수를 선언한다.

```js
const list = document.getElementById('draggable-list');
let draggedItem;
```

`list`에 드래그가 시작되면 드래그 되는 target 요소를 `draggedItem`에 담아준다.

```js
list.addEventListener('dragstart', (e) => {
  draggedItem = e.target; // e.target이 드래그 되고 있는 <li>를 가리킨다.
});
```

드래그가 끝나면 draggedItem은 다시 null값으로 초기화한다.

```js
list.addEventListener('dragend', (e) => {
  draggedItem = null;
});
```

`dragover`과 `drop` 이벤트의 경우,  
`preventDefault()`를 호출하여 기본값 설정을 비활성화 한다.

- `dragover`의 기본값: 드롭이 허용되지 않음
- `drop`의 기본값: 드롭해도 아무런 동작이 수행되지 않음

```js
list.addEventListener('dragover', (e) => {
  e.preventDefault();
});
list.addEventListener('drop', (e) => {
  e.preventDefault();
});
```

드래그한 `<li>` 요소를 드랍하면서 순서를 바꾸고자 할 때  
`drop` 이벤트 핸들링에 다음과 같이 코드를 추가한다.

```js
list.addEventListener('drop', (e) => {
  e.preventDefault();
  if (e.target.tagName === 'li' && e.target !== draggedItem) {
    // 드랍 대상 요소가 드래그 하고 있는 요소와 같은 <li> 요소이면서,
    //드래그 하고 있는 요소와 다른 요소 일 때 순서가 바뀐다.
    list.insertBefore(draggedItem, e.target.nextSibling);
    // 현재 드랍 대상 요소의 다음 요소를 두 번째 인자로 전달하면서 그 이전에 draggedItem을 insert!
  }
});
```

위 함수에 쓰인 `insertBefore()` 메소드의 쓰임은 다음과 같다.

- `parentElement.insertBefore(newElement, referenceElement)`
  - `newElement`: 삽입할 요소
  - `referenceElement`: `newElement`가 이 요소 전에 삽입된다
  - `referenceElement`이 `null`인 경우,  
    `newElement`는 `parentElement`의 마지막 요소로 이동한다.

---
