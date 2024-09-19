# 브라우저가 렌더링 되는 과정

---

### 웹사이트는 어떻게 보여지는 걸까?

웹사이트는 HTML, CSS, JavaScript 그리고 사진 등과 같은 파일들로 구성되어 있다.  
그리고 이 파일들은 인터넷 연결이 되어있는 외부 컴퓨터, 즉, 서버에 저장되어 있다.

<br>

내가 가고자 하는 웹사이트의 주소를 입력했을 때,  
해당 웹사이트의 파일을 가지고 있는 서버로부터 파일을 다운로드 받은 후,  
브라우저는 HTML 파일을 해석하여 DOM(Document Object Model)을 생성하고,  
CSS와 JavaScript 파일을 적용해 최종적으로 화면에 웹페이지를 렌더링한다.

---

### 하지만, 많은 서버들 중 내가 가고자 하는 웹사이트의 서버를 어떻게 찾을 수 있을까?

사람이 외우기 쉽도록 만들어진 `www.google.com`과 같은 도메인 주소는 모두 숫자로 구성된 IP 주소를 대표한다.  
우리가 인터넷에 도메인 주소를 입력하면 **DNS**(_Domain Name System_)이 해당 도메인주소를 IP 주소로 변환하고, 브라우저가 올바른 서버에 요청을 보낼 수 있도록 돕는다.

---

### 도메인 주소의 구성

`https://example.com/blog/post/12345`

- <u>https://</u>: **Scheme**  
   브라우저가 서버와 데이터를 주고 받을 때 약속된 규약을 가리키며,  
   `https://`의 경우, 암호화된 파일을 주고 받게 된다.

- <u>example.com</u>: **Domain**  
   사이트의 도메인 주소로, 특정 서버의 IP 주소를 가리킨다.

- <u>/blog/post/</u>: **Path**  
  서버 내 특정 리소스나 페이지의 경로를 나타낸다.

- <u>/12345</u>: **Resource**  
  path가 가리키는 경로 안에 있는 특정 파일 또는 데이터를 식별한다.

---

### 도메인 주소로 서버 찾기

DNS가 도메인 주소를 IP 주소로 변환하고,  
브라우저에 해당 IP 주소에 대한 캐시된 정보가 있는지 확인한다.  
만약 캐시된 정보가 없다면,  
DNS가 계층적으로 여러 DNS 서버를 탐색하여 해당 서버의 IP 주소를 찾아낸다.

---

### 서버와 연결하기

우리가 가고자 하는 웹사이트의 데이터를 가지고 있는 서버와 **TCP**(_Transmission Control Protocol_) 연결을 통해 데이터를 주고 받을 수 있다.

이 때 **CDN**(_Content Delivery Network_) 시스템을 통해 전 세계 여러 서버에 데이터를 캐싱하고,  
사용자와 가장 가까운 서버로부터 데이터를 전달함으로써 로딩 속도를 개선하고 원본 서버의 과부하를 방지할 수 있다.

---

### 서버에 HTTP Request 보내기

연결된 서버에 해당 페이지의 content를 요청하는 HTTP request를 보낸다.

- 요청 메세지의 구성

  - 요청 행 _Request Line_
    요청 메소드(GET/POST), URL, HTTP 버전 정보 등을 포함
  - 요청 헤더 _Request Headers_
    메세지 정보, 메세지에 저장한 데이터 정보 등을 포함
  - 메세지 본문 _Request Body_
    서버 측으로 보내는 데이터를 포함

  _e.g._

  ```http
  POST /login HTTP/1.1
  Host: www.example.com
  Content-Type: application/x-www-form-urlencoded
  Content-Length: 27

  username=user&password=pass
  ```

  1. 요청 행: `POST /login HTTP/1.1`
     - `POST`: 클라이언트가 `/login` URL에 데이터를 **전송**
     - `HTTP/1.1`: HTTP 버전
  2. 요청 헤더
     - `Host`: 서버의 도메인 이름
       HTTP/1.1부터 모든 요청에 `Host` 헤더를 필수로 포함하여,
       여러 도메인을 관리하는 서버의 도메인 식별을 돕는다.
     - `Content-Type`: 본문 데이터의 유형
     - `Content-Length`: 본문 데이터의 길이
  3. 메세지 본문
     - `username=user&password=pass`
       서버에 전송할 데이터

---

### 요청을 받은 서버가 Response로 답하기

HTTP request에 따라 서버가 요청을 처리하고 클라이언트에게 Response를 전송한다.

- 응답 메세지의 구성

  - 응답 행 _Response Line_
    상태 코드, 상태 메세지, HTTP 버전 정보 등을 포함
  - 응답 헤더 _Response Headers_
    메세지 정보, 메세지에 저장한 데이터 정보 등을 포함
  - 메세지 본문 _Response Body_
    클라이언트에게 보내는 실제 데이터(HTML, JSON, 이미지 파일 등)

  _e.g._

  ```http
  HTTP/1.1 200 OK
  Date: Mon, 01 Jan 2024 12:00:00 GMT
  Server: Apache/2.4.1 (Unix)
  Content-Type: text/html; charset=UTF-8
  Content-Length: 137

  <html>
  <head><title>Example Page</title></head>
  <body>
  <h1>Hello, World!</h1>
  <p>This is an example page.</p>
  </body>
  </html>
  ```

  1. 응답 행: `HTTP/1.1 200 OK`
     - `HTTP/1.1`: HTTP 버전
     - `200`: 상태 코드
     - `OK`: 상태 메세지
  2. 응답 헤더
     - `Date`: 응답이 생성된 날짜와 시간
     - `Server`: 서버의 소프트웨어 정보
     - `Content-Type`: 응답 본문의 MIME 타입
     - `Content-Length`: 응답 본문의 길이
  3. 메세지 본문
     - `<html>...</html>`  
       클라이언트에게 전송되는 실제 데이터

---

위의 내용을 요약하면 다음과 같다.

<img width="600" alt='after entering a url' src="https://gist.github.com/user-attachments/assets/1c5fcd86-2c61-4f68-b7c4-2cca84bf5c9f">

---

### 서버에서 Response를 받아온 그 후에는?

- 서버로부터 받아온 Response를 토대로 브라우저가 웹페이지를 렌더링하는 과정

<img width='600' alt="render process" src='https://gist.github.com/user-attachments/assets/bd220691-b280-4b66-b85f-40dde9f7ebd5'>

1. **HTML 파싱**: 받아온 HTML 파일을 파싱하여 DOM(_Document Object Model_) 생성
2. **CSSOM 생성**: 받아온 CSS 파일을 파싱하여 CSSOM(_CSS Object Model_) 생성
3. **렌더 트리 구축**: DOM과 CSSOM을 결합하여 렌더 트리 생성
4. **레이아웃 계산**: 렌더 트리를 바탕으로 각 요소의 위치와 크기 계산
5. **페인팅**: 화면에 내용 표시

위와 같은 순서로 페이지가 렌더링 된다.

---
