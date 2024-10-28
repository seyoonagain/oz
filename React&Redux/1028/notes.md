# **React & Redux**

---

React에서는  
부모 컴포넌트와 자식 컴포넌트 간의 공유되는 데이터는 prop으로 전달할 수 있다.

<br>

이 때, 앱 내에서 전역적으로 공유되는 데이터의 경우,  
계속 prop으로 데이터를 전달하는 것은, 특히나 앱이 크고 트리가 깊을 수록, 코드가 복잡해지고,  
데이터를 필요로하지 않는 컴포넌트여도 자식 컴포넌트가 데이터를 필요로하면 prop을 전달 받고 또 전달 해줘야 하며,  
유지보수 하려면 prop을 일일이 변경해야 하는 번거로움이 발생한다.

<br>

이를 해결하고자 React는 Context를 제공해준다.

### **Context API란?**

컴포넌트 트리 전체에 전역 데이터를 손쉽게 전달할 수 있는 방법

### **Context API를 사용하는 이유**

Context API를 통해 중간 컴포넌트를 거치지 않고도 필요한 컴포넌트에서 바로 데이터를 사용할 수 있으며,  
이를 통해 불필요한 prop 전달을 줄이고, 코드의 가독성과 유지보수를 향상시킬 수 있다.

---

### **Context API 사용 방법**

1. `createContext()` 이용하여 전역 데이터를 관리할 Context 생성

```jsx
import React, { createContext } from 'react';

const GlobalContext = createContext();
```

2. 자식 요소를 감쌀 Context Provider 함수 생성

```jsx
import React, { createContext } from 'react';

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
}
```

3. 전역에서 관리할 상태 설정하기  
   만들어진 상태는 `Context.Provider`에 `value` prop에 담아 전달한다.  
   상태 전달 시에는 객체 형태로 전달한다.  
   배열이 아닌 객체 형태로 전달함으로써 작성 순서에 관계없이 구조 분해 할당이 가능하다는 장점이 있다.

```jsx
import React, { useState, createContext } from 'react';

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}
```

4. `useContext()` 설정하기
   Context를 사용하는 곳에서 useContext() 안에 사용하고자 하는 Context를 전달하여 전역 상태를 가져올 수도 있지만,  
   조금 더 간결한 사용을 위해 Context를 설정한 파일 내에서 useContext()를 실행하는 함수를 만들어 export하여 쓰는 것을 선호한다.

```jsx
import React, { useState, createContext, useContext } from 'react';

const GlobalContext = createContext();

export default function GlobalContextProvider({ children }) {
  const [data, setData] = useState([]);
  return (
    <GlobalContext.Provider value={{ data, setData }}>
      {children}
    </GlobalContext.Provider>
  );
}

export const useGlobalContext = () => useContext(GlobalContext);
```

5. 최상위 컴포넌트에 Context Provider 씌워주기

```jsx
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import GlobalContextProvider from './Contexts/GlobalContext';

createRoot(document.getElementById('root')).render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>
);
```

6. 사용하고자 하는 컴포넌트에서 필요한 전역 상태 가져오기

```jsx
import { useGlobalContext } from '../Context/GlobalContext';

export default function Data() {
  const { data } = useGlobalContext();

  return (
    <section>
      {data.map((item) => (
        <p> {item} </p>
      ))}
    </section>
  );
}
```
