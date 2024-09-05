# Error Log #1.

### _margin: auto로 가운데 정렬하기 도즈언_

---

`text-align`을 center로 설정하거나,  
`flexbox`에 `justify-content`를 center로 설정함으로써 가운데 정렬을 하던 나에게.  
`margin: auto`로.  
center라는 단어를 쓰지 않고.  
가운데 정렬을 해내는 것은.  
참 특이혔다...특이혔어...

<br>

배운 거 써먹겠다고 비장하게 썼다가 아무런 일도 일어나지 않았을 때의 뻘쭘함을 기억하고자. 로그를 남긴다.

---

### **margin: auto란?**

브라우저가 element를 가운데로 정렬하기 위해  
left와 right의 margin값을 자동으로 계산하여 설정하는 방식

---

### **margin: auto가 제대로 작동하기 위한 조건**

1. **Block-level**  
   해당 element는 block-level element(`div`, `p`, ...)이거나,  
   `display: block`을 통해 block-level이 된 element여야 한다.

2. **Width**  
   해당 element의 width는 반드시 정의되어야 한다.  
   이 때, width이 `100%`가 넘어가면 양 옆에 남을 margin이 없으니 width 설정에 주의한다.

---

### **수직 가운데 정렬은 가능할까?**

가능하다.
<img width="612" alt="image" src="https://gist.github.com/user-attachments/assets/6c5ce0c9-592d-4afb-be5a-d65940737b7c">

정렬하고자 하는 element가 속해있는 부모 element가 `flexbox`나 `grid`이면서, `height`이 해당 element보다 큰 경우에 수직 가운데 정렬도 가능하다.

<br>

**BUT**, 수직 가운데 정렬은  
`flexbox`의 경우,  
`justify-content: center`과 `align-items: center`을 쓰는 것이,  
`grid`의 경우,  
`place-items: center`을 쓰는 것이 가운데 정렬임을 명확하게 보여주는 방식이면서 좀 더 흔하게 사용되는 방식이다.

---
