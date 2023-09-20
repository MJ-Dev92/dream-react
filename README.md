# 리액트란 무엇인가?

<aside>
📌 리액트란 페스북에서 만든 유저인터페이스를 만들기 위한 자바스크립트 라이브러리이다.

</aside>

## 리액트하면 크게 생각나는 용어

- SPA(Single Page Application) - SPA는 Single Page Application의 약자로 단일 페이지로 구성된 웹 어플리케이션을 말한다.
- CSR(Client Side Rendering) - 처음 사용자가 웹페이지에 접속하면,빈 껍데기의 HTML 파일을 받고 ➡️ 사용자가 요청할 때마다 데이터를 받아 화면을 렌더링 한다. 모든 HTML과 CSS 그리고 JavaScript를 로드해야 페이지 렌더링이 완료된다

## 컴포넌트란?

- ui를 만드는 작은 단위의 블록
- 컴포넌트는 독립적이고 고립적이며 재사용이 가능해야한다.

## 컴포넌트 나누는 기준

두가지로 나눌 수 있다.

- 재사용성 : DRY(Don’t Repeat Yourself) - ex) click, send, submit
- 단일 책임 : SR(Single Responsibility) - 한 컴포넌트에서 너무 많은 일을 하면 재사용 하지 않더라도 컴포넌트를 작은 단위로 하나의 책임을 가질 수 있도록 하나의 작은 컴포넌트로 나누는 것이 중요하다.

## 리액트 동작 원리

**함수형 컴포넌트**

- 리액트 함수 이름은 대문자로 시작한다.

**Javascript XML(jsx) 문법**

- 자바스크립트에서 함수 반환값으로 html같이 생긴걸 반환할 수 있는데 이것을 JSX라고 한다.
- 함수형 컴포넌트는 html 처럼 생긴 jsx문법을 사용하는 것을 반환(return)해줘야 한다. \*\*\*\*

```jsx
export function CounterButton(props) {
  // 함수형 컴포넌트
  const [count, setCount] = useState(0); // state
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <button onClick={() => setCount((count) => count + 1)}>{count}</button>
    </div>
  );
}
```

- 리액트란 컴포넌트들의 집합체이다 리액트에서 컴포넌트를 정의하는 방식은 함수로 정의 하면 된다.
- 대신에 함수에서 반환한 값은 우리가 ui에서 표기할 html처럼 생긴 jsx로 만들면 되고 이 컴포넌트에서 가지고 있는 상태에 관련된 데이터는 usestate를 사용하면 되고 외부에서 변경가능한 속성은 props로 전달 받으면 된다.
- 즉 리액트 컴포넌트는 render, state props로 이루어져 있다.

**정리**

- 데이터를 state(내부 상태) props(외부로 부터 전달받은 상태) 나타내는 render가 있다.
- 상태가 변경될때마다 re-render 된다.
- 실제로 변경된 부분만 화면에 업데이트 된다.

**클래스 컴포넌트 단점**

- 사용하기 어렵다
- this 바인딩 이슈
- 로직들을 재사용하기 어려움

**React Hooks**

- 리액트 훅은 재사용 가능한 함수다라고 생각하면 된다.
- 훅은 use로 시작한다 useState, useEffect, useRef, useMemo, useCallback, useContext….등등
- 가장 많이 사용하는 훅은 useState(상태관리 로직), useEffect(컴포넌트 생애주기 관리 로직), useUser(서버에서 받아온 사용자)
- **Hooks은(함수들은) 값의 재사용이 아니라 로직의 재사용을 위한것이다.**

# 3. 개발환경 설정

## 3.1 기본 툴 설명

1. node.js

- 브라우저 밖에서 자바스크립트를 실행할 수 있게 해주는 실행 환경
- 서버 사이드 렌더링뿐만 아니라 명령어 라인 툴로 사용 가능

1. npm

- 외부 라이브러리를 사용할 때 쉽게 설치하고 버전을 관리해주는 것
- 설치를 하면 package.json이 설치 되는데 여기에는 파일 이름, 디펜던시 버전등을 관리할 수 있다.

1. npx

- npm이 관리하는 툴이라면 npx는 개별적으로 패키지를 실행할 수 있게 도와주는 툴

1. yarn

- npm대신 쓸 수 있는 페이스북에서 만든 툴
- npm 단점을 커버하기 위해 만들어짐
- npm과 다르게 필요한 패키지를 병렬적으로 설치가 가능하기 떄문에 보안과 속도면에서 앞선다

## 3.2 북마크 해둘 사이트 3개

예전문서

- https://legacy.reactjs.org/

React 공식 사이트

- https://react.dev/

Creat React App

- https://create-react-app.dev/

## 3.3 프로젝트 만들기

명령어 사이트

