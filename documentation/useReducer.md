# `useReducer()`

`useReducer()`은 `useState()`와 유사하지만 조금 더 복잡한 상태 관리에 적합하다.

---

### `useReducer()`의 기본 형태

```jsx
const [state, dispatch] = useReducer(reducer, initialState, init);
```

- `useReducer()`의 리턴값

  - **state**: 상태값
  - **dispatch**: **reducer**에게 상태를 어떻게 업데이트 하는지 정보를 전달하는 함수

- `useReducer()`의 매개변수

  - **reducer**: 상태의 업데이트를 실행할 `reducer` 함수
  - **initialState**: 초기 상태값
  - **init?**: **initialState**를 인자로 받아 초기 상태값을 계산하는 `init` 함수  
    `init` 함수가 전달되면 이 함수의 반환값이 초기 상태값이 된다.

---

### `dispatch()`

- `dispatch`의 기본 형태
  ```jsx
  dispatch({ type, payload });
  ```
  - `{type, payload}` 형태의 `action` 객체를 전달한다.
    - **type**: 상태에 대해 실행할 동작의 명칭으로,  
      해당 명칭에 따라 `reducer` 함수 내에서 상태 변화가 달리 발생한다.
    - **payload**?: 실행할 동작 내에서 필요할 추가 데이터로, 여러 개 추가 가능

---

### `reducer()`

- `reducer()`의 기본 형태
  ```jsx
  function reducer(state, action) {
    switch (action.type) {
      case type_name:
        return state + action.payload;
      default:
        return state;
    }
  }
  ```
  - **state**: 현재 상태값
  - **action**: `dispatch()`로 전달한 객체로, 액션 명칭 및 동작에 필요한 데이터 정보를 담고 있다.
  - `switch()` 함수에서 액션 객체 내 type명에 따라 해당하는 로직을 실행하고,  
    실행한 로직의 결과 값을 반환하여 새로운 상태 값으로 업데이트한다.
  - `switch()` 함수 내 해당하는 액션의 명칭이 없다면 `default`에서 현재 상태값을 다시 반환한다.
  - 이 때, `switch()` 함수 내 액션 명칭이 없고 동시에 `default`도 정의되어 있지 않으면,  
    상태값이 `undefined`으로 업데이트 되고 이 다음 동작의 초기값이 `undefined`이 되면서  
    다음 동작에도 영향을 미치기 때문에 반드시 `default`를 설정하여 상태값을 유지하도록 한다.

---
