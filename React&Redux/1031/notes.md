# **React & Redux**

---

### **CSR _Client Side Rendering_**

리액트는 서버로부터 빈 HTML 파일와 자바스크립트 파일을 받아와  
클라이언트 측에서 해당 파일을 사용하여 화면을 렌더링하는 **CSR** 방식으로 동작한다.

<br>

이 때, 자바스크립트 파일이 크면 클수록 사용자가 빈 화면만 보고 있는 시간이 길어질 수 있다.  
이를 해결하기 위해 화면 내의 필요한 컴포넌트만 먼저 받아와 성능을 최적화하도록 도와주는 것이 **lazy & Suspense**이다.

---

### **lazy & Suspense**

- **lazy**: 컴포넌트를 미리 불러오지 않고 실제로 사용될 때 불러오는 것
- **Suspense**: 컴포넌트를 불러오는 동안 사용자에게 보여질 임시 화면 설정

---

### **lazy**

- 기본적인 컴포넌트 import 방식

  ```jsx
  import Main from './Main.jsx';
  ```

- **lazy()** 함수를 이용한 컴포넌트 import 방식  
  컴포넌트로 사용할 변수에 **lazy()** 함수를 담아 사용한다.

  - `const Component = lazy()`
  - **lazy()** 함수의 인자: `() => import()`
  - **import()** 함수의 인자: import 해오고자 하는 컴포넌트의 경로
  - 사용 예시

    ```jsx
    const Main = lazy(() => import('./Main.jsx'));
    ```

---

### **Suspense**

**lazy()** 함수를 이용해 불러온 컴포넌트를 `<Suspense>` 컴포넌트로 감싼다.  
 `<Suspense>` 컴포넌트의 prop로 전달된 `fallback`에는 자식 컴포넌트가 로딩되는 동안 보여줄 임시 화면을 작성한다.

```jsx
<Suspense fallback={'로딩 중...'}>
  <Main />
</Suspense>
```

---

### **번들링 _Bundling_**

여러 개의 JavaScript 파일과 CSS 파일 등을 하나의 파일로 합치는 작업을 가리킨다.

> 번들링의 두 가지 의미
>
> 1. 여러 파일을 하나로 합치는 파일 번들링
> 2. 코드를 합치거나 나누어 묶는 코드 번들링

  <br>

- 리액트 환경에 따른 번들링 도구

  | 리액트 환경 | 번들링 도구 |                           특징                            |
  | :---------: | :---------: | :-------------------------------------------------------: |
  |    Vite     | **Rollup**  |         작은 라이브러리나 경량화된 번들링에 적합          |
  |     CRA     | **Webpack** | 다양한 파일 형식과 복잡한 웹 애플리케이션을 번들링에 적합 |

---

### **번들링의 효과**

- **로딩 시간 단축**  
  여러 개의 작은 파일을 하나로 묶으면 HTTP 요청 횟수가 줄어들면서 서버와 클라이언트 간의 왕복 시간이 짧아져 페이지 로딩 속도가 개선된다.

- **코드 난독화 및 최적화**  
  번들링 과정에서 코드 난독화 및 압축이 가능하여, 파일 크기를 줄이고 코드의 보안성을 강화할 수 있다.

- **의존성 관리**  
  번들링 도구는 의존성 트리를 자동으로 분석하여 필요한 파일만 포함해준다.  
  이로 인해 불필요한 파일이 번들에 포함되지 않아, 파일 크기가 줄어들고 최적화된 파일이 생성된다.

- **모듈화된 개발 지원**  
  각 기능을 모듈별로 나눠 개발할 수 있어 유지보수가 쉽고 협업에 용이하다.

- **캐싱 최적화**  
  번들링된 파일은 하나의 큰 파일로 캐싱할 수 있어, 코드가 변경되지 않는 한 서버로부터 다시 가져올 필요가 없다.  
  이를 통해 네트워크 트래픽을 줄여 사용자가 페이지를 더 빠르게 사용할 수 있게 된다.

---

### **코드 스플리팅 _Code Splitting_**

번들링과 반대되는 개념으로 코드를 여러 개의 작은 부분으로 나누고 필요한 부분만 로드하도록 하는 기법을 가리킨다.  
리액트에서 **lazy & Suspense**는 대표적인 코드 스플리팅 방법이다.  
컴포넌트 외의 코드를 코드 스플리팅을 통해 최적화하고자 한다면 번들링 도구를 사용할 수 있다.

---

### **코드 스플리팅의 효과**

- **초기 로딩 시간 단축**  
  코드 스플리팅을 통해 사용자에게 필요한 주요 코드만 로드할 수 있기 때문에 초기 페이지 로딩 속도가 빠르다.

- **네트워크 효율성 개선**  
  각 페이지나 기능에 필요한 코드만 로드하므로 네트워크 요청을 줄이고, 파일의 크기를 줄임으로써 데이터 비용을 절감할 수 있다.

- **브라우저 캐싱 최적화**  
  코드 스플리팅을 통해 나눈 청크는 개별 파일로 캐싱할 수 있어, 변경이 없는 파일은 다시 다운로드하지 않고 재사용이 가능하다.

- **사용자 경험 개선**  
  초기 화면이 빠르게 렌더링되면 사용자에게 애플리케이션이 즉각 반응하는 느낌을 줄 수 있고, 페이지가 로딩되는 시간을 더 적게 느끼게 된다.

