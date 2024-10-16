# 실습 과제 part. 3

---

검색어를 입력하면 해당 검색어를 쿼리 파라미터로 하는 주소로 이동한다.

```jsx
// SearchInput.jsx
const SearchInput = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?animal=${inputValue}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleSubmit}>검색</button>
      </form>
    </>
  );
};
```

검색버튼을 누르면 `/search` 뒤에 쿼리 파라미터가 입력된 주소로 이동한다.

- 쿼리 파라미터: `?파라미터이름=쿼리스트링`

라우터 설정에 따라 `<Search />` 컴포넌트가 화면에 렌더링된다.  
`<Search />` 컴포넌트 내에서 쿼리 파라미터의 값을 `useSearchParams()`를 이용해 가져올 수 있다.  
`useSearchParams()`는 쿼리 스트링을 가져올 수 있는 객체 `searchParams`와 쿼리 스트링을 수정할 수 있는 함수 `setSearchParams()`를 반환한다.

```jsx
// Search.jsx
const Search = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('animal');
  const regexp = getRegExp(query);
  const filteredData = data.filter((el) => el.name.match(regexp));
  return (
    <>
      <AnimalList animalData={filteredData} />
    </>
  );
};
```

쿼리 스트링 값만 필요하므로 `searchParams`만 구조분행할당을 이용해 가져온다.  
객체 `searchParams`에 있는 `get()` 메소드에 파라미터의 이름을 전달하여 쿼리 스트링을 받아올 수 있다.

<br>

`korean-regexp`라는 디펜던시를 설치하여 한국어 자음 또는 모음만으로도 일치하는 결과를 가져올 수 있는 정규표현식을 만들어 필터링하였다.
