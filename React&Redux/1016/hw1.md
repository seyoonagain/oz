# 실습 과제 part. 1

---

**React Router 설치하기**

```bash
npm install react-router-dom
```

### **라우터 설정하기**

1. `<BrowserRouter>`로 `<App>` 감싸기

```jsx
// main.jsx
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

`<App>`을 감싸면 어디서나 React Router을 사용할 수 있다.

2. `<Routes>`와 `<Route>`로 경로 설정하기

```jsx
// App.jsx
function App() {
  return (
    <>
      <Header />
      <SearchInput />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/search' element={<Search />}></Route>
        <Route path='/detail/:id' element={<Detail />}></Route>
      </Routes>
    </>
  );
}
```

3. data 가져와 렌더링하기

data 파일을 import 해온 뒤, `map()`을 이용해 `<li>`를 생성한다.  
이 때 동물 리스트 중 하나를 클릭하면 해당 동물의 상세 페이지로 넘어가도록 `<Link>`를 이용하였다.  
컴포넌트 재사용을 위해 AnimalList.jsx 라는 파일로 따로 만들었다.

```jsx
// AnimalList.jsx
const AnimalList = ({ animalData }) => {
  return (
    <ul>
      {animalData.map((el) => (
        <li key={el.id}>
          <Link to={`/detail/${el.id}`}>
            // to 속성에 이동하고자 하는 주소를 동적으로 작성하였다.
            <img src={el.img} />
            <div>{el.name}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
};
```

<br>

메인화면에서 다음과 같이 데이터가 렌더링 되었다.

<br>

<img width="700" alt="image" src="https://gist.github.com/user-attachments/assets/f7efbd67-1247-42a5-918b-1e50120487ec">

---

### **라우터 설정하는 또 다른 방식**

수업 때 배운 방식과 이전에 사용해본 방식이 달랐다.  
수업 때 사용한 방식을 이전에 사용해본 방식으로 바꿔보았다.

#### 이전에 사용해본 방식

1. `createBrowserRouter()`로 라우터 생성

```jsx
// main.jsx
// 전역변수로 선언
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: 'search', element: <Search /> },
      { path: 'detail/:id', element: <Detail /> },
    ],
  },
]);
```

2. `RouterProvider()`를 이용해 라우터 사용

```jsx
// main.jsx
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
```

3. `<Outlet />`을 통해 `children`에 속한 element를 표시할 부분 설정하기

```jsx
// App.jsx
function App() {
  return (
    <>
      <Header />
      <SearchInput />
      <Outlet />
    </>
  );
}
```

소규모 프로젝트에서는 전자의 방식을, 대규모 프로젝트에서는 후자의 방식을 이용하는 것이 일반적이라고 한다.
