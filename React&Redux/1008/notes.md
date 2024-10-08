# **React & Redux**

---

### **HTML, CSS, JavaScript**

브라우저에는 HTML과 CSS를 해석하는 렌더링 엔진과 JavaScript를 해석하는 JavaScript 엔진이 내장되어 있기 때문에, 별도의 설치 없이 HTML, CSS, JavaScript를 사용할 수 있다.

---

### **Node.js**

**Node.js란?**  
브라우저 외의 환경에서도 자바스크립트를 사용할 수 있도록 만들어진 런타임 환경

<br>

Node.js를 통해 자바스크립트로 서버 개발이 가능해졌으며,  
프론트엔드와 백엔드 간의 협업이 더 원활해지고,  
개발 주기가 단축되는 효과를 가져왔다.

---

### **NVM _Node Version Manager_**

**NVM이란?**  
여러 Node.js 버전을 관리할 수 있는 도구

<br>

프로젝트마다 필요한 Node.js 버전을 선택하여 사용할 수 있도록 도와주어,  
버전 간 전환이 쉬워지고, 다양한 프로젝트 환경에 맞춰 Node.js 버전을 효율적으로 관리할 수 있다.  
더불어, 팀원들과 개발 환경을 통일하기 쉬워 협업 시 호환성 문제를 줄이고 원활한 개발이 가능하다.

<br>

**nvm 설치 방법**

```bash
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash

# download and install Node.js (you may need to restart the terminal)
nvm install 20

# verifies the right Node.js version is in the environment
node -v # should print `v20.18.0`

# verifies the right npm version is in the environment
npm -v # should print `10.8.2`
```

필요에 따라 `nvm install` 뒤에 원하는 버전을 입력하여 노드 환경을 그에 맞게 설정할 수 있다.

---

### **npm _Node Package Manager_**

**npm이란?**  
Node.js에서 사용할 수 있는 자바스크립트 패키지들을 관리하고 설치할 수 있는 도구

<br>

npm을 통해 다양한 오픈소스 패키지와 모듈을 쉽게 설치, 업데이트, 삭제할 수 있으며, 의존성 관리도 자동으로 처리할 수 있다.

<br>

npm의 창립자들은 "npm"을 소문자로 표기하는 것이 공식적인 표기 방식이라고 결정하였고,  
이는 하나의 단어처럼 소문자로 인식되길 원하기 때문에 공식적으로 npm을 소문자로 쓴다.

---

### **npm 기본 명령어**

|                                            명령어                                            |                   역할                    |
| :------------------------------------------------------------------------------------------: | :---------------------------------------: |
|                                        `npm init -y`                                         | 프로젝트 초기화 및 package.json 파일 생성 |
|                                  `npm install` 또는 `npm i`                                  |                패키지 설치                |
| `npm uninstall` 또는 `npm un` 또는 `npm remove` 또는 `npm rm` 또는 `npm r` 또는 `npm unlink` |                패키지 삭제                |
|                     `npm list` 또는 `npm ls` 또는 `npm la` 또는 `npm ll`                     |             패키지 목록 확인              |

---

### **package.json**

```json
{
  "name": "practice",
  "version": "1.0.0",
  "main": "npm.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```

- `name`: 패키지의 이름
- `version`: 패키지의 semantic 버전 정보
- `main`: 패키지 내 **진입점** 파일 (주로 `index.js`와 같은 파일을 지정)
- `scripts`: 터미널에서 실행시킬 수 있는 스크립트로, `npm run` 다음에 키워드를 입력하여 해당 코드를 실행
- `license`: `ISC`는 자유로운 사용 가능 / **`MIT`는 사용 가능하지만 출처를 밝히고, 면책 조항을 포함해야 함**
- `description`: 패키지에 대한 설명
- `type`: 모듈의 유형을 지정
  |type|`commonjs` (default)|`module` (ES6)|
  |:---:|:---:|:---:|
  |내보낼 때|`module.exports`|`export default`|
  |가져올 때|`require`|`import`|

---

### **npx _Node Package eXecute_**

**npx란?**  
npm 패키지를 실행하는 도구

<br>

npm을 사용하면 패키지를 설치 후 실행하고,  
npx를 사용하면 패키지를 설치 후 실행한 다음 바로 삭제해버린다는 특징이 있다.

<br>

패키지가 삭제된다는 말 때문에 `create-react-app`을 실행해서 리액트 환경 만들고 바로 패키지가 삭제되면 리액트 개발 어떻게 한다는 거지 하고 헷갈렸는데,  
`create-react-app`는 리액트 환경에 필요한 패키지를 설치하는 용도의 패키지로,  
`create-react-app`만 실행 후 삭제되고, 리액트 개발을 위해 설치된 패키지는 삭제되지 않는다.  
문제 해결 완.

---
