# **React & Redux**

---

### **클래스형 컴포넌트 vs. 함수형 컴포넌트**

클래스형 컴포넌트는 마운트될 때 클래스의 인스턴스가 생성되고,  
상태가 변경되면 해당 인스턴스 내에서 변화된 상태를 반영하여 리렌더링이 이루어진다.

<br>

반면, 함수형 컴포넌트는 마운트 시 초기 상태 값을 기반으로 함수가 호출되며,  
상태가 변경될 때마다 새로운 상태 값을 가지고 함수를 다시 호출하여 화면을 리렌더링한다.

<br>

이로 인해 함수형 컴포넌트 내부의 변수와 함수들도 매번 재선언되고 재할당되며,  
재사용 가능성에도 불구하고 반복적으로 선언되어 비효율적일 수 있다.

---

### **리액트 최적화 함수**

위와 같이 함수형 컴포넌트가 리렌더링 될 때 재사용이 가능한 값 또는 함수를 저장해뒀다 재사용할 수 있게 해주는 함수들이 있다.

- `useMemo()`
- `useCallback()`
- `React.memo()`

---

### `useMemo(() => {}, [])`

- 첫 번째 인자: 콜백 함수
- 두 번째 인자: 의존성 배열

useMemo()란? **콜백 함수의 리턴 값을 반환하는 함수**  
➡ `useMemo()`를 할당한 변수는 하나의 '값'을 저장한다.
<br>

콜백 함수가 동작하는 데에 필요한 변수들이 변하지 않은 경우에는 이전 렌더링 때 실행한 결과 값을 저장해두는 기능을 한다.  
의존성 배열에는 콜백 함수에 사용되는 변수들이 담긴다.

```jsx
import React, { useState, useMemo } from 'react';

function ExampleWithUseMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  const expensiveCalculation = useMemo(() => {
    console.log('Calculating...');
    return count * 2;
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="This won't trigger calculation"
      />
    </div>
  );
}
```

위의 컴포넌트에서 input의 value가 바껴서 상태 `text`가 업데이트 되더라도,  
`expensiveCalculation`의 콜백함수는 `count`의 값이 바뀌지 않는 이상 실행되지 않는다.

---

### `useCallback(() => {}, [])`

- 첫 번째 인자: 콜백 함수
- 두 번째 인자: 의존성 배열

useCallback()이란? **콜백 함수를 반환하는 함수**  
➡ `useCallback()`을 할당한 변수는 함수를 저장하므로 해당 변수는 함수처럼 사용한다.  
<br>

`useMemo()`는 함수의 동작을 최적화한다면, `useCallback()`은 함수의 선언 자체를 최적화한다.  
함수가 실행되지 않는다 하더라도,  
리렌더링될 때마다 컴포넌트 내부의 함수는 재선언되며,  
재선언 시 함수를 가리키는 메모리 주소가 새롭게 변경되는데,  
`useCallback()`을 사용함으로써 주소 재할당을 방지한다.  
의존성 배열에는 `useMemo()`와 마찬가지로 콜백 함수에 사용되는 변수들이 담긴다.  
<br>

💡 여기서 생긴 의문점❗️❗️❗️  
함수를 저장해뒀으면,  
콜백 함수에 사용되는 변수 값이 바껴도  
그 바뀐 변수를 `useCallback()`이 저장해둔 함수에 넣으면 되는 거 아닌가?  
하지만 여기서 함수가 저장되는 방식은,  
저장 당시 콜백 함수에 쓰인 변수가 가진 *값 자체*를 찰칵! 사진찍 듯 저장해둔다.  
그래서 변수의 값이 바껴도,  
`useCallback()`으로 저장할 때 사진 찍어둔 값으로만 동작하는 것이다.  
그렇기 때문에 콜백 함수에서 사용되는 변수가 바뀌면  
그 콜백 함수를 다시 재선언해서 새롭게 바뀐 변수로 동작을 실행해야 최신 값을 얻을 수 있다.

```jsx
import React, { useState, useCallback } from 'react';

function ExampleWithUseCallback() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log(`Button clicked! Current count: ${count}`);
  }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <button onClick={handleClick}>Log Current Count</button>
    </div>
  );
}
```

- `Increase Count` 버튼만 눌렀을 때: `count` 상태는 변하지만 `handleClick` 함수는 실행되지 않음
- `Increase Count` 버튼을 누르고 `Log Current Count` 버튼을 눌렀을 때: 변한 `count`를 가지고 `handleClick`을 실행함
- `Log Current Count` 버튼만 연달아 누른 경우: `count` 상태가 변하지 않는 경우 이전에 저장된 `handleClick` 재사용하여 실행함

---

### `React.memo((props) => {})`

React.memo()란? **컴포넌트 저장하는 함수**  
➡ 부모 컴포넌트가 리렌더링 될 때 일반적으로 자식 컴포넌트도 함께 리렌더링된다.  
하지만 자식 컴포넌트를 React.memo()에 감싸면,  
자식 컴포넌트로 전달되는 props의 값이 변하지 않는 한,  
부모 컴포넌트가 리렌더링되더라도 자식 컴포넌트는 리렌더링 되지 않는다.

```jsx
import React, { useState } from 'react';

const ChildComponent = React.memo(({ count }) => {
  console.log('ChildComponent rendered');
  return <p>Count in Child: {count}</p>;
});

function ExampleWithReactMemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <p>Parent Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase Count</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="This won't rerender child"
      />
      <ChildComponent count={count} />
    </div>
  );
}
```

부모 컴포넌트의 input의 value인 상태 `text`가 변하더라도,  
자식 컴포넌트의 props로 전달되는 `count`의 상태가 변하지 않는다면 자식 컴포넌트는 리렌더링 되지 않는다.
