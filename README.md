# Mention UI Assignment

[링크](https://github.com/team-iamdt/screening-tests/tree/main/frontend/common--mention-user)

## (필수) 실행방법

### 설치

```bash
yarn
```

### 실행하기

```bash
yarn start
```

`http://localhost:8080`을 입력하여 접속해 주세요.

만약 현재 컴퓨터에서 이미 8080이라는 포트를 사용하고 있다면 8081으로 실행이 될 수도 있어요.
만약 8081도 사용하고 있으면 8082, 8083 ... 순서대로 찾아서 만들어집니다.

## (권장) 과제에 대한 문제 정의, 해결 계획과 방법에 대한 설명

과제에 대한 문제 정의라는 문장을 이해하지 못하겠다.

과제 안내를 보면서 진행했다.

우선 Git 레포를 만들어서 ESLint, Babel, Webpack, Jest 등의 방법으로 구현하고 codeceptjs도 하려고 했는데 바닐라 자바스크립트로 구현하는 웹 프론트엔드 개발은 어려워서 TDD도 어려웠던 것 같다.

보일러플레이트 찾아서 하려고 했는데 웹팩 관련 보일러플레이트는 다 리액트/뷰 등의 라이브러리를 사용하고 있어서 못했다.

Vite 쓸까 했는데 그냥 가볍게 구현하는게 좋을 것 같아서 `index.html`, `index.js`로 나눠서 구현하고 `ESLint`, `babel`을 사용했다.

제출하기 전에 실행방법을 표기하라 되어있어서 `webpack-dev-server`을 사용하기 위해 패키지 추가하고 명령어 추가했다.

그 전까지는 `Visual Studio Code`의 `Live Server` 익스텐션을 활용했다.

태스크를 나눠서 구현하기보다는 컴포넌트를 3개로 나눠서 구분하고 구현했다.

### 해결 방법

TextInput, SelectedUserList, UserList로 컴포넌트를 구분했고 상위 컴포넌트인 App.js에서 관리하는 구조이다.

TextInput에서 EventListener로 keyup, Enter 등의 이벤트에 할당할 함수들을 App.js에서 내려주고 api.js에서 users.json 파일에서 데이터를 읽어온다.

SelectedUserList에 추가하는 로직에 `onAddUser` 함수를 사용해야하는데 과제 안내에 `엔터를 누르면 명령어 접두 문자를 제외한 글자에 일치(exact matching)하는 이용자가 있으면 선택 처리합니다.` 라는 말에서 일치하는 이용자가 username, firstName, LastName, tag인지 명시가 되어있지 않아 구현하지 못했다.

구현에 필요한 정보가 발생하면 대응방안을 별첨하라고 마지막에 적어놓으셨긴 했는데 과제 요건과 맞지 않는 부분이 있을 수 있을 것 같아서 추가하지 않았다.
