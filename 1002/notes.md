# Git

---

### **_Git이란?_**

Git은 2005년 Linus Torvalds에 의해 개발된 분산 버전 관리 시스템인 **DVCS**(_Distributed Version Control System_) 이다.  
버전 관리 시스템을 통해 작업의 변경 사항들을 기록하고 관리할 수 있으며,  
필요 시 특정 시점의 버전으로 되돌아갈 수 있다.

---

### **DVCS**

**DVCS**는 중앙 서버에 의존성이 높은 **CVCS**(_Centralized Version Control System_)와 달리,  
중앙 서버로부터 필요한 파일을 로컬 저장소에 복제한 후 작업하므로, 중앙 서버에 의존하지 않고 유연한 작업이 가능하다.

<br>

이를 통해, 중앙 서버와 각각의 개인 사용자들이 모두 백업 이력을 가지고 있으며,  
서버에 문제가 생겨도 복제한 저장소를 이용해 작업을 할 수 있고,  
원하는 시점의 상태로 복원도 가능하다.

<br>

DVCS의 예시로는 Git 외에도 Bazaar, Mercurial 등이 있다.

---

### Git 설치하기

Mac에서 터미널에서 명령어를 통해 Git을 설치할 수 있다.  
일단 소프트웨어 설치를 도와줄 Homebrew를 설치해야 한다.

1. Homebrew 설치 명령어

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

<br>

설치 후, 안내 메세지에 따라 Next Step에 나오는 추가 명령어를 실행한다.

2. Git 설치 명령어

```bash
brew install git
```

---

### Git 기본 설정

GitHub에서 가입한 정보를 로컬 컴퓨터에 저장해둠으로써, push할 때마다 GitHub에 예쁘게 잔디를 깔아줄 수 있다. 🌱

- **전역 설정**  
   모든 폴더에 기본적으로 적용되는 설정

```bash
# USERNAME 대신 GitHub에 가입된 username 입력
git config --global user.name USERNAME

# USEREMAIL 대신 GitHub에 가입된 이메일 주소 입력
git config --global user.email USEREMAIL
```

<br>

위의 설정을 삭제하고 할 때, `--unset` 키워드를 사용할 수 있다.

```bash
# username 삭제
git config --global --unset user.name

# user email 삭제
git config --global --unset user.email
```

<br>

전체 설정을 확인하기 위해 다음과 같은 명령어를 입력한다.

```bash
git config --list
```

<br>

<br>

- **지역 설정**  
   특정 폴더에만 적용되는 설정

1. 해당 폴더에서 Git을 initialize 한다.

```bash
git init
```

2. 위의 명령어에서 `--global` 키워드를 제외하고 똑같이 작성해준다.

```bash
# USERNAME 대신 GitHub에 가입된 username 입력
git config user.name USERNAME

# USEREMAIL 대신 GitHub에 가입된 이메일 주소 입력
git config user.email USEREMAIL
```

<br>
<br>

- **기본 Branch명 설정**  
   기본적으로 Branch명이 `master`인 경우가 있는데,  
   이를 `main`으로 설정한다.

```bash
git config --global inti.defaultBranch main
```

<br>

- Branch명으로 `main`을 사용하는 이유
  1. `master`라는 용어는 역사적으로 노예제와 관련된 의미를 포함하고 있어, 이를 대체할 중립적인 용어로 `main`을 사용하는 것이 권장됨
  2. 많은 오픈 소스 프로젝트와 서비스들이 기본 branch명을 `main`으로 변경하여, `main` 사용이 표준화되고 있음
  3. 기본 branch명을 `main`으로 통일하면 협업 효율성이 향상됨
  4. 표준화된 워크플로우를 다양한 개발 환경에서 쉽게 적용할 수 있음

---

### **Git 프로젝트 설정**

- 로컬 저장소를 Git 저장소로 만들기  
   아래의 명령어를 통해 일반 폴더를 Git으로 관리할 저장소로 변경할 수 있다.

  ```bash
  git init
  ```

<br>

명령어를 실행하고 나면 숨김 폴더로 `.git` 폴더가 생성되며, 이 폴더에 버전 관리 정보가 저장된다.

  <br>

해당 폴더를 Git 저장소로 사용하지 않으려면 아래의 명령어를 입력한다.

```bash
rm -rf .git
```

---

### **working tree 상태 확인**

```bash
git status
```

<br>

위 명령어를 통해 트래킹 중인 파일과 트래킹 중이지 않은 파일을 확인할 수 있으며,
트래킹 중인 파일 중에서 어떤 파일이 수정(modified)되었거나 삭제(deleted)되었는지도 확인할 수 있다.

<img src='https://gist.github.com/user-attachments/assets/9a5ce2a6-6e62-4cee-b78e-b624b785ae2a' width='600px'>

---

### **파일 스테이징**

```bash
git add . # 모든 파일 추가
git add fullstack.yaml # fullstack.yaml 이름의 파일만 추가
```

<br>

파일을 스테이징함으로써 변경 사항이 트래킹되며, 이후 커밋 시 해당 변경 사항이 포함된다.

<img src='https://gist.github.com/user-attachments/assets/90452e8d-fe41-4ff0-8ce3-93ce5d25db17' width='600px'>

---

### **커밋**

```bash
git commit # vim 모드가 실행되어 커밋 메세지 작성
git commit -m "Commit message" # 스테이징 된 파일 모두 커밋
git commit -am "Commit message" # 변경된 모든 파일 추가 및 커밋
```

---

### **커밋 내역 확인**

```bash
git log # 커밋 내역 상세 정보 보기
git log --oneline # 커밋 내역을 한 줄로 간단하게 보기
git log -n # 최근 n개의 커밋 내역 보기
git log --grep="keyword" # keyword를 포함하고 있는 커밋 내역 검색
```

<img src='https://gist.github.com/user-attachments/assets/75e027c1-6c6f-46c3-8de4-d2d9b3793bce' width='600px'>

---
