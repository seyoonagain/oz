# **React & Redux**

---

### **Redux란?**

주로 React와 함께 사용되는 경우가 많은 Redux는 상태를 효율적으로 관리하기 위해 만들어진 상태 관리 라이브러리이다.  
전역 상태를 하나의 중앙 저장소(Store)에서 관리하여 다양한 컴포넌트들이 일관성 있게 데이터를 공유한다.

---

### **Redux의 데이터 흐름(flux)**

Redux는 flux 패턴을 기반으로 **단방향 데이터 흐름**을 따른다.

1. 사용자의 입력이나 이벤트에 따라 상태 변경 요청을 담은 Action 생성
2. Dispatch 함수로 Store에 있는 Reducer 함수에 Action 전달
3. Reducer 함수에서 Action에 따라 새로운 상태 반환
4. Reducer 함수로 반환 된 새로운 상태를 Store에 저장
5. Store에서 상태가 변경되었음을 감지하여 필요한 컴포넌트만 상태 업데이트 및 리렌더링

---

### **Redux의 구성요소**

- **Action**
  - 상태 변경을 요청하는 객체
  - type과 payload로 구성
- **Reducer**
  - 새로운 상태를 반환하는 함수
  - 첫 번째 매개변수: 현재 상태 값
  - 두 번째 매개변수: dispatch 함수가 전달한 액션
- **Dispatch**
  - 액션을 리듀서에 전달하는 함수
  - 상태 변경 트리거
- **Store**
  - 애플리케이션의 상태가 저장되는 중앙 저장소

---

### **Redux로 전역 상태 사용하기**

- Redux 설치하기

  ```bash
  npm install redux react-redux
  ```

- Action 및 Reducer 정의하기

  - 액션 정의 방법

    1. 액션 객체

    ```js
    const increment = {
      type: 'INCREMENT';
      payload: 5;
    }
    ```

    2. 액션 생성자: 액션 객체를 동적으로 생성할 수 있다.

    ```js
    const increment = (num) => ({
      type: 'INCREMENT'
      payload: num;
    })
    ```

  - Reducer 정의
    ```js
    const counterReducer = (state = initialValue, action) => {
      switch (action.type) {
        case 'INCREMENT':
          return state + action.payload;
        // ...
        default:
          return state;
      }
    };
    ```
    case에 해당하지 않는 값이 잘못 들어오는 경우를 대비하여 반드시 `default` 경우를 작성할 것!  
    그렇지 않으면 state이 `undefined`로 바뀌게 되어 추후 상태 변경에도 영향을 주게 된다.
  - 전역으로 관리할 상태가 여러 개 → `combineReducers()` 함수로 여러 Reducer들을 묶어서 하나로 관리
    ```js
    const rootReducer = combineReducers({
      counterReducer,
      anotherReducer,
    });
    ```

- Store 생성 및 Reducer 전달

  - `createStore()` 함수에 사용하고자 하는 Reducer를 전달하여 생성
    ```js
    export const store = createStore(rootReducer);
    ```
    Provider에 store 설정을 위해 export 해준다.

- App과 전역 상태 저장소 연결하기

  ```jsx
  import { createRoot } from 'react-dom/client';
  import App, { store } from './App.jsx';
  import { Provider } from 'react-redux';

  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ```

- 상태 저장소로부터 상태 꺼내서 사용하기

  - `useSelector()`  
    `useSelector()`는 Redux의 `Store`에서 특정 상태를 가져오는 데 사용하는 훅
    ```jsx
    const counter = useSelector((state) => state.counterReducer);
    ```

- dispatch 함수 만들어 액션 전달하기

  - 액션 전달 방법

    - 액션 객체 직접 전달
      ```js
      dispatch(increment);
      ```
    - 액션 생성자 반환 값 전달
      ```js
      dispatch(increment(5));
      ```

  - `useDispatch()`  
    `useDispatch()`는 Redux의 `dispatch` 함수를 React 컴포넌트에서 사용할 수 있게 해주는 훅
    ```jsx
    const dispatch = useDispatch();
    //...
    <button onClick={() => dispatch(increment)}> count + 1 </button>;
    ```

---

### **Redux-Thunk란?**

Redux-Thunk는 Redux의 미들웨어로, 비동기 작업을 처리할 수 있도록 한다.  
기본적으로 Redux는 동기 작업만을 처리하지만,  
Thunk를 사용하면 비동기 API 호출과 같은 작업을 Action을 통해 실행할 수 있다.

<br>

**_어떻게?_**  
dispatch 함수에 전달하는 액션으로 객체 말고 함수도 전달할 수 있게 해줌으로써,  
여러 비동기 동작들을 해당 함수에서 실행할 수 있다.

