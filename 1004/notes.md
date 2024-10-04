# Git

---

### **커밋 되돌리기 _Reset_**

일단 커밋 리셋 옵션 세 가지를 알아보자아.

- `hard`: 선택한 커밋으로 되돌린 후, 그 이후의 모든 변경 사항을 삭제한다. 되돌린 커밋 이후의 파일과 작업 내용이 완전히 사라진다.
- `soft`: 선택한 커밋으로 되돌린 후, 그 이후의 변경 사항은 스테이징된 상태로 남아있다. 파일 변경 내용은 유지되며, 다시 커밋할 수 있다.
- `mixed` (default): 선택한 커밋으로 되돌린 후, 그 이후의 변경 사항은 스테이징되지 않은 상태로 남아있다. 변경 사항은 남아있지만, 다시 `git add`를 해야 한다.

다음과 같이 사용할 수 있다.

```bash
git log # 커밋 내역에서 커밋 해시 확인

git reset --hard CommitHash # CommitHash에 git log로 확인한 커밋 해시 입력
git reset --soft CommitHash # CommitHash에 git log로 확인한 커밋 해시 입력
git reset --mixed CommitHash # CommitHash에 git log로 확인한 커밋 해시 입력
```

또는 `HEAD`를 이용해 커밋을 되돌릴 수 있다.

```bash
git reset HEAD^ # 바로 이전 커밋으로 되돌리기
git reset HEAD~n # n번째 전 커밋으로 되돌리기
```

위의 명령어에도 `reset` 뒤에 커밋 옵션(`--hard`, `--soft`, `--mixed`) 사용 가능하다.

---

### **리셋 되돌리기 _Reflog_**

`--hard` 옵션을 이용해 커밋을 리셋한 경우,  
리셋 이전의 커밋 상태로 돌아가고 싶다면?!

```bash
git reflog
```

위의 명령어를 입력하면 `git log`로는 볼 수 없었던 정보까지 확인할 수 있다.

<br>

- `git reflog`에서 확인할 수 있는 정보
  - 커밋, 리셋, 브랜치 변경 등의 모든 Git 명령어 기록
  - 이전 커밋 해시 및 변경된 HEAD 위치
  - 리셋된 커밋이나 삭제된 브랜치를 복구할 수 있는 히스토리

<br>

`reflog` 정보에는 특정 버전의 커밋 해시가 저장되어 있어, 이 해시코드를 이용해 원하는 상태로 되돌아갈 수 있다.  
예를 들어, 커밋을 `--hard` 옵션으로 리셋했거나, 브랜치를 삭제한 경우도 다시 복구할 수 있다!

<br>

reset 명령어를 다음과 같이 입력하여 원하는 상태로 고고! 고고!

```bash
git reset --hard CommitHast # CommitHash에는 버전에 해당하는 해시코드를 입력
```

---

### **커밋 내용만 되돌리기 _Revert_**

- Reset과 Revert의 차이점

  - `git reset`: 프로젝트를 특정 커밋 상태로 되돌리며 이후의 커밋을 삭제
  - `git revert`: 특정 커밋의 변경 사항만 되돌리고 이후 커밋은 그대로 유지

```bash
git revert CommitHash # CommitHash에는 버전에 해당하는 해시코드를 입력
```

---

### **브랜치 관련 명령어**

- 브랜치 생성

```bash
git branch <브랜치명>
```

- 브랜치 목록 확인

```bash
git branch
```

- 브랜치로 이동

```bash
git switch <브랜치명>
```

- 브랜치 생성과 동시에 이동

```bash
git switch -c <브랜치명>
```

- 브랜치 삭제

```bash
git branch -d <브랜치명>
```

- 브랜치명 변경

```bash
git branch -m <브랜치명> <새로운 이름>
```

---

### **HEAD**

`git log`에서 볼 수 있는 **HEAD**는 기본적으로 현재 체크아웃된 브랜치의 마지막 커밋을 가리킨다.  
이는 작업 중인 브랜치에서 가장 최신 커밋을 가리키는 포인터 역할을 하며, 브랜치의 현재 상태를 나타낸다.

**HEAD**가 가리키는 커밋은 브랜치를 변경하거나, 특정 커밋을 체크아웃할 때마다 그 위치가 변할 수 있다.

---

### **브랜치 합치기 _merge_**

```bash
git switch main
git merge <합칠 브랜치명>
```

`merge`는 브랜치의 커밋 이력을 그대로 유지하면서 병합이 된다.  
`main` 브랜치에 병합된 후에는 branch를 삭제한다.

```bash
git branch -d <합쳐진 브랜치명>
```

---

### **fast-forward**

```bash
   A---B  (main)
        \
        C---D---E  (feature)

   # Fast-forward merge 후
   A---B---C---D---E  (main)

```

```bash
git switch main
git merge --ff feature
```

`main` 브랜치에서 `HEAD`가 가리키는 커밋을 base로 두고,  
또 다른 브랜치(`feature`)를 만들어 커밋을 이어나간 경우,