- https://create-react-app.dev/docs/getting-started/

## 3.4 프로젝트 구조 살펴보기

- .이 있으면 기본적으로 숨겨져 있는 파일이다.
- .yarn은 yarn을 실행하기 위해 필요한 것들이다.
- pnp파일은 plain & plug 약자이다. 프로젝트에 필요한 정보들이 담겨져 있다 ex) 어디에 설치되어있는지 등등..
- public 파일은 정적인 파일들이 담겨져 있다.
- src 파일은 동적으로 무언가를 사용할 때 사용한다.

## 3.5 중요한 툴들 설명

툴

**BABEL**

- 자바스크립트 트랜스 컴파일러 최신 버전을 옛날 버전으로 바꿔주는 것
- 타입스크립트로 타입이 강력한 프로그래밍을 바벨을 이용해서 바꿔서 사용한다.

**Webpack**

- 사용자 코딩을 번들링해서 사용자에 배포할 수 있게 도와주는것

**ESLint**

- 코드를 체크해주는 프로그램

**Jest**

- 코드가 원하는대로 동작하는지 테스트하는 프레임워크

# 4. 기본 내용들 정리

## 터미널 명령어

- app.js 저장 했을 때 아래와 같이 에러가 뜬다면 셋팅 해주어야 할 것 들이 있다.
  ![스크린샷 2023-01-07 오전 4.57.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b529bff-0e2d-4b92-b8e5-ed9a717ec546/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-07_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.57.20.png)
- 이러한 이유는 CRA과 yarn의 충돌 때문에 일어난다. 그렇기 떄문에 eslint를 수동적으로 설정 해주어야한다

yarn add -D eslint-config-react-app

캐시 클린

yarn cache clean

## CSR(클라이언트 사이드 렌더링)

- app.js 저장 했을 때 아래와 같이 에러가 뜬다면 셋팅 해주어야 할 것 들이 있다.
  ![스크린샷 2023-01-07 오전 4.57.20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2b529bff-0e2d-4b92-b8e5-ed9a717ec546/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-07_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.57.20.png)
- 이러한 이유는 CRA과 yarn의 충돌 때문에 일어난다. 그렇기 떄문에 eslint를 수동적으로 설정 해주어야한다
- 터미널에 yarn add -D eslint-config-react-app 입력
- .yarnrc.yml 을 최상단에 파일을 생성한뒤 아래 내용을 입력

```jsx
packageExtensions:
  react-scripts@*:
    peerDependencies:
      eslint-config-react-app: '*'
```

- 이후에도 에러가 뜬다면 터미널에 yarn cache clean 캐쉬값을 지운뒤 yarn install로 재설치 후 실행
- yarn start를 하면 깔끔하게 에러가 지워지는걸 볼수 있다.

## 4.1 JSX 문법 정리(기본)

- React component 사용하려면 함수 형태로 해야하고 이때 name 첫 글자는 대문자여야 하고 JSX문법을 통해 반환해야 한다.

JSX 문법 사용시 주의사항

- 다수의 태그를 사용하고 싶을 때 부모태그가 필요하다. fragment태그나 <> 태그를 쓰는게 좋다.
- className을 써야 클래스 이름을 사용할 수 있다.
- Javascript를 사용하고 싶을때는 {} 를 사용해야 한다.

### 4.1.1 JSX 사이트 추천

https://transform.tools/html-to-jsx

## 4.2 컴포넌트 만드는 꿀팁

- 파일 이름은 회사양식에 맞게 쓰면된다. ex) AppJSX or app-jsx(next.js에서 많이쓴다.) or app_jsx
- 리액트 컴포넌트이면 확장자를 .js보다 .jsx방식을 선호한다.
- 컴포넌트는 컴포넌트 파일을 따로 만들어서 그 안에 만들어 사용하면 된다.

### 4.2.1 리액트 템플릿 만드는 법

- 확장 프로그램에서 react snippet 받아서 쓰면된다.
- 커멘드 팔레트 들어가서 스니펫에 들어간다.

![스크린샷 2023-07-01 오후 10.06.50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ef4221c-0594-4f35-a471-ba2a7ca149bb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-01_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.06.50.png)

- 다음 전역 코드 스니펫에 들어가 global.code-snippets에 들어가 명령어를 삽입해준다.

![스크린샷 2023-07-01 오후 10.06.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0a4172b1-e4e5-4f6a-abcd-ec552417efec/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-01_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.06.38.png)

- **구글에 box shadow generator 검색하여 원하는 박스 쉐도우를 시각적으로 확인하면서 만들 수 있다. !!**

## 4.3 props 사용해보기

- 외부에서 props를 가져와 좀 더 유연하고 재사용성이 높게 사용할 수 있다.
- props를 가져올때 {}를 사용하면 {props.name}에서 props를 제거하고 좀 더 활용성 높게 사용할 수 있다.