- 사용 방법

  - 설치하기
    ```bash
    npm install redux-thunk
    ```
  - createStore()함수에 Reducer와 함께 applyMiddleware() 함수로 thunk를 전달
    ```jsx
    export const store = createStore(rootReducer, applyMiddleware(thunk));
    ```
  - dispatch() 함수에 action 함수 전달  
    이 때 dispatch를 인자로 받아와 함수를 실행한다.

    ```jsx
    <button
      onClick={() =>
        dispatch((dispatch) => {
          setTimeout(() => {
            dispatch(increment);
          }, 1000);
        })
      }
    >
      count + 1
    </button>
    ```

---

### **Redux Toolkit이란?**

Redux Toolkit은 Redux의 공식적인 툴셋으로, 설정을 단순화하고 보일러플레이트 코드를 줄인다.

#### **보일러플레이트 코드란?**

소프트웨어 개발에서 자주 사용되지만 기능적으로는 큰 차이가 없는 반복적인 코드 조각을 의미

---

### **Redux vs. Redux Toolkit**

- **Redux**: 상태 관리 라이브러리
- **Redux Toolkit**: Redux를 쉽게 사용할 수 있도록 하는 도구 모음  
  Redux Toolkit은 Redux 설정을 간소화하고 반복되는 코드를 줄이기 때문에 Redux보다 개발 생산성이 높음

---

### **Redux Toolkit 사용하기**

- 설치하기

  ```bash
  npm install @reduxjs/toolkit react-redux
  ```

- 슬라이스 정의하기  
  `createSlice()`는 Redux의 액션과 리듀서를 함께 정의할 수 있는 함수이다.
  `createSlice()`에 전달한 객체의 `name` 속성에 해당하는 값을 이름으로 하는 슬라이스가 생성되며,  
  이 슬라이스는 특정 상태와 관련된 액션을 처리하는 리듀서를 포함합니다.

  ```js
  createSlice({
    name: 'counter',
    initialState: 0,
    reducer: {
      increment(state, action) {
        return (state += 1);
      },
      decrement(state, action) {
        return (state -= 1);
      },
    },
  });
  ```

- 저장소 만들기  
  `configureStore()`는 Redux의 `createStore()`와 유사한 기능을 제공하는 함수이다.  
  이 함수에 전달하는 객체에는 `reducer`라는 키가 있으며, 해당 키 안에 사용하고자 하는 리듀서를 전달한다.  
  `reducer`는 슬라이스 이름과 해당 슬라이스의 리듀서를 키-값 형태로 담은 객체이다.

  ```js
  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      another: anotherSlice.reducer,
      //...
    },
  });
  ```

- App과 전역 상태 저장소 연결하기

  ```jsx
  import { createRoot } from 'react-dom/client';
  import App, { store } from './App.jsx';
  import { Provider } from 'react-redux';

  createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  ```

- 상태 저장소로부터 상태 꺼내서 사용하기

  - `useSelector()`  
    `useSelector()`는 Redux의 `Store`에서 특정 상태를 가져오는 데 사용하는 훅
    ```jsx
    const counter = useSelector((state) => state.counter);
    ```

- dispatch 함수 생성하여 액션 전달하기  
  `dispatch()`는 Redux의 상태를 변경하는 액션을 스토어에 전송하는 함수이다.  
  `createSlice()`에서 정의한 슬라이스의 액션에 접근하려면, 액션 생성자의 이름을 사용하여 호출한다.  
  예를 들어, `counterSlice`의 `increment` 액션을 사용하려면 다음과 같이 작성합니다.

  ```js
  <button onClick={() => dispatch(counterSlice.actions.increment())}>
    count + 1
  </button>
  ```

---

### **Redux Toolkit의 Thunk**

Redux Toolkit에서는 Thunk를 기본적으로 포함하고 있다.  
Redux의 Thunk와 마찬가지로 Redux Toolkit의 Thunk를 이용하여 비동기 작업을 쉽게 처리할 수 있으며,  
`createAsyncThunk` 함수를 사용해 비동기 액션을 자동으로 생성하고 관리할 수 있다.

---

### **createAsyncThunk() 사용하기**

- `createAsyncThunk()`로 액션 생성자 생성

  - 첫 번째 매개변수: 액션 타입을 문자열 형태인 `slice명/action명` 형식으로 작성한다.
  - 두 번째 매개변수: 비동기 작업을 수행할 함수

  ```js
  const slowIncrementThunk = createAsyncThunk(
    'counter/slowIncrement',
    (payload, { dispatch }) => {
      setTimeout(() => dispatch(counterSlice.actions.increment()), 1000);
    }
  );
  ```

- dispatch에 생성자 전달
  ```jsx
  <button onClick={() => dispatch(slowIncrementThunk())}>count + 1</button>
  ```

---