이 때 `merge`하게 되면 새로운 병합 커밋이 **생성되지 않고**,  
`HEAD`가 `feature` 브랜치의 마지막 커밋으로 이동하게 된다.  
이러한 방식을 **fast-forward** 방식이라고 한다.

---

### **3-way merge**

```bash
   A---B---C  (main)
        \
         D---E---F  (feature)

   # No fast-forward merge 후
   A---B---C-------M  (main)
        \         /
         D---E---F  (feature)
```

```bash
git switch main
git merge feature
```

`base`로부터 두 브랜치에서 모두 커밋을 이어나간 경우,

이 때 `merge`하게 되면 새로운 병합 커밋(M)이 **생성되며**,  
해당 병합 커밋으로 `HEAD`가 이동하게 된다.  
이러한 방식을 **3-way merge** 방식이라고 한다.  
(1 - `base`(B), 2 - `main`(C), 3 - `feature`)

---

### **--no-ff**

fast-forward 방식으로 merge되지 않도록 하는 명령 옵션

```bash
   A---B---C  (main)
        \
         D---E---F  (feature)

   # No fast-forward merge 후
   A---B---C-------M  (main)
        \         /
         D---E---F  (feature)
```

```bash
git switch main
git merge --no-ff feature

```

위의 옵션을 통해 3-way merge 방식으로 병합된다.

---

### **--squash**

합칠 브랜치(feature)에서 생성된 커밋들을 하나의 커밋(S)으로 합치고,  
병합 시 병합 커밋을 생성하지 않는다.

```bash
   A---B---C  (main)
        \
         D---E---F  (feature)

   # Squash merge 후
   A---B---C---S  (main)
```

```bash
git switch main
git merge --squash feature
```

---

### **브랜치 합치기 _rebase_**

`main`에서 브랜치를 생성하게 되면 최신 커밋을 base로 하여 브랜치가 생성된다.  
이후 뻗어나온 브랜치와 `main` 브랜치에서 각각 커밋이 발생하게 된 경우,  
뻗어나온 브랜치의 base를 `main` 브랜치의 가장 최신 커밋으로 재설정하는 것을 **rebase**한다고 말한다.

<br>

Rebase 이후 `main` 브랜치로 이동한 후, 뻗어나온 브랜치를 merge하게 되면 **fast-forward merge**가 가능하다.

<br>

- **Fast-Forward Merge**:
  - 이 경우, 새로운 병합 커밋을 생성하지 않고, `main` 브랜치의 포인터를 `feature` 브랜치의 최신 커밋으로 이동
  - 결과적으로 `main` 브랜치의 커밋 이력이 깔끔하게 이어짐

<br>

#### **rebase해서 merge하는 방법**

1. 합칠 브랜치로 이동

```bash
git switch <합칠 브랜치명>
```

2. main 브랜치로 rebase 진행

```bash
git rebase main
```

3. main 브랜치로 switch하여 이동

```bash
git switch main
```

4. 합칠 브랜치와 merge 진행

```bash
git merge <합칠 브랜치명>
```

5. 합쳐진 브랜치 삭제

```bash
git branch -d <합칠 브랜치명>
```

---

### **rebase vs. merge**

```bash
   A---B---C  (main)
        \
         D---E---F  (feature)
```

위와 같은 브랜치와 커밋 이력을 가지고 있을 때,  
merge를 통한 병합과 rebase를 통한 병합을 비교해보장.

---

### **merge를 이용한 병합**

```bash
   A---B---C-------M  (main)
        \         /
         D---E---F  (feature)
```

- main 브랜치에 새로운 병합 커밋(M) 생성
- feature 브랜치의 커밋 이력(D, E, F) 확인 가능

---

### **rebase를 이용한 병합**

#### rebase 후

```bash
   A---B---C  (main)
             \
              D'---E'---F'  (feature)
```

- main 브랜치의 C로 base 재설정(rebase)

#### merge 후

```bash
   A---B---C---D'---E'---F'  (main)
```

- 새로운 커밋이 생성되지 않고, main 브랜치의 가장 최신 커밋(C) 이후로 feature 브랜치의 커밋(D', E', F')이 이어짐
- 일직선으로 병합되어 깔끔한 커밋 이력 확인 가능
- feature 브랜치의 커밋 이력을 따로 확인하는 것은 별도의 확인 작업 필요

<br>
<br>

|   **특징**    |            **Merge**             |               **Rebase**                |
| :-----------: | :------------------------------: | :-------------------------------------: |
| **히스토리**  |       비선형 (브랜치 유지)       |           선형 (브랜치 없음)            |
|   **커밋**    |    새로운 머지 커밋 (M) 추가     |      커밋이 재작성됨 (D', E', F')       |
| **사용 사례** | 브랜치의 맥락을 유지할 때 이상적 | 깔끔한 커밋 히스토리를 유지할 때 이상적 |
| **충돌 해결** |       머지 시 한 번에 해결       |      리베이스 시 각 커밋마다 해결       |

---
