const checkInput = (text) => {
  if (text) {
    // check
  }
};

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
      try {
        onAddUser(this.state.userList.find((u) => u.username === this.state.input));
      } catch (e) {
        throw new Error('this');
      }
    }

    onClear();
  });

  this.$element.addEventListener('keyup', (e) => {
    const text = e.target.value;
    if (checkInput(text)) {
      onSearch();
    }
  });

  this.render();
}