### 혼자해보기!! 프로필 컴포넌트 만들어보고 아바타 컴포넌트까지 만들어보자.

![스크린샷 2023-07-02 오전 4.46.34.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d49b346d-8007-4601-b086-0842ab3daf81/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-02_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_4.46.34.png)

## 4.4 Event 처리하기

- 버튼 태그에 onClick이벤트 속성을 사용하여 함수를 참조하자
- 이때 함수는 호출이 아니라 참조이다. 버튼을 클릭하고 반환된 값을 가져오는게 아니라 함수를 참조하는 것이다.

### Handilng Events 공식 사이트

- https://legacy.reactjs.org/docs/handling-events.html

## 4.5 내부 상태관리 State

- useState를 사용해서 버튼을 클릭할 때마다 카운터가 하나씩 증가하는 컴포넌트를 만들어보자

### 4.5.1 useState 유의할점

- setCount를 다수를 실행하면 Lexical 환경 클로저에 의해 count는 0이기 때문에 아무리 여러 개를 한번에 실행해도 초기에 더한 값만 올라간다.
- 콜백함수를 사용하면 해결할 수 있다. 외부를 참조하지 않는 변수를 만들어 이전 값이 저장되는 콜백함수를 사용하면 해결
- react에서 상태를 사용 할때는 useState를 쓰는데 이떄 배열이 주어지는데 첫 번째는 변수 두번째는 상태변경 할 함수가 주어지는데 이전 값을 가져와 사용할 때는 외부에서 값을 가져오는 것보다 이전값(prev)을 콜백 함수로 쓰는게 안전하다.

## 4.6 useEffect

- fetch를 통해 통신을 하면 useState의 값이 갱신이 되고 함수를 다시 호출하고 또다시 fetch를 불러와 이런 무한 반복을 함으로써 값을 갱신 데이터 호출을 반복하게 된다. 이때 통신을 한번만 하게 해주는 Hook이 useEffect이다.
- useEffect 디펜던시에 []이면 마운트가 될때만 호출할 수 있고, 만약 어떤 변수 값이 변경 될때마다 호출될수 있게 사용할 수도 있다.

## 4.7 고유한 key

- map을 통해 자식요소들을 사용할때는 고유한 키를 가지고 있어야 한다.
- 보통 백에서 고유 id를 지정해줌으로써 그 id를 사용한다.

# 5. 고급 내용들 (Deep Dive)

## 5.1 마우스 따라가기 구현

- 연관있는 변수를 useState 객체로 표현하여 한번에 묶어 사용하기
- onPointerMove()메서드 사용해서 구현하기
- style-transform 사용해서 구현

## 5.2 중첩 객체 상태 관리(멘토 바꾸기) 구현

- 스프레드 문법을 사용해 구조 분해 할당을 한 뒤 해당 useState를 사용해 변경하면 된다.

## 5.3 배열 상태 관리

- 배열이기 때문에 불변성을 유지해야 하기 때문에 map과 if문을 섞어 최신 값으로 변경하면 된다.

## 5.4 상태관리 라이브러리

- 상태가 업데이트 될 때 props를 통해 관리를 하다보면 prop drilling이 일어날 수 있기 때문에 필요한 컴포넌트만 업데이트를 하기 위해 상태 관리를 한다.
- 라이브러리는 Redux, Mobx, Immer 등이 있고, 또 hook 또한 useState, useReduser, contextAPI 등이 있다.

## 5.5 Context란?

![스크린샷 2023-07-12 오후 10.48.41.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/20b77850-f8cd-4e8b-8398-739aa48ee2c0/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-07-12_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_10.48.41.png)

- 모든 컴포넌트들이 필요하다면 어플리케이션 전반적으로 필요한 경우 ContextAPI를 사용할 수 있다
- 언어, 테마(다크모드), 로그인, 빈번히 업데이트 되는 상태는 x
- Context는 우산이다. 필요한 곳에 사용해야 한다.

## 5.6 성능 개선

- 최상위 부모 컴포넌트가 업데이트 될 때 마다 자식 컴포넌트가 호출되고 재할당이 일어나고 성능이 저하된다.
- 이를 개선하기 위해서 useMemo, useCallback을 사용한다.
- 예제 - AppMontorsButton

## 5.7 커스텀 훅

- 재사용 가능한 훅을 만들 때 사용하고 원하는 데이터를 반환하면 된다, 일반 컴포넌트와 다른점은 ui 유무
- 예제 - hook

# 6. CSS 라이브러리

## CSS 라이브러리 프레임워크

