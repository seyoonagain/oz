# **React & Redux**

---

### **React의 렌더링 방식**

리액트는 JSX의 데이터가 변경되면 화면을 다시 렌더링한다.  
이때 리액트에서는 **상태 _State_** 와 **Props**의 변화만을 감지하여 재렌더링을 실행한다.  
자바스크립트에서와 같은 일반 변수의 변화는 재렌더링을 일으키지 않는다.

---

### **State 사용법**

리액트는 **상태 _State_** 와 **Props의** 데이터 변화에 따라 화면을 재렌더링하는데,  
이때 상태의 경우, 상태 변화 함수를 반드시 사용해야 상태 변화를 감지할 수 있다.

#### 클래스형 컴포넌트

- 상태 변화 함수: `this.setState()`

```jsx
class MyComponent extends Component {
  state = { counter: 0 };

  render() {
    return (
      <>
        <div>counter: {this.state.counter}</div>
        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          +
        </button>
      </>
    );
  }
}
```

<br>

#### 함수형 컴포넌트

- 상태 변화 함수: `useState()`로부터 구조 분해 할당해온 두 번째 인자로,  
  주로 `set + state명`으로 짓는 것이 일반적이다.

```jsx
function MyComponent() {
  const [counter, seCounter] = useState(0);

  return (
    <>
      <div>counter: {counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </>
  );
}
```

---

### **SPA** _(Single Page Application)_

- **정의**: 단일 페이지로 구성된 애플리케이션  
  첫 로드 이후 페이지 전환 시 전체 페이지를 새로고침하지 않고 필요한 부분만 교체

- **장점**:
  - 더 빠른 페이지 전환 속도 (첫 로드 이후)
  - 사용자 경험이 부드럽고 자연스러움
  - 서버 요청이 적어 네트워크 비용 감소
- **단점**:
  - 초기 로딩 시간이 길 수 있음 (필요한 JavaScript 파일 로드)
  - SEO(검색 엔진 최적화)에 약함 (클라이언트 측에서만 렌더링이 일어남)

### **MPA** _(Multi Page Application_)

- **정의**: 다수의 페이지로 구성된 애플리케이션  
   각 페이지는 독립된 HTML 파일로, 페이지 간 이동 시 전체 새로고침이 발생

- **장점**:
  - SEO에 유리 (서버에서 정적인 HTML을 제공)
  - 복잡한 애플리케이션 구조에 적합 (페이지마다 고유의 리소스를 관리 가능)
- **단점**:
  - 페이지 전환 시마다 전체 새로고침이 발생하여 느림
  - 네트워크 비용이 더 큼 (각 전환마다 서버 요청)

### **CSR** _(Client-Side Rendering)_

- **정의**: 클라이언트 측에서 JavaScript로 렌더링을 처리하는 방식  
   서버는 데이터를 전송하고, 클라이언트가 화면을 그린다.

- **장점**:
  - 상호작용이 많은 페이지에 적합 (SPA처럼 사용 가능)
  - 서버 부담이 줄어듦 (클라이언트에서 렌더링 처리)
- **단점**:
  - 초기 로딩 시간이 느릴 수 있음 (클라이언트에서 렌더링까지 대기)
  - SEO에 불리 (검색 엔진이 JavaScript를 실행해야 함)

### **SSR** _(Server-Side Rendering)_

- **정의**: 서버에서 HTML을 렌더링하여 클라이언트에 전달하는 방식  
   클라이언트는 서버에서 렌더링된 HTML을 받아 즉시 화면에 표시

- **장점**:
  - 초기 로딩 속도가 빠름 (미리 렌더링된 HTML 제공)
  - SEO에 유리 (검색 엔진이 HTML을 바로 크롤링 가능)
- **단점**:
  - 서버 부담이 큼 (모든 요청에 대해 HTML을 다시 생성)
  - 상호작용이 많은 페이지에서 서버-클라이언트 간의 동기화가 복잡

---

### **Props 사용법**

**Props란?**  
Properties의 줄임말로, 리액트 컴포넌트에 전달되는 값 또는 인자를 뜻한다.  
부모 컴포넌트가 자식 컴포넌트로 **데이터를 전달할 때** 사용되며,  
컴포넌트 내부에서 **읽기 전용**으로 취급된다.

<br>

**자식컴포넌트에 props 전달하는 방법**

```jsx
<ChildComponent name={'Seyoon'} />
```

- props명: name
- 전달하는 데이터: 'Seyoon'

<br>

**자식컴포넌트에서 props 사용하는 방법**

#### 클래스 컴포넌트

```jsx
class ChildComponent extends Component {
  render() {
    return <div>이름: {this.props.name}</div>;
  }
}
```

<br>

또는 객체 형태로 받아온 props를 구조분해할당을 이용해 간편하게 사용할 수 있다.

<br>

```jsx
class ChildComponent extends Component {
  render() {
    const { name } = this.props;
    return <div>이름: {name}</div>;
  }
}
```

#### 함수형 컴포넌트

자식 컴포넌트에서는 Props를 객체 형태로 전달받을 때,  
중괄호 `{}`를 사용하여 구조 분해 할당을 통해 필요한 값을 바로 추출하여 사용할 수 있다.

```jsx
function ChildComponent({ name }) {
  return <div>이름: {name}</div>;
}
```

---

### **State 끌어 올리기**

자식 컴포넌트에 Props로 전달된 상태는 변경이 불가능한 **읽기 전용**이지만,  
!!!  
Props로 **상태 변경 함수**를 전달하면, 자식 컴포넌트에서 이 함수를 이용해서 상태를 변경할 수 있다.  
이를 **상태 끌어올리기**(_Lifting State Up_)이라고 부른다.

<br>

**함수형 컴포넌트**의 경우,  
상태 변경 함수를 그대로 자식 컴포넌트에게 props로 전달하고,  
자식 컴포넌트에서는 구조분해할당을 이용해 props로 전달받은 함수를 사용할 수 있다.

<br>

**클래스형 컴포넌트**의 경우,  
state 변경하는 `setState` 함수를 그대로 내리게 되면 `this` 때문에 꼬이는 상황이 발생할 수 있으므로,  
부모 컴포넌트 내에서 상태 변경 함수를 하나 만들어서 전달한다.

#### 부모 컴포넌트

```jsx
class App extends Component {
  state = { counter: 0 };

  increaseCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decreaseCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <>
        <Counter counter={this.state.counter} />
        <IncreaseButton increaseCounter={this.increaseCounter} />
        <DecreaseButton decreaseCounter={this.decreaseCounter} />
      </>
    );
  }
}
```

#### 자식 컴포넌트

```jsx
class IncreaseButton extends Component {
  render() {
    return <button onClick={this.props.increaseCounter}>+</button>;
  }
}
```

```jsx
class DecreaseButton extends Component {
  render() {
    return <button onClick={this.props.decreaseCounter}>-</button>;
  }
}
```
