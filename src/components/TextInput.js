export default function TextInput({
  $target, initialState, onSearch, onAddUser, onClear,
}) {
  this.$element = document.createElement('input');
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    this.$element.value = this.state.input;
    this.$element.focus();
  };

  this.$element.addEventListener('Enter', (e) => {
    if (this.state.userList.length > 0) {
      const keyword = e.target.value;
      if (keyword[0] === '@') {
        const uKeyword = keyword.toUpperCase();

        const filteredUsers = this.state.userList
          .filter((u) => u.username.toUpperCase() === uKeyword
            || (u.personalInfo.firstName && u.personalInfo.firstName.toUpperCase() === uKeyword)
            || (u.personalInfo.lastName && u.personalInfo.lastName.toUpperCase() === uKeyword));

        if (filteredUsers.length > 0) {
          onAddUser(filteredUsers);
          return;
        }
      }

      if (keyword[0] === '#') {
        // this.state.userList.filter((user) => user.tags.join(',').includes(keyword));
        // onAddUser();
      }
    }

    onClear();
  });

  this.$element.addEventListener('keyup', (e) => {
    const keyword = e.target.value.trim();
    if (keyword !== ''
      && (keyword.includes('@') || keyword.includes('#'))) {
      onSearch(keyword);
    }
  });

  this.render();
}
