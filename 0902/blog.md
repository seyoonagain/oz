# CSS

---

### **Display**

태그별로 inline element와 block-level element로 나뉘는데,  
CSS의 `display` property를 이용하여 `inline`과 `block`을 지정할 수 있다.

<h4>display의 값에 따른 특징</h4>

- `none`: element를 숨긴다.
- `block`: block-level element로 만든다.
- `inline`: inline element로 만든다.
- `inline-block`: inline element + block-level element
  - 다른 element들과 한 줄에 위치가 가능
  - width과 height에 따라 크기 조절 가능
  - padding과 margin의 사용이 자유로움

---

### **Float**

문서의 흐름: 좌 → 우

`float` property가 적용된 element는 문서의 흐름에서 제외되고,  
parent 또는 root element를 기준으로 좌측 또는 우측에 배치하는 특징을 갖는다.

- `none` (default): 문서의 흐름을 따른다
- `left`: 기준 element의 좌측에 배치
- `right`: 기준 element의 우측에 배치

`float`이 적용된 element에 영향권을 벗어나게 해주는 property, `clear`

- `none` (default): floated elements와 함께 위치
- `left`: 좌측에 있는 floated element의 아래로 밀려 위치
- `right`: 우측에 있는 floated element의 아래로 밀려 위치
- `both`: 양쪽에 있는 floated element의 아래로 밀려 위치

---

### **Position**

element를 화면상에 배치하는 방법을 정의하는 property

정의된 방법에 따라 기준점이 달라지며,  
해당 기준점에서 `top`, `bottom`, `left`, `right`를 설정해 element의 위치를 조정한다.

- `static` (default): 문서에 흐름에 맞춰 배치
- `relative`: 문서의 흐름에 따른 위치를 기준으로 이동
- `absolute`: 문서의 흐름과 관계없이 상위 element를 기준으로 이동
  - 상위 element가 `position` property를 가지고 있는 경우 해당 element를 기준으로 이동
  - `position` property를 가진 상위 element이 없으면 화면을 기준
- `fixed`: 화면 내 element의 위치 고정

---

### **Z-index**

`position` property 지정으로 인해 element가 겹칠 경우,  
어떤 element를 상위에 위치시킬지 결정한다.  
<br> 지정된 정수 값이 **클수록** 상위에 위치한다.

---

### **Overflow**

element의 content의 양이 element의 크기보다 클 경우,  
`overflow` property를 이용하여 조절할 수 있다.

- `visible` (default): 영역 밖 content가 벗어난 그대로 드러남
- `hidden`: 영역을 벗어난 content 숨김
- `scroll`: 영역을 벗어난 content를 스크롤을 이용해 확인 가능
- `auto`: 브라우저에 따라 설정 (주로 `scroll`)

---

### **Element Selector**

- **속성 선택자**: `[]`  
   대괄호 안에 attribute를 쓰면 해당 속성이 쓰인 요소들이 선택된다.  
   속성에 대한 값을 특정할 수 있는데, 이 때 다음과 같은 기호가 쓰일 수 있다.

  - `*=`: 값의 포함 여부
  - `^=`: 값의 시작값
  - `$=`: 값의 마지막값
  - `=`: 값의 일치 여부

- **하위 요소 선택자**: `공백`  
   상위 요소 뒤에 **공백**을 두고 하위 요소를 명시하여 선택  
   중첩이 여러 단계여도 선택 가능

- **자식 요소 선택자**: `>`  
   상위 요소의 바로 한 단계 하위 요소를 선택

- **인접 형제 선택자**: `+`  
   형제 요소 중 바로 다음 첫 번째 형제 요소 선택

- **형제 요소 선택자**: `~`  
   뒤에 오는 다수의 형제 요소 선택

---

### **Pseudo Classes**

selector에 추가하는 키워드로, element의 특정 **상태**를 가리킨다.

<h4>Pseudo Class의 종류</h4>

- `:hover`: 마우스 커서를 올린 경우
- `:active`: 클릭과 같이 요소를 활성화한 경우
- `:focus`: input과 같은 요소에 커서가 올라간 경우
- `:disabled`: 상호작용이 불가능한 상태인 경우
- `:enabled`: 상호작용이 가능한 상태인 경우
- `:first-child`: 부모 요소의 첫 번째 자식 요소
- `:last-child`: 부모 요소의 마지막 자식 요소
- `:nth-child(n)`: 형제 요소들 사이에서 특정 순서의 요소를 가리키는 경우
- `:not(selector)`: selector와 매치되지 않는 요소
- `:valid`: 입력 content이 형식에 맞는 경우
- `:invalid`: 입력 content이 형식에 맞지 않는 경우
- `:checked`: 체크박스, 라디오 버튼이 선택된 경우

---

### **Pseudo Elements**

selector에 추가하는 키워드로, element의 특정 **부분**를 가리킨다.

<h4>Pseudo Element의 종류</h4>

- `::after`: 요소 앞에 content 추가
- `::before`: 요소 뒤에 content 추가
- `::first-line`: block-level의 첫 번째 줄에 스타일 적용
- `::first-letter`: block-level의 첫 번째 글자에 스타일 적용
- `::marker`: `<li>`의 목록 기호 스타일 적용
- `::placeholder`: `<input>`의 placeholder의 스타일 적용
- `::selection`: 드래그해서 선택한 텍스트 부분에 스타일 적용
- `::backdrop`: 활성화 된 요소의 뒷 배경에 스타일 적용
- `::file-selector-button`: type이 file인 input의 파일 추가 버튼에 스타일 적용

---

### **Pseudo Classes vs. Pseudo Elements**

- Pseudo Classes

  해당 요소의 특정 **상태**를 뜻한다.

- Pseudo Elements

  해당 요소의 특정 **부분**을 가리킨다.

---

### **calc()**

() 안에 연산자를 이용한 수식을 써서 수식의 결과 값을 property의 수치로 설정할 수 있다.

```css
.container {
  width: calc(100% - 200px);
}
```

위의 수식은 100%의 너비 길이에서 200px을 뺀 만큼을 container의 너비로 설정한다는 의미이다.

---

### **textarea**

resize이 가능한 text input 창  
사용자에 의해 resize 되지 않도록 하려면 `resize: none;` 이라는 property를 추가하면 된다.

---
