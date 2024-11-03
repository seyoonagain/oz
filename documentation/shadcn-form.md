## ShadCN `<Form />`

입력 폼을 만들기 위한 조립 가능 컴포넌트

### 구조 분석

하나의 폼 데이터는 여러 입력 필드를 가진다.

- `<Form />`  
  `react-hook-form` 라이브러리를 사용해 폼 전체를 관리하는 최상위 컨테이너 역할

- `<Form>`의 자식 컴포넌트

  - `<FormField>`  
    개별 입력 필드를 정의하며, `react-hook-form`의 상태에 연결하여 폼의 상태를 관리

    - 속성

      - `control`: `useForm()`으로 생성한 폼 데이터의 `control` 객체를 전달하여 현 입력 필드를 폼 데이터에 연결

      - `name`: 현 입력 필드가 폼 데이터에서 참조할 필드의 이름

      - `render()`: 현 입력 필드가 렌더링될 방식을 정의하는 함수로, `field`라는 객체를 받아와 입력 필드와 연결

        - `field` 객체 가진 입력 속성: `value`, `onChange`, `onBlur`, `name`, `ref`, `disabled`

        - `<FormItem>`: 아래의 컴포넌트들을 감싸는 컴포넌트로서, 일관적인 스타일링을 적용할 수 있음

        - `<FormLabel>`: 현 입력 필드의 레이블

        - `<FormControl>`: `<input>` 요소를 감싸는 컴포넌트로, `<input>`에 `{...field}`를 추가하여 폼 상태에 연결

        - `<FormDescription>`: 현 입력 필드에 대한 설명  
          예: 비밀번호는 8자~15자이어야 하며, 영문 대소문자, 숫자, 특수 문자를 포함해야 합니다.

        - `<FormMessage>`: 유효성 검사 에러 메시지를 표시하여 사용자에게 입력 오류를 알림

---

### 코드 작성하기

1. `z.object()`  
    `Zod`의 `object()` 메서드를 사용해, 폼에 들어갈 입력 요소와 각 요소의 유효성 검사 규칙을 정의한다.

   ```tsx
   const formSchema = z
     .object({
       newPassword: z
         .string()
         .trim()
         .nonempty('비밀번호를 입력해주세요.')
         .regex(
           /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,15}$/g,
           { message: '비밀번호를 확인해주세요.' }
         ),
       newConfirmedPassword: z
         .string()
         .trim()
         .nonempty('비밀번호를 입력해주세요.')
         .regex(
           /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&-])[A-Za-z\d@$!%*?&-]{8,15}$/g,
           { message: '비밀번호를 확인해주세요.' }
         ),
     })
     .refine((data) => data.newPassword === data.newConfirmedPassword, {
       message: '비밀번호가 일치하지 않습니다',
       path: ['confirmedPassword'],
     });
   type passwordType = z.infer<typeof formSchema>;
   ```

2. `useForm()`
   1에서 정의한 schema를 `zodResolver()` 함수로 감싸서 `useForm()`의 `resolver`에 전달하고,
   `useForm()`의 `defaultValues` 옵션에 각각의 입력 요소의 기본값을 설정한다.

   ```tsx
   const form = useForm<passwordType>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       newPassword: '',
       newConfirmedPassword: '',
     },
   });
   ```

3. 폼 데이터 제출 시 실행할 함수를 정의한다.  
   이 때 인자로 들어오는 데이터는 5의 `handleSubmit()` 함수에서 반환되는 데이터이다.

   ```tsx
   const onSubmit = (data: passwordType) => {
     if (data) {
       console.log(data);
     }
   };
   ```

4. `<Form>`
   `<Form>` 컴포넌트에 `useForm()`으로 생성한 `form` 객체를 Props로 전달한다.

5. `<form>`
   `<Form>`에 포함된 폼 데이터의 `onSubmit` 이벤트를 처리한다.
   `useForm()`으로 생성한 `form`의 `handleSubmit()` 함수에 폼 데이터 제출 시 실행할 함수를 전달한다.  
   이 때 `handleSubmit()`을 통해 반환되는 값은 폼에 입력한 데이터의 객체 형태이며, name-value 형태이다.

6. `<FormField>`
   `name`에는 `z.object()`에서 정의한 입력 요소 중 현 입력 필드와 연결할 입력 요소의 이름을 작성한다.
   `render()`에서 입력 요소의 속성 값을 가지는 field를 받아와 렌더링 방식을 정의한다.

   ```tsx
   <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className='w-full'>
       <FormField
         control={form.control}
         name='newPassword'
         render={({ field }) => (
           <FormItem>
             <FormLabel>새로운 비밀번호</FormLabel>
             <FormControl>
               <Input {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />
       <FormField
         control={form.control}
         name='newConfirmedPassword'
         render={({ field }) => (
           <FormItem>
             <FormLabel>새로운 비밀번호 확인</FormLabel>
             <FormControl>
               <Input {...field} />
             </FormControl>
             <FormMessage />
           </FormItem>
         )}
       />
     </form>
   </Form>
   ```
