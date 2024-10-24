# **React & Redux**

---

### **Tailwind CSS란?**

가장 대표적인 Utility-First CSS 프레임워크로,  
Tailwind CSS에서 정해진 문법을 사용하여 간편하게 CSS를 적용할 수 있다.

---

### **Utility-First란?**

Utility-First란, Tailwind CSS와 같은 프레임워크에서 제공하는 짧고 직관적인 클래스 이름(유틸리티 클래스)을 사용하여 스타일을 적용하는 방식으로,  
미리 정의된 단일 기능(예: text-center, bg-blue-500)을 요소에 바로 적용하여 빠르고 효율적으로 UI를 구성할 수 있다.

---

### **Tailwind CSS 설치하기**

1. Vite로 만든 React 프로젝트에서 Tailwind CSS 설치하기

```bash
npm install -D tailwindcss postcss autoprefixer
```

2. config 파일 생성하기

```bash
npx tailwindcss init
```

3. `tailwind.config.js` 파일에 Tailwind CSS를 사용할 파일 정의하기

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

4. `index.css` 파일에 다음과 같이 Tailwind의 기본 디렉티브를 추가

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### **Tailwind CSS 장점**

1. **빠른 개발 속도**  
   유틸리티 클래스만으로 즉시 스타일을 적용할 수 있어, 별도의 CSS 파일을 작성하지 않아도 된다.

2. **반응형 디자인 지원**  
   `sm:`, `md:`, `lg:` 등의 프리픽스를 통해 미리 정의된 반응형 클래스를 손쉽게 사용할 수 있다.

3. **사용하지 않는 CSS 제거**  
   PurgeCSS와 함께 사용하여, 실제로 사용되지 않는 CSS를 자동으로 제거할 수 있다. 이로 인해 파일 크기가 줄어든다.

4. **유연한 디자인**  
   Tailwind의 유틸리티 클래스를 조합해 세밀한 디자인을 구현할 수 있으며, 고정된 디자인 패턴에 얽매이지 않는다.

---

### **Tailwind CSS 단점**

1. **코드 가독성 저하**  
   HTML 파일에 유틸리티 클래스가 많이 추가되면 코드가 복잡해져 가독성이 떨어질 수 있다.

2. **제한된 커스터마이징**  
   유틸리티 클래스만으로 모든 스타일링을 해결하기 어려워, 특정 경우 추가적인 CSS 작성이 필요할 수 있다.

3. **학습 곡선**  
   처음 Tailwind CSS를 배우기 시작할 때는 익숙해지기 위해 많은 클래스 이름과 규칙을 학습해야 한다.

---

### **추천 익스텐션**

- Tailwind CSS IntelliSense
- PostCSS Language Support
