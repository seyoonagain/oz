# CSS

---

### **Transform**

- translate(x, y): x축, y축을 기준으로 이동
- scale(x, y): x축, y축 기준으로 n배 만큼 확대 및 축소
- skew(x deg, y deg): x축, y축을 기준으로 회전
- rotate(deg): 지정 각도만큼 회전

---

### **Transition**

- 스타일 속성을 바꾼다.
- 시간 및 변화 속도를 지정하여 다양한 효과를 구현할 수 있다.
- 단축 속성(_shorthand property_)로, 실행 시간, 실행 방법, 지연 시간에 대한 정보를 한 번에 명시할 수 있다.
  - 두 가지의 시간 value가 함께 쓰였을 때, 각각 순서대로 `-duration`, `-delay`에 적용된다.

하위 속성을 개별적으로 명시하고자 할 때 접미사

- `-property`: 변화시키고자 하는 대상의 property  
   e.g. `transform`, `opacity`, `background-color`, ...
- `-duration`: 변화가 완료되는 데까지 걸리는 시간
- `-timing-function`: 동작 속도
- `-delay`: 변화가 시작되기 전까지 지연 시간

<h4>-timing-function</h4>

- `cubic-bezier(p1x, p1y, p2x, p2y)`  
   four control points: `(0, 0)`, `(p1x, p1y)`, `(p2x, p2y)`, `(1, 1)`

  - `(0, 0)`: 시작점
  - `(1, 1)`: 끝점
  - `(p1x, p1y)`, `(p2x, p2y)`
    - `p1x`, `p2x`: 반드시 0 이상 1 이하의 숫자를 사용하며, 애니메이션 시작 후 시간 흐름을 나타낸다.
    - `p1y`, `p2y`: `px`에서 정의된 시간에서 애니메이션의 진행 정도를 나타낸다.

- `ease` (default): 시작부터 중간까지 빨라졌다가 점점 느려지면서 마무리  
   = `cubic-bezier(0.25, 0.1, 0.25, 1.0)`

- `ease-in`: 시작 시 점점 빨라지고 일정한 속도로 마무리  
   = `cubic-bezier(0.42, 0, 1.0, 1.0)`

- `ease-out`: 시작 시 빠르게 시작 후 점점 느려지면서 마무리  
   = `cubic-bezier(0, 0, 0.58, 1.0)`

- `ease-in-out`: 천천히 시작 후 중간까지 빨라졌다가 느려지면서 마무리  
   = `cubic-bezier(0.42, 0, 0.58, 1.0)`

- `linear`: 일정한 속도로 진행  
   = `cubic-bezier(0.0, 0.0, 1.0, 1.0)`

- `steps(number-of-steps, <jumpterm>)`: 애니메이션 진행 중 n번 멈추면서 단계적으로 진행

  - `<jumpterm>`
    - `jump-start` or `start`: 첫 번째 jump(stop)이 애니메이션 시작 시 발생하고 나머지 jump도 나머지 시간 내에 균등하게 발생
    - `jump-end` or `end`: 마지막 jump(stop)이 애니메이션 종료 시 발생하고 나머지 jump도 종료 이전 시간 내에 균등하게 발생
    - `jump-none`: 애니메이션 시작과 종료 시에는 jump 발생하지 않고 나머지 시간 내에 균등하게 발생
    - `jump-both`: 애니메이션 시작과 종료 시 모두 jump 발생하고 나머지 jump도 중간에 균등하게 발생

- `step-start` = `steps(1, jump-start)`

- `step-end` = `steps(1, jump-end)`

---

### **애니메이션 _Animation_**

`@keyframes` 모듈과 `animation` property를 이용하여 움직이는 효과를 구현할 수 있다.

<h4>@keyframes</h4>

- 키워드 `from`과 `to`를 이용하여 시작점과 끝점의 property 설정

```css
@keyframes animation_name {
  from {
    property: value;
  }
  to {
    property: value;
  }
}
```

- 백분율을 이용해 프레임 나누기

```css
@keyframes animation_name {
  0% {
    property: value;
  }
  25% {
    property: value;
  }
  50% {
    property: value;
  }
  100% {
    property: value;
  }
}
```

<h4>animation</h4>

`animation`은 단축 속성(_shorthand property_)으로, 애니메이션 실행 시간 및 방식 등을 한 번에 지정할 수 있다.  
이 때, `-duration`과 `-delay` property는 둘 다 시간을 value로 취하기 때문에  
`-duration`과 `-delay` 순서에 맞게 설정해줘야 함을 유의한다.

개별적인 하위 속성을 지정하기 위한 접미사

- `-name`: 사용하고자 하는 `@keyframes`의 이름

- `-duration`: 애니메이션 지속 시간

- `-delay`: 애니메이션 시작 전 지연 시간

