# CSS

**CSS**: **C**ascading **S**tyle**S**heet  
연달아 스타일을 정의하는 문서를 뜻한다.

---

### **스타일 선언문 _CSS Style Declaration_**

```css
selector {
  property: value;
  property: value;
  property: value;
}
```

- 선택자 _selector_: 스타일을 적용할 요소  
   다수의 요소에 같은 스타일을 적용하고자 한다면, 콤마 `,`를 이용해 선택자를 나열할 수 있다.

  - **all selector**: 모든 요소 선택  
     _e.g._ `*`

  - **element selector**: 요소 자체를 선택. 같은 이름의 태그가 모두 선택된다.  
    태그명 뒤에 `#id` 또는 `.class`를 붙여 구체적인 요소를 선택할 수 있다.  
    _e.g._ `div`, `h1`

  - **id selector**: id값으로 요소를 선택  
    _e.g._ `#id`

  - **class selector:**: class값으로 요소를 선택. 같은 이름의 클래스를 가진 모든 요소가 선택된다.  
    _e.g._ `.class`

  - **attribute selector**: 구체적인 attribute가 적용된 element 선택  
    _e.g._ `input[type="text"]`

  - **pseudo-class selector**: 요소의 특정 상태일 때의 스타일 적용  
    _e.g._ `a:hover`

- 속성 _property_: 정의하고자 하는 스타일
- 속성값 _value_: 속성에 대한 구체적인 정보

<h4>주의할 것</h4>
한 줄 끝마다 세미콜론 `;`을 써서 마무리한다.

---

### **CSS 적용 방식**

- **인라인 스타일**: 태그에 `style` 속성을 이용해 적용.  
   _e.g._ `<p style="color: blue;"> 파란 글자 </p>`

- **스타일 태그**: HTML 문서 내에 `<style>` 태그 내에 CSS 코드 작성  
   `<style>` 태그는 `<head>` 태그 내에 위치  
   _e.g._ `<style> p { color: blue; } </style>`

- **별도의 문서로 연결**: 별도의 .css 파일을 만들고, `<link>` 태그를 이용하여 html 파일과 연결  
   `<link>` 태그는 `<head>` 태그 내에 위치  
   _e.g._ `<link href="./style.css" rel="stylesheet">`

<h4>스타일 우선 순위 규칙</h4>

**가장 나중에 쓰인 스타일이 적용된다.**

인라인 스타일이 가장 우선적으로 적용되며,  
`<head>` 태그 내에서 `<style>` 태그와 `<link>` 태그 중 아래에 적힌 태그의 스타일이 적용되고,  
CSS 태그 내에서도 가장 나중에 쓰인 태그가 적용된다.  
단, 작성된 순서에 관계없이 **아이디 > 클래스 > 태그** 순으로 선택된 스타일이 우선적으로 적용된다.

---

### **Box Model**

![alt text](image.png)

- **content**: element가 감싸고 있는 content 영역. width, height으로 나타낸다.
- **border**: 테두리
- **padding**: 테두리 안쪽 여백
- **margin**: 테두리 바깥쪽 여백

---

### **Content**

<h4>사이즈 단위</h4>

- 절대 단위

  - `px`
  - `pt`
  - `cm`
  - `mm`
  - `in`
  - `pc`

- 상대 단위
  - `%`: 기준값에 대한 비율 (기준값이 없으면 적용되지 않는다.)
  - `em`: root 요소의 크기에 배수
  - `rem`: parent 요소의 크기에 배수
  - `vw`
  - `vh`
  - `fr`
    \...

---

### **Border**

- **border-width**: 테두리 두께

- **border-style**: 테두리 모양 (실선, 점선, 겹선 등)  
   _e.g._ `solid`, `dotted`, `dashed`, `double`, ...

- **border-color**: 테두리 색상

- **border**: 위의 세 가지를 한 번에 지정. 공백으로 각각의 속성을 구분한다.

- **border-radius**: 테두리의 모서리 곡률 지정
  - 하나의 값: 모든 모서리에 동일한 곡률 지정
  - 두 개의 값: 좌상-우하 | 우상-좌하
  - 세 개의 값: 좌상 | 우상-좌하 | 우하
  - 네 개의 값: 좌상 | 우상 | 우하 | 좌하

