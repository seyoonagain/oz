# **Redux Toolkit**

---

### 필요한 모듈 설치하기

```bash
yarn add @reduxjs/toolkit react-redux
```

```bash
npm install @reduxjs/toolkit react-redux
```

```bash
pnpm add @reduxjs/toolkit react-redux
```

---

### **createSlice()**

: Redux의 Actions과 Reducers을 한 번에 정의하는 객체 생성 함수

<br>

Redux에서 상태란, 여러 데이터(개별 상태)를 담고 있는 객체로,  
Redux Toolkit의 Slice는 이 여러 데이터 중 일부분, 즉 하나의 특정 데이터에 대한 정보를 담고 있다.  
해당 정보는 상태명, 상태 초기 값, 상태 업데이트 함수 즉, Reducer을 포함한다.

cf. Redux에서는 상태명 대신 상태 업데이트 방식에 해당하는 액션 타입과 업데이트에 필요한 데이터를 담은 액션 객체를 생성한다.  
Reducer는 현재 상태 값과 액션 객체를 인자로 받아, 액션 타입에 따라 다양한 상태 업데이트 로직을 수행한다.

- Slice 생성 방법  
  `createSlice()` 함수에 Action과 Reducer에 대한 정보가 담긴 객체를 전달하여 Slice를 정의한다.

  - 객체 구조

    - name: 슬라이스명
    - initialState: 상태 초기 값
    - reducers: Reducer 함수를 담은 객체

    ```jsx
    const counterSlice = createSlice({
      name: 'counter', // 슬라이스명
      initialState: { value: 0 }, // 상태 초기 값
      reducers: {
        increment: (state) => {
          state.value += 1; // 상태 업데이트 함수
        },
        decrement: (state) => {
          state.value -= 1; // 상태 업데이트 함수
        },
        reset: (state) => {
          state.value = 0; // 상태 초기화 함수
        },
      },
    });
    ```

    위와 같이 `createSlice()`를 이용해 만든 `counterSlice`의 형태는 다음과 같다.

    ```jsx
    {
      name: 'counter', // 슬라이스의 이름
      actions: {
        increment: [Function increment], // increment 액션 생성자
        decrement: [Function decrement], // decrement 액션 생성자
        reset: [Function reset] // reset 액션 생성자
      },
      reducer: [Function reducer], // 슬라이스의 리듀서 함수
      caseReducers: {
        increment: [Function caseReducer], // increment에 대한 리듀서
        decrement: [Function caseReducer], // decrement에 대한 리듀서
        reset: [Function caseReducer] // reset에 대한 리듀서
      }
    }
    ```

    슬라이스명은 그대로 객체에 포함되어 있고, `createSlice()`에서 `reducers`에 정의한 함수가 각각 액션과 리듀서로 나뉘어져 있다.
    `createSlice()`에서 정의한 `initialState`은 slice 객체 내에 명시되어 있지 않지만,  
    `reducer`가 초기 값을 가지고 있다.

---

### **configureStore()**

: Reducer을 전달받아 전역 상태 저장소 생성

<br>

Redux에서는 Store 생성을 위해 `createStore()` 함수를 이용하였는데,  
Redux Toolkit에서는 `configureStore()` 함수를 이용하여 Store을 생성한다.

- 저장소 생성 방법  
  `configureStore()` 함수에 다양한 설정을 포함한 객체를 전달한다.

  - 객체 내 속성

    - **reducer**  
      Redux에서는 Reducer가 두 개 이상일 경우, `combineReducers()`로 묶어준 후 전달해야 했지만,  
      Redux Toolkit에서는 여러 Reducer들을 하나의 객체로 묶어 전달한다.

      - **단일 리듀서**
        ```jsx
        const store = configureStore({
          reducer: rootReducer,
        });
        ```
      - **여러 리듀서 결합**
        ```jsx
        const store = configureStore({
          reducer: {
            counter: counterReducer,
            todos: todosReducer,
          },
        });
        ```

    - **middleware**  
      Redux에서 액션 생성 함수의 비동기 로직 처리를 위해 Thunk를 별도로 설치하고,  
      `createStore()` 함수의 두 번째 인자로 `applyMiddleware()` 함수에 Thunk를 담아 전달하였으나,  
      Redux Toolkit에는 Thunk와 같은 기능은 별도의 미들웨어 설치없이 구현이 가능하다.
      <br>

      Thunk 외에 다른 미들웨어를 사용하고자 할 때,  
      `middleware`의 키 값으로 함수를 전달하며, 이 함수는 `getDefaultMiddleware` 함수를 기본 인자로 받아온다.
      `getDefaultMiddleware()` 함수를 실행하면 현재 미들웨어를 배열로 반환한다.  
      이 배열에 `concat()` 메서드를 이용하여 사용하고자 하는 미들웨어를 추가할 수 있다.

      ```jsx
      const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(customMiddleware),
      });
      ```

    - 그 외 속성들
      - **devTools**
      - **preloadedState**
      - **enhancers**

  - 저장소의 상태를 전역 상태로 만들기  
    Redux와 마찬가지로 `<Provide>` 컴포넌트로 최상위 컴포넌트를 감싸고, `store` prop에 저장소를 전달한다.
    ```jsx
    <Provider store={store}>
      <App />
    </Provider>
    ```