- **번들 크기 감소**  
  모든 코드를 하나의 파일로 묶는 경우 불필요한 코드도 함께 로드되지만,  
  코드 스플리팅을 통해 특정 기능에 필요한 코드만 불러오기 때문에 번들 크기를 줄일 수 있다.

---

### **Debounce & Throttle**

**Debounce**와 **Throttle**은 이벤트를 최적화하는 기법으로,  
사용자 입력이 많은 상황에서 성능을 개선하는 데 주로 사용된다.

- **Debounce**: 마지막에 한 번에 묶어서 처리해도 되는 이벤트 처리
- **Throttle**: 지속적인 상호작용이 필요한 이벤트를 특정 간격으로 처리

---

### **Debounce**

- 개념  
  특정 이벤트가 연속해서 발생할 때,  
  마지막 이벤트 이후 일정 시간 동안 추가 이벤트가 발생하지 않으면 그때 한 번만 실행하는 방식

- 사용 예시
  - 검색 입력 자동 완성:  
    사용자가 빠르게 입력할 때마다 API 요청을 보내면 비효율적이다.  
    Debounce를 사용해 마지막 입력 후 일정 시간이 지나면 API 요청을 보냄으로써 서버 요청을 줄일 수 있다.

<br>

마지막 이벤트 발생 이후 일정한 시간이 지난 후 이벤트를 처리한다.  
시간 내 추가 이벤트가 발생한 경우, 추가로 발생한 이벤트에 맞춰 시간을 재설정한다.

```jsx
import React, { useEffect, useState } from 'react';

export default function App() {
  const [debounceQuery, setDebounceQuery] = useState('');

  const handleDebounceQueryChange = (event) => {
    setDebounceQuery(event.target.value);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      console.log('검색 쿼리:', debounceQuery);
    }, 1000);
    return () => clearTimeout(debounceTimer);
  }, [debounceQuery]);

  return (
    <div className='container'>
      <div>
        <h2>Debounce</h2>
        <input
          type='text'
          placeholder='Debounce를 이용한 검색...'
          onChange={handleDebounceQueryChange}
        />
      </div>
    </div>
  );
}
```

---

### **Throttle**

- 개념  
  일정한 간격으로 이벤트를 실행하는 방식

- 사용 예시
  - 스크롤 이벤트:  
    사용자가 페이지를 스크롤할 때마다 이벤트가 발생하면 성능에 큰 영향을 준다.  
    Throttle을 사용해 일정 간격으로만 이벤트가 발생하도록 제한함으로써 성능을 개선할 수 있다.

<br>

이벤트가 발생한 후 일정한 시간 간격으로 이벤트를 처리하는데,  
이벤트 처리 전 또 다른 이벤트가 발생하였을 때, 해당 이벤트에 대한 시간 설정은 무시되며,  
첫 이벤트 발생으로부터 흐른 시간을 뺀 후에 이벤트 처리가 되도록 식을 작성한다.

```jsx
import React, { useEffect, useRef, useState } from 'react';
import { debounce, throttle } from 'lodash';

export default function App() {
  const [throttleQuery, setThrottleQuery] = useState('');
  const time = useRef(new Date());

  const handleThrottleQueryChange = (event) => {
    setThrottleQuery(event.target.value);
  };

  useEffect(() => {
    const newTime = new Date();
    const throttleTimer = setTimeout(() => {
      console.log('검색 쿼리:', throttleQuery);
      time.current = new Date();
    }, 1000 - (newTime - time.current));
    return () => clearTimeout(throttleTimer);
  }, [throttleQuery]);

  return (
    <div className='container'>
      <div>
        <h2>Throttle</h2>
        <input
          type='text'
          placeholder='Throttle을 이용한 검색...'
          onChange={handleThrottleQueryChange}
        />
      </div>
    </div>
  );
}
```

---

### **lodash 라이브러리를 이용한 debounce & throttle**

throttle의 경우, 이벤트가 처리되는 시간을 계산하는 것이 조금 복잡하다.
이 때 lodash 라이브러리를 사용하여 훨씬 더 간단하게 debounce와 throttle을 구현할 수 있다.

<br>

- lodash debounce 작성법
  `debounce(() => {이벤트 처리}, 마지막 동작으로부터 지연 시간)`

- lodash throttle 작성법
  `throttle(() => {이벤트 처리}, 이벤트 처리할 시간 간격)`

```jsx
import React from 'react';
import { debounce, throttle } from 'lodash';

export default function App() {
  const handleLodashDebounceQueryChange = debounce((event) => {
    console.log('검색 쿼리:', event.target.value);
  }, 1000);
  const handleLodashThrottleQueryChange = throttle((event) => {
    console.log('검색 쿼리:', event.target.value);
  }, 1000);

  return (
    <div className='container'>
      <div>
        <h2>Lodash Debounce</h2>
        <input
          type='text'
          placeholder='Lodash Debounce를 이용한 검색...'
          onChange={handleLodashDebounceQueryChange}
        />
      </div>
      <div>
        <h2>Lodash Throttle</h2>
        <input
          type='text'
          placeholder='Lodash Throttle을 이용한 검색...'
          onChange={handleLodashThrottleQueryChange}
        />
      </div>
    </div>
  );
}
```
