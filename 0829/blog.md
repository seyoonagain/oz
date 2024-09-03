# HTML

**HTML**: **H**yper**T**ext **M**arkup **L**anguage

**hypertext**: 링크를 통해 다른 곳으로 연결되는 텍스트  
**markup language**: 문서를 구조적으로 표현하는 언어

html 파일은 문서 타입을 선언하는 Document Type Declaration **`<!DOCTYPE html>`** 로 시작한다.

---

### **`<meta>`**

meta 태그는 특정 정보에 대한 정보를 제공하는 속성 *attribute*을 갖는다.

#### meta 태그의 attribute 종류

- **charset**: 문자 인코딩 방식 지정
- `<meta charset="UTF-8">`
- **name**에 따른 **content**
  - **name**: 문서의 메타데이터 항목명
    - **author**: 문서 작성자
    - **description**: 문서 설명
    - **keywords**: 문서 키워드
  - **content**: 메타데이터 항목에 대한 값

    ```
    <meta name="author" content="Steve Jobs">
    <meta name="description" content="A comprehensive guide to HTML meta tags">
    <meta name="keywords" content="HTML, meta tags, web development, SEO">
    ```
- **http-equiv**에 따른 **content**  
  웹 페이지의 동작이나 브라우저의 동작을 제어하는 데 사용된다.
  - **http-equiv**: 특정 HTTP 헤더를 설정
    - **Content-Type**: MIME 유형과 문자 인코딩(charset) 설정
    - **Refresh**: 페이지 새로고침 설정
    - **X-UA-Compatible**: IE 브라우저 호환성 모드 설정
    - **Cache-Control**: 캐시 제어 설정
    - **Expires**: 페이지 만료 시간 설정
  - **content**: http-equiv에서 지정한 정보에 따른 설정 값

    ```
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="Refresh" content="5">
    <meta http-equit="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="Expires" content="0">
    ```

---

### **속성 _Attributes_**

tag 이름 외에 tag의 **속성**을 지정할 수 있다.  
element의 종류에 관계없이 모든 태그에 사용할 수 있는 속성을 **전역속성 _global attributes_**이라고 한다.

- **id**: 해당 element를 가리키는 고유한 값
- **class**: 같은 성질을 가지는 elements들을 한 데 묶은 그룹명
- **style**: CSS
- **title**: 해당 element에 대한 정보로, 마우스를 갖다대면 tooltip으로 표시
- **lang**: 해당 element의 content의 언어  
  ...

---

### **Inline Elements vs. Block-level Elements**

- Inline Elements: content에 따라 필요한 만큼의 너비를 차지한다.
  - `<span>`
  - `<mark>`
  - `<strong>`
  - `<em>`
  - `<q>`
  - `<s>`
  - `<a>`
  - `<img>`
  - `<button>`
  - `<textarea>`  
    ...
- Block-level: 새로운 줄을 시작하며, 한 줄의 너비 전체를 차지한다.
  - `<div>`
  - `<h1>`~`<h6>`
  - `<p>`
  - `<ul>`, `<ol>`, `<li>`
  - `<fieldset>`
  - `<pre>`
  - `<canvas>`  
    ...

---

### **`<table>`**

Sample Table
| Header 1 | Header 2 | Header 3 |
| --- | --- | --- |
| Data 1 | Data 2 | Data 3 |
| Data 4 | Data 5 | Data 6 |
| Footer Information | | |

위와 같은 테이블의 태그는 아래와 같다.

```
    <table>
        <caption>Sample Table</caption>
        <thead>
            <tr>
                <th>Header 1</th>
                <th>Header 2</th>
                <th>Header 3</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Data 1</td>
                <td>Data 2</td>
                <td>Data 3</td>
            </tr>
            <tr>
                <td>Data 4</td>
                <td>Data 5</td>
                <td>Data 6</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="3">Footer Information</td>
            </tr>
        </tfoot>
    </table>
```

#### 표를 그리는 태그

- `<table>`: 하나의 표를 정의하는 컨테이너
- `<caption>`: 표 제목
- `<tr>`: 표 안의 하나의 행
- `<th>`: 해당 열의 제목으로 굵은 글씨체로 표시되며, 가운데 정렬이 기본값
- `<td>`: 해당 셀의 내용

#### 표의 구성을 나타내는 태그

- `<thead>`: 열의 제목을 포함
- `<tbody>`: 제목 아래 본문 내용
- `<tfoot>`: 표의 요약 및 하단 정보

---

### **`<ol>` vs. `<ul>`**

- **`<ol>`**: Ordered List
  - 속성 `type`의 값에 따른 `<li>` 형태
    - `1` (default): 1, 2, 3, ...
    - `A`: A, B, C, ...
    - `a`: a, b, c, ...
    - `I`: I, II, III, ...
    - `i`: i, ii, iii, ...
  - 속성 `start`에 넘버링 시작 값을 정수로 지정
  - 속성 `reversed`가 명시된 경우, `<li>`가 반대 순서로 나타난다.
