# CSS

---

### **CSS Layout**

**레이아웃이란?** 구성요소를 공간에 효과적으로 배열하는 일 또는 그 기술  
**CSS 레이아웃이란?** 웹 요소를 페이지 내에 적절한 위치에 배치하는 기술

- 대표적인 CSS 레이아웃 기술들

  - 일반적인 문서 흐름
  - display 속성
  - flexible box (flexbox)
  - grid
  - float 속성
  - position 속성
  - ...

---

### **Flexbox**

[참고사이트](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

<h4>플렉스박스란?</h4>

행(row) 또는 열(column)을 기준 축으로 하여 웹 요소를 배치 및 정렬하는 1차원 레이아웃 방식

<img src="https://css-tricks.com/wp-content/uploads/2018/11/00-basic-terminology.svg" alt="flex container and flex item">

- **flex container**: 요소들을 담고 있는 부모 요소
- **flex item**: flex container에 배치되는 자식 요소

flexbox는 다양한 속성을 통해 레이아웃의 형태를 구성할 수 있으며,  
flex container에 지정되야 할 속성과 flex item에 지정되야 할 속성이 구분되어 있다.

---

### **flex container의 properties와 그에 따른 values**

- `display`
  - `flex`: block-level 형태의 flex container로 설정
  - `inline-flex`: inline 형태의 flex container로 설정
- `flex-direction`: 문서의 흐름을 결정하는 주축을 설정
  - `row` (default): 왼쪽부터 오른쪽 방향으로 자식요소 배치
  - `row-reverse`: 오른쪽부터 왼쪽 방향으로 자식요소 배치
  - `column`: 상단부터 아래로 자식요소 배치
  - `column-reverse`: 하단부터 위로 자식요소 배치
- `flex-wrap`: flex container의 공간이 부족할 때 자식 요소 처리 방식
  - `nowrap` (default): 자식 요소의 크기를 줄인다.
  - `wrap`: 끝의 자식 요소가 아래 줄로 내려간다.
  - `wrap-reverse`: 끝의 자식 요소가 윗 줄로 올라간다.
- `flex-flow`: `flex-direction`과 `flex-wrap`을 한 번에 지정하는 단축 속성
- `justify-content`: 주축에서 자식 요소의 정렬 방식
  - `flex-start` (default): 주축의 시작점에 정렬
  - `flex-end`: 주축의 끝부분에 정렬
  - `center`: 주축의 가운데 정렬
  - `space-between`: 양끝 정렬된 상태에세 모든 자식 요소가 같은 간격으로 정렬
  - `space-around`: 각 자식 요소가 양 끝에 일정한 여백을 두고 정렬  
    자식 요소들 사이에는 각각의 요소에서 가지는 여백이 적용되어 첫 자식 요소와 마지막 자식 요소의 양 끝 여백보다 두 배 넓은 여백이 존재하게 된다.
  - `space-evenly`: 자식 요소간 여백과 첫 자식 요소와 마지막 자식 요소의 양쪽 끝 여백까지 모두 같은 간격으로 정렬
- `align-items`: 교차축에서 자식 요소의 정렬 방식
  - `stretch` (default): 자식 요소가 flex container을 채우도록 늘려서 정렬
  - `flex-start`: 교차축의 시작점에 정렬
  - `flex-end`: 교차축의 끝점에 정렬
  - `center`: 교차축의 가운데 정렬
  - `baseline`:텍스트의 baseline에 맞춰 정렬
- `align-content`: 여러 줄의 자식 요소들을 정렬하는 방식
  `flex-wrap`의 설정값이 `wrap` 또는 `wrap-reverse`이고,  
   교차축 방향으로 여유 공간이 있는 경우 효과가 나타나는 속성
  - `normal` (default): 기본 정렬 방식
  - `flex-start`: 교차축의 시작점에 정렬
  - `flex-end`: 교차축의 끝점에 정렬
  - `center`: 교차축의 가운데 정렬
  - `stretch`: 첫 줄은 교차축 시작점에, 마지막 줄은 교차축 끝점에 정렬  
    자식 요소의 크기를 늘려 flex container를 채운다.
  - `space-between`: 첫 줄은 교차축 시작점에, 마지막 줄은 교차축 끝점에 위치하며, 각 줄들이 일정한 간격을 두고 정렬
  - `space-around`: 각 줄들이 일정한 여백을 가지고 정렬  
    첫 줄과 마지막 줄의 양쪽 끝 여백보다 줄 사이 간격이 두 배 넓다.
  - `space-evenly`: 첫 줄과 마지막 줄의 양쪽 끝 여백과 각 줄 사이 간격이 모두 같도록 정렬
- `gap`: flex items 사이의 여백을 설정  
   flex items의 사이 여백만 설정하게 되어 첫 item과 마지막 item의 가장자리 여백 처리를 따로 하지 않아도 된다.  
   한 개의 value만 설정 시 `row-gap`, `column-gap`이 같고,
  두 개의 values 설정 시 `row-gap`, `column-gap` 순으로 작성한다.
- `row-gap`: flex-items 사이의 행 간 여백 설정
- `column-gap`: flex-items 사이의 열 간 여백 설정

---

### **flex item의 properties와 그에 따른 values**

- `order`:
- `flex-grow`: value에 따라 상대적으로 크기를 키운다.
  - `0` (default): flex item 본연의 크기 유지
  - 1 이상의 숫자: 다른 item이 가지는 value와 비교하여 숫자가 클수록 크기가 더 커진다.
- `flex-shrink`: 화면 축소시 value에 따라 상대적으로 크기를 줄인다.
  - `1` (default): 화면 축소시 기본적으로 줄어드는 정도
  - 2 이상의 숫자: 다른 item이 가지는 value와 비교하여 숫자가 클수록 더 크게 줄어든다.
- `flex-basis`: flex item 사이즈의 초기값을 설정한다.
  - `auto` (default): 원래 크기
- `flex`: `flex-grow`, `flex-shrink`, `flex-basis`의 단축 속성
- `align-self`: 교차축을 기준으로 해당 요소 정렬
  flex container에서 지정한 `align-items` 또는 기본값을 덮어쓴다.
  - `auto`: `align-items`에서 지정한 값대로 정렬
  - `flex-start`
  - `flex-end`
  - `center`
  - `baseline`
  - `stretch`

---
