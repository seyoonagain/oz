# JavaScript

---

### **HTTP**

**HTTP**란?

- *HyperText Transfer Protocol*의 약자
- 정의: 웹 브라우저와 웹 서버가 데이터를 주고 받을 때 약속된 규약

**HTTPS**란?

- 정의: SSL/TLS 암호화가 추가된 보안이 강화된 규약
- 목적: 데이터를 암호화하여 전송함으로써, 중간에 데이터의 조작을 방지
- 사용: 주로 로그인, 결제 정보 등 민감한 데이터 처리 시 사용

---

### **HTTP 통신의 절차**

1. 클라이언트(사용자 컴퓨터)의 데이터 요청
2. 클라이언트와 서버를 연결
3. 서버의 데이터 전송(응답)
4. 클라이언트와 서버의 연결 종료

서버가 클라이언트의 데이터 요청에 대한 응답을 한 후,  
서버와 클라이언트의 연결이 종료되며,  
서버는 클라이언트의 이전 요청에 대한 정보(상태)를 저장하지 않고, 초기 상태로 돌아간다.

이러한 특징으로 HTTP를 stateless(상태가 없는) 규약이라고 한다.

---

### **HTTP 요청과 응답**

- 요청 _Request_

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

- 응답 _Response_

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

### **HTTP 상태 코드**

**상태 코드란?**
요청에 따른 처리 결과를 보여주는 숫자 코드

1. 정보(1xx): 요청의 처리 상태에 대한 정보 전달
2. 성공(2xx): 요청을 성공적으로 처리함
3. 리다이렉션(3xx): 요청된 리소스의 위치 변경으로 재요청 필요
4. 클라이언트 오류(4xx): 클라이언트의 요청에 문제가 있음
5. 서버 오류(5xx): 서버가 요청을 처리하는 도중 문제 발생

- 주요 코드

  | 상태코드 |      상태 메세지      |             내용             |
  | :------: | :-------------------: | :--------------------------: |
  |   200    |          OK           |          요청 성공           |
  |   401    |     Unauthorized      |          인증 실패           |
  |   403    |       Forbidden       | 요청 리소스에 접근 권한 없음 |
  |   404    |       Not Found       |  요청 리소스가 서버에 없음   |
  |   500    | Internal Server Error |        서버 내부 오류        |
  |   503    |  Server Unavailable   |     서버 일시 사용 불가      |

<br>

---

### **XMLHttpRequest**

- **XMLHttpRequest**란?

  - 서버와 통신하기 위한 자바스크립트 빌트인 생성자
  - Ajax 기법을 통해 페이지 전체 새로고침 없이 페이지의 일부만 업데이트 하여 사용자에게 동적인 콘텐츠를 제공할 수 있다.

- **Ajax(Asynchronous JavaScript And XML) 기법**

  - 비동기 방식으로 서버와 데이터를 주고받으며, 페이지를 동적으로 갱신하는 프로그래밍 기법
    - XML 외에도 JSON 등 다양한 데이터 형식 사용 가능
    - 사용자의 입력 및 요청에 대해 원활한 처리 가능

- **XMLHttpRequest**의 통신 절차

  1. `XMLHttpRequest()` 객체 생성  
     `new XMLHttpRequest()` 사용
  2. 서버 통신에 필요한 정보 기입  
     `XMLHttpRequest()`의 메소드를 이용하여 요청 메세지 작성
     - `.open()`: 요청 초기화 (HTTP 메소드, URL, 비동기 여부)
     - `.setRequestHeader()`: 요청 헤더 설정
  3. 요청 전송 및 통신 시작
     - `.send()`: 요청 전달
  4. 서버로부터 받은 응답 처리  
     응답을 처리 할 로직 구현

- **XMLHttpRequest()** 메소드 및 속성

|              메서드/속성               |                          설명                          | 매개변수                                                                                                       |
| :------------------------------------: | :----------------------------------------------------: | :------------------------------------------------------------------------------------------------------------- |
|    **`.open(method, url, async)`**     |                     요청을 초기화                      | - `method`: HTTP 메서드 (예: 'GET', 'POST')<br>- `url`: 요청할 URL<br>- `async`: 비동기 여부 (true 또는 false) |
| **`.setRequestHeader(header, value)`** |                     요청 헤더 설정                     | - `header`: 헤더의 이름<br>- `value`: 헤더의 값                                                                |
|           **`.send(data)`**            |                   요청을 서버로 전송                   | - `data`: 요청 본문 데이터 (GET 요청의 경우, 기본값은 `null`)                                                  |
|             **`.abort()`**             |                     요청 중단 호출                     |                                                                                                                |
|             **`.onload`**              | 요청이 성공적으로 완료되었을 때 호출되는 이벤트 핸들러 | - 매개변수: 이벤트 객체 (기본적으로 `this`는 `XMLHttpRequest` 객체)                                            |
|            **`.response`**             |            응답 데이터가 다양한 형태로 반환            |                                                                                                                |

- `.addEventListener('load', CallbackFn)` vs. `.onload`

  - `.addEventListener()`
    - 여러 개의 핸들러 설정 가능
    - 각 핸들러는 순서대로 호출
    - 이벤트 핸들러의 추가와 제거가 용이함  
      removeEventListener를 사용하여 핸들러를 제거 가능
  - `.onload`
    - 이벤트 핸들러 설정 한 개만 가능
    - 마지막으로 설정한 핸들러가 이전 핸들러를 덮어쓴다.

---
