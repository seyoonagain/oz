# **Redux**

---

### 필요한 모듈 설치하기

```bash
yarn add redux react-redux
```

```bash
npm install redux react-redux
```

```bash
pnpm add redux react-redux
```

---

### **Flux 패턴**

상태 변화의 흐름을 가리키는 용어로,  
**Component**에서 상태 변화가 일어나면,  
상태 변화에 대한 정보 및 상태 변화에 필요한 데이터를 **Action** 객체에 담아 **Dispatch**를 통해 **Reducer**에 전달하고,  
**Reducer**에서 **Action**에 담긴 정보를 바탕으로 로직을 실행하고 상태 값을 업데이트한다.  
**Store**는 **Reducer**을 담아 전역에서 **Reducer**에 접근해 상태 값을 업데이트 할 수 있다.

```
          ┌─────────────┐
          │  Component  │◄───┐
          └──────┬──────┘    │
                 │           │
                 ▼           │
          ┌─────────────┐    │
          │    Action   │    │
          └──────┬──────┘    │
                 │           │
                 ▼           │
          ┌─────────────┐    │
          │   Dispatch  │    │
          └──────┬──────┘    │
                 │           │
                 ▼           │
          ┌─────────────┐    │
          │   Reducer   │    │
          └──────┬──────┘    │
                 │           │
                 ▼           │
          ┌─────────────┐    │
          │    Store    │    │
          └──────┬──────┘    │
                 └───────────┘
```

---

### **Action**

: 객체 형태 또는 객체 생성 함수 형태 데이터

<br>

특정 상태를 업데이트하는 여러 방식 중 하나를 지정하며,  
필요한 경우, 업데이트에 필요한 데이터도 추가로 포함한다.

<br>

기본적으로 동작의 명칭은 `type` 키에 담고,  
업데이트에 필요한 데이터는 `payload` 키에 담는다.

- 객체 형태 예시

  ```jsx
  {type: 'INCREMENT', payload: 5}
  ```

  payload에 담길 수 있는 데이터의 형태는 원시자료형 뿐만 아니라 객체, 배열 등의 참조자료형도 가능하다.

  ```jsx
  { type: 'ADD_TODO', payload: { id: 1, text: 'Learn Redux' } }
  ```

- 객체 생성 함수 형태 예시

  ```jsx
  const increment = (num) => ({ type: 'INCREMENT', payload: num });
  // 또는
  const increment = (num) => {
    return { type: 'INCREMENT', payload: num };
  };
  // 또는
  function increment(num) {
    return { type: 'INCREMENT', payload: num };
  }
  ```

  이 패턴은 payload를 동적으로 전달하고자 할 때 사용된다.

---

### **dispatch()**

: 액션 객체를 Reducer로 전달하는 함수

<br>

- `dispatch` 함수 생성 방법

  - `useDispatch()`를 호출하여 `dispatch` 함수를 가져온다.
    ```jsx
    const dispatch = useDispatch();
    ```

- 액션 형태별 전달 방법
  - 객체 형태  
    객체 자체를 담아 전달한다.
    ```jsx
    dispatch({ type: 'INCREMENT', payload: 5 });
    ```
  - 객체 생성 함수 형태  
    함수를 호출의 리턴값을 담아 전달한다.
    ```jsx
    dispatch(increment(10));
    ```

---

### **reducer()**

: 상태 업데이트 로직을 수행하여 상태 값을 업데이트하고 반환하는 함수

<br>

- 첫 번째 인자: 현재 상태 값
- 두 번째 인자: `dispatch()`가 전달한 action

<br>

주로 `switch` 문을 사용하여 케이스별로 동작을 구분하며,  
각각의 동작에서 리턴한 값이 새로운 상태 값이 된다.  
잘못된 동작명이 들어올 경우를 대비하여 현재 상태 값을 그대로 반환하는 `default` 케이스 반드시 작성하도록 한다.  
`default` 앞에는 case를 붙이지 않음을 주의한다.

```js
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.payload;
    case 'DECREMENT':
      return state - action.payload;
    default:
      return state;
  }
};
```