- 다운로드가 많고 만족도가 높은 프레임워크 : SASS
- 다운로드가 많고 만족도가 낮은 프레임워크 : Bootstrap
- 그 다음 다운로드가 많고 만족도가 높은 프레임워크 : PostCSS
- 자바스크립트 안에서 사용하는 styled components도 비교적 만족도가 높다.

## PostCSS

- 동일한 클래스를 사용하면 나중에 사용되는 css파일이 앞에 정의된 파일을 덮어쓰게 되어있다.
- 그 문제점을 PostCSS를 쓰면 해결할 수 있다.
  ![스크린샷 2023-01-09 오전 6.26.31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/10b546e5-7f22-4b92-ae0a-98be9bca44ab/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_6.26.31.png)
  ![스크린샷 2023-01-09 오전 6.26.42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42e85659-3f1b-4fb8-90a3-b7b52f43cbba/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_6.26.42.png)
- PostCSS 사용 방법은 간단하다 .css 이름 전에 module이라는 네임을 입력해주면 된다.
- 그 다음 import를 해주고 className은 {}자바스크립트 문법으로 해당 클래스를 불러오면 된다.

## Taliwind 사용법

1. yarn add -D tailwindcss 추가

2. npx tailwindcss init 추가

3. tailwindconfig에 추가

   module.exports = {
   content: ["./src/**/*.{js, jsx, ts, tsx}"],
   theme: {
   extend: {},
   },
   plugins: [],
   }

4. css파일 상단에 추가

   @tailwind base;
   @tailwind components;
   @tailwind utilities;

5. className에 이미 저장된 값을 쓰면된다

   ```jsx
   import React from "react";

   export default function TailwindComponent() {
     return (
       <div>
         <h1 className="text-8xl">안녕!</h1>
         <button className="bg-blue-500 rounded-xl px-2">Button</button>
       </div>
     );
   }
   ```

## CSS 라이브러리 장단점

![스크린샷 2023-01-09 오전 7.06.30.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ecb32b5c-23e5-476c-a553-62691ad74b34/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-01-09_%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB_7.06.30.png)

# 10. 리액트 쿼리 (React Query)

## 10.1 소개

- TanStack Query 사이트 참고해서 올바르게 사용하는 연습을 하자

## 10.2 커스텀훅의 문제점

- **Hooks은 값의 재사용이 아니라 로직의 재사용을 위한것이다.**
  1. cache가 되지 않는다. 즉 네트워크 받아온 데이터를 별도로 저장하는 것이 아니라 hook을 호출할 때 마다 새로 데이터를 받아온다.
  2. 네트워크 통신이 실패 했을때 다시 재시동할 수 있는 retry 기능이 없다.
- react query는 이러한 문제를 해결해 준다. 네트워크 통신도 간편하게 해주고 loding중 인지, 데이터를 받아왔는지, error인지 손쉽게 알 수 있다
- 얼마 동안 애플리케이션에 메모리상에 cache를 해둘건지 시스템을 이용할 수 있고 글러벌 상태관리도 할 수 있다.
- 네트워크 연결 실패 시 다시 연결하는 재시동(retry) 기능을 사용할 수 있다.

## 10.3 공식 사이트 읽어보기

- https://tanstack.com/query/latest

## 10.4 프로젝트에 적용

- 기존 products 프로젝트 네트워크 통신을 query 사용해보기

## 10.5 기본 사용법과 함정

### Query Keys

- 기본적인 쿼리는 키에 의존해서 캐싱을 관리한다. 캐싱을 잘 사용하려면 고유한 키를 잘 사용해야 한다.
- 세밀한 키들의 조합을 관리를 하기위해 기본적으로 배열을 통해 키를 관리한다.
  ![스크린샷 2023-09-20 오후 4.55.19.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/26e7d5a0-16a2-4137-b66f-cc56714fea43/2d972e44-bc7f-476c-a7cd-c620a0c8deeb/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.55.19.png)
  ![스크린샷 2023-09-20 오후 4.56.25.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/26e7d5a0-16a2-4137-b66f-cc56714fea43/b51c2051-1bf0-49c9-82ec-9d0221337088/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_4.56.25.png)
- 동일한 키를 사용해도 type별로 cache를 사용하는 예제 코드를 작성해보자.
- 불필요한 네트워크 통신이 계속 되는 함정이 발생한다.

## 10.6 개발툴

- yarn add @tanstack/react-query-devtools

## 10.7 자, 이제 제대로 사용해볼까?

## 10.8 슬라이드로 정리! (Stale에 대해)

![스크린샷 2023-09-20 오후 6.27.49.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/26e7d5a0-16a2-4137-b66f-cc56714fea43/ca97a8c8-1ac0-4540-ad4b-7bc2960f116b/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA_2023-09-20_%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE_6.27.49.png)

## 10.9 업데이트 하기
