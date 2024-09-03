# JavaScript

---

용어 정리

- 자바스크립트 _JavaScript_  
   웹 페이지에 동적인 기능을 추가하기 위해 사용되는 컴퓨터 프로그래밍 언어
- 자바스크립트 엔진 _JavaScript Engine_  
   자바스크립트로 작성된 코드를 해석하고 실행할 수 있는 프로그램 (브라우저에 포함)
- 렌더링 _Rendering_  
   작성된 코드를 화면에 시각적으로 표시하는 것
- 스레드 _Thread_  
   작업을 실행하는 주체

<br>

- 자바스크립트 코드는 자바스크립트 엔진에 의해 해석되어 브라우저 상에 렌더링된다.

- 자바스크립트는 기본적으로 동기적으로 코드를 실행하지만,  
  비동기 작업도 지원하며, Web API와 Event Loop을 통해 관리된다.

- 자바스크립트 하나의 스레드만 사용하는 언어로서, 한 번의 하나의 작업만 가능하며,  
   하나의 작업이 실행되고 난 뒤 다른 작업을 시작한다.

---

### **JavaScript Engine**

<h4>자바스크립트 엔진의 종류</h4>

브라우저의 종류에 따라 자바스크립트 엔진의 종류도 달라진다.

|    사용 환경    |   자바스크립트 엔진   |
| :-------------: | :-------------------: |
|     Chrome      |          V8           |
|      Edge       |          V8           |
|      Opera      |          V8           |
|     Node.js     |          V8           |
|     Firefox     |     SpiderMonkey      |
|     Safari      | JavaScriptCore(Nitro) |
|    IE 9 이상    |        Chakra         |
|  React Native   |        Hermes         |
| 임베디드 시스템 |        Duktape        |

<br>
<h4>자바스크립트 엔진의 구조</h4>

- **Parser**  
   자바스크립트 코드를 자바스크립트 엔진이 실행할 수 있도록 변환

- **Interpreter**  
   Parser를 통해 변환된 데이터를 실행하거나 bytecode로 변환하여 실행

- **Just-In-Time Complier**  
   Interpreter가 생성한 bytecode 실행 중 최적화된 기계어로 컴파일

- **Memory Management**  
   Garbage Collection을 통해 더 이상 필요하지 않은 객체를 메모리에서 해제함으로써 메모리 관리

- **Runtime Environment**  
   자바스크립트 엔진이 실제로 코드를 실행하는 환경

<br>
<h4>메모리</h4>

- **콜스택** **_Call Stack_**

  - **역할**: 함수 호출 및 실행을 관리하며, 함수의 매개변수, 지역 변수, 리턴 주소 등의 정보가 저장된다.
  - **LIFO(Last In First Out) 구조**  
     한 줄씩 읽어온 자바스크립트 코드는 콜스택에 담기며, 가장 최근에 콜스택에 들어온 코드가 가장 먼저 실행된다.
  - **제한된 크기**  
    잘못된 재귀 호출이나 코드 실행으로 스택 오버플로우가 발생할 수 있다.

- **힙** **_Heap_**
  - **역할**: 객체나 배열, 함수 객체, 클래스의 인스턴스와 같은 데이터를 저장하며, 참조를 통해 접근할 수 있다.
  - **구조화되어있지 않음**  
     무작위로 메모리가 할당되어, 할당 및 해제 시 시간이 더 걸릴 수도 있다.
  - **Garbage Collection**  
    사용되지 않는 객체를 주기적으로 감지하고 메모리를 회수함으로써 메모리 누수를 방지한다.
  - **유연성**  
    동적 크기 할당이 가능하여 필요에 따라 객체 크기를 조절할 수 있다.

---

### **동작 방식**

- **기본 동작**

  싱글 스레드 언어이자 기본적 작업 방식이 동기적인 자바스크립트는 윗 줄의 코드가 실행되고 난 뒤, 다음 줄 코드가 실행된다.  
  한 줄의 코드가 실행되는 동안, 아래 줄 코드들의 진행이 되지 않는 것을 **블로킹**이라고 한다.

  - 코드

  ```js
  function print() {
    console.log('one');
    console.log('two');
    console.log('three');
  }
  print();
  ```

  ![sync](https://gist.github.com/user-attachments/assets/d15cf4cb-435a-404f-8004-d2dd2c73d2c4)

- **비동기 함수**

1. 시간이 오래 걸리는 함수 및 데이터 통신이 필요한 함수는 자바스크립트의 **Call Stack**에서 브라우저의 **Web API**를 통해 처리된다.

2. 브라우저의 **Web API**를 통해 작업을 하는 동안, **Call Stack**에서 다음 코드를 실행한다.

3. **Thread**에서 끝난 작업의 결과 값은 **Task Queue**에서 대기한다.

4. **Call Stack**이 비는 순간 **Event Loop**에 의해서 **Task Queue**에 쌓인 작업이 다시 **Call Stack**으로 이동하고 순차적으로 실행된다.

   - 코드

   ```js
   function print() {
     console.log('one');
     setTimeout(() => console.log('two'), 3000);
     console.log('three');
   }
   print();
   ```

   ![async](https://gist.github.com/user-attachments/assets/518bc745-c792-4b90-8cad-2c168f3dbb14)

---
