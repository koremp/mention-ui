import TextInput from './components/TextInput.js';
import UserList from './components/UserList.js';
import SelectedUserList from './components/SelectedUserList.js';

import { findUserList } from './api.js';

import { debounce } from './utils.js';

export default function App({ $target, initialState }) {
  if (!new.target) {
    return new App({ $target, initialState });
  }

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.validator();

    textInput.setState({
      input: this.state.input,
      userList: this.state.userList,
    });
    userList.setState(this.state.userList);
    selectedUserList.setState(this.state.selectedUserList);
  };

  this.validator = () => {
    const keys = ['input', 'userList', 'selectedUserList'];
    if (!keys.every((key) => key in this.state)) {
      throw new Error('wrong data types in App state.');
    }
  };

  const textInput = new TextInput({
    $target,
    initialState: {
      input: this.state.input,
      userList: this.state.userList,
    },
    onSearch: debounce((keyword) => {
      const prefixIndex = keyword.indexOf('@') > keyword.indexOf('#')
        ? keyword.indexOf('@')
        : keyword.indexOf('#');
      const nameText = keyword.slice(prefixIndex);

      const userList = findUserList(nameText);
      const unselected = userList.filter((u) => !this.state.selectedUserList.includes(u));
      const available = unselected.filter((u) => u.status === 'available');

      const nextState = this.state;

      this.setState({
        input: keyword,
        userList: available,
        selectedUserList: nextState.selectedUserList,
      });
    }),
    onAddUser: (users) => {
      // const nextState = this.state;
      // nextState.selectedUserList.unshift(users);
    },
    onClear: () => {
      const nextState = this.state;
      nextState.input = '';

      this.setState(nextState);
    },
  });

  const selectedUserList = new SelectedUserList({
    $target,
    initialState: this.state.selectedUserList,
  });

  const userList = new UserList({
    $target,
    initialState: this.state.userList,
  });
}