- `-timing-function`: 애니메이션 속도

- `-direction`: 동작 진행 방향

  - `normal` (default): 정방향 → 원점
  - `reverse`: 역방향 → 원점
  - `alternate`: 정방향 → 역방향
  - `alternate-reverse`: 역방향 → 정방향

- `-iteration-count`: 반복 횟수

  - 정수: 주어진 횟수만큼 반복
  - `infinite`: 무한 반복

- `-fill-mode`: 애니메이션 종료 후 상태

  - `none` (default): 애니메이션 시작 전 상태로 복귀
  - `forwards`: 애니메이션의 마지막 프레임 상태 유지
  - `backwards`: 애니메이션의 첫 프레임 상태로 복귀
  - `both`: 애니메이션 시작 전에는 첫 프레임 상태, 종료 후에는 마지막 프레임 상태 유지

- `-play-state`: 애니메이션 동작 여부

  - `running`: 동작
  - `pause`: 멈춤

---

### **상속 _Inheritance_**

parent element의 스타일을 child element에도 적용되는 것을 말한다.  
스타일마다 상속 가능 여부가 기본적으로 설정되어 있으며, 모든 property가 상속 가능한 것은 아니다.

- 기본적으로 설정된 상속 가능 여부를 무시하고 임의로 지정하고자 할 때 쓸 수 있는 키워드  
  아래 키워드는 모든 property에 value로 설정될 수 있는 '**공용 키워드**' 또는 '**전역 키워드**' 라고 부른다.
  - `inherit`: 상위 요소로부터 해당 property의 값 상속
  - `initial`: 브라우저 상의 해당 property 기본값 정용
  - `unset`: 기본 설정이 상속 가능이면 `inherit`처럼, 상속 불가능이면 `initial`처럼 적용

---

### **반응형 웹 _Responsive Web_**

**반응형이란?**
디바이스별 다양한 화면 크기에 따라 UI가 적절하게 조절되어 보이는 것을 말한다.  
이를 통해 일관된 UX를 제공할 수 있다.

### **Viewport**

현재 화면에 보여지고 있는 영역을 말한다.  
디바이스별로 뷰포트가 다르고, 뷰포트에 따라 배율 조정이 발생하여 동일한 웹페이지가 다르게 보일 수 있다.

메타태그를 이용하여 너비를 기기 너비에 맞추고 크기도 함께 설정해준다.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

<br>

뷰포트에 기반한 상대적 단위

- `vw`: 뷰포트 너비의 1/100
- `vh`: 뷰포트 높이의 1/100
- `vmin`: 뷰포트 너비와 높이 중 작은 것의 1/100
- `vmax`: 뷰포트 너비와 높이 중 큰 것의 1/100

---

### **미디어 쿼리 _Media Query_**

```css
@media media_name and (media_query) {
  selector {
    property: value;
  }
}
```

- `media_name`에는 미디어 타입을 지정할 수 있다.

  - 미디어 타입의 종류:
    - `all`
    - `print`
    - `screen`
    - `speech`
    - `braille`
    - `handheld`
    - `projection`
    - `tv`
  - 가장 일반적으로는 화면을 뜻하는 `screen`이 사용된다.

- `media_query`에는 원하는 조건을 입력해줄 수 있다.

  - `media_query`에 주로 사용되는 조건

    - `min-width`: 화면 최소 너비(설정 너비 이상일 때)
    - `max-width`: 화면 최대 너비(설정 너비 이하일 때)
    - `min-height`: 화면 최소 높이(설정 높이 이상일 때)
    - `max-height`: 화면 최대 높이(설정 높이 이하일 때)
    - `orientation`: portrait / landscape 모드
    - `color`: 기기의 색상당 비트 수
    - `color-index`: 출력 기기의 색상 테이블 수
    - `aspect-ratio`: 화면의 너비와 높이 비율

---

### **모듈 _Modules_**

웹 페이지를 만들 때,  
페이지 내의 구성 요소들을 재사용할 수 있게 만드는 것을 **컴포넌트화** 또는 **모듈화**라고 한다.
다시 말해서,  
컴포넌트란 독립적이고 재사용이 가능한 모듈을 뜻한다.  
만들어진 컴포넌트를 기반으로 웹 페이지를 조립하듯 구성할 수 있다.

<h4>컴포넌트의 장점</h4>

- **편리한 유지보수**  
  컴포넌트는 다른 컴포넌트와 의존성이 낮고 독립적이기 때문에 유지보수 및 수정 작업이 쉽다.

- **재사용성**  
  한 번 정의해두면 여러 페이지 및 프로젝트에서 재사용할 수 있어 코드의 중복을 막고, 일관성을 유지할 수 있다.  
  또한 여러 조합으로 조립하여 다양한 구조를 만들 수 있다.

---
