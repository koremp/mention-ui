# Mention UI Assignment

[구현 사항 링크](https://github.com/team-iamdt/screening-tests/tree/main/frontend/common--mention-user)

## (필수) 실행방법

```bash
yarn install
yarn start
```

`http://localhost:8080`을 입력하여 접속해 주세요.

## 사용

* Webpack
* Babel
* JavaScript
* Jest
* ESLint
* Yarn

## 목차

* [구현](#구현)
* [기타](#기타)

## 구현

### 파일별 역할

#### src/index.js

|변수|역할|
|--|--|
|`$target`|main 태그를 갖고있는 엘리먼트 변수.|
|`app`|생성된 `App` 컴포넌트가 할당된 변수.|

#### src/utils.js

|함수|역할|
|--|--|
|`debounce`|`func`인자로 들어온 함수가 `time`시간 내에 호출될 경우 기존 함수의 실행을 취소하고 최신 호출한 함수가 동작하도록 하는 함수.|

#### src/App.js

|함수|역할|
|--|--|
|`App`|전역 상태를 관리하는 컴포넌트 함수.|
|`App.setState`|`App` 컴포넌트의 상태를 설정하는 함수. `validator` 함수를 호출하여 `App` 컴포넌트가 관리하는 상태를 검증한 뒤, 하위 컴포넌트들의 state를 설정하는 함수. |
|`App.validator`|`App` 컴포넌트 내의 상태가 유효한 상태인지 확인하는 함수. |
|`App textInput`|`TextInput` 컴포넌트가 할당된 변수|
|`App textInput.onSearch`|`TextInput` 컴포넌트에서 검색하는 기능을 구현한 함수. `findUserList` 함수를 호출하여 조건에 맞는 검색결과를 `App.state.userList`, `App.state.selectedUserList` 상태에 설정한다. |
|`App textInput.onAddUser`|`TextInput` 컴포넌트에서 검색된 유저를 선택하여 추가할 때 사용하는 기능을 구현한 함수. 완성하지 못했다.|
|`App textInput.onClear`|`TextInput` 컴포넌트에서 엔터키를 눌렀을 때 실행되는 함수.|
|`App selectedUserList`|`SeletctedUserList` 컴포넌트가 할당된 변수.|
|`App userList`|`UserList` 컴포넌트가 할당된 변수.|

#### src/components/TextInput.js__

|함수 또는 변수|역할|
|--|--|
|`TextInput`|검색어를 입력하는 컴포넌트 함수.|
|`TextInput this.state`|상태가 할당된 변수.|
|`TextInput this.$element`|`input`태그를 만들어 파라미터인 `$target` DOM 엘리먼트에 자식으로 추가되는 변수. `Enter`, `keyup`에 대한 `eventListener` 함수를 추가했다. `Enter` 이벤트에서는 `#`, `@` 명령에 대한 동작 중 `@` 명령만 구현되어있다. `@` 명령 동작에 일치하는 유저가 존재하면 파라미터로 받은 `onAddUser` 함수를 호출하여 `App this.state.selectedUserList`에 추가시킨다.|
|`TextInput this.setState`|`TextInput` 컴포넌트 함수 내부의 상태를 변경할 때 사용하는 함수.|
|`TextInput this.render`|`TextInput`의 값을 렌더링하는 함수.|

#### src/components/SelectedUserList.js__

|함수 또는 변수|역할|
|--|--|
|`SelectedUserList`|선택된 유저들을 표시하는 컴포넌트 함수.|
|`SelectedUserList this.state`|상태가 할당된 변수|
|`SelectedUserList this.$element`|`ul`태그를 만들어 `selected-user-list`를 클래스 속성에 할당하고 `this.state`의 값들을 변경시켜 파라미터인 `$target` DOM 엘리먼트에 자식으로 추가되는 변수.|
|`SelectedUserList this.render`|`SelectedUserList`의 값을 렌더링하는 함수. 유저들을 조건에 따라 다르게 렌더링한다.|
|`SelectedUserList this.setState`|`SelectedUserList` 컴포넌트 함수 내부의 상태를 변경할 때 사용하는 함수.|

#### src/components/UserList.js__

|함수 또는 변수|역할|
|--|--|
|`UserList`|선택된 유저들을 표시하는 컴포넌트 함수.|
|`UserList this.state`|상태가 할당된 변수|
|`UserList this.$element`|`ul`태그를 만들어 `user-list`를 클래스 속성에 할당하고 `this.state`의 값들을 변경시켜 파라미터인 `$target` DOM 엘리먼트에 자식으로 추가되는 변수.|
|`UserList this.render`|`UserList`의 값을 렌더링하는 함수. 유저들을 조건에 따라 다르게 렌더링한다.|
|`UserList this.setState`|`UserList` 컴포넌트 함수 내부의 상태를 변경할 때 사용하는 함수.|

## 기타

### (권장) 과제에 대한 문제 정의, 해결 계획과 방법에 대한 설명

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
