# **React & Redux**

---

### **Controlled Component**

React의 상태와 입력 요소의 value가 직접 연동되어 있는 컴포넌트를 말한다.

```jsx
const Input = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};
```

위와 같이 `input` 요소에 입력할 때 `inputValue`의 상태가 변하게 되고,  
상태가 변하게 되니 컴포넌트의 리렌더링이 계속적으로 발생하게 된다.

<br>

#### Controlled Component를 사용하는 경우

- 입력 값을 실시간으로 검사하고자 할 때  
   e.g. 비밀번호 재입력 시 일치 여부
- 입력 값이 다른 컴포넌트에 바로 영향을 줄 때  
   e.g. 검색어 입력에 따라 추천 검색어가 바뀌는 경우

<br>

#### Controlled Component를 사용하지 않아도 되는 경우

- 변화하는 입력 값이 아닌 최종 입력 값만 필요할 때
- 상태 변화에 따른 잦은 리렌더링을 방지하여 성능을 향상시키고자 할 때

---

### **useRef()**

#### `useRef()`의 용도

- 실제 DOM 요소에 직접 접근하기
- 리렌더링 시 변수 초기화 없이 유지시키기

#### **useRef() 사용법**

- 실제 DOM 요소에 직접 접근하기  
  `useRef()`가 반환하는 값은 `current`라는 속성을 가진 객체이고,  
   이 객체를 변수에 담아 해당 변수를 DOM 요소의 `ref` 속성으로 지정하면,  
   객체의 `current` 속성이 자동으로 그 DOM 요소를 참조하게 된다.  
   `useRef()`의 인자로는 초기값을 전달하는데, 이 때 DOM를 참조하기 전이므로 보통 `null`을 전달한다.

  ```jsx
  const Input = () => {
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);
    return (
      <>
        <input type='text' ref={inputRef} />
      </>
    );
  };
  ```

    <br>

  위의 경우, `inputRef.current === <input type='text' ref={ref}>`이 성립한다.

<br>

- 리렌더링 시 변수 초기화 없이 유지시키기  
   `useRef()`가 반환하는 객체의 `current` 속성에 접근하여 변수를 관리한다.  
   `useRef()`의 인자로 변수의 초기값을 설정할 수 있지만,  
   리렌더링 시에는 이전 생명주기에서 `current` 속성이 가리켰던 값을 유지한다.

---

### **Custom Hook**

React Hooks에는 `useState()`, `useEffect()`, `useRef()` 등이 있다.  
각각의 훅들이 하는 기능만 알고 있으면 로직을 몰라도 쉽게 사용할 수 있고,  
여러 곳에서 특정 기능을 사용하고자 할 때, 간단하게 원하는 훅을 가져다 사용할 수가 있다.  
이 덕분에 코드의 중복을 막을 수 있고, 수정이 필요할 때는 훅만 수정하면 되기 때문에 더욱 편리한 유지보수가 가능하다.

#### **훅의 장점**

- 중복 코드 방지
- 재사용성
- 코드 가독성
- 유지 보수성
