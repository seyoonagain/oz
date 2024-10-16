# **React & Redux**

---

### **조건부 렌더링**

조건 연산자를 이용하여 조건에 따라 렌더링 되는 컴포넌트 또는 html 요소를 그리는 방식

- if문  
   컴포넌트 내에서 조건에 따라 return 하는 jsx 문법 설정

  ```jsx
  function Face({ mood }) {
    if (mood === 'happy') {
      return <span>😊</span>;
    } else {
      return <span>😔</span>;
    }
  }
  ```

- 삼항연산자  
   `조건 ? 참인 경우 : 거짓인 경우`

  ```jsx
  function App() {
    const [mood, setMood] = useState('happy');
    return <span>{mood === 'happy' ? '😊' : '😔'}</span>;
  }
  ```

- 논리연산자  
   `조건 && 참인 경우`

  ```jsx
  function App() {
    const [mood, setMood] = useState('happy');
    return (
      <>
        {mood === 'happy' && <span>😊</span>}
        {mood === 'sad' && <span>😔</span>}
      </>
    );
  }
  ```

---

### **React Router**

리액트가 **SPA** 방식으로 라우팅을 할 수 있게 도와주는 라이브러리

#### **Routing이란?**

사용자가 특정 경로(주소)로 이동할 때 해당 경로에 맞는 콘텐츠나 컴포넌트를 렌더링하는 과정

#### **React Router 주요 컴포넌트**

- `<BrowserRouter>`  
   React Router을 사용하고 싶은 곳을 해당 컴포넌트로 감싼다.

  ```jsx
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ```

- `<Link>`  
   `to` 속성을 이용하여 이동하고 싶은 주소를 설정하여 다른 주소로 이동이 가능  
   `<a>` 태그와 비슷한 기능이나, 그와 달리 새로고침을 일으키지 않는다.

  ```jsx
  <Link to='/main'>메인</Link>
  ```

- `<Routes>`  
   `<Route>` 들을 묶어 주는 역할

- `<Route>`  
   특정 주소에서 보여줄 컴포넌트를 정하는 역할

  ```jsx
  <Routes>
    <Route path='/main' element={<Main />} />
    <Route path='/mypage' element={<MyPage />} />
    <Route path='/test' element={<Test />} />
  </Routes>
  ```

#### **React Router 주요 함수**

- `useNavigate()`  
   특정 주소로 이동할 수 있게 해주는 함수를 생성
  ```jsx
  const navigate = useNavigate();
  navigate('/main'); // /main 으로 이동
  navigate(1); // 앞으로 가기
  navigate(-1); // 뒤로 가기
  ```
- `useLocation()`  
   현재 페이지의 위치 정보를 담은 객체 생성
  ```jsx
  const location = useLocation();
  location.pathname; // 현재 경로
  location.search; // 쿼리 스트링 (? 뒤에 쓰인 문자열)
  ```
- `useParams()`  
   주소의 쿼리 파라미터 값을 담은 객체 생성  
   주소 설정 시 `:` 뒤에 쿼리 이름을 지정하여 사용한다.

  ```jsx
  // 주소 설정
  <Route path='/main/:name' element={<Main/>}>

  // Main 컴포넌트에서 :name 자리에 쓰인 문자열 받아오기
  // 예시 주소: /main/day6
  const params = useParams();
  params.name; // day6
  ```

- `useSearchParams()`  
  주소의 쿼리 스트링 값을 가져올 수 있는 객체와  
  쿼리 스트링을 수정할 수 있는 함수 생성

  ```jsx
  // 예시 주소: /main?keyword=NewJeans&song=Ditto
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get('keyword'); // NewJeans
  searchParams.get('song'); // Ditto
  setSearchParams({ keyword: 'Aespa' }); // keyword에 들어온 쿼리 수정
  ```
