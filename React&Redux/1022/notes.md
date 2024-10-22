# **React & Redux**

---

### **CSS 작성 도구**

- **SCSS**(SASS의 최신버전)

  - 특징:
    - CSS 코드 중첩
    - CSS 코드 변수화
    - CSS 속성 재사용
  - SCSS vs. SASS
    - SCSS: 중괄호 사용 → 기존 CSS와 비슷하여 가독성이 더 좋음
    - SASS: 들여쓰기 사용

- **Styled Component**
- **Tailwind CSS**

---

### **SCSS 설치하기**

SCSS는 SASS의 최신버전이므로 SASS를 설치하면 된다.

```bash
npm install sass
```

---

### **SCSS 파일 만들기**

- \*.scss 확장자 사용
  - 파일 내에서 기존 CSS 문법도 그대로 사용 가능

---

### **SCSS 변수**

- **변수 사용 장점**

  - 변수에 스타일 코드를 담아 코드의 중복을 줄여 CSS를 작성할 수 있다.
  - 스타일 코드 수정 시, 변수에 할당된 값만 수정하면 변수를 사용하는 모든 곳의 스타일을 수정할 수 있어 유지보수가 쉽다.
  - 직관적인 변수명으로 스타일 코드에 대한 이해가 쉽다.

- **변수 선언법**  
  `$변수명: 스타일 코드`

- **변수 사용 예시**

  ```scss
  $light-gray: rgb(240, 240, 240);
  $font-bold: 800
  $border-thin: 1px solid black;

  element1 {
    background-color: $light-gray;
    font-weight: $font-bold
  }

  element2 {
    background-color: $light-gray;
    border: $border-thin
  }
  ```

---

### **SCSS 중첩**

```html
<section>
  <div>
    <span> </span>
  </div>
</section>
<section>
  <h3></h3>
</section>
```

기본 CSS에서는 각각의 요소에 스타일을 적용하기 위해 다음과 같이 접근하였다.  
(하위 요소가 아닌 자식 요소만 선택하고자 할 땐 `>` 선택자 사용)

```css
section {
  color: white;
}

section div {
  color: gray;
}

section div span {
  color: black;
}

section h3 {
  color: blue;
}
```

SCSS를 이용하면 하위 요소를 상위 요소 안에서 작성함으로써 상위 요소를 불러오는 코드를 줄일 수 있고,  
스타일 코드만으로 HTML 구조를 파악할 수 있다.

```scss
section {
  color: white;

  div {
    color: gray;

    span {
      color: black;
    }
  }

  h3 {
    color: blue;
  }
}
```

중첩 내에서 의사 클래스 또는 의사 요소를 사용하기 위해 현재 선택자를 가리키는 `&`를 사용한다.

```scss
section {
  color: white;

  &:hover {
    color: red;
  }
}
```

- **중첩의 장단점**
  - **장점**
    - 가독성 향상: HTML의 구조와 스타일을 직관적으로 확인 가능
    - 코드 중복 방지 및 간결한 코드: 중복되는 선택자를 반복적으로 작성할 필요가 없음
    - 유지보수 용이: 의사 클래스나 의사 요소와 같은 관련 스타일이 묶여 있어 편리한 관리 가능
  - **단점**
    - 성능 저하: 과도한 중첩으로 인한 성능 문제 발생 가능
    - 의도치 않은 스타일링: 잘못된 중첩 사용 시 의도치 않은 요소가 선택될 가능성이 있음
    - 복잡한 디버깅: 중첩된 선택자의 우선순위 파악이 어려워 CSS의 추적이 쉽지 않음
  - **결론**  
    중첩을 과도하게 사용하지 않고, 적절히 활용해 중첩의 장점을 극대화하는 것이 좋다.

---

### **믹스인 _Mixin_**

스타일의 속성 값 뿐만 아니라 `속성명: 속성 값` 모두 재사용 가능하게 해주는 틀  
함수처럼 인자를 받아 요소마다 개별적인 스타일 적용이 가능하고,  
인자 전달 시에 변수로 선언한 스타일을 사용하는 것도 가능하다.

- 믹스인 설정 및 사용

  ```scss
  $grayish-blue: rgb(155, 177, 199);

  @mixin flex-col {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @mixin border($width, $style: solid, $color: black) {
    border-top: $width $style $color;
    border-bottom: $width $style $color;
  }

  element1 {
    @include flex-col;
    @include border(2px);
  }

  element2 {
    @include flex-col;
    @include border(1px, $color: blue);
  }

  element3 {
    @include flex-col;
    @include border(10px, dotted, $grayish-blue);
  }

  element4 {
    @include flex-col;
    @include border(5px, dash, $grayish-blue);
  }
  ```

- **믹스인을 사용하지 않았다면?**  
  다음과 같이 중복된 코드가 많아지는 것을 알 수 있다.

  ```css
  element1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
  }

  element2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 1px solid blue;
    border-bottom: 1px solid blue;
  }

  element3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 10px dotted rgb(155, 177, 199);
    border-bottom: 10px dotted rgb(155, 177, 199);
  }

  element4 {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top: 50px dash rgb(155, 177, 199);
    border-bottom: 50px dash rgb(155, 177, 199);
  }
  ```