---

### **Store**

: 전역 상태 저장소

<br>

- Store을 이용해 전역 상태 만들기

  1. Store 만들기  
     `createStore()` 함수에 Reducer를 전달한다.  
     Reducer가 여러 개라면 반드시 `combineReducers()`로 묶어 전달해야 한다.

     ```js
     const rootReducer = combineReducers({ counterReducer, anotherReducer });
     const store = createStore(rootReducer);
     ```

  2. 최상위 컴포넌트에 Store 전달하기  
     `<Provider>` 컴포넌트로 최상위 컴포넌트를 감싸고, `store` prop에 1에서 만든 store을 전달한다.
     ```js
     <Provider store={store}>
       <App />
     </Provider>
     ```

---

### **useSelector()**

: 전역 상태를 가져오는 함수

- `useSelector()`로 전역 상태 가져오기
  - `useSelector()`에 전달되는 함수는 스토어에 저장된 전체 상태를 인자로 받고,  
    이 상태 객체는 스토어에 저장된 모든 리듀서와 각각의 리듀서가 관리하는 상태 값을 key-value 형태로 저장하고 있다.
    ```jsx
    const count = useSelector((state) => state.counterReducer);
    ```
    useSelector()이 인자로 받는 state는 다음과 같은 구조를 가진다.
    ```jsx
    {
      counterReducer: 0// counterReducer가 관리하는 원시자료형 상태
      userReducer: { name: 'Alice', age: 25 }  // userReducer가 관리하는 참조자료형 상태
    }
    ```
    위와 같이 전체 상태 중에서 사용하고자 하는 상태 값이 있는 Reducer를 선택하여 상태 값에 접근할 수 있다.

---

### **Redux-Thunk**

: 액션을 함수를 통해 생성하는 경우, 함수 내 비동기 작업을 처리해준다.

<br>

- Redux-Thunk 설치하기

  ```bash
  yarn add redux redux-thunk
  ```

  ```bash
  npm install redux redux-thunk
  ```

  ```bash
  pnpm add redux redux-thunk
  ```

- Redux-Thunk 사용하기

  - 스토어 생성할 때 첫 번째 인자로 Reducer 또는 Reducer 묶음을 전달하고,  
    두 번째 인자에 `applyMiddleware(thunk)`를 전달한다.

    ```jsx
    const store = createStore(rootReducer, applyMiddleware(thunk));
    ```

  - 위와 같이 설정함으로써 액션 생성자 함수 내의 비동기 작업을 동기적인 것처럼 처리할 수 있다.  
    즉, 비동기 작업이 완료되면 업데이트 된 액션 객체를 `dispatch`가 Reducer로 전달한다.

  - Redux-Thunk를 사용하지 않고 액션 생성자 함수를 사용하는 경우, 순수하게 액션 객체를 즉시 반환해야 하지만,  
    Redux-Thunk를 사용하는 경우, 액션 생성자 함수는 비동기 작업을 하는 함수를 반환할 수 있다.  
    그리고 이 때, 액션 생성자 함수가 반환하는 함수의 인자로 `dispatch`가 전달된다.

    - Redux-Thunk 사용하지 않는 경우

      ```jsx
      const incrementAction = (amount) => {
        return { type: 'INCREMENT', payload: amount }; // 객체 즉시 반환
      };

      dispatch(incrementAction(5));
      ```

    - Redux-Thunk 사용하는 경우

      ```jsx
      // with Redux-Thunk
      const delayIncrement = (amount) => {
        // 함수 반환
        return (dispatch) => {
          setTimeout(() => {
            dispatch({ type: 'INCREMENT', payload: amount });
          }, 1000);
        };
      };

      dispatch(delayIncrement(5));
      ```

      이 때 `delayIncrement()` 함수를 `dispatch()` 함수의 인자로 실행을 해야,  
      `delayIncrement()` 함수가 반환하는 함수의 인자로 `dispatch` 함수가 전달되며,  
      반환되는 함수 내에서 비동기 작업을 처리한 후 `dispatch`에 액션 객체를 담아 Reducer로 전달하게 된다.
