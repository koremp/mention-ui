import TextInput from './components/TextInput.js';
import UserList from './components/UserList.js';
import SelectedUserList from './components/SelectedUserList.js';

import { findUserList } from './api.js';

export default function App({ $target, initialState }) {
  if (!new.target) {
    return new App({ $target, initialState });
  }

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    this.validator();

    const {
      _input, _prefixType, _userList, _selectedUserList,
    } = nextState;

    textInput.setState({ input: _input, prefixType: _prefixType, userList: _userList });
    userList.setState(_userList);
    selectedUserList.setState(_selectedUserList);
  };

  this.validator = () => {
    const keys = ['input', 'prefixType', 'userList', 'selectedUserList'];
    if (!keys.every((key) => key in this.state)) {
      throw new Error('wrong data types in App state.');
    }
  };

  const textInput = new TextInput({
    $target,
    initialState: {
      input: this.state.input,
      prefixType: this.state.prefixType,
      userList: this.state.userList,
    },
    onSearch: (text, prefixType) => {
      const userList = findUserList(text, prefixType);
      console.log(userList)
      const unselected = userList.filter((u) => !this.state.selectedUserList.includes(u));
      const available = unselected.filter((u) => u.status === 'available');

      this.setState({
        userList: available,
        ...userList
      });
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
