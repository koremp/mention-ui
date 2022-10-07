import App from './App.js';

const $target = document.querySelector('main');

const app = new App({
  $target,
  initialState: {
    input: '',
    prefixType: null,
    userList: [],
    selectedUserList: [],
  },
});