---

### **Margin** / **Padding**

<h4>margin vs. padding</h4>

- **margin**

  - border 바깥의 여백
  - 요소 간의 공간 조정
  - 배경색이나 스타일을 적용할 수 없다.

- **padding**

  - border 안쪽의 여백
  - border와 content 사이의 공간 조정
  - content에 적용된 배경색이나 스타일이 적용된다.

- 속성값 _value_

  - 하나의 값: 모든 면에 동일한 여백 지정
  - 두 개의 값: 상하 | 좌우
  - 세 개의 값: 상 | 좌우 | 하
  - 네 개의 값: 상 | 하 | 좌 | 우

- 특정 위치의 여백을 지정하는 방법
  - 접미사: `-top`, `-bottom`, `-left`, `-right`

---

### **Box Sizing**

- `box-sizing` property의 `value`
  - `content-box` (default): `padding`과 `border` 값에 의해 box 사이즈가 변경된다.
    - 요소의 총 너비 = `width` + `padding` + `border`
    - 요소의 총 높이 = `height` + `padding` + `border`
  - `border-box`: `padding`과 `border` 값이 width과 height 사이즈 내에서 차지하며, 남은 공간에 content가 위치한다.
    - 요소의 총 너비 = 지정된 `width` (content + padding + border)
    - 요소의 총 높이 = 지정된 `height` (content + padding + border)

---

### **Background**

- `backgorund` property와 함께 쓰이는 접미사

  - **`-color`**: 배경 색상

  - **`-image`**: 배경 이미지 url

  - **`-size`**: 배경 이미지 크기

    - width/height 사이즈에 대한 수치
    - `cover`: 이미지 비율 고정. 늘리기. 전체 덮기.
    - `contain`: 이미지 비율 고정. 늘리기. 이미지가 잘리지 않음. 전체가 안덮일 수 있음

  - **`-repeat`**: 배경 이미지 반복 유형

    - `repeat` (default): 바둑판식 배열
    - `no-repeat`: 이미지 크기 그대로 하나의 이미지가 배경으로 사용
    - `repeat-x`: 가로로만 반복
    - `repeat-y`: 세로로만 반복

  - **`-origin`**: 배경 시작 위치

    - `border-box`: border부터
    - `padding-box`: padding부터
    - `content-box`: padding을 제외한 content 영역만

  - **`-clip`**: 배경 적용 범위

    - `border-box`: border까지
    - `padding-box`: border전까지
    - `content-box`: padding전까지

  - **`-position`**: 배경 이미지 위치

    - `top`, `bottom`, `left`, `right`, `center`
    - 정확한 위치에 대한 수치

---

### **Color**

- **rgb**: Red, Green, Blue

- **rgba**: rgb + 투명도

- **hsl**: Hue, Saturation, Lightness

- **hsla**: hsl + 투명도

- **16진수**: `#`로 시작하는 16진수
  - #RRGGBB: Red, Green, Blue의 값을 16진수로 표시
  - #RRGGBBAA: Red, Green, Blue + 투명도도 16진수로 표시

---

### **Font**

- `font-family`: 폰트명  
   콤마 `,`를 이용해 여러 글꼴을 설정할 수 있으며, 가장 먼저 쓰여진 글꼴이 우선순위가 된다.

- `font-size`: 폰트 사이즈. 기본값은 16px

- `font-weight`: 폰트 두께

- `line-height`: 행 높이

- `text-align`: 텍스트 정렬

  - `center`: 중앙 정렬
  - `left` (default): 왼쪽 정렬
  - `right`: 오른쪽 정렬
  - `justify`: 양쪽 정렬

- `text-decoration`
  - `none`: 아무런 효과 없음
  - `underline`: <span style="text-decoration: underline;">밑줄</span>
  - `overline`: <span style="text-decoration: overline;">윗줄</span>
  - `line-through`: <span style="text-decoration: line-through;">취소선</span>
  - `blink`: <span style="text-decoration: blink;">깜빡임</span> (권장되지 않음)

---
