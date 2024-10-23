# **React & Redux**

---

### **CSS-in-JS란?**

자바스크립트 안에서 스타일 코드 작성하는 것을 의미한다.

---

### **CDD란?**

CDD(_Component Driven Development_)란 화면을 독립적이고 재사용 가능한 컴포넌트를 기반으로 개발하는 방법론을 뜻한다.

---

### **Styled-Components란**

CDD 기반의 개발에서 사용되는 컴포넌트 내에는 HTML과 JavaScript 코드를 하나의 컴포넌트 파일에 작성할 수 있지만,  
여전히 CSS 파일은 별도로 만들어야 한다.  
CSS도 HTML과 JavaScript와 한 데 작성하기 위해 만들어진 것이 **Styled-Components**!

---

### **Styled-Components 사용하기**

1. 설치

```bash
npm install styled-components
```

2. 사용하고자 하는 파일 내 import 해오기

```jsx
import styled from 'styled-components';
```

3. 스타일 작성  
    `styled.` 뒤에 사용하고자 하는 HTML 태그를 쓰고 백틱(``)으로 스타일 코드를 감싼다.   
이를 변수에 담아 해당 변수를 컴포넌트처럼 사용한다.   
`styled`내 자동완성을 위해`vscode-styled-components`라는 익스텐션을 설치해서 사용하면 보다 편리하게 쓸 수 있다.

```jsx
import styled from 'styled-components';

const BlueButton = styled.button`
  background-color: blue;
  color: white;
`;

function App() {
  return (
    <>
      <BlueButton>블루버튼</BlueButton>
    </>
  );
}
```

4. 스타일 컴포넌트 재사용하기  
   `styled` 뒤에 재사용할 컴포넌트명을 괄호`()`로 감싼 후, 백틱 안에 추가하고자 하는 속성 또는 덮어쓰고자 하는 속성을 작성한다.

```jsx
import styled from 'styled-components';

const BlueButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px;
`;

const BigBlueButton = styled(BlueButton)`
  padding: 20px;
  width: 300px;
`;

function App() {
  return (
    <>
      <BlueButton>블루버튼</BlueButton>
      <BigBlueButton>빅블루버튼</BigBlueButton>
    </>
  );
}
```

5. Props 사용하기  
   styled-components의 스타일 코드 작성은 백틱 사이에 작성하는 템플릿 리터럴 방식으로,  
   `${}`를 사용하여 자바스크립트 코드를 작성할 수 있다.  
   이 때 스타일 컴포넌트에 Props를 전달하여 Props에 따라 유연한 스타일이 가능하다.

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${(props) => props.bgColor || black};
  color: white;
  padding: 10px;
`;

function App() {
  return (
    <>
      <Button bgColor='blue'>블루버튼</Button>
      <Button bgColor='pink'>핑크버튼</Button>
    </>
  );
}
```

6. 전역 스타일 설정  
   `createGlobalStyle을` 사용하여 전역 스타일을 설정하는 방법은 애플리케이션 전반에 일관된 스타일을 적용하는 데 유용하다.  
   `styled-components`의 `createGlobalStyle을` 활용하면 전역적으로 적용되는 스타일을 정의할 수 있으며,  
   이를 최상위 컴포넌트에서 사용하여 애플리케이션 전체에 영향을 줄 수 있다.

```jsx
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      {/* 나머지 컴포넌트들 */}
    </>
  );
}
```

7. SCSS의 문법 사용  
   CSS의 확장성과 유연성을 제공하고자 styled-components에세 SCSS 일부 문법을 지원한다.  
   변수나 Mixin을 제외하고, 중첩 문법을 사용하여 스타일을 적용할 수 있다.

```jsx
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }

  h1 {
    color: red;

    &:hover {
      color: blue;
    }
  }
`;

const Button = styled.button`
  background-color: blue;
  color: white;

  &:hover {
    background-color: darkblue;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Button>태극 버튼</Button>
    </>
  );
}
```

---

### **styled-components의 장단점**

- 장점

  - CSS의 컴포넌트화로 재사용성 증가
  - CSS와 JavaScript의 상호작용 용이
  - class명 자동 생성

- 단점
  - 추가 학습 필요
  - class명의 가독성이 떨어짐
  - JavaScript 파일의 크기가 커짐

---

### **클래스명을 지정하지 않아도 되는 이유**

HTML 코드를 개발자 도구로 확인해 보면, `styled-components`가 적용된 태그에 자동으로 생성된 독특한 클래스명이 붙어 있는 것을 볼 수 있다.
이는 `styled-components`가 내부적으로 각 컴포넌트에 고유한 클래스명을 자동으로 부여하기 때문이다.
이 클래스명을 통해 우리가 작성한 스타일이 해당 태그에 적용되며, 다른 스타일과 충돌할 염려가 없어 클래스명을 따로 지정할 필요가 없다.

---