---

### **Redux Toolkit에서 전역 상태 값 가져오는 방법**

1. **useSelector()**  
   Redux와 마찬가지로 전역 상태를 인자로 받아오는데,  
   이 때 받아온 전역 상태는 `슬라이스명-리듀서가 관리하는 상태 값`이 key-value 관계를 가지므로,  
   전역 상태에서 슬라이스명을 이용해 리듀서가 관리하는 상태 값에 접근이 가능하다.

   ```jsx
   const counter = useSelector((state) => state.counter);
   ```

   Redux Toolkit에서 useSelector()의 기본 인자로 전달되는 state의 형태는 다음과 같다.

   ```jsx
   {
     counter: 0 // 리듀서가 관리하는 상태가 원시 자료형일 때
     user: { name: 'Alice', age: 25 } // 리듀서가 관리하는 상태가 참조 자료형일 때
   }
   ```

2. **getState()**
   configureStore()로 생성한 스토어에 getState() 메서드를 사용하여 전역 상태에 접근할 수 있다.  
   이 메서드를 통해 스토어의 현재 상태를 모두 가져올 수 있으며,  
   전역 상태에서 필요한 상태가 담긴 슬라이스를 선택하여 원하는 상태 값을 얻을 수 있다.
   ```jsx
   const currentState = store.getState();
   const counterValue = currentState.counter;
   ```

- `useSelector()` vs. `getState()`
  - `useSelector()`은 컴포넌트 내에서 전역 상태에 접근할 때 사용하며,  
    이 방식으로 가져온 상태가 업데이트 되면, 해당 컴포넌트도 자동으로 리렌더링 된다.
  - `getState()`는 스토어에 직접 접근해서 현재의 상태 값을 확인할 때 사용되며,  
    주로 미들웨어나 비동기 로직(thunk) 내부에서 상태 값을 가져올 때 사용된다.  
    이 방식으로 가져온 값은 상태가 변하더라도 자동으로 업데이트되지 않는다.

---

### **상태 업데이트 하기**

슬라이스의 액션 생성자를 이용해 액션을 생성하고 `dispatch`에 전달하면,
액션에 해당하는 `caseReducer`가 실행되면서 상태가 업데이트 된다.
코드는 다음과 같이 작성할 수 있다.

```jsx
dispatch(counterSlice.actions.increment());
```

---

### **createAsyncThunk()**

: Redux Toolkit에서 비동기 작업 처리를 돕는 함수이자 액션 객체 생성자 함수를 반환한다.

- `createAsyncThunk()`의 매개변수
  - 첫 번째 인자: `'슬라이스명/액션타입명'` 형태의 문자열
  - 두 번째 인자: 비동기 작업을 처리하는 함수
    - 비동기 함수의 매개변수
      - 첫 번째 인자: 액션 객체 생성 함수 호출 시 전달되는 매개변수
      - 두 번째 인자: `thunkAPI` 객체로, `dispatch`, `getState`, `rejectWithValue` 등의 메서드가 담겨있다.  
        필요한 메서드를 구조 분해할당을 통해 가져와 사용할 수 있다.

```jsx
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (userId, { dispatch }) => {
    const response = await fetch(`https://api.example.com/users/${userId}`);
    return response.json(); // 반환된 API 응답 데이터는 액션의 payload에 저장된다.
  }
);

dispatch(fetchUser(123)); // userId에 123을 전달
```