- **`<ul>`**: Unordered List
  - 속성 `type`의 값에 따른 `<li>` 형태
    - `disc` (default): 채워진 동그라미
    - `circle`: 텅 빈 동그라미
    - `square`: 채워진 네모

---

### **`<img>`**

#### 속성

- **`src`**: _source_ 이미지의 url 주소 (필수)
- **`alt`**: _alternative text_ 이미지에 대한 설명 (사용 권장)
  - 이미지 로딩에 실패한 경우 대신 보여지거나 스크린 리더에 의해 읽혀진다.
- **`width`**: 이미지의 가로 길이
- **`height`**: 이미지의 세로 길이
- **`title`**: 이미지에 대한 추가 정보
  - 마우스를 갖다대면 툴팁으로 정보가 제공된다.
- **`loading`**: 이미지 로딩 방식
  - `lazy`: 이미지가 화면에 보일 때
  - `eager`: 페이지 로딩 즉시
  - `auto` (default): 브라우저에 따라

---

### **`<input>`**

#### input의 핵심! type

- **text** (default):
- **number**:
- **tel**:
- **search**:
- **email**:
- **password**:
- **date**:
- **color**:
- **range**:
- **checkbox**: [ ]
- **radio**:
  - 선택지들의 `name` 속성을 통일시켜야 하나만 선택이 가능
- **button**:
  - `<button>button</button>`와 같다.

#### 관련 태그

- **`<label>`**: tag을 이용해 `<input>`의 id와 연결지어 `<input>`의 용도를 나타낼 수 있다.  
  e.g.

  ```
  <label for='name'>이름</label>
  <input type='text' id='name'>
  ```

- **`<fieldset>`**: 입력 폼 묶기 (테두리)
- **`<legend>`**: fieldset 제목

#### 주의할 것

`<form>` element의 contents로서의 `<input>` element는  
각각의 name 속성에 따라 접근이 가능하므로,  
반드시 name 속성을 지정한다.

---

### **그 외 입력을 받는 Elements**

- **`<textarea>`**: 텍스트 입력칸의 크기를 사용자가 변경할 수 있다.
  - 속성 `rows`의 값에 따라 초기 세로 길이가 정해진다.
  - 속성 `cols`의 값에 따라 초기 가로 길이가 정해진다.
- **`<select>`**: 주어진 `<option>`을 사용자가 선택할 수 있다.
  - `<option>`을 children으로 가지며, 첫 번째 `<option>`이 기본값으로 보여진다.
  - `<option>`에 별도로 `selected` 속성을 부여하면 해당 `<option>`을 기본값으로 바꿀 수 있다.
  - 기본적으로 하나의 `<option>`만 선택 가능하다.
  - `<select>` element에 `multiple`이라는 속성을 부여하면 여러가지 `<option>`을 선택할 수 있다.
  - 속성 `size`를 통해 한 번에 보여지는 `<option>`의 개수를 지정할 수 있다.

---

### **Semantic Tags**

#### 시맨틱 태그란?

해당 태그의 content의 역할을 나타내는 것으로, 브라우저와 사용자 모두에게 페이지의 구조에 대한 이해를 돕는다.

#### 시맨틱 태그의 장점

- **검색엔진 최적화 _Better SEO_**
- **코드 가독성 증가**
- **조직에 대한 이해도 증가**
- **유지보수 용이**
- **스크린 리더 기술의 접근성 향상**
- **기존 컨테이너 태그 남용 방지**

#### 시맨틱 태그 종류

- `<article>`
- `<aside>`
- `<details>`
- `<summary>`
- `<header>`
- `<footer>`
- `<main>`
- `<nav>`
- `<section>`
- `<figure>`
- `<figcaption>`
- `<time>`

---

### **`<progress>`**

진행 정도를 표시하는 tag  
속성 `value`, `max` 속성을 통해 진행 정도를 표시할 수 있다.

```
<progress max='100' value='70'></progress>
```

---

### **단일태그 _Self-closing Tags_**

닫는 태그 *closing tag*를 필요로 하지 않는 태그

#### 단일태그 종류

- **`<hr />`**: 가로 구분선 _horizontal rule_
- **`<br />`**: 줄 바꿈
- **`<img />`**: 사진 파일
- **`<input />`**  
  ...

---

### **Container Tags**

#### 컨테이너 태그의 사용 목적

- 공통된 스타일 적용
- 레이아웃
- 페이지의 구조 설정

#### 컨테이너 태그의 종류

- **인라인 _inline_**
  - `<span>`
- **블록 레벨 _block-level_**
  - `<div>`
  - `<article>`
  - `<section>`
  - `<aside>`
  - `<nav>`
  - `<header>`
  - `<main>`
  - `<footer>`

---

### **Entity Codes / HTML Entity**

HTML에서 특수문자들을 표현하기 위해 사용하는 코드

Entity code - [https://entitycode.com/#featured-content](https://entitycode.com/#featured-content)

---
