# 실습 과제 part. 2

---

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

위와 같이 router를 설정해두었을 때,  
`/detail/20241016`이라는 주소로 이동했다고 가정해보자.  
이 때 표시되는 컴포넌트는 `<Detail />`로,
해당 컴포넌트에서 `id` 자리에 쓰인 값을 `useParams()`를 이용해 가져올 수 있다.  
`useParams()`를 콘솔에 찍으면 다음과 같이 나온다.

<br>

<img src='https://gist.github.com/user-attachments/assets/cc34c070-48d5-40f9-a454-35d2ab3af1b1'>

<br>

```jsx
// Detail.jsx
const Detail = () => {
  const { id } = useParams();
  const animal = data.find((el) => el.id === Number(id));
  return (
    <section className='detail'>
      <img src={animal.img} />
      <h2>{animal.name}</h2>
      <div>{animal.description}</div>
    </section>
  );
};
```

편리한 사용을 위해 구조분해할당을 이용해 값을 받아왔다.  
이와 같이 설정해준 동적 라우팅을 통해 다양한 데이터를 보여줄 수 있는 페이지를 만들 수 있다.

<br>

`id` 정보를 이용해 받아온 데이터가 상세페이지에 다음과 같이 렌더링 되었다.

<br>

<img width="700" alt="image" src="https://gist.github.com/user-attachments/assets/fc15d8a8-5bb1-4c33-9953-5beaca51bdc3">
